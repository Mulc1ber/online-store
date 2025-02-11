import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components';
import { AdditionalInfo, DetailsContainer } from './components';
import { loadProductAsync } from '../../actions';
import { selectProduct } from '../../selectors';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
    const { product, isLoading, errorMessage } = useSelector(selectProduct);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(loadProductAsync(params.id));
    }, [dispatch, params.id]);

    return (
        <div className={className}>
            {isLoading ? (
                <h2 className="loading-product">Загрузка...</h2>
            ) : (
                <>
                    {!errorMessage && product ? (
                        <div className="product-container">
                            <BackButton />
                            <DetailsContainer product={product} />
                            <AdditionalInfo product={product} />
                        </div>
                    ) : (
                        <h2 className="product-not-found">{errorMessage}</h2>
                    )}
                </>
            )}
        </div>
    );
};

export const Product = styled(ProductContainer)`
    & .product-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: white;
        border-radius: 10px;
        padding: 1rem 2rem 1.5rem;
        margin: 2rem 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

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
