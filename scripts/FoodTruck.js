import { getEntrees } from "./Entrees.js"
import { sales } from "./Sales.js"
import { getSides } from "./SideDishes.js"
import { purchaseCombo } from "./stateChanges/orderState.js"
import { getVeggies } from "./Vegetables.js"


document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        purchaseCombo();
    }
});


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
            <section class="choices__base options">
                ${entreesHTML}
            </section>

            <section class="choices__veggies options">
                ${vegetablesHTML}
            </section>

            <section class="choices__sides options">
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
