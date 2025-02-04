import { getTransientState, setEntreeId } from "./stateChanges/transientState.js";

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntreeId(parseInt(event.target.value));
        console.log("Entree State Changed: ", getTransientState());
    };
    
});

export const getEntrees = async () => {

    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();


    return `
        <h2>Entrees</h2>
        ${entrees.map(entree => `<div><input type="radio" name="entree" value="${entree.id}" /> ${entree.name}</div>`).join("")}
    `;
};