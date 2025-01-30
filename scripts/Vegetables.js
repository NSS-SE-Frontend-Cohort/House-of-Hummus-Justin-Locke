export const getVeggies = async () => {

    const response = await fetch("http://localhost:8088/vegetables");
    const vegetables = await response.json();


    return `
        <h2>Vegetables</h2>
        ${vegetables.map(vegetable => `<input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}`).join("")}
    `;
};
