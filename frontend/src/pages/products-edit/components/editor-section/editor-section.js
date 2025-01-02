import { useEffect, useState } from 'react';
import { Button, Loader, ModalWindow } from '../../../../components';
import { TableProducts } from '../table-products/table-products';
import { TableCategories } from '../table-categories/table-categories';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';

const EditorSectionContainer = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [shouldUpdateProductList, setShouldUpdateProductList] = useState(false);
    const [shouldUpdateCategoryList, setShouldUpdateCategoryList] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [activeTab, setActiveTab] = useState('tabProducts');

    const requestServer = useServerRequest();

    useEffect(() => {
        // TODO раскомментить после реализации ролей
        // if (!checkAccess([ROLE.ADMIN], userRole)) {
        //     return;
        // }

        requestServer('fetchProducts').then((productsRes) => {
            setProducts(productsRes.res);
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, shouldUpdateProductList]); // userRole

    useEffect(() => {
        // TODO раскомментить после реализации ролей
        // if (!checkAccess([ROLE.ADMIN], userRole)) {
        //     return;
        // }

        requestServer('fetchCategories').then((categoriesRes) => {
            setCategories(categoriesRes.res);
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, shouldUpdateCategoryList]); // userRole

    // useEffect(() => {
    //     // TODO раскомментить после реализации ролей
    //     // if (!checkAccess([ROLE.ADMIN], userRole)) {
    //     //     return;
    //     // }

    //     Promise.all([requestServer('fetchProducts'), requestServer('fetchCategories')]).then(
    //         ([productsRes, categoriesRes]) => {
    //             setProducts(productsRes.res);
    //             setCategories(categoriesRes.res);
    //             setIsLoading(false);
    //         },
    //     );
    // }, [requestServer, shouldUpdateProductList, shouldUpdateCategoryList]); // userRole

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEdit = (element) =>
        activeTab === 'tabProducts' ? setEditingProduct(element) : setEditingCategory(element);

    const handleCreate = () => {
        activeTab === 'tabProducts'
            ? setEditingProduct({
                  name: '',
                  price: 1,
                  category: 'figures',
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

    const handleSaveProduct = async (event, editingProduct) => {
        // TODO раскомментить после реализации ролей
        // if (!checkAccess([ROLE.ADMIN], userRole)) {
        //     return;
        // }

        event.preventDefault();
        setIsLoading(true);
        // dispatch(saveProductAsync(requestServer, editingProduct));
        requestServer('saveProduct', editingProduct).then(() => {
            setShouldUpdateProductList(!shouldUpdateProductList);
        });
        setEditingProduct(null);
    };

    const handleSaveCategory = async (event, editingCategory) => {
        // TODO раскомментить после реализации ролей
        // if (!checkAccess([ROLE.ADMIN], userRole)) {
        //     return;
        // }

        event.preventDefault();
        setIsLoading(true);
        // dispatch(saveCategoryAsync(requestServer, editingCategory));
        requestServer('saveCategory', editingCategory).then(() => {
            setShouldUpdateCategoryList(!shouldUpdateCategoryList);
        });
        setEditingCategory(null);
    };

    const handleDelete = async (elementId) => {
        // TODO раскомментить после реализации ролей
        // if (!checkAccess([ROLE.ADMIN], userRole)) {
        //     return;
        // }

        setIsLoading(true);

        if (activeTab === 'tabProducts') {
            requestServer('removeProduct', elementId).then(() => {
                setShouldUpdateProductList(!shouldUpdateProductList);
            });
        }
        if (activeTab === 'tabCategories') {
            requestServer('removeCategory', elementId).then(() => {
                setShouldUpdateCategoryList(!shouldUpdateCategoryList);
            });
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
