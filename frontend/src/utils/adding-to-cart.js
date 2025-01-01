export const addingToCart = (
    added,
    setAdded,
    setTimerId,
    dispatch,
    updateProductsInCart,
    product,
    quantity,
) => {
    console.log('Добавлено в корзину');
    dispatch(updateProductsInCart({ product, quantity }));

    if (!added) {
        setAdded(true);

        const timerid = setTimeout(() => {
            console.log('setTimeOut');
            setAdded(false);
        }, 1000);

        setTimerId(timerid);
    }
};
