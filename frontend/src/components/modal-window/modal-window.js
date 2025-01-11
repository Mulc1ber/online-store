import PropTypes from 'prop-types';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Select } from '../select/select';
import { PROP_TYPE } from '../../constants';
import styled from 'styled-components';

const ModalWindowContainer = ({
    className,
    activeTab,
    categories,
    editingProduct,
    editingCategory,
    setEditingProduct,
    setEditingCategory,
    handleSaveProduct,
    handleSaveCategory,
}) => {
    const handleChangeProduct = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'category':
                const categoryName = categories.find(({ label }) => label === value);
                setEditingProduct({
                    ...editingProduct,
                    [name]: { label: value, name: categoryName.name },
                });
                break;
            case 'price':
                setEditingProduct({ ...editingProduct, [name]: Number(value) });
                break;
            case 'stock':
                setEditingProduct({
                    ...editingProduct,
                    [name]: Number(value) < 0 ? 0 : Number(value),
                });
                break;
            default:
                setEditingProduct({ ...editingProduct, [name]: value });
                break;
        }
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
                                <label>
                                    Название<span>*</span> :
                                </label>
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
                                <label>
                                    Изображение<span>*</span> :
                                </label>
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
                                <label>
                                    Категория<span>*</span> :
                                </label>
                                <Select
                                    name="category"
                                    value={editingProduct.category?.label}
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
                                <label>
                                    Описание<span>*</span> :
                                </label>
                                <textarea
                                    name="description"
                                    value={editingProduct.description}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Спецификация<span>*</span> :
                                </label>
                                <textarea
                                    name="specifications"
                                    value={editingProduct.specifications}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Доставка<span>*</span> :
                                </label>
                                <textarea
                                    name="shipping"
                                    value={editingProduct.shipping}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Цена<span>*</span> :
                                </label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    type="number"
                                    name="price"
                                    min="1"
                                    value={editingProduct.price}
                                    onChange={handleChangeProduct}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Количество<span>*</span> :
                                </label>
                                <Input
                                    padding={'0.7rem'}
                                    border={'1px solid #ddd'}
                                    height={'auto'}
                                    type="number"
                                    name="stock"
                                    min="0"
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
                                <label>
                                    Ярлык / Маркировка<span>*</span> :
                                </label>
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
                                <label>
                                    Название<span>*</span> :
                                </label>
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
                                <Button
                                    type="submit"
                                    padding={'0.8rem 1.5rem'}
                                    disabled={!editingCategory}
                                >
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
        padding: 1.5rem;
        border-radius: 10px;
        width: 100%;
        max-width: 800px;
        & h2 {
            margin-bottom: 1rem;
        }
    }

    & .form-group {
        margin-bottom: 0.5rem;

        & label {
            display: block;
            margin-bottom: 0.2rem;
            font-weight: bold;
            & span {
                color: red;
            }
        }

        & textarea {
            height: 80px;
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 0.85rem;
        }
    }

    & .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
`;

ModalWindow.propTypes = {
    activeTab: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PROP_TYPE.CATEGORIES).isRequired,
    editingProduct: PropTypes.object,
    editingCategory: PropTypes.object,
    setEditingProduct: PropTypes.func.isRequired,
    setEditingCategory: PropTypes.func.isRequired,
    handleSaveProduct: PropTypes.func.isRequired,
    handleSaveCategory: PropTypes.func.isRequired,
};
