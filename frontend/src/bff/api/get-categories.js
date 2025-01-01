export const getCategories = async () =>
    fetch('http://localhost:3005/categories')
        .then((loadedCategories) => loadedCategories.json())
        .then((loadedCategories) => loadedCategories);
