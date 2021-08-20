import NextNprogress from 'nextjs-progressbar';
import '../styles/main.css'

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <NextNprogress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />

      {/* // ! add global styles inline
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
    </>
    )
}