export const calculateTotal = (products) =>
    products.reduce((total, item) => total + item.price * item.quantity, 0);
