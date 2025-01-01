import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../../../components';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectCategories } from '../../../../../../selectors';
import { useEffect } from 'react';
import { setCategoriesData } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';

const CatalogSidebarContainer = ({ className }) => {
    const params = useParams();
    const requestServer = useServerRequest();
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        requestServer('fetchCategories').then((categories) => {
            dispatch(setCategoriesData(categories.res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, dispatch]);

    return (
        <aside className={className}>
            <h2>Категории</h2>
            <div className="category-list">
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
                    <p>Загрузка категорий ...</p>
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
    height: fit-content;

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
`;
