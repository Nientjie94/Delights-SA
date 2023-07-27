import Head from 'next/head'
import styles from '../syles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delights SA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to  Delights SA -
        </h1>

        <p className={styles.description}>
          Your gateway to discovering the most beloved and popular dessert recipes in SA!
        </p>

          <Link
              href="/recipes"
              className={styles.card}
          >
              <h3>Our Recipes</h3>
              <p></p>
          </Link>



      </main>

      <footer className={styles.footer}>
        <a>
          Developed by Kenneth || Janine
        </a>
      </footer>
    </div>
  )
}
