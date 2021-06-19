
const digits = (digit) => {
    digit = digit.toString().split('').reverse().join('')
    digit = digit.match(/\d{1,3}/g).reverse().join('.')
    return Number(digit)
} 

const getDiscount = (price, discount) => {
    const digit = digits( (price - (price * (discount/100))).toFixed())

    return digit
}

export { digits, getDiscount }