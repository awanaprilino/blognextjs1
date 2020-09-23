import Link from 'next/link'
import Date from './Date'


export default function HomePost({ posts }) {
    return (
        <div className="mx-2 max-w-screen-xl space-y-5">
            {posts.map(({ node }) => (
                <div key={node.slug}>
                    <div className="shadow-lg bg-white rounded-lg pt-3 pb-5 pl-5 pr-2 mb-3">
                        <Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 cursor-pointer">{node.title}</h2>
                        </a></Link>
                        <div className="text-gray-700 leading-relaxed mb-2"
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />
                        <div className="flex justify-between items-center">
                            <Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a className="text-indigo-500 inline-flex items-center">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14">
                                    </path>
                                    <path d="M12 5l7 7-7 7">
                                    </path>
                                </svg>
                            </a></Link>
                            <p className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1"><Date className="date" dateString={node.date} /></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
