import Link from 'next/link'

export default function NavBar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="w-full py-4 border-t border-b bg-gray-100">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button
                            className="text-blue-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none m-auto">
                            <li className="nav-item">
                                <Link href="/"><a
                                    className="py-2 flex items-center text-base  font-bold leading-snug text-blue-600 hover:opacity-75"
                                >
                                    <span className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Home</span>
                                </a></Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="py-2 flex items-center text-base  font-bold leading-snug text-blue-600 hover:opacity-75"
                                    href="#link"
                                >
                                    <span className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Tech</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="py-2 flex items-center text-base  font-bold leading-snug text-blue-600 hover:opacity-75"
                                    href="#link"
                                >
                                    <span className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Anime &amp; Manga</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="py-2 flex items-center text-base  font-bold leading-snug text-blue-600 hover:opacity-75"
                                    href="#link"
                                >
                                    <span className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Tutorial</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
