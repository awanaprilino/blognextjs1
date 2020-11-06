import Link from 'next/link'
import Date from './Date'
import Categories from './Categories'


export default function HomePost({ posts }) {
    return (

        <>
            {
                posts.map(({ node }) => (
                    <section className="w-full md:w-1/3 flex flex-col items-center px-3">
                        <div key={node.slug}>
                            <article className="flex flex-col shadow my-4">
                                <a href="#" className="hover:opacity-75">
                                    <img src={node.featuredImage.node.sourceUrl} />
                                </a>
                                <div className="bg-white flex flex-col justify-start p-6">
                                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4"></a>
                                    <h2><Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a className="text-xl font-bold text-gray-700 hover:text-gray-800 pb-4">{node.title}</a></Link></h2>
                                    <p href="#" className="text-sm pb-3">
                                        By <a href="#" className="font-semibold hover:text-gray-800">{node.author.node.name}</a>, Published on <Date className="date" dateString={node.date} />
                                    </p>
                                    <div className="pb-6" dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </article>
                        </div>
                    </section>
                ))

            }
        </>
    )
}
