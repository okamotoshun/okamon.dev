import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { category, slug } = router.query

  return (
    <>
      <h1>{slug}</h1>
      <p>Category: {category}</p>
    </>
  )
}
