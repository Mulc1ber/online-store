import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Input } from '../../../../components';
import { updateProductsInCartAsync } from '../../../../actions';
import { useAddToCart } from '../../../../hooks';
import styled from 'styled-components';

const DetailsContainerContainer = ({ className, product }) => {
    const [quantity, setQuantity] = useState(1);
    const { added, handleAddingToCart } = useAddToCart(updateProductsInCartAsync, product);

    const handleQuantityChange = ({ target }) => {
        const value = parseInt(target.value);
        if (value > 0) setQuantity(value);
    };

    return (
        <div className={className}>
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div>
                <div className="product-info-header">
                    <h1 className="product-info-name">{product.name}</h1>
                    <span className="product-info-article">{`Артикул: ${product.id}`}</span>
                </div>
                <div className="product-info-price">{product.price} ₽</div>
                <p className="product-info-description">{product.description}</p>
                <div className="product-info-quantity">
                    <label>Количество:</label>
                    <Input
                        type="number"
                        width={'55px'}
                        padding={'0.5rem'}
                        border={'2px solid #ff4081'}
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                    />
                </div>
                <Button
                    width={'100%'}
                    padding={'1rem 2rem'}
                    background={added ? '#3f51b5' : '#ff4081'}
                    size={'1.2rem'}
                    onClick={() => handleAddingToCart(quantity)}
                >
                    {added ? 'Добавлено!' : 'Добавить в корзину'}
                </Button>
            </div>
        </div>
    );
};

export const DetailsContainer = styled(DetailsContainerContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 100%;
    margin-bottom: 1.5rem;

    & .product-image {
        background: #ff4081;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        & img {
            width: 100%;
            border-radius: 10px;
            text-align: center;
        }
    }

    & .product-info-header {
        display: flex;
        justify-content: space-between;
    }

    & .product-info-name {
        color: #212121;
    }

    & .product-info-article {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        min-width: 25%;
        font-size: 0.8rem;
    }

    & .product-info-price {
        font-size: 2rem;
        color: #ff4081;
        font-weight: bold;
        margin: 1rem 0;
    }

    & .product-info-description {
        color: #666;
        line-height: 1.6;
        margin: 1.5rem 0;
    }

    & .product-info-quantity {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem 0;
        & input:focus {
            outline: none;
        }
    }
`;

DetailsContainer.propTypes = {
    product: PropTypes.object.isRequired,
};
