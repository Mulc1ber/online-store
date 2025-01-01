import { Link } from 'react-router-dom';
import { Button } from '../../../button/button';
import { Icon } from '../../../icon/icon';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter, selectProductsInCart } from '../../../../selectors';
import { updateCounter } from '../../../../actions';

const NavigationContainer = ({ className }) => {
    const [isAdmin] = useState(true);
    const dispatch = useDispatch();
    const countInCart = useSelector(selectCounter);
    const productsInCart = useSelector(selectProductsInCart);

    useEffect(() => {
        dispatch(updateCounter(productsInCart.reduce((total, item) => total + item.quantity, 0)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsInCart, dispatch]);

    return (
        <nav className={className}>
            <Link className="nav-link" to="/catalog">
                Каталог
            </Link>
            <Link className="nav-link" to="/about">
                О нас
            </Link>
            <Link className="nav-link" to="/contact">
                Контакты
            </Link>

            {isAdmin && (
                <Link className="nav-link" to="/products/edit">
                    Админ
                </Link>
            )}

            <Link to="/cart">
                <Icon faIcon={'fa-shopping-bag'} size={'1.2rem'} hcolor={'#ff4081'}>
                    {countInCart > 0 && <span className="cart-count">{countInCart}</span>}
                </Icon>
            </Link>

            <Link to="/login">
                <Button
                    background={'transparent'}
                    color={'#ff4081'}
                    border={'1px solid #ff4081'}
                    hcolor={'#212121'}
                    hbackground={'#ff4081'}
                >
                    Войти
                </Button>
            </Link>
        </nav>
    );
};

export const Navigation = styled(NavigationContainer)`
    display: flex;
    align-items: center;
    gap: 2rem;

    & .nav-link {
        transition: color 0.3s;
        &:hover {
            color: #ff4081;
        }
    }

    & .cart-count {
        position: absolute;
        top: -8px;
        right: -16px;
        background: #ff4081;
        color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
    }
`;
