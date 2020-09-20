import Categories from "./Categories"
import Date from "./Date"
export default function Postbody({
    title,
    date,
    author,
    categories,
    featuredImage,
    content,
}) {
    return (
        <article>
            <div className="article-clean">
                <div className="container mt-3 shadow rounded">
                    <div className="row m-0">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="intro">
                                <h1 className="text-center">{title}</h1>
                                <p className="text-center">
                                    <span className="by">by {author}</span>
                                    <Date className="date" dateString={date} />
                                    <span className="categories"><Categories categories={categories} /></span>
                                </p>
                                <img className="img-fluid" src={featuredImage} />
                                <div className="text mt-3">
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
