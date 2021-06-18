import Layout from "../components/Layout";
import Category from "../components/Category"
import Product from "../components/Product"

const productsList = [
  { name: 'Baju lucu dan halus', slug: 'lucu', price: 200000, discount: 5, stock:true, featured_image: { url: 'http://placekitten.com/300/300' } },
  { name: 'Baju lucu', slug: 'lucu', price: 200000, discount: 5, stock:true, featured_image: { url: 'http://placekitten.com/300/300' } },
  { name: 'Pasmina lucu', slug: 'lucu', price: 200000, discount: 5, stock:true, featured_image: { url: 'http://placekitten.com/300/300' } },
]

export default function Home() {
  return (
    <Layout name='Dian Busana'>
      <Category/>
      
      <Product items={productsList}/>

    </Layout>
  )
}