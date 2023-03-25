import blogPages from 'const/blog.json'
import { client } from 'libs/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type Blog = {
  title: string
  body: string
}

type Params = {
  category: string
  slug: string
}

type Props = {
  blog: Blog
}

export default function Post({ blog }: Props) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // const data = await client.get({ endpoint: 'blog' })
  // console.log(data)

  // const blogPages = data.contents.reduce((result: { id: any; category: any; route: string; items: { id: any; name: any; route: string }[] }[], post: { category: { name: any }; id: any; title: any }) => {
  //   const category = post.category.name
  //   const page = result.find((page: { category: any }) => page.category === category)
  //   if (page) {
  //     page.items.push({
  //       id: post.id,
  //       name: post.title,
  //       route: `/blog/${category.toLowerCase()}/${post.id}`,
  //     })
  //   } else {
  //     result.push({
  //       id: result.length + 1,
  //       category,
  //       route: `/blog/${category}`,
  //       items: [
  //         {
  //           id: post.id,
  //           name: post.title,
  //           route: `/blog/${category.toLowerCase()}/${post.id}`,
  //         },
  //       ],
  //     })
  //   }

  //   return result
  // }, [])
  // console.log(blogPages)


  const paths = blogPages.flatMap((category: { items: any[]; category: any }) => {
    return category.items.map((post: { name: any }) => {
      return {
        params: {
          category: category.category,
          slug: post.name,
        },
      }
    })
  })
  return {
    paths,
    fallback: true, // 事前にビルドされたページが存在しない場合、動的に生成する
  }
}
// export const getStaticPaths = async () => {
//   const data = await client.get({ endpoint: 'blog' })
//   console.log(data)
//   console.log(data.contents[0].category.name)
//   console.log(data.contents[0].id)

//   const paths = data.contents.map((content) => `/blog/${content.category.name}/${content.id}`)

//   return { paths, fallback: false }
// }

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params?.slug

  try {
    const data = await client.get<Blog>({
      endpoint: 'blog',
      contentId: `${slug}`,
      queries: { fields: 'title,body' },
    })
    console.log(data)

    return {
      props: {
        blog: data,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
