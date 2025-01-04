import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateContent } from '../../components';
import { ROLE } from '../../constants';
import { RESET_PRODUCTS_IN_CART } from '../../actions';
import styled from 'styled-components';

const SuccessfulOrderContainer = ({ className }) => {
    const [orderDetails, setOrderDetails] = useState({});
    const [tempListProducts, setTempListProducts] = useState([]);

    const dispatch = useDispatch();
    const match = useMatch('/successful-order/:hash');

    useEffect(() => {
        setTempListProducts(JSON.parse(localStorage.getItem('cart')));
        console.log('tempListProducts', tempListProducts);

        // TODO Вытягивать данные о заказе из Redux (БД).
        // TODO дополняться должно из checkout-steps где выбираем способы и указываем данные покупателя. Из Redux
        // setOrderDetails((prevOrderDetails) => ({
        //     ...prevOrderDetails,
        //     address: 'ул. Ленина, д.10, ТЦ "Центр',
        //     id: Date.now(),
        //     created_at: new Date().toLocaleDateString(),
        //     status: 'processing',
        //     payment: 'card',
        //     shipping: 'pickup',
        //     products: [],
        // }));

        dispatch(RESET_PRODUCTS_IN_CART);
        localStorage.removeItem('cart');
    }, [dispatch]);

    return (
        <div className={className}>
            <PrivateContent
                access={[ROLE.ADMIN, ROLE.BUYER]}
                hasProductsInCart={tempListProducts}
                currentPage={match?.pattern.path}
            >
                <div className="success-page">
                    <div className="success-icon">✅</div>
                    <h1 className="success-message">Заказ успешно оформлен!</h1>
                    <p>Спасибо за покупку! </p>
                    <p>Мы отправим подтверждение на вашу почту.</p>

                    <div className="order-details">
                        <div className="order-number">Номер заказа: {orderDetails.id}</div>
                        <p>Дата заказа: {orderDetails.created_at}</p>
                        <p>Статус: {orderDetails.status === 'processing' && 'В обработке'}</p>
                        <p>
                            Способ оплаты:
                            {orderDetails.payment === 'card' ? 'Банковская карта' : 'Наличные'}
                        </p>
                        <p>
                            Адрес доставки:
                            {orderDetails.shipping === 'pickup' &&
                                'Самовывоз (ул. Ленина, д.10, ТЦ "Центр)'}
                        </p>
                    </div>

                    <div className="success-buttons">
                        <Link to={'/'} className="success-button primary-button">
                            Продолжить покупки
                        </Link>

                        {/* <Link className="success-button secondary-button" to={'/orders'}>
                        Мои заказы
                    </Link> */}
                    </div>
                </div>
            </PrivateContent>
        </div>
    );
};

export const SuccessfulOrder = styled(SuccessfulOrderContainer)`
    margin: 2rem auto auto;
    padding: 2rem;
    max-width: 1416px;

    & .success-page {
        text-align: center;
        padding: 4rem 2rem;
        max-width: 800px;
        margin: 0 auto;
    }

    & .success-icon {
        font-size: 5rem;
        color: #ff4081;
        margin-bottom: 2rem;
    }

    & .success-message {
        font-size: 2rem;
        color: #212121;
        margin-bottom: 1.5rem;
    }

    & .order-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background: white;
        padding: 2rem;
        border-radius: 10px;
        margin: 2rem 0;
        text-align: left;
    }

    & .order-number {
        font-size: 1.2rem;
        color: #ff4081;
        margin-bottom: 1rem;
    }

    & .success-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }

    & .success-button {
        padding: 1rem 2rem;
        border-radius: 5px;
        text-decoration: none;
        transition: background 0.3s;
    }

    & .primary-button {
        background: #ff4081;
        color: white;
    }

    & .primary-button:hover {
        background: #3f51b5;
    }

    & .secondary-button {
        background: #f5f5f5;
        color: #212121;
    }

    & .secondary-button:hover {
        background: #e0e0e0;
    }
`;
