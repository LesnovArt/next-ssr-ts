import Head from 'next/head'
import Link from 'next/Link'

export default function MainLayout({ children, title = "next-app"}) {
  return(
      <>
        {/* // ! meta data for pages */}

        <Head>
          {/* // ! page title */}
          <title>LiesnovArt ~ { title }</title>
          <meta name='keywords' content='LiesnovArt' />
          <meta name='description' content='LiesnovArt-course' />
          <meta charSet='utf-8' />
        </Head>

        <nav>
          <Link href='/'><a>Main</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/about/author'><a>Author</a></Link>
          <Link href='/posts'><a>Posts</a></Link>
        </nav>

        <main>
          {children}
        </main>
        
      {/* // ! inline styles (local)/ atr global exist */}
        <style jsx>{`
            nav {
              position: fixed;
              height: 60px;
              left: 0;
              top: 0;
              right: 0;
              background: lightblue;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            nav a {
              font-size: 20px;
              font-weight: 700;
              text-decoration: none;
              color: black;
            }

            main {
              height: 100vh;
              margin-inline: -1rem;
              margin-top: 60px;
              padding: 1rem;
              background: lightgrey;
              color: darkblue;
            }
          `}
        </style>
      </>
  )
}
