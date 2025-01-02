import { Button } from '../../../../components';
import styled from 'styled-components';

const TableProductsContainer = ({ className, products, handleEdit, handleDelete }) => {
    return (
        <div className={className}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Категория</th>
                        <th>Описание</th>
                        <th>Спецификация</th>
                        <th>Доставка</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className="product-image-cell">
                                <img src={product.imageUrl} alt={product.name} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td className="reduction" title={product.description}>
                                {product.description}
                            </td>
                            <td className="reduction" title={product.specifications}>
                                {product.specifications}
                            </td>
                            <td className="reduction" title={product.shipping}>
                                {product.shipping}
                            </td>
                            <td>{product.price && `${product.price} ₽`} </td>
                            <td>{product.stock} шт</td>

                            <td>
                                <div className="action-buttons">
                                    <Button
                                        background={'none'}
                                        size={'1.2rem'}
                                        padding={'0.5rem'}
                                        hbackground={'#f5f5f5'}
                                        onClick={() => handleEdit(product)}
                                        title={'Редактировать'}
                                    >
                                        ✏️
                                    </Button>
                                    <Button
                                        background={'none'}
                                        size={'1.2rem'}
                                        padding={'0.5rem'}
                                        hbackground={'#f5f5f5'}
                                        onClick={() => handleDelete(product.id)}
                                        title={'Удалить'}
                                    >
                                        🗑️
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const TableProducts = styled(TableProductsContainer)`
    overflow-x: auto;

    & table {
        width: 100%;
        border-collapse: collapse;
    }

    & th,
    & td {
        padding: 0.5rem;
        text-align: left;
    }

    & tr {
        border-bottom: 1px solid #eee;
    }

    & th {
        background: #f5f5f5;
        font-weight: bold;
    }

    & .product-image-cell {
        // font-size: 2rem;
        text-align: center;

        & img {
            max-width: 100px;
        }
    }

    & .reduction {
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & .action-buttons {
        display: flex;
        justify-content: space-evenly;
    }

    & .edit-button,
    & .delete-button {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 5px;
        transition: background 0.3s;
    }

    & .edit-button:hover,
    & .delete-button:hover {
        background: #f5f5f5;
    }
`;
