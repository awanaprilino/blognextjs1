import Link from 'next/link'
import Date from './Date'


export default function HomePost({ posts }) {
    return (
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            {posts.map(({ node }) => (
                <div key={node.slug}>
                    <article className="flex flex-col shadow my-4">
                        <a href="#" className="hover:opacity-75">
                            <img src={node.featuredImage.node.sourceUrl} />
                        </a>
                        <div className="bg-white flex flex-col justify-start p-6">
                            <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                            <Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a className="text-3xl font-bold hover:text-gray-700 pb-4">{node.title}</a></Link>
                            <p href="#" className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                            <div className="pb-6" dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                            <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </article>
                </div>
            ))}
        </section>
    )
}
