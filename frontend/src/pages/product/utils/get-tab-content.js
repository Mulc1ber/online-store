export const getTabContent = (activeTab, productById) => {
    switch (activeTab) {
        case 'description':
            return productById.description;
        case 'specifications':
            return productById.specifications;
        case 'shipping':
            return productById.shipping;
        default:
            return productById.description;
    }
};
