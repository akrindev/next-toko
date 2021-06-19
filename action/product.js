

const getAllProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`).then(response => response.json())

    return products
}

const getProduct = async (slug) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${slug}`).then(response => response.json())

    return product
}

export { getAllProducts, getProduct }