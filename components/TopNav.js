export default function Topnav() {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

                <nav>
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
                    </ul>
                </nav>

                <div className="flex items-center text-lg no-underline text-white pr-6">
                    <a className="" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </nav>)
}