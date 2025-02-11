import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR } from '../../constants';
import { Card, Loader, Search, Sort } from '../../components';
import { debounce } from './utils';
import { selectProducts } from '../../selectors';
import { loadProductsAsync, sortOrFilterProducts } from '../../actions';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [sort, setSort] = useState('name');
    const [order, setOrder] = useState('asc');
    const [currentSort, setCurrentSort] = useState('name-asc');
    const [shouldSearch, setShouldSearch] = useState(false);

    const { products, isLoading, isSortingOrFiltering, errorMessage } = useSelector(selectProducts);
    const dispatch = useDispatch();

    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 400), []);

    useEffect(() => {
        dispatch(loadProductsAsync(searchPhrase, sort, order));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldSearch]);

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value);

        dispatch(sortOrFilterProducts());
        startDelayedSearch(!shouldSearch);
    };

    const handleSortChange = ({ target }) => {
        const { value } = target;

        setCurrentSort(value);
        value.split('-').forEach((item, index) => {
            index === 0 ? setSort(item) : setOrder(item);
        });

        dispatch(sortOrFilterProducts());
        startDelayedSearch(!shouldSearch);
    };

    return (
        <div className={className}>
            <div className="product-control-panel">
                <Sort onSortChange={handleSortChange} currentSort={currentSort} />
                <Search searchPhrase={searchPhrase} onChange={onSearch} />
            </div>
            <div className="product-list-container">
                <>
                    {isLoading ? (
                        <div className="loading-product"></div>
                    ) : (
                        <>
                            {products.length > 0 ? (
                                <div className="product-grid">
                                    {products.map((product) => (
                                        <Card key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <>
                                    {isLoading ? (
                                        <>
                                            <h2 className="loading-product">Загрузка...</h2>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="product-not-found">
                                                {errorMessage || ERROR.PRODUCT_NOT_FOUND}
                                            </h2>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}

                    <Loader
                        isLoading={isLoading ? isLoading : isSortingOrFiltering}
                        background="rgba(255, 255, 255, 0.5)"
                    />
                </>
            </div>
        </div>
    );
};

export const Main = styled(MainContainer)`
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

        position: sticky;
        top: 5rem;
        width: calc(100% - 2rem);
        margin: 0 auto;
        background: white;
        z-index: 1;
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
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
