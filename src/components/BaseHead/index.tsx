import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

type Props = {
  title: string
  description?: string
}

export const BaseHead: FC<Props> = ({ title, description }) => {
  const pathname = usePathname()
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://okamon.dev${pathname}`} />
      <meta property="og:url" content={`https://okamon.dev${pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
    </Head>
  )
}
