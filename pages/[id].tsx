import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Head from 'next/head'
import Layout from '../components/layout'

const IdPage = () => {
  const { 
    asPath, 
    route,
    pathname,
    query,
  } = useRouter()

  console.log(pathname);
  console.log(query);
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Nav />
        <p>Hello, I'm the {asPath} page</p>
        <p>Hello, I'm the {route} page, actually</p>
      </Layout>
    </>
  )
}

export default IdPage