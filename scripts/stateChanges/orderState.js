import { getTransientState } from "./transientState.js"


export const purchaseCombo = async () => {
    const transientState = getTransientState();

    if (transientState.entreeId === 0 || transientState.sideId === 0 || transientState.vegetableId === 0) {
        throw new Error('Must make a selection from each section for the combo')
        
    }
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