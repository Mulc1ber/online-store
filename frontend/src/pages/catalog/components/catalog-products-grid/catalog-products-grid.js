import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Loader } from '../../../../components';
import { filteredProducts } from '../../utils';
import { selectProducts } from '../../../../selectors';
import { loadProductsAsync } from '../../../../actions';
import { ERROR } from '../../../../constants';
import styled from 'styled-components';

const CatalogProductsGridContainer = ({ className }) => {
    const { products, isLoading, isSortingOrFiltering, errorMessage } = useSelector(selectProducts);
    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(loadProductsAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <div className={className}>
            {products.length > 0 ? (
                <>
                    {filteredProducts(params, products).length === 0 ? (
                        <h2 className="no-products">
                            Товары данной категории временно отсутствуют
                        </h2>
                    ) : (
                        <div className="products-list">
                            {filteredProducts(params, products).map((product) => (
                                <Card key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <h2 className="product-not-found">{errorMessage || ERROR.PRODUCT_NOT_FOUND}</h2>
                </>
            )}

            <Loader
                isLoading={isLoading ? isLoading : isSortingOrFiltering}
                background="rgba(255, 255, 255, 0.5)"
            />
        </div>
    );
};

export const CatalogProductsGrid = styled(CatalogProductsGridContainer)`
    position: relative;

    & .loading-products,
    & .product-not-found,
    & .no-products {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }

    & .products-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
    }
`;
