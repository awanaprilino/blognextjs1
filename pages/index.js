import Head from 'next/head'
import Navbar from '../components/NavBar'
import HomePost from '../components/HomePost'
import { Container } from 'react-bootstrap'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {

  const morePosts = edges.slice(0)

  return (
    <>
      <Head>
        <title>Blog Awanpc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto py-10 mt-3 sm:mt-2 md:mt-4 px-4">
        {morePosts.length > 0 && <HomePost posts={morePosts} />}
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}