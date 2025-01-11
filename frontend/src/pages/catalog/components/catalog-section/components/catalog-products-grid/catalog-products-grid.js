import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../../../../../components';
import { filteredProducts } from '../../../../utils';
import { request } from '../../../../../../utils';
import styled from 'styled-components';

const CatalogProductsGridContainer = ({ className }) => {
    const [products, setProducts] = useState([]);

    const params = useParams();

    useEffect(() => {
        request('/api/products').then(({ data: products }) => {
            setProducts(products);
        });
    }, []);

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
