import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ModalWindow } from '../../../../components';
import { TableProducts } from '../table-products/table-products';
import { TableCategories } from '../table-categories/table-categories';
import { selectCategories, selectProducts } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { removeCategoryAsync, removeProductAsync } from '../../../../actions';
import styled from 'styled-components';

const EditorSectionContainer = ({ className }) => {
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [activeTab, setActiveTab] = useState('tabProducts');

    const requestServer = useServerRequest();
    const products = useSelector(selectProducts);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEdit = (element) =>
        activeTab === 'tabProducts' ? setEditingProduct(element) : setEditingCategory(element);

    const handleCreate = () => {
        activeTab === 'tabProducts'
            ? setEditingProduct({
                  name: '',
                  price: '',
                  category: '',
                  imageUrl: '',
                  description: '',
                  specifications: '',
                  shipping: '',
                  stock: '',
              })
            : setEditingCategory({
                  label: '',
                  name: '',
              });
    };

    const handleDelete = async (elementId) => {
        if (activeTab === 'tabProducts') {
            dispatch(removeProductAsync(requestServer, elementId));
        }
        if (activeTab === 'tabCategories') {
            dispatch(removeCategoryAsync(requestServer, elementId));
        }
    };

    return (
        <div className={className}>
            <div className="tab-buttons">
                <Button
                    active={`${activeTab === 'tabProducts' ? 'active' : ''}`}
                    background={'#f5f5f5'}
                    color={'#212121'}
                    onClick={() => handleTabClick('tabProducts')}
                >
                    Список товаров
                </Button>
                <Button
                    active={`${activeTab === 'tabCategories' ? 'active' : ''}`}
                    background={'#f5f5f5'}
                    color={'#212121'}
                    onClick={() => handleTabClick('tabCategories')}
                >
                    Список категорий
                </Button>
            </div>

            <Button
                width={activeTab === 'tabProducts' ? '150px' : '185px'}
                padding={'0.5rem 1rem'}
                size={'1rem'}
                onClick={handleCreate}
                transition={'none'}
            >
                {activeTab === 'tabProducts' ? 'Добавить товар' : 'Добавить категорию'}
            </Button>

            {activeTab === 'tabProducts' ? (
                <TableProducts
                    products={products}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ) : (
                <TableCategories
                    categories={categories}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            )}

            {(editingProduct || editingCategory) && (
                <ModalWindow
                    activeTab={activeTab}
                    editingProduct={editingProduct}
                    editingCategory={editingCategory}
                    setEditingProduct={setEditingProduct}
                    setEditingCategory={setEditingCategory}
                    categories={categories}
                />
            )}
        </div>
    );
};

export const EditorSection = styled(EditorSectionContainer)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 2rem auto 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & .tab-buttons {
        display: flex;
        gap: 0.5rem;
    }
`;
