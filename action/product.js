

const getAllProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`).then(response => response.json())

    return products
}

const getProduct = async (slug) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${slug}`).then(response => response.json())

    return product
}

const getAllCategories = async () => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`).then(response => response.json())
    
    return categories
}

const getCategory = async (name) => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${name}`).then(response => response.json())

    return categories
}

export { getAllProducts, getProduct, getAllCategories, getCategory }