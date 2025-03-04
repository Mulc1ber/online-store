import { Link, NavLink } from 'react-router-dom';
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
} from '../../../../selectors';
import styled from 'styled-components';

const NavigationContainer = ({ className }) => {
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const countInCart = useSelector(selectCounter);
    const productsInCart = useSelector(selectProductsInCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCounter(productsInCart.reduce((total, item) => total + item.quantity, 0)));
    }, [productsInCart, dispatch]);

    const onLogout = () => {
        dispatch(logout());
        sessionStorage.removeItem('userData');
    };

    const isAdmin = checkAccess([ROLE.ADMIN], roleId);

    return (
        <nav className={className}>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                to="/catalog"
            >
                Каталог
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                to="/about"
            >
                О нас
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                to="/contact"
            >
                Контакты
            </NavLink>

            <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
                <Icon
                    faIcon={'fa-shopping-bag'}
                    size={'1.2rem'}
                    hcolor={'#ff4081'}
                    isButton={true}
                    title={'Корзина'}
                >
                    {countInCart > 0 && <span className="cart-count">{countInCart}</span>}
                </Icon>
            </NavLink>

            {isAdmin && (
                <NavLink
                    className={({ isActive }) => `${isActive ? 'active-admin' : 'inactive-admin'}`}
                    to="/products/edit"
                >
                    Админ
                </NavLink>
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
                        <NavLink
                            to="/account"
                            className={({ isActive }) =>
                                `${isActive ? 'active-user-logo' : 'inactive-user-logo'}`
                            }
                        >
                            <div title={login}>{login.substring(0, 1).toUpperCase()}</div>
                        </NavLink>
                        <Icon
                            faIcon={'fa-sign-out'}
                            size={'1.5rem'}
                            color={'#ff4081'}
                            isButton={true}
                            onClick={() => onLogout()}
                            title={'Выход'}
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

    & .active-link {
        color: #ff4081;
        transition: 0.3s;
    }
    & .inactive-link {
        transition: all 0.3s;
        &:hover {
            color: #ff4081;
            border-bottom: 1px solid #ff4081;
        }
    }

    & .active-admin {
        border: 1px solid #ff4081;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        color: #212121;
        background: #ff4081;
        box-shadow: 0px 0px 20px rgba(255, 64, 129, 0.5);
        transition: 0.3s;
    }
    & .inactive-admin {
        color: #ff4081;
        border: 1px solid #ff4081;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        transition: 0.3s;
        &:hover {
            color: #212121;
            background: #ff4081;
            box-shadow: 0px 0px 20px rgba(255, 64, 129, 0.5);
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

    & .active-user-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: 1px solid #ff4081;
        border-radius: 50%;
        font-size: 1.5rem;
        color: #212121;
        background: #ff4081;
        box-shadow: 0px 0px 20px rgba(255, 64, 129, 0.5);
        cursor: pointer;
        transition: 0.3s;
    }
    & .inactive-user-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: 1px solid #ff4081;
        border-radius: 50%;
        font-size: 1.5rem;
        color: #ff4081;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            color: #212121;
            background: #ff4081;
            box-shadow: 0px 0px 20px rgba(255, 64, 129, 0.5);
        }
    }
`;
