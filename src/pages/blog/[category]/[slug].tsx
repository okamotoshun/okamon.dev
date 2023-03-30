import blogPages from 'const/blog.json'
import { client } from 'libs/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { load } from 'cheerio' // cheerioの直接参照は非推奨だったため、loadをimport
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
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
  highlightedBody: any
}

export default function Post({ blog, highlightedBody }: Props) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params?.slug

  try {
    const data = await client.get<Blog>({
      endpoint: 'blog',
      contentId: `${slug}`,
      queries: { fields: 'title,body' },
    })
    console.log(data)
    const $ = load(data.body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    return {
      props: {
        blog: data,
        highlightedBody: $.html(),
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
