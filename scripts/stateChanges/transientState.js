const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
};

// Setter for the transient state
export const setEntreeId = (id) => transientState.entreeId = id;
export const setVegetableId = (id) => transientState.vegetableId = id;
export const setSideId = (id) => transientState.sideId = id;


// Return a copy of the transient state
export const getTransientState = () => ({ ...transientState });
