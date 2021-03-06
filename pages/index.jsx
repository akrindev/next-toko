import Head from "next/head"
import Layout from "../components/Layout";
import Category from "../components/Category"
import Product from "../components/Product"
import { getAllProducts } from "../action/product"

export default function Home({ items }) {
  return (
    <Layout name='Dian Busana'>
      <Head>
        <title>Dian Busana</title>
      </Head>
      <Category/>
      
      <Product items={items}/>

    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  const { data } = await getAllProducts();

  return {
    props: {
      items: data
    },
    revalidate: 1 
  }
}