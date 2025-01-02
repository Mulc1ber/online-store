import { setProductsData } from './set-products-data';

export const saveProductAsync = (requestServer, newProductData) => (dispatch) =>
    requestServer('saveProduct', newProductData).then((updatedProducts) => {
        dispatch(setProductsData(updatedProducts.res));
    });
