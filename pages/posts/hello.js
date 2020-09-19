import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import NavBar from '../../components/NavBar'


export default function Home() {
    return (
        <>
            <Head>
                <title>Hello Page - Blog Awanpc</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h3>Documentation &rarr;</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}
