import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";//リロードせずに遷移できる
import Layout from "@/components/Layout";
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <>
      <Layout>
        {/* ここがLayoutのchilredn */}
        <section className={utilStyle.headingMd}>
          <p>私はフロントエンドエンジニアを目指して勉強しています</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
              {/* Geiminiより */}
              {/* 最近のNext.jsの<Link>は、内部に直接 <a> タグを含めない仕様に変わりました。そのため、以下のような書き方をするとエラーになってしまいます。 */}
                <Link href="" className={utilStyle.boldText}>SSGとSSRの違いについて</Link>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                Oct 29th, 2026
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
              {/* Geiminiより */}
              {/* 最近のNext.jsの<Link>は、内部に直接 <a> タグを含めない仕様に変わりました。そのため、以下のような書き方をするとエラーになってしまいます。 */}
                <Link href="" className={utilStyle.boldText}>SSGとSSRの違いについて</Link>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                Oct 29th, 2026
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
              {/* Geiminiより */}
              {/* 最近のNext.jsの<Link>は、内部に直接 <a> タグを含めない仕様に変わりました。そのため、以下のような書き方をするとエラーになってしまいます。 */}
                <Link href="" className={utilStyle.boldText}>SSGとSSRの違いについて</Link>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                Oct 29th, 2026
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
              {/* Geiminiより */}
              {/* 最近のNext.jsの<Link>は、内部に直接 <a> タグを含めない仕様に変わりました。そのため、以下のような書き方をするとエラーになってしまいます。 */}
                <Link href="" className={utilStyle.boldText}>SSGとSSRの違いについて</Link>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                Oct 29th, 2026
              </small>
            </article>
          </div>
        </section>


      </Layout>
    </>


  );
}
