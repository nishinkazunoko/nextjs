import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";//リロードせずに遷移できる
import Layout, { siteTitle } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css"
import { getPostsData } from "@/lib/post";
import { title } from "process";


//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();//id,date,title
  console.log(allPostsData);

  return{
    props:{
      allPostsData
    },
  };
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return{
//     prpos: {
//       //componentに渡すためのprops
//     }
//   }
  
// }



export default function Home( { allPostsData } ) {
  return (
    <>
      <Layout home>
        <Head>
          <title>
            {siteTitle}
          </title>
        </Head>
        {/* ここがLayoutのchilredn */}
        <section className={utilStyle.headingMd}>
          <p>私はフロントエンドエンジニアを目指して勉強しています</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({id, title,date, thumbnail}) => (
              <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/posts/${id}`}>
              {/* Geiminiより */}
              {/* 最近のNext.jsの<Link>は、内部に直接 <a> タグを含めない仕様に変わりました。そのため、以下のような書き方をするとエラーになってしまいます。そもそもaの中のaっておかしくないか？ */}
              <p href="" className={utilStyle.boldText}>{title}</p>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                {date}
              </small>
            </article>
            ))}


          </div>
        </section>


      </Layout>
    </>


  );
}
