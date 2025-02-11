import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useAddToCart = (updateProductsInCartAsync, product) => {
    const [added, setAdded] = useState(false);
    const [timerId, setTimerId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (timerId && !added) {
            clearTimeout(timerId);
        }
    }, [timerId, added]);

    const handleAddingToCart = (quantity) => {
        dispatch(updateProductsInCartAsync({ product, quantity }));

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
