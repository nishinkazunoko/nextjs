import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";//リロードせずに遷移できる
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        {/* ここがLayoutのchilredn */}
      </Layout>
    </>


  );
}
