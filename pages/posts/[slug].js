import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head'
import NavBar from '../../components/NavBar'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Postbody from '../../components/Post'
import MetaPost from '../../components/MetaPost'
import Header from '../../components/Header'
import Topnav from '../../components/TopNav'

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

export default function Post({ post, posts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <Topnav />
            <Header />
            <NavBar />
            {router.isFallback ? (
                <div>Loading…</div>
            ) : (
                    <>
                        <MetaPost metaTitle={post.title} metaImage={post.featuredImage?.node?.sourceUrl} />
                        <Postbody title={post.title}
                            featuredImage={post.featuredImage.node.sourceUrl}
                            date={post.date}
                            author={post.author.node.name}
                            categories={post.categories}
                            content={post.content} />
                    </>

                )}
            <Footer />
        </>
    )
}


