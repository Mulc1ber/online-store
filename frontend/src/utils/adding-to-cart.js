export const addingToCart = (
    added,
    setAdded,
    setTimerId,
    dispatch,
    updateProductsInCart,
    product,
    quantity,
) => {
    dispatch(updateProductsInCart({ product, quantity }));

    if (!added) {
        setAdded(true);

        const timerid = setTimeout(() => {
            setAdded(false);
        }, 1000);

        setTimerId(timerid);
    }
};
