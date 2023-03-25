const fs = require('fs')
const axios = require('axios').default
require('dotenv').config()

const getMicroCMSdata = async () => {
  const url = `https://okamon.microcms.io/api/v1/blog`
  const apiKey = process.env.API_KEY
  const apiKeyHeaderOption = { headers: { 'X-API-KEY': apiKey } }

  const data = await axios.get(url, apiKeyHeaderOption).then((r) => r.data)

  const blogPages = data.contents.reduce((result, post) => {
    const category = post.category.name
    const page = result.find((page) => page.category === category)
    if (page) {
      page.items.push({
        id: post.id,
        name: post.title,
        route: `/blog/${category.toLowerCase()}/${post.id}`,
      })
    } else {
      result.push({
        id: result.length + 6,
        category,
        route: `/blog/${category}`,
        items: [
          {
            id: post.id,
            name: post.title,
            route: `/blog/${category.toLowerCase()}/${post.id}`,
          },
        ],
      })
    }

    return result
  }, [])
  console.log(blogPages)
  return blogPages
}

const createJSONdata = async () => {
  const contents = await getMicroCMSdata()
  const JSONdata = JSON.stringify(contents, null, 2)
  fs.writeFileSync('./src/const/blog.json', JSONdata)
}

createJSONdata()
