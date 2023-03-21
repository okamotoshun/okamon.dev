import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <h1>Category: {category}</h1>
    </>
  )
}
