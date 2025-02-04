import { getTransientState, setVegetableId } from "./stateChanges/transientState.js";

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVegetableId(parseInt(event.target.value));
        console.log("Vegetable State Changed: ", getTransientState());
    };
});

export const getVeggies = async () => {

    const response = await fetch("http://localhost:8088/vegetables");
    const vegetables = await response.json();


    return `
        <h2>Vegetables</h2>
        ${vegetables.map(vegetable => `<div><input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}</div>`).join("")}
    `;
};
