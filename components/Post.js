import Categories from "./Categories"
import Date from "./Date"
import SidebarRight from "./SidebarRight"
export default function Postbody({
    title,
    date,
    author,
    categories,
    featuredImage,
    content,
}) {
    return (
        <main className="container mx-auto flex flex-wrap py-6">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <article className="flex flex-col shadow my-4">
                    <a href="#" className="hover:opacity-75">
                        <img src={featuredImage} />
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4"><Categories categories={categories} /></a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                        <p href="#" className="text-sm">
                            By <a href="#" className="font-semibold hover:text-gray-800">Awan</a>, Published on <Date className="date" dateString={date} /></p>
                        <div className="post" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </article>
            </section>
            <SidebarRight></SidebarRight>
        </main>
    )
}
