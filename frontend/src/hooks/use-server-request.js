import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff';

export const useServerRequest = () => {
    const session = useSelector(selectUserSession);

    return useCallback(
        (operation, ...params) => {
            // TODO убрать из request 'removeProduct, removeCategory, saveProduct, saveCategory' после того, как будет реализована session.
            const request = [
                'register',
                'authorize',
                'fetchProduct',
                'fetchProducts',
                'fetchCategories',
                'removeProduct',
                'removeCategory',
                'saveProduct',
                'saveCategory',
            ].includes(operation)
                ? params
                : [session, ...params];

            return server[operation](...request);
        },
        [session],
    );
};
