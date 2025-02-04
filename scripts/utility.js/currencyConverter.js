
export const convertToCurrency = (numberToBecomeDollars) => {
    return numberToBecomeDollars.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}