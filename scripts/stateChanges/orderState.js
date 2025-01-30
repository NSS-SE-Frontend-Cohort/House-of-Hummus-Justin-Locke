import { getTransientState } from "./transientState.js"


export const purchaseCombo = async () => {

    const postPurchase = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(getTransientState())
    }

    const response = await fetch("http://localhost:8088/purchases", postPurchase)

    const purchasePosted = new CustomEvent("purchasePosted");
    document.dispatchEvent(purchasePosted);
}