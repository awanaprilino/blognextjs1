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
        <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto py-10 mt-4 sm:mt-2 md:mt-4 px-4">
            <article className="post">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <span className="text-white text-sm bg-blue-600 rounded p-1"><Date className="date" dateString={date} /></span>
                <span className="text-white text-sm bg-pink-600 rounded p-1 ml-2"><Categories categories={categories} /></span>
                <div className="mt-3 post-body">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </article>
        </div>
    )
}
