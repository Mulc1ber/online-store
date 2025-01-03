import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout, updateCounter } from '../../../../actions';
import { ROLE } from '../../../../constants';
import { checkAccess } from '../../../../utils';
import { Icon } from '../../../icon/icon';
import { Button } from '../../../button/button';
import {
    selectCounter,
    selectProductsInCart,
    selectUserLogin,
    selectUserRole,
    selectUserSession,
} from '../../../../selectors';
import styled from 'styled-components';

const NavigationContainer = ({ className }) => {
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);
    const countInCart = useSelector(selectCounter);
    const productsInCart = useSelector(selectProductsInCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCounter(productsInCart.reduce((total, item) => total + item.quantity, 0)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsInCart, dispatch]);

    const onLogout = (session) => {
        dispatch(logout(session));
        sessionStorage.removeItem('userData');
    };

    const isAdmin = checkAccess([ROLE.ADMIN], roleId);

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

            <Link to="/cart">
                <Icon faIcon={'fa-shopping-bag'} size={'1.2rem'} hcolor={'#ff4081'} isButton={true}>
                    {countInCart > 0 && <span className="cart-count">{countInCart}</span>}
                </Icon>
            </Link>

            {isAdmin && (
                <Link className="nav-link admin" to="/products/edit">
                    Админ
                </Link>
            )}

            <div className="user-auth">
                {roleId === ROLE.GUEST ? (
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
                ) : (
                    <div className="user-profile">
                        <div className="user-logo" title={login}>
                            {login.substring(0, 1).toUpperCase()}
                        </div>
                        <Icon
                            faIcon={'fa-sign-out'}
                            size={'1.5rem'}
                            color={'#ff4081'}
                            isButton={true}
                            onClick={() => onLogout(session)}
                        />
                    </div>
                )}
            </div>
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

        &.admin {
            color: #ff4081;
            transition: color 0.3s;
            &:hover {
                color: #3f51b5;
            }
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

    & .user-profile {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    & .user-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        font-size: 1.5rem;
        color: white;
        background: #ff4081;
    }
`;
