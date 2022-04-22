import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import CodeEditor from '../components/codeEditor'
import { useGlobalContext } from '../components/hoc/GlobalContext'
import getDeviceType from '../utils/getDeviceType'

const Home: NextPage = () => {

  const { state: { darkMode } } = useGlobalContext();
  
  return (
    <>
      <Head>
        <title>CodeX</title>
        <link
          rel="icon"
          href={darkMode ? '/img/logo-lite.svg' : '/img/logo.svg'}
        />
        <link rel="manifest" href="manifest.json"></link>
      </Head>
      <CodeEditor />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const deviceType = getDeviceType(req.headers['user-agent'] as string)
  return {
    props: { deviceType },
  }
}
