export default function HomeCat({ categories }) {
    return (<span className="ml-1">
        {categories.nodes.length > 0 ? (
            categories.nodes.map((category, index) => (
                <span key={index}>
                    {category.name}
                </span>
            ))
        ) : (
                <span className="ml-1">{categories.nodes.name}</span>
            )}
    </span>
    )
}