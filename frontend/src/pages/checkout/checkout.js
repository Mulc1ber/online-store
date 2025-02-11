import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { CartSummary, HeroHeading, PrivateContent } from '../../components';
import { CheckoutSteps } from './components';
import { ORDER_STATUS, ROLE } from '../../constants';
import { checkAccess } from '../../utils';
import { selectProductsInCart, selectUserRole } from '../../selectors';
import { PATTERN_EMAIL } from './utils/check-email';
import { saveOrderAsync } from '../../actions';
import { PAYMENT_METHOD } from './utils/payment-method';
import { SHIPPING_METHOD } from './utils/shipping-method';
import styled from 'styled-components';

const CheckoutContainer = ({ className }) => {
    const [orderInfo, setOrderInfo] = useState({
        shipping: SHIPPING_METHOD.PICKUP,
        payment: PAYMENT_METHOD.CARD,
        username: '',
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [serverError, setServerError] = useState(null);

    const productsInCart = useSelector(selectProductsInCart);
    const userRole = useSelector(selectUserRole);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const match = useMatch('/checkout');

    const handleOrderCompleted = (totalPrice) => {
        if (!checkAccess([ROLE.ADMIN, ROLE.BUYER], userRole)) {
            return;
        }

        if (orderInfo.username !== '' && PATTERN_EMAIL.test(orderInfo.email)) {
            const orderResult = {
                status: ORDER_STATUS.PROCESSING,
                totalPrice: totalPrice,
                userInfo: orderInfo,
                products: productsInCart.map(
                    ({ id, imageUrl, name, category, price, quantity }) => ({
                        id,
                        imageUrl,
                        name,
                        category,
                        price,
                        quantity,
                    }),
                ),
            };
            dispatch(saveOrderAsync(orderResult)).then((orderData) => {
                if (orderData.error) {
                    setServerError(orderData.error);
                    return;
                }

                navigate(`/successful-order/${orderData.data?.id}`);
            });
            setErrorMessage(null);
        } else {
            setErrorMessage('Заполните обязательные поля');
            return;
        }
    };

    return (
        <PrivateContent
            access={[ROLE.ADMIN, ROLE.BUYER]}
            hasProductsInCart={productsInCart}
            currentPage={match?.pattern.path}
        >
            <div className={className}>
                <div className="checkout-wrapper">
                    <div className="checkout-header">
                        <HeroHeading>Оформление заказа</HeroHeading>
                    </div>
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
            </div>
        </PrivateContent>
    );
};

export const Checkout = styled(CheckoutContainer)`
    margin: 0px auto auto;
    padding: 0 2rem;
    max-width: 1416px;

    & .checkout-wrapper {
        margin: 2rem auto 0;
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    & .checkout-header {
        display: flex;
        border-bottom: 1px solid #ddd;
        margin-bottom: 3rem;
    }

    & .checkout-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
    }

    & .server-error {
        color: red;
    }
`;
