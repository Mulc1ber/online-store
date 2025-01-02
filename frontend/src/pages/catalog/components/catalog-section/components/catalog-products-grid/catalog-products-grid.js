import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import { filteredProducts } from '../../../../utils';
import styled from 'styled-components';

const CatalogProductsGridContainer = ({ className }) => {
    const [products, setProducts] = useState([]);

    const params = useParams();
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer('fetchProducts').then((products) => {
            setProducts(products.res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer]);

    return (
        <div className={className}>
            {products.length === 0 ? (
                <h2 className="loading-products">Загрузка...</h2>
            ) : (
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
            )}
        </div>
    );
};

export const CatalogProductsGrid = styled(CatalogProductsGridContainer)`
    & .loading-products,
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
