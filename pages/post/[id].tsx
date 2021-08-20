import { useRouter } from 'next/dist/client/router'
import { useState, useEffect } from 'react'
import Link from 'next/Link'
import MainLayout from '../../components/MainLayout'
import { NextPageContext } from 'next/dist/shared/lib/utils'
import { MyPost } from '../../interfaces/post'

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  // ! get router object for getting path or query or ...
  const router = useRouter()
  const [ post, setPost ] = useState(serverPost)

  useEffect(() => {
    async function load () {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.json()

      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return (
      <MainLayout title='post'>
        <p style={{ textAlign: 'center' }}>Loading...</p>
      </MainLayout>
    )
  }

  const { title, body } = post

  return (
    <MainLayout title='post'>
      <h1>{title}</h1>
      <hr />
      <p>{body}</p>
      <hr />
      <Link href='/posts'>
        <a>Back to posts</a>
      </Link>
    </MainLayout>
  )
}

// ! this works only on server side and gives more bonus
// export async function getServerSideProps ({ query }) {
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await response.json()

//   return {
//     props : { post },
//   }
// }

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}
// ! we can use for combine work on front and back
Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  // ! request === true only on server side
  if (!req) {
    return { post: null }
  }

  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
  const post: MyPost = await response.json()

  return { post }
}
