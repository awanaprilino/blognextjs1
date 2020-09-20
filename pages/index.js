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
      <Container fluid="md" className="mt-3">
        <div className="row m-0">
          <div className="col-sm-8 bg-white rounded shadow">{morePosts.length > 0 && <HomePost posts={morePosts} />}</div>
          <div className="col-sm-4"><div className="row p-2 bg-white rounded shadow sidebar">
            <div className="container justify-content-center pt-3">
              <div className="align-items-center">
                <div className="image text-center">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" className="rounded" width="155" />
                </div>
                <div className="text-center">
                  <h4 className="mb-0 mt-0">Awan Aprilino</h4>
                  <span>Blogger Pemula</span>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Twitter</button> <button className="btn btn-sm btn-primary w-100 ml-2">Facebook</button> </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}