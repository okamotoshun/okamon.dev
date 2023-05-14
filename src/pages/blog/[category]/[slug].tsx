import blogPages from 'const/blog.json'
import { client } from 'libs/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { load } from 'cheerio' // cheerioの直接参照は非推奨だったため、loadをimport
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/vs2015.css'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import xml from 'highlight.js/lib/languages/xml'
import styles from '@/styles/category/slug.module.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('xml', xml)

import { BaseHead } from '@/components/BaseHead'
import { useEffect, useRef } from 'react'
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
  const contentRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [router])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.layout}>
      <BaseHead title={blog.title} />
      <h1 ref={contentRef}>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
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
    const $ = load(data.body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    data.body = $.html()

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
