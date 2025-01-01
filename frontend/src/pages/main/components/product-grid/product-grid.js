import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR } from '../../../../constants';
import { Card, Search, Sort } from '../../../../components';
import { selectProducts } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { setProductsData } from '../../../../actions';
import { debounce, sortProducts } from '../../utils';
import styled from 'styled-components';

const ProductGridContainer = ({ className }) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [shouldSearch, setShouldSearch] = useState(false);
    const [currentSort, setCurrentSort] = useState('name-asc');

    const requestServer = useServerRequest();
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const filteredAndSortedProducts = sortProducts(products, currentSort);
    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

    useEffect(() => {
        requestServer('fetchProducts', searchPhrase).then((products) => {
            dispatch(setProductsData(products.res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, dispatch, shouldSearch]);

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value);
        startDelayedSearch(!shouldSearch);
    };

    const handleSortChange = ({ target }) => {
        setCurrentSort(target.value);
    };

    return (
        <div className={className}>
            <div className="product-control-panel">
                <Sort onSortChange={handleSortChange} currentSort={currentSort} />
                <Search searchPhrase={searchPhrase} onChange={onSearch} />
            </div>

            {products.length > 0 ? (
                <div className="product-grid">
                    {filteredAndSortedProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <h2 className="product-not-found">{ERROR.PRODUCT_NOT_FOUND}</h2>
            )}
        </div>
    );
};

export const ProductGrid = styled(ProductGridContainer)`
    padding: 2rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & .product-control-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    & .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
    }

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
