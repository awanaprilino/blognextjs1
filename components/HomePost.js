import Link from 'next/link'
import { Media, Button, Row } from 'react-bootstrap'


export default function HomePost({ posts }) {
    return (
        <div className="row mt-3">
            {posts.map(({ node }) => (
                <div key={node.slug}>
                    <div className="row m-0 pb-3">
                        <div className="col-md-4">
                            <Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a>
                                <img className="img-fluid rounded mb-3 mb-md-0" src={node.featuredImage.node.sourceUrl} alt={node.title} />
                            </a></Link>
                        </div>
                        <div className="col-md-8">
                            <Link as={`/posts/${node.slug}`} href="/posts/[slug]"><a><h3>{node.title}</h3></a></Link>
                            <div
                                className=""
                                dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
