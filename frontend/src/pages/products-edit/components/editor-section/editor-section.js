import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { Button, Loader, ModalWindow, PrivateContent } from '../../../../components';
import { TableProducts } from '../table-products/table-products';
import { TableCategories } from '../table-categories/table-categories';
import { useServerRequest } from '../../../../hooks';
import { checkAccess } from '../../../../utils';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';
import styled from 'styled-components';

const EditorSectionContainer = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [shouldUpdateProductList, setShouldUpdateProductList] = useState(false);
    const [shouldUpdateCategoryList, setShouldUpdateCategoryList] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [activeTab, setActiveTab] = useState('tabProducts');

    const match = useMatch('/products/edit');
    const requestServer = useServerRequest();
    const userRole = useSelector(selectUserRole);

    useEffect(() => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        Promise.all([
            requestServer('fetchProducts'),
            requestServer('fetchCategories'),
            requestServer('fetchRoles'),
        ]).then(([productsRes, categoriesRes, rolesRes]) => {
            if (productsRes.error || categoriesRes.error || rolesRes.error) {
                setErrorMessage(productsRes.error || categoriesRes.error || rolesRes.error);
                return;
            }
            setProducts(productsRes.res);
            setCategories(categoriesRes.res);
            setIsLoading(false);
        });
    }, [requestServer, shouldUpdateProductList, shouldUpdateCategoryList, userRole]); // userRole

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEdit = (element) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
        activeTab === 'tabProducts' ? setEditingProduct(element) : setEditingCategory(element);
    };

    const handleCreate = () => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
        activeTab === 'tabProducts'
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
        setIsLoading(true);
        requestServer('saveProduct', editingProduct).then(() => {
            setShouldUpdateProductList(!shouldUpdateProductList);
        });
        setEditingProduct(null);
    };

    const handleSaveCategory = (event, editingCategory) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        event.preventDefault();
        setIsLoading(true);
        requestServer('saveCategory', editingCategory).then(() => {
            setShouldUpdateCategoryList(!shouldUpdateCategoryList);
        });
        setEditingCategory(null);
    };

    const handleDelete = (elementId) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }

        setIsLoading(true);
        requestServer(
            `${activeTab === 'tabProducts' ? 'removeProduct' : 'removeCategory'}`,
            elementId,
        ).then(() => {
            activeTab === 'tabProducts'
                ? setShouldUpdateProductList(!shouldUpdateProductList)
                : setShouldUpdateCategoryList(!shouldUpdateCategoryList);
        });
    };

    return (
        <div className={className}>
            <PrivateContent
                access={[ROLE.ADMIN]}
                serverError={errorMessage}
                currentPage={match?.pattern.path}
            >
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

                {activeTab === 'tabProducts' ? (
                    <>
                        {products.length === 0 ? (
                            <h2 className="loading-product">Загрузка товаров...</h2>
                        ) : (
                            <>
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

                                <Loader isLoading={isLoading} />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {categories.length === 0 ? (
                            <h2 className="loading-category">Загрузка категорий...</h2>
                        ) : (
                            <>
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

                                <Loader isLoading={isLoading} />
                            </>
                        )}
                    </>
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
            </PrivateContent>
        </div>
    );
};

export const EditorSection = styled(EditorSectionContainer)`
    position: relative;
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

    & .loading-category,
    & .loading-product {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }
`;
