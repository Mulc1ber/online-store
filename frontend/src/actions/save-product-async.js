import { setProductsData } from './set-products-data';

export const saveProductAsync = (requestServer, newProductData) => (dispatch) =>
    requestServer('saveProduct', newProductData).then((updatedProducts) => {
        console.log('updatedProducts', updatedProducts);

        dispatch(setProductsData(updatedProducts.res));
    });
