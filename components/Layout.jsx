import Link from 'next/link'
import Footer from "./Footer"
import SocialIcon from "./SocialIcon"

export default function Layout({ name, children }) {
    return (
    <main className="relative min-h-screen">
        <nav className="bg-black text-blueGray-100">
            <div className="max-w-5xl flex justify-between mx-auto p-4 lg:py-6 lg:px-0 md:text-3xl font-semibold">

                <Link href='/'>
                    <a> { name } </a>
                </Link>

                <SocialIcon/>
            </div>

        </nav>


        <section className="content max-w-5xl mx-auto p-4 lg:p-0 my-5 lg:my-16">
            { children }
        </section>


      <Footer/>
    </main>)
}