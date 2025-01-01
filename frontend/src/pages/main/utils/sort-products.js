export const sortProducts = (items, currentSort) => {
    const sortedItems = [...items];

    switch (currentSort) {
        case 'name-asc':
            return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-asc':
            return sortedItems.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sortedItems.sort((a, b) => b.price - a.price);
        case 'category':
            return sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        default:
            return sortedItems;
    }
};
