import { fransformProduct } from '../transformers';

export const getProduct = async (productId) =>
    fetch(`http://localhost:3005/products/${productId}`)
        .then((res) => {
            if (res.ok) {
                return res;
            }

            const error =
                res.status === 404
                    ? 'Такого товара не существует'
                    : 'Что-то пошло не так. Попробуйте еще раз позднее.';

            return Promise.reject(error);
        })
        .then((loadedProduct) => loadedProduct.json())
        .then((loadedProduct) => loadedProduct && fransformProduct(loadedProduct));
