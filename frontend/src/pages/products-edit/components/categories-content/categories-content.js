import { useSelector } from 'react-redux';
import { Button, Loader } from '../../../../components';
import { selectCategories } from '../../../../selectors';
import { TableCategories } from '../table-categories/table-categories';
import styled from 'styled-components';

const CategoriesContentContainer = ({ className, handleCreate, handleEdit, handleDelete }) => {
    const { categories, isLoading: isLoadingCategories } = useSelector(selectCategories);

    return (
        <div className={className}>
            {categories.length === 0 ? (
                <h2 className="loading-category">Загрузка категорий...</h2>
            ) : (
                <div className="categories-container">
                    <Button
                        width={'185px'}
                        padding={'0.5rem 1rem'}
                        size={'1rem'}
                        onClick={handleCreate}
                        transition={'none'}
                    >
                        {'Добавить категорию'}
                    </Button>
                    <TableCategories
                        categories={categories}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />

                    <Loader isLoading={isLoadingCategories} />
                </div>
            )}
        </div>
    );
};

export const CategoriesContent = styled(CategoriesContentContainer)`
    & .loading-category {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }

    & .categories-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
