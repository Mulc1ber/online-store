import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useAddToCart = (updateProductsInCartAsync, product) => {
    const [added, setAdded] = useState(false);
    const [timerId, setTimerId] = useState(null);
    const dispatch = useDispatch();

    const { id, name, price, imageUrl, category } = product;

    useEffect(() => {
        if (timerId && !added) {
            clearTimeout(timerId);
        }
    }, [timerId, added]);

    const handleAddingToCart = (quantity) => {
        dispatch(updateProductsInCartAsync({ id, name, price, imageUrl, category, quantity }));

        if (!added) {
            setAdded(true);

            const timerid = setTimeout(() => {
                setAdded(false);
            }, 1000);

            setTimerId(timerid);
        }
    };

    return { added, handleAddingToCart };
};
