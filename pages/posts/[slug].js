import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head'
import NavBar from '../../components/NavBar'
import { Container } from 'react-bootstrap'
import Date from '../../components/Date'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'

export default function Post({ post, posts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <Head>
                <title>
                    {post.title} | Blog Awanpc
                  </title>
                <meta
                    property="og:image"
                    content={post.featuredImage?.node?.sourceUrl}
                />
            </Head>
            <NavBar />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <>
                            <article>
                                <div className="article-clean">
                                    <div className="container mt-3 shadow rounded">
                                        <div className="row m-0">
                                            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                                                <div className="intro">
                                                    <h1 className="text-center">{post.title}</h1>
                                                    <p className="text-center">
                                                        <span className="by">by {post.author.node.name}</span>
                                                        <Date className="date" dateString={post.date} />
                                                        <span className="categories"><Categories categories={post.categories} /></span>
                                                    </p>
                                                    <img className="img-fluid" src={post.featuredImage.node.sourceUrl} />
                                                    <div className="text mt-3">
                                                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </>
                    )}
            </Container>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params, preview = false, previewData }) {
    const data = await getPostAndMorePosts(params.slug, preview, previewData)

    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts,
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
        fallback: true,
    }
}
