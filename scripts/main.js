import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

document.addEventListener("purchasePosted", event => {
    console.log("Combo Purchased");
    renderAllHTML();
});
renderAllHTML()

