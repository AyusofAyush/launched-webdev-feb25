// put helpers / utils methods in the helpers.js file

const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setItemInLocalStorage = (key) => {
    return localStorage.setItem(key);
}

// ......

export {
    getItemFromLocalStorage,
    setItemInLocalStorage
}
