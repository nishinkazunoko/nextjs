import Layout from "@/components/Layout";
import { getAllPostsId, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css"
import Head from "next/head";
// 外部データの任意のファイル名は[]でファイルをつくる

export async function getStaticPaths() {
  const paths = getAllPostsId();

  return {
    paths,
    fallback:false,
  };
}


export async function getStaticProps( { params }) {
  const postData = await getPostData(params.id);

  return{
    props: {
      postData,
    },
  }

}

export default function Post({postData}) {
  return (
   <Layout>
    <Head>
      <title>
        {postData.title}
      </title>
    </Head>
    <article>
      <h1 className={utilStyles.headingX1}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{__html:postData.blogContentHTML}}  />
    </article>
   </Layout>
  );
}