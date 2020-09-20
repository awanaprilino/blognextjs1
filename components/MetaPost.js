import Head from "next/head"
export default function MetaPost({ metaTitle, metaImage }) {
    return (
        <Head>
            <title>{metaTitle} | Blog Awanpc</title>
            <meta
                property="og:image"
                content={metaImage}
            />
        </Head>
    )
}