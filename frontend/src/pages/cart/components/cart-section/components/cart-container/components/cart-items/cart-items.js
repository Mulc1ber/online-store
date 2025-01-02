import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../../../../../components';
import styled from 'styled-components';
import { selectProductsInCart } from '../../../../../../../../selectors';
import { deleteProductsInCart, updateQuantityProduct } from '../../../../../../../../actions';

const CartItemsContainer = ({ className }) => {
    const productsInCart = useSelector(selectProductsInCart);
    const dispatch = useDispatch();

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        dispatch(updateQuantityProduct({ productId: id, quantity }));
    };

    const removeItem = (id) => {
        dispatch(deleteProductsInCart(id));
    };

    return (
        <div className={className}>
            {productsInCart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="item-image">
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="item-price">{item.price} ₽</p>
                    </div>
                    <div>
                        <div className="quantity-controls">
                            <Button
                                width={'30px'}
                                height={'30px'}
                                padding={'0'}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </Button>
                            <p>{item.quantity}</p>
                            <Button
                                width={'30px'}
                                height={'30px'}
                                padding={'0'}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                    <div className="item-total">{item.price * item.quantity} ₽</div>
                    <Button
                        padding={'0'}
                        size={'1.2rem'}
                        color={'#ff4081'}
                        background={'none'}
                        hbackground={'none'}
                        hcolor={'red'}
                        onClick={() => removeItem(item.id)}
                    >
                        ✖
                    </Button>
                </div>
            ))}
        </div>
    );
};

export const CartItems = styled(CartItemsContainer)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .cart-item {
        display: grid;
        grid-template-columns: auto 2fr 1fr 1fr auto;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.5rem;
        background: #f5f5f5;
        border-radius: 10px;
    }

    & .item-image {
        display: flex;
        align-items: center;
        justify-content: center;
        // padding: 0.5rem;
        background: white;
        border-radius: 10px;
        min-width: 100px;
        max-width: 116px;
        min-height: 67px;

        & img {
            max-width: 100px;
            border-radius: 10px;
        }
    }

    & .item-details h3 {
        margin-bottom: 0.5rem;
    }

    & .item-price {
        color: #ff4081;
        font-weight: bold;
    }

    & .quantity-controls {
        display: inline-block;
        background: #ff4081;
        border-radius: 5px;

        & p {
            display: inline-block;
            vertical-align: middle;
            font-size: 1rem;
            color: white;
            margin: 0 0.5rem;
        }

        // & button {
        //     background: #ff4081;
        //     color: white;
        //     border: none;
        //     width: 30px;
        //     height: 30px;
        //     border-radius: 5px;
        //     cursor: pointer;
        //     transition: background 0.3s;

        //     &:hover {
        //         background: #3f51b5;
        //     }
        // }
    }

    & .item-total {
        font-weight: bold;
        color: #ff4081;
    }
`;
