import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const name = "My Blog";
export const siteTitle = "Перший сайт на Next.js";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="lorem"></meta>
        <meta name="og:title" content={siteTitle}></meta>
        {/* meta with OG (open graph) */}
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              className={utilsStyles.borderCircle}
              height={144}
              width={144}
              priority
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                src="/images/profile.jpg"
                className={utilsStyles.borderCircle}
                height={108}
                width={108}
                priority
              />
            </Link>
            <h2 className={utilsStyles.headingLg}>{name}</h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}
