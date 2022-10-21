import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>---Guess what, old sport---</p>
        <p>
          (
          <a href="https://nextjs.org/learn">made by Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}