import MainLayout from '../components/MainLayout'
import Link from 'next/Link'
import { useState, useEffect } from 'react'
import { MyPost } from '../interfaces/post'
import { NextPageContext } from 'next'

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [ posts, setPosts ] = useState(serverPosts)

  useEffect(() => {
    async function load () {
      const response = await fetch('http://localhost:4200/posts')
      const data = await response.json()

      setPosts(data)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout title='post'>
        <p style={{ textAlign: 'center' }}>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title='posts'>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/[id]`} as={`/post/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { post: null }
  }

  const response = await fetch(`${process.env.API_URL}/posts`)
  const posts: MyPost[] = await response.json()

  return { posts }
}
