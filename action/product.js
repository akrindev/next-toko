

const getAllProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`).then(response => response.json())

    return products
}

export { getAllProducts }