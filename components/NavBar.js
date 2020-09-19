import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm p-3">
            <Navbar.Brand className="font-weight-bold"><Link href="/">Blog Awanpc</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/post/hello"><a className="nav-link">Tentang</a></Link>
                    <Link href="/post/hello"><a className="nav-link">Website</a></Link>
                    <Link href="/post/hello"><a className="nav-link">Cari</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}