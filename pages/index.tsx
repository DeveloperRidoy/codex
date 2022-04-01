import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import CodeEditor from '../components/codeEditor'
import getDeviceType from '../utils/getDeviceType'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CodeX</title>
        <link rel="icon" href="/logo.svg" />
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
