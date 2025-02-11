import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { TabButtonsEdit, CategoriesContent, ProductsContent } from './components';
import { HeroHeading, ModalWindow, PrivateContent } from '../../components';
import { ROLE } from '../../constants';
import { checkAccess } from '../../utils';
import { checkOnEmpty, TABS_EDIT } from './utils';
import { selectCategories, selectProducts, selectUserRole } from '../../selectors';
import {
    addCategoryAsync,
    addProductAsync,
    loadCategoriesAsync,
    loadProductsAsync,
    removeCategoryAsync,
    removeProductAsync,
    updateCategoryAsync,
    updateProductAsync,
} from '../../actions';
import styled from 'styled-components';

const ProductsEditContainer = ({ className }) => {
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [activeTab, setActiveTab] = useState(TABS_EDIT.PRODUCTS);

    const match = useMatch('/products/edit');
    const userRole = useSelector(selectUserRole);

    const { categories, errorMessage: errorMessageCategories } = useSelector(selectCategories);
    const { errorMessage: errorMessageProducts } = useSelector(selectProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        const roleId = JSON.parse(sessionStorage.getItem('userData'))?.roleId || userRole;

        if (checkAccess([ROLE.ADMIN], roleId)) {
            dispatch(loadCategoriesAsync());
            dispatch(loadProductsAsync());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userRole]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEdit = (element) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
        activeTab === TABS_EDIT.PRODUCTS ? setEditingProduct(element) : setEditingCategory(element);
    };

    const handleCreate = () => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
        activeTab === TABS_EDIT.PRODUCTS
            ? setEditingProduct({
                  name: '',
                  price: 1,
                  category: { label: 'figures', name: 'Фигурки' },
                  imageUrl: '',
                  description: '',
                  specifications: '',
                  shipping: '',
                  stock: 1,
              })
            : setEditingCategory({
                  label: '',
                  name: '',
              });
    };

    const handleSaveProduct = (event, editingProduct) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        event.preventDefault();

        if (!checkOnEmpty(editingProduct)) {
            if (editingProduct.id) {
                dispatch(updateProductAsync(editingProduct.id, editingProduct));
            } else {
                dispatch(addProductAsync(editingProduct));
            }

            setEditingProduct(null);
        }
    };

    const handleSaveCategory = (event, editingCategory) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        event.preventDefault();

        if (!checkOnEmpty(editingCategory)) {
            if (editingCategory.id) {
                dispatch(updateCategoryAsync(editingCategory.id, editingCategory));
            } else {
                dispatch(addCategoryAsync(editingCategory));
            }

            setEditingCategory(null);
        }
    };

    const handleDelete = (elementId) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        if (activeTab === TABS_EDIT.PRODUCTS) {
            dispatch(removeProductAsync(elementId));
        } else {
            dispatch(removeCategoryAsync(elementId));
        }
    };

    return (
        <PrivateContent
            access={[ROLE.ADMIN]}
            serverError={errorMessageProducts || errorMessageCategories}
            currentPage={match?.pattern.path}
        >
            <div className={className}>
                <div className="admin-panel-header">
                    <TabButtonsEdit activeTab={activeTab} handleTabClick={handleTabClick} />
                    <HeroHeading>Панель администратора</HeroHeading>
                </div>

                {activeTab === TABS_EDIT.PRODUCTS ? (
                    <ProductsContent
                        handleCreate={handleCreate}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <CategoriesContent
                        handleCreate={handleCreate}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                )}

                {(editingProduct || editingCategory) && (
                    <ModalWindow
                        activeTab={activeTab}
                        categories={categories}
                        editingProduct={editingProduct}
                        editingCategory={editingCategory}
                        setEditingProduct={setEditingProduct}
                        setEditingCategory={setEditingCategory}
                        handleSaveProduct={handleSaveProduct}
                        handleSaveCategory={handleSaveCategory}
                    />
                )}
            </div>
        </PrivateContent>
    );
};

export const ProductsEdit = styled(ProductsEditContainer)`
    max-width: 1416px;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 2rem auto 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & .admin-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }
`;
