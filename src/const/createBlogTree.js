const fs = require('fs')
const axios = require('axios').default
require('dotenv').config()

const getMicroCMSdata = async () => {
  const url = `https://okamon.microcms.io/api/v1/blog`
  const apiKey = process.env.API_KEY
  const headers = { 'X-API-KEY': apiKey }

  try {
    const response = await axios.get(url, { headers })
    const data = response.data
    const blogPages = data.contents.reduce((result, post) => {
      const category = post.category.name
      const page = result.find((page) => page.category === category)
      const route = `/blog/${category.toLowerCase()}/${post.id}`

      if (page) {
        page.items.push({ id: post.id, name: post.title, route })
      } else {
        result.push({
          id: result.length + 6,
          category,
          route: `/blog/${category.toLowerCase()}`,
          items: [{ id: post.id, name: post.title, route }],
        })
      }

      return result
    }, [])

    console.log(blogPages)
    return blogPages
  } catch (error) {
    console.error(error)
  }
}

const createJSONdata = async () => {
  const contents = await getMicroCMSdata()
  const JSONdata = JSON.stringify(contents, null, 2)
  fs.writeFileSync('./src/const/blog.json', JSONdata)
}

createJSONdata()
