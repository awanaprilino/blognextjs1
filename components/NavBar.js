import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="fixed w-full z-10 top-0 bg-gray-100 sticky border border-b-2 p-0 pb-1">
            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2 md:py-3 ">
                <Navbar.Brand className="font-weight-bold"><Link href="/">🐣 Blog Awanpc</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="w-full border-2 border-gray-300 bg-white h-10 px-3 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    <Nav className="ml-auto">
                        <Link href="/post/hello"><a className="nav-link">Tentang</a></Link>
                        <Link href="/post/hello"><a className="nav-link">Website</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}