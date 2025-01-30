import { getEntrees } from "./Entrees.js"
import { sales } from "./Sales.js"
import { getSides } from "./SideDishes.js"
import { getVeggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await sales()
    const entreesHTML = await getEntrees()
    const vegetablesHTML = await getVeggies()
    const sidesHTML = await getSides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices_entree options">
                ${entreesHTML}
            </section>

            <section class="choices_vegetable options">
                ${vegetablesHTML}
            </section>

            <section class="choices_side options">
                ${sidesHTML}
            </section>
        </article>


        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
