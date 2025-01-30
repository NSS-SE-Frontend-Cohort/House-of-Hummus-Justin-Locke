export const getSides = async () => {

    const response = await fetch("http://localhost:8088/sides");
    const sides = await response.json();

    return `
        <h2>Sides</h2>
        ${sides.map(side => `<input type="radio" name="sides" value="${side.id}" /> ${side.title}`).join("")}
    `;
};

