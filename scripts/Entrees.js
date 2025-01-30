

export const getEntrees = async () => {

    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();


    return `
        <h2>Entrees</h2>
        ${entrees.map(entree => `<input type="radio" name="entree" value="${entree.id}" /> ${entree.name}`).join("")}
    `;
};