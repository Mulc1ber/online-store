import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Select } from '../select/select';
import { useServerRequest } from '../../hooks';
import { useDispatch } from 'react-redux';
import { saveCategoryAsync, saveProductAsync } from '../../actions';
import styled from 'styled-components';

const ModalWindowContainer = ({
    className,
    activeTab,
    editingProduct,
    editingCategory,
    setEditingProduct,
    setEditingCategory,
    categories,
}) => {
    const [selectedCategory, setSelectedCategory] = useState('figures');

    const requestServer = useServerRequest();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('activeTab', activeTab);

        if (activeTab === 'tabProducts') {
            editingProduct.category !== ''
                ? setSelectedCategory(editingProduct.category)
                : setEditingProduct((prevProduct) => ({
                      ...prevProduct,
                      category: selectedCategory,
                  }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    const handleSaveProduct = async (event, editingProduct) => {
        event.preventDefault();
        dispatch(saveProductAsync(requestServer, editingProduct));
        setEditingProduct(null);
    };

    const handleChangeProduct = ({ target }) => {
        const { name, value } = target;

        name === 'category' && setSelectedCategory(value);
        setEditingProduct({ ...editingProduct, [name]: value });
    };

    const handleSaveCategory = async (event, editingCategory) => {
        event.preventDefault();
        dispatch(saveCategoryAsync(requestServer, editingCategory));
        setEditingCategory(null);
    };

    const handleChangeCategory = ({ target }) => {
        const { name, value } = target;
        setEditingCategory({ ...editingCategory, [name]: value });
    };

    return (
        <div className={className}>
            <div className="edit-modal-content">
                {activeTab === 'tabProducts' ? (
                    <>
                        <h2>{editingProduct.id ? 'Редактировать товар' : 'Новый товар'}</h2>
                        <form onSubmit={(event) => handleSaveProduct(event, editingProduct)}>
                            <div className="form-group">
                                <label>Название:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    name="name"
                                    value={editingProduct.name}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Изображение:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    name="imageUrl"
                                    value={editingProduct.imageUrl}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Категория:</label>
                                <Select
                                    name="category"
                                    value={editingProduct.category}
                                    onChange={handleChangeProduct}
                                >
                                    {categories.slice(1).map((category) => (
                                        <option key={category.id} value={category.label}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="form-group">
                                <label>Описание:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    name="description"
                                    value={editingProduct.description}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Спецификация:</label>
                                <textarea
                                    name="specifications"
                                    value={editingProduct.specifications}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Доставка:</label>
                                <textarea
                                    name="shipping"
                                    value={editingProduct.shipping}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Цена:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    type="number"
                                    name="price"
                                    value={editingProduct.price}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>Количество:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    type="number"
                                    name="stock"
                                    value={editingProduct.stock}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="modal-actions">
                                <Button type="submit" padding={'0.8rem 1.5rem'}>
                                    Сохранить
                                </Button>
                                <Button
                                    padding={'0.8rem 1.5rem'}
                                    background={'#ddd'}
                                    color={'#212121'}
                                    hbackground={'#ccc'}
                                    hcolor={'#212121'}
                                    type="button"
                                    onClick={() => setEditingProduct(null)}
                                >
                                    Отмена
                                </Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>
                            {editingCategory.id ? 'Редактировать категорию' : 'Новая категория'}
                        </h2>
                        <form onSubmit={(event) => handleSaveCategory(event, editingCategory)}>
                            <div className="form-group">
                                <label>Ярлык / Маркировка:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    name="label"
                                    value={editingCategory.label}
                                    onChange={handleChangeCategory}
                                />
                            </div>
                            <div className="form-group">
                                <label>Название:</label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    name="name"
                                    value={editingCategory.name}
                                    onChange={handleChangeCategory}
                                />
                            </div>
                            <div className="modal-actions">
                                <Button type="submit" padding={'0.8rem 1.5rem'}>
                                    Сохранить
                                </Button>
                                <Button
                                    padding={'0.8rem 1.5rem'}
                                    background={'#ddd'}
                                    color={'#212121'}
                                    hbackground={'#ccc'}
                                    hcolor={'#212121'}
                                    type="button"
                                    onClick={() => setEditingCategory(null)}
                                >
                                    Отмена
                                </Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export const ModalWindow = styled(ModalWindowContainer)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    & .edit-modal-content {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        width: 100%;
        max-width: 600px;
        & h2 {
            margin-bottom: 1rem;
        }
    }

    & .form-group {
        margin-bottom: 0.5rem;

        & label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        & textarea {
            height: 100px;
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
    }

    & .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
    }
`;
