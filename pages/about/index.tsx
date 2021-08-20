import Router from 'next/dist/client/router'
import MainLayout from '../../components/MainLayout'

interface AboutPageProps {
  title: string
}

export default function About({ title }: AboutPageProps) {
  const linkHandler = () => {
    // ! give access to Router methods
    Router.push('/posts')
  }
  return (
    <MainLayout title='about'>
      <h1>{title}</h1>

      <button onClick={linkHandler}>go BACK to posts</button>
      <button onClick={() => Router.push('/')}>go BACK to home inline</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`)
  const data = await response.json()

  return { title: data.title }
}
