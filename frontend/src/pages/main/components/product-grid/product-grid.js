import { useEffect, useMemo, useState } from 'react';
import { ERROR } from '../../../../constants';
import { Card, Loader, Search, Sort } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { debounce } from '../../utils';
import styled from 'styled-components';

const ProductGridContainer = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSortingOrFiltering, setIsSortingOrFiltering] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [sort, setSort] = useState('name');
    const [order, setOrder] = useState('asc');
    const [currentSort, setCurrentSort] = useState('name-asc');
    const [shouldSearch, setShouldSearch] = useState(false);

    const requestServer = useServerRequest();

    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 300), []);

    useEffect(() => {
        requestServer('fetchProducts', searchPhrase, sort, order).then((products) => {
            setProducts(products.res);
            setIsLoading(false);
            setIsSortingOrFiltering(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, shouldSearch]);

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value);
        setIsSortingOrFiltering(true);
        startDelayedSearch(!shouldSearch);
    };

    const handleSortChange = ({ target }) => {
        const { value } = target;

        setCurrentSort(value);
        value.split('-').forEach((item, index) => {
            index === 0 ? setSort(item) : setOrder(item);
        });
        setIsSortingOrFiltering(true);
        startDelayedSearch(!shouldSearch);
    };

    return (
        <div className={className}>
            <div className="product-control-panel">
                <Sort onSortChange={handleSortChange} currentSort={currentSort} />
                <Search searchPhrase={searchPhrase} onChange={onSearch} />
            </div>
            <div className="product-list-container">
                {isLoading ? (
                    <h2 className="loading-product">Загрузка...</h2>
                ) : (
                    <>
                        {products.length > 0 ? (
                            <div className="product-grid">
                                {products.map((product) => (
                                    <Card key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <h2 className="product-not-found">{ERROR.PRODUCT_NOT_FOUND}</h2>
                        )}

                        <Loader
                            isLoading={isSortingOrFiltering}
                            background="rgba(255, 255, 255, 0.5)"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export const ProductGrid = styled(ProductGridContainer)`
    position: relative;
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

    & .product-list-container {
        position: relative;
    }

    & .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
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
