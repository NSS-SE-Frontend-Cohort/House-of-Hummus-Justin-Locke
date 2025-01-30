import { convertToCurrency } from "./utility.js/currencyConverter.js";

export const sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable&").then(res => res.json())

    let salesDivs = sales.map(
        (sale) => {
            const orderPrice = sale.entree.price + sale.side.price + sale.vegetable.price;
            return `
                <div>
                    Receipt #${sale.id} cost ${convertToCurrency(orderPrice)}
                </div>
            `
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

