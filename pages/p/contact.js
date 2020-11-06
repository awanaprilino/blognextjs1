import Head from "next/head"
import Header from "../../components/Header"
import SidebarRight from "../../components/SidebarRight"
import Topnav from "../../components/TopNav"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Topnav></Topnav>
            <Header></Header>
            <NavBar />
            <div className="container mx-auto flex flex-wrap py-6">
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <article className="w-full flex flex-col shadow my-4">
                        <div className="bg-white flex flex-col justify-start p-6">
                            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">About</a>
                            <p href="#" className="text-sm">
                                By <a href="#" className="font-semibold hover:text-gray-800">Awan</a></p>
                            <div className="post">
                                <p>Kontak : aprilinoawan@gmail.com</p>
                            </div>
                        </div>
                    </article>
                </section>
                <SidebarRight></SidebarRight>
            </div>
            <Footer />
        </>
    )
}