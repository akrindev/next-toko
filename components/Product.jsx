import Link from 'next/link'
import Image from 'next/image'

const getDiscount = (price, discount) => {
    return Number( price - (price * (discount/100)))
}

const ProductList = ({ item }) => {
    return (
        <Link href={ `/product/${item.slug}` }>
            <a className="relative hover:bg-purple-100 rounded-md p-1">
                <div className="flex flex-col items-center">
                    <Image 
                    src={ item.featured_image.url } 
                    alt={ item.name } 
                    width={300}
                    height={400}
                    className="h-52 md:h-64 w-full object-cover rounded-md transition ease-in-out duration-200 transform hover:scale-95"/>

                    <span className="font-medium font-sans text-md">{ item.name }</span>
                    
                    {!item.discount ?
                    (
                        <span className="font-light font-mono text-sm">Rp. { item.price }</span>
                    ) : (
                    <>
                        <span className="font-light font-mono text-sm">
                            Rp. { getDiscount(item.price, item.discount) }
                        </span>
                        <strike className="text-gray-400 text-sm font-light font-mono">Rp. { item.price }</strike>
                    </>
                    )}
                </div>
                {!item.stock && (

                    <div className="absolute inset-0 h-full bg-black text-white opacity-60 rounded flex items-center justify-center -m-px">Habis</div>
                )}

                {item.discount > 0 && (
                    <div className="absolute top-1 left-1">
                        <span className="py-1 px-2 mr-2 bg-yellow-400 text-yellow-800 rounded-md"> -{ item.discount }%</span>
                    </div>)
                    }

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
                    <ProductList item={item} key={encodeURIComponent(item.name)}/>
                ))}
            
            </div>
        </>
    )
}