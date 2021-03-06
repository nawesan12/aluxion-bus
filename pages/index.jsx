import Head from 'next/head'
import Main from '../components/Home/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bus - Aluxion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <style jsx>{`
        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background:#42526E;
        }
      `}</style>
    </>
  )
}
