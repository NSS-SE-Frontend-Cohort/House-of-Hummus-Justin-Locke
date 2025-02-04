import { getTransientState, setSideId } from "./stateChanges/transientState.js";

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSideId(parseInt(event.target.value));
        console.log("Side State Changed: ", getTransientState());
    };
});

export const getSides = async () => {

    const response = await fetch("http://localhost:8088/sides");
    const sides = await response.json();

    return `
        <h2>Sides</h2>
        ${sides.map(side => `<div><input type="radio" name="sideDish" value="${side.id}" /> ${side.title}</div>`).join("")}
    `;
};

