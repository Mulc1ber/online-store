import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import { PROP_TYPE } from '../../../../constants';
import { SHIPPING_METHOD } from '../../utils/shipping-method';
import { PAYMENT_METHOD } from '../../utils/payment-method';
import styled from 'styled-components';

const CheckoutStepsContainer = ({ className, orderInfo, setOrderInfo, errorMessage }) => {
    const handleDeliveryOption = (option) => {
        setOrderInfo({ ...orderInfo, shipping: option });
    };

    const handlePaymentMethod = (option) => {
        setOrderInfo({ ...orderInfo, payment: option });
    };

    return (
        <div className={className}>
            <div className="step">
                <h2 className="step-title">Шаг 1: Укажите данные получателя</h2>
                <div className="form-container">
                    <div className="form-group">
                        <label>
                            Ваше имя <span>*</span>
                        </label>
                        <Input
                            height={'auto'}
                            type="text"
                            placeholder="Введите имя"
                            value={orderInfo.username}
                            onChange={({ target }) =>
                                setOrderInfo({ ...orderInfo, username: target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Ваш email <span>*</span>
                        </label>
                        <Input
                            height={'auto'}
                            type="email"
                            placeholder="Введите email"
                            value={orderInfo.email}
                            onChange={({ target }) =>
                                setOrderInfo({ ...orderInfo, email: target.value })
                            }
                        />
                    </div>
                </div>
                <div className="error-message">{errorMessage}</div>
            </div>

            <div className="step">
                <h2 className="step-title">Шаг 2: Выберите способ оплаты</h2>
                <div className="payment-methods">
                    <div
                        className={`payment-method ${orderInfo.payment === PAYMENT_METHOD.CARD ? 'active' : ''}`}
                    >
                        <label htmlFor="card" className="payment-content">
                            <input
                                type="radio"
                                name="payment"
                                id="card"
                                value="card"
                                onChange={() => handlePaymentMethod(PAYMENT_METHOD.CARD)}
                                checked={orderInfo.payment === PAYMENT_METHOD.CARD}
                            />
                            <label></label>
                            <div>
                                <h3>Картой</h3>
                                <p>При получении заказа</p>
                            </div>
                        </label>
                    </div>
                    <div
                        className={`payment-method ${orderInfo.payment === PAYMENT_METHOD.CASH ? 'active' : ''}`}
                    >
                        <label htmlFor="cash" className="payment-content">
                            <input
                                type="radio"
                                name="payment"
                                id="cash"
                                value="cash"
                                onChange={() => handlePaymentMethod(PAYMENT_METHOD.CASH)}
                                checked={orderInfo.payment === PAYMENT_METHOD.CASH}
                            />
                            <label></label>
                            <div>
                                <h3>Наличными</h3>
                                <p>При получении заказа</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="step">
                <h2 className="step-title">Шаг 3: Выберите способ доставки</h2>
                <div className="delivery-options">
                    <div
                        className={`delivery-option ${orderInfo.shipping === SHIPPING_METHOD.PICKUP ? 'active' : ''}`}
                    >
                        <label htmlFor="pickup" className="delivery-content">
                            <input
                                type="radio"
                                name="shipping"
                                id="pickup"
                                value="pickup"
                                onChange={() => handleDeliveryOption(SHIPPING_METHOD.PICKUP)}
                                checked={orderInfo.shipping === SHIPPING_METHOD.PICKUP}
                            />
                            <label></label>
                            <div>
                                <h3>Самовывоз из магазина</h3>

                                <div className="delivery-address">
                                    <Icon
                                        faIcon={'fa-map-marker'}
                                        size={'1.4rem'}
                                        color={'#ff4081'}
                                        hcolor={'#ff4081'}
                                    ></Icon>
                                    <p>ул. Ленина, д.10, ТЦ "Центр"</p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div
                        className={`delivery-option ${orderInfo.shipping === SHIPPING_METHOD.COURIER ? 'active' : ''}`}
                    >
                        <label htmlFor="courier" className="delivery-content">
                            <input
                                type="radio"
                                name="shipping"
                                id="courier"
                                value="courier"
                                onChange={() => handleDeliveryOption(SHIPPING_METHOD.COURIER)}
                                checked={orderInfo.shipping === SHIPPING_METHOD.COURIER}
                            />
                            <label></label>
                            <div>
                                <h3>Доставка курьером</h3>
                                <p>Доставка в течение дня</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CheckoutSteps = styled(CheckoutStepsContainer)`
    & .step {
        margin-bottom: 40px;
    }

    & .step-title {
        color: #212121;
        font-size: 18px;
        margin-bottom: 20px;
    }

    & .form-container {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
        width: 100%;
    }

    & .form-group {
        width: 100%;
        margin-bottom: 1rem;

        & label {
            display: block;
            margin-bottom: 4px;
            color: #212121;
            font-size: 12px;
        }

        & input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            &:focus {
                outline: none;
                border-color: #ff4081;
            }
        }

        & span {
            font-size: 1rem;
            color: #ff4081;
        }
    }

    & .error-message {
        text-align: center;
        color: red;
        font-size: 0.9rem;
    }

    & .delivery-options,
    & .payment-methods {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        width: 93%;
    }

    & .delivery-option,
    & .payment-method {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        width: 350px;
        height: 100px;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        cursor: pointer;
        transition: border-color 0.3s;
    }

    & .active {
        border-color: #ff4081;
    }

    & .delivery-content,
    & .payment-content {
        display: flex;
        gap: 1rem;
        width: 100%;
        height: 100%;
        padding: 15px;
        &:hover {
            cursor: pointer;
        }

        & h3 {
            margin: 0 0 0.5rem 0;
            color: #444;
        }

        & p {
            margin: 0;
            color: #666;
        }

        & .delivery-address {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        & input[type='radio'] {
            /* Скрыть стандартный radio button */
            display: none;
        }

        & input[type='radio'] + label {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            padding: 2px;
            border: 2px solid #ff4081;
            border-radius: 50%;
            cursor: pointer;
        }

        & input[type='radio']:checked + label::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background: #ff4081;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

CheckoutSteps.propTypes = {
    orderInfo: PropTypes.object.isRequired,
    setOrderInfo: PropTypes.func.isRequired,
    errorMessage: PROP_TYPE.ERROR,
};
