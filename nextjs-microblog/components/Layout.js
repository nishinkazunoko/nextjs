import Head from "next/head";
import styles from "./Layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";
const name = "Shin code"
export const siteTitle = "Next.js blog"

function Layout({ children, home }) {//children(index.js)にはhomeをつけたので、演算子でhomeがあるときは・・で出しわけできる。逆にpost.jsにはhomeがないのでない時の方が適用される
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? ( 
          <div>
            <img src="/images/profile.png" 
            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
          
        ): (
          <div>
            <img src="/images/profile.png" className={utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </div>
        )}
        
      </header>
      <main>
        {children}
      </main>
      {!home && (//homeじゃないときは
        <div>
          <Link href="/" >ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;