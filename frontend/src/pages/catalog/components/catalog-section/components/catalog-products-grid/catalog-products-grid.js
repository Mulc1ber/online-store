import { useParams } from 'react-router-dom';
import { Card } from '../../../../../../components';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../../../../../selectors';
import { useEffect } from 'react';
import { useServerRequest } from '../../../../../../hooks';
import { setProductsData } from '../../../../../../actions';

const CatalogProductsGridContainer = ({ className }) => {
    const params = useParams();
    const requestServer = useServerRequest();
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        requestServer('fetchProducts', '').then((products) => {
            dispatch(setProductsData(products.res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, dispatch]);

    const filteredProducts =
        params.name === undefined || params.name === 'all'
            ? products
            : products.filter((product) => product.category === params.name);

    return (
        <div className={className}>
            {products.length === 0 && <p>Загрузка...</p>}
            {filteredProducts.length === 0 ? (
                <p>Список товаров пуст</p>
            ) : (
                filteredProducts.map((product) => <Card key={product.id} product={product} />)
            )}
        </div>
    );
};

export const CatalogProductsGrid = styled(CatalogProductsGridContainer)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
`;
