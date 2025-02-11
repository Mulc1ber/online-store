import { useSelector } from 'react-redux';
import { Button, Loader } from '../../../../components';
import { selectProducts } from '../../../../selectors';
import { TableProducts } from '../table-products/table-products';
import styled from 'styled-components';

const ProductsContentContainer = ({ className, handleCreate, handleEdit, handleDelete }) => {
    const { products, isLoading: isLoadingProducts } = useSelector(selectProducts);

    return (
        <div className={className}>
            {products.length === 0 ? (
                <h2 className="loading-product">Загрузка товаров...</h2>
            ) : (
                <div className="products-container">
                    <Button
                        width={'150px'}
                        padding={'0.5rem 1rem'}
                        size={'1rem'}
                        onClick={handleCreate}
                        transition={'none'}
                    >
                        {'Добавить товар'}
                    </Button>
                    <TableProducts
                        products={products}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />

                    <Loader isLoading={isLoadingProducts} />
                </div>
            )}
        </div>
    );
};

export const ProductsContent = styled(ProductsContentContainer)`
    & .loading-product {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }

    & .products-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
