import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { CartSummary, HeroHeading, PrivateContent, Wrapper } from '../../components';
import { CheckoutSteps } from './components';
import { ROLE } from '../../constants';
import { useServerRequest } from '../../hooks';
import { checkAccess } from '../../utils';
import { selectUserRole } from '../../selectors';
import { PATTERN_EMAIL } from './utils/check-email';
import { saveOrderAsync } from '../../actions';
import styled from 'styled-components';

const CheckoutContainer = ({ className }) => {
    const [orderInfo, setOrderInfo] = useState({
        shipping: 'pickup',
        payment: 'card',
        username: '',
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [serverError, setServerError] = useState(null);

    const productsInCart = JSON.parse(localStorage.getItem('cart'));
    const requestServer = useServerRequest();
    const userRole = useSelector(selectUserRole);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const match = useMatch('/checkout');

    const handleOrderCompleted = (totalPrice) => {
        if (!checkAccess([ROLE.ADMIN, ROLE.BUYER], userRole)) {
            return;
        }

        if (orderInfo.username !== '' && PATTERN_EMAIL.test(orderInfo.email)) {
            const { login: userLogin } = JSON.parse(sessionStorage.getItem('userData'));

            dispatch(
                saveOrderAsync(requestServer, totalPrice, orderInfo, userLogin, productsInCart),
            ).then((orderData) => {
                if (orderData.error) {
                    setServerError('Что-то пошло не так. Попробуйте еще раз позднее.');
                    return;
                }

                navigate(`/successful-order/${orderData.res?.hash}`);
            });
            setErrorMessage(null);
        } else {
            setErrorMessage('Заполните обязательные поля');
            return;
        }
    };

    return (
        <Wrapper>
            <PrivateContent
                access={[ROLE.ADMIN, ROLE.BUYER]}
                hasProductsInCart={productsInCart}
                currentPage={match?.pattern.path}
            >
                <div className={className}>
                    <HeroHeading>Оформление заказа</HeroHeading>
                    {serverError && <div className="server-error">{serverError}</div>}
                    <div className="checkout-container">
                        <CheckoutSteps
                            orderInfo={orderInfo}
                            setOrderInfo={setOrderInfo}
                            errorMessage={errorMessage}
                        />
                        <CartSummary handleOrderCompleted={handleOrderCompleted}>
                            Подтвердить заказ
                        </CartSummary>
                    </div>
                </div>
            </PrivateContent>
        </Wrapper>
    );
};

export const Checkout = styled(CheckoutContainer)`
    margin: 2rem auto 0;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & .checkout-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
    }

    & .server-error {
        color: red;
    }
`;
