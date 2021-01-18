import CustomLink from '../components/CustomLink';
import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function about() {
    return (
        <>
            <Seo pageTitle='NextJS Tailwind Starter' />
            <Nav />
            <section className='py-6 mt-4'>
                <main className='space-y-2 layout'>
                    <h1 className=''>
                        About <span className='accent'>Theodorus Clarence</span>
                    </h1>
                    <p className='prose'>
                        Hello! Thank’s for coming to my personal website / blog. This is my first
                        biggest site that I made with Next.js, Tailwindcss, MDX, and FaunaDB. I also
                        have a{' '}
                        <CustomLink href='https://github.com/theodorusclarence/nextjs-tailwind-starter'>
                            nextjs-tailwind-starter
                        </CustomLink>{' '}
                        as a template to bootstrap your work with my opinionated style.
                    </p>
                    <p className='prose'>
                        If you actually know me you might call me by Ce. I went to Kolese Kanisius
                        Highschool, and currently a Undergraduate Informatics Student in Institut
                        Teknologi Sepuluh Nopember.
                    </p>
                </main>
            </section>
            <section className='py-6'>
                <main className='layout'>
                    <h2 className=''>Contact</h2>
                    <p className='prose'>
                        Do contact me if you need my opinion about web development, especially
                        frontend works. I’ll be happy to help! (find my email in the footer)
                    </p>
                </main>
            </section>
            <Footer />
        </>
    );
}