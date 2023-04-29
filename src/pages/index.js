import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <Link href="/learn/next">
            <h2>Learn about Next</h2>
            <p>this is about next.js</p>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="/learn/vue">
            <h2>Vue</h2>
            <p>Learn vue</p>
          </Link>

          <Link href="/learn/react">
            <h2>React</h2>
            <p>Learn React</p>
          </Link>

          <Link href="/learn/html">
            <h2>HTML</h2>
            <p>Learn HTML</p>
          </Link>
        </div>
      </main>
    </>
  );
}
