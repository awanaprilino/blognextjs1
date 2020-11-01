import Head from 'next/head'
import Navbar from '../components/NavBar'
import HomePost from '../components/HomePost'
import { getAllPostsForHome } from '../lib/api'
import SidebarRight from '../components/SidebarRight'
import Topnav from '../components/TopNav'
import Header from '../components/Header'

export default function Index({ allPosts: { edges }, preview }) {

  const morePosts = edges.slice(0)

  return (
    <>
      <Head>
        <title>Blog Awanpc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topnav></Topnav>
      <Header></Header>
      <Navbar />
      <div className="container mx-auto flex flex-wrap py-6">
        {morePosts.length > 0 && <HomePost posts={morePosts} />}
        <SidebarRight></SidebarRight>
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