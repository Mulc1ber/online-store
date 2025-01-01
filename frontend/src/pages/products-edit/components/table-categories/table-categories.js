import { Button } from '../../../../components';
import styled from 'styled-components';

const TableCategoriesContainer = ({ className, categories, handleEdit, handleDelete }) => {
    return (
        <div className={className}>
            <table>
                <thead>
                    <tr>
                        <th>Ярлык / Маркировка</th>
                        <th>Название</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.label}</td>
                            <td>{category.name}</td>

                            <td className="action-buttons">
                                <Button
                                    background={'none'}
                                    size={'1.2rem'}
                                    padding={'0.5rem'}
                                    hbackground={'#f5f5f5'}
                                    onClick={() => handleEdit(category)}
                                >
                                    ✏️
                                </Button>
                                <Button
                                    background={'none'}
                                    size={'1.2rem'}
                                    padding={'0.5rem'}
                                    hbackground={'#f5f5f5'}
                                    onClick={() => handleDelete(category.id)}
                                >
                                    🗑️
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const TableCategories = styled(TableCategoriesContainer)`
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

    & .action-buttons {
        display: flex;
        gap: 0.5rem;
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
