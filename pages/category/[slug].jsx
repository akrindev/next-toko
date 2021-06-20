import Head from "next/head"
import Layout from "../../components/Layout";
import Category from "../../components/Category"
import Product from "../../components/Product"
import { getAllCategories, getCategory } from "../../action/product"

export default function HomeCategory({ items }) {

    if(! items) {
        return (
            <div>Empty</div>
        )
    }

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

export const getStaticPaths = async (ctx) => {
    const { data } = await getAllCategories()

    const paths = data.map(item => `/category/${item.name}`)
    
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
  const { data } = await getCategory(params.slug);

  return {
    props: {
      items: data
    },
    revalidate: 1 
  }
}