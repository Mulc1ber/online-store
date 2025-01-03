import { useParams } from 'react-router-dom';
import { Hero, Wrapper } from '../../components';
import { DetailsSection } from './components';
import { useDispatch } from 'react-redux';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { RESET_PRODUCT_DATA } from '../../actions';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const params = useParams();
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    useLayoutEffect(() => {
        dispatch(RESET_PRODUCT_DATA);
    }, [dispatch]);

    useEffect(() => {
        requestServer('fetchProduct', Number(params.id)).then((productRes) => {
            if (productRes.error) {
                setErrorMessage(productRes.error);
                setIsLoading(false);
                return;
            }
            setProduct(productRes.res);
            setIsLoading(false);
        });
    }, [requestServer, params.id]);

    return (
        <Wrapper>
            <Hero>
                {product && <h1>{product.name}</h1>}
                <p>Подробная информация о товаре</p>
            </Hero>

            <div className={className}>
                {isLoading ? (
                    <h2 className="loading-product">Загрузка...</h2>
                ) : (
                    <>
                        {!errorMessage && product ? (
                            <DetailsSection product={product} />
                        ) : (
                            <h2 className="product-not-found">{errorMessage}</h2>
                        )}
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export const Product = styled(ProductContainer)`
    & .loading-product,
    & .product-not-found {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }
`;
