import Link from 'next/link'
import Image from 'next/image'
import { digits, getDiscount } from "../action/digit"

const Stock = () => {
    return (<div className="absolute inset-0 h-full bg-black text-white opacity-60 rounded flex items-center justify-center -m-px">Habis</div>)
}

const Discount = ({ discount }) => {
    return (
        <div className="absolute top-1 left-1">
            <span className="py-1 px-2 mr-2 bg-yellow-400 text-yellow-800 rounded-md"> -{ discount }%</span>
        </div>
    )
}

const ProductList = ({ item }) => {
    return (
        <Link href={ `/product/${encodeURIComponent(item.slug)}` }>
            <a className="relative hover:bg-purple-100 rounded-md p-1">
                <div className="flex flex-col">
                    <Image 
                    src={ item.featured_image.url } 
                    alt={ item.name } 
                    width={300}
                    height={400}
                    className="h-52 md:h-64 w-full object-cover rounded-md transition ease-in-out duration-200 transform hover:scale-95"/>

                    <span className="font-semibold font-sans text-md">{ item.name }</span>
                    
                    {!item.discount ?
                    (
                        <span className="font-light font-mono text-sm text-yellow-600">Rp. { digits(item.price) }</span>
                    ) : (
                    <>
                        <span className="font-light font-mono text-md text-yellow-600">
                            Rp. { getDiscount(item.price, item.discount) }
                        </span>
                        <strike className="text-gray-400 text-sm font-light font-mono">Rp. { digits(item.price) }</strike>
                    </>
                    )}

                </div>

                {!item.stock && <Stock/>}

                {item.discount > 0 && <Discount discount={item.discount}/>}

            </a>
        </Link>)
}

export default function Product({ items }) {
    return (
        <>
        <div className="mb-3">
            <h1 className="text-2xl font-bold">Products</h1>
        </div>

            <div id="list-products" className="grid grid-cols-2 md:grid-cols-4 gap-2">

                {items && items.map(item => (
                    <ProductList item={item} key={item.id}/>
                ))}
            
            </div>
        </>
    )
}