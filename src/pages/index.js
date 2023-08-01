import Head from 'next/head'
import styles from '../syles/Home.module.css'
import Link from "next/link";

// The Home component, representing the landing page of the website
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Set the page title and favicon */}
        <title>Delights SA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Main Title */}
        <h1 className={styles.title}>
          Welcome to Delights SA -
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Your gateway to discovering the most beloved and popular dessert recipes in SA!
        </p>

        {/* Link to the recipes selection page */}
        <Link
          href="/recipes"
          className={styles.card}
        >
          {/* Display link text */}
          <h3>Our Recipes</h3>
          {/* The "p" element is left empty in the original code */}
          <p></p>
        </Link>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <a>
          Developed by Kenneth || Janine
        </a>
      </footer>
    </div>
  )
}
