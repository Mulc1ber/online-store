import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { selectCategories } from '../../../../selectors';
import { loadCategoriesAsync } from '../../../../actions';
import { ERROR } from '../../../../constants';
import styled from 'styled-components';

const CatalogSidebarContainer = ({ className }) => {
    const { categories, isLoading, errorMessage } = useSelector(selectCategories);
    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(loadCategoriesAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <aside className={className}>
            <h2>Категории</h2>
            <div className="category-list">
                {isLoading ? (
                    <>
                        <h2 className="loading-categories">Загрузка категорий...</h2>
                    </>
                ) : (
                    <>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <Link
                                    to={`/catalog/${category.label}`}
                                    key={category.label}
                                    className={`category-item ${params.name === category.label ? 'active' : ''}`}
                                >
                                    {category.name}
                                    <Icon
                                        faIcon={'fa-chevron-right'}
                                        color={'#ff4081'}
                                        active={`${params.name === category.label ? 'active' : ''}`}
                                        isButton={true}
                                    />
                                </Link>
                            ))
                        ) : (
                            <>
                                <h2 className="product-not-found">
                                    {errorMessage || ERROR.CATEGORIES_NOT_FOUND}
                                </h2>
                            </>
                        )}
                    </>
                )}
            </div>
        </aside>
    );
};

export const CatalogSidebar = styled(CatalogSidebarContainer)`
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 10px;
    position: sticky;
    top: 100px;
    height: auto;
    max-height: 590px;
    overflow: auto;

    & .category-list {
        list-style: none;
    }

    & .category-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.7rem;
        width: 100%;
        padding: 0.8rem 1rem;
        background: white;
        color: #212121;
        border-radius: 5px;
        transition: all 0.3s;
        &:hover {
            background: #ff4081;
            color: white;
            & i {
                color: white;
                transition: all 0.3s;
            }
        }
        &.active {
            background: #ff4081;
            color: white;
        }
    }

    & .loading-categories {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }
`;
