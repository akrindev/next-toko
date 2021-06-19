import Layout from "../../components/Layout"
import { getAllProducts, getProduct } from "../../action/product"
import Link from "next/link"
import { digits, getDiscount } from "../../action/digit"

export default function Product({ product }) {
    return (
        <Layout name="Dian Busana">
        <div className="md:flex lg:justify-between space-y-3 items-center my-3 lg:pr-3">
            <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold font-sans">{ product.name }</h1>
                    <div>
                        {! product.discount ?
                         (<span className="font-light font-mono text-sm">Rp. { digits(product.price) }</span>) : (
                         <>
                         <span className="py-1 px-2 mr-2 bg-yellow-400 text-yellow-800 rounded-md"> -{ product.discount }%</span>
                         <span className="font-light font-mono text-sm">Rp. { getDiscount(product.price, product.discount) } </span>
                         <strike className="text-gray-400 text-sm font-light font-mono">Rp. { digits(product.price) }</strike></>)
                        }
                    </div>
                    <div className="py-1">
                        <span className="px-2 py-1 bg-gray-300 rounded-md">{ product.categories[0].name }</span>
                    </div>
                </div>
                <div>
                    <button className="bg-green-500 hover:bg-green-700 text-white md:px-9 py-2 rounded-xl flex items-center justify-center space-x-2 w-full md:w-auto" onClick="window.open(`//api.whatsapp.com/send/?phone={{ $toko_whatsapp }}&text=${encodeURIComponent('\r\n \r\n Hai Admin, saya ingin tau tentang product ini. boleh di bantu?')}`)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                        </svg>
                        <span> Order via Whatsapp</span>
                    </button>
                </div>
            </div>

            <div className="my-5">
                <h2 className="text-2xl font-bold">Size</h2>
                <div>
                    {product.size.split(',').map(size => {
                        <span className="px-2 py-0.5 rounded-md bg-blueGray-300 text-blueGray-700">
                            { size }
                        </span>
                    })}
                </div>
            </div>

            <div className="my-5">
                <h2 className="text-2xl font-bold">Stock</h2>
                <div>
                    {product.stock ?
                        <span className="text-green-600">Tersedia</span>
                    :
                        <span className="text-rose-600">Habis</span>
                    }
                </div>
            </div>

            <div className="my-5">
                <h2 className="text-2xl font-bold">Deskripsi</h2>
                <div className="prose lg:prose-lg">
                    { product.description }
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async (ctx) => {
    const { data } = await getAllProducts() 

    const paths = data.map(product =>  `/product/${product.slug}` )

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { data } = await getProduct(params.slug)
    
    return {
        props: {
            product: data
        },
        revalidate: 3
    }
}