import Head from "next/head"
export default function MetaPost({ metaTitle, metaImage }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'localhost',
        },
        headline: metaTitle,
        image: metaImage,
        author: {
            '@type': 'Person',
            name: 'Awan',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Skies',
            logo: {
                '@type': 'ImageObject',
                url: 'https://skies.dev/',
            },
        },
        datePublished: "blog.datePublished",
        dateModified: 'blog.dateModified',
    };

    return (
        <Head>
            <meta charSet="UTF-8" />
            <title>{metaTitle} | Blog Awanpc</title>
            <meta
                property="og:image"
                content={metaImage}
            />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="description" content="A beautiful two-column blog Nextjs theme. A personal blog theme to showcase your posts and projects." />
            <meta name="author" content="Creative Designs Guru" />
            <meta property="og:title" content="Blue Eclatant Nextjs Theme | Creative Designs Guru" />
            <meta property="og:description" content="A beautiful two-column blog Nextjs theme. A personal blog theme to showcase your posts and projects." />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content="Creative Designs Guru" />
            <meta property="og:type" content="article" />
            <meta property="og:image" content="https://creativedesignsguru.com/assets/images/themes/eclatant-blue-nextjs-theme-homepage-badge.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="article:published_time" content="2020-08-10T00:00:00.000Z" />
            <meta property="article:modified_time" content="2020-08-10T00:00:00.000Z" />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Head>
    )
}