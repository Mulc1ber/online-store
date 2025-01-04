import { useState } from 'react';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const CheckoutStepsContainer = ({ className }) => {
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('pickup');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');

    const handleDeliveryOption = (option) => {
        setSelectedDeliveryOption(option);
    };

    const handlePaymentMethod = (option) => {
        setSelectedPaymentMethod(option);
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
                        <input type="text" placeholder="Введите имя" />
                    </div>
                    <div className="form-group">
                        <label>
                            Ваш телефон <span>*</span>
                        </label>
                        <input type="tel" placeholder="+7 ( ___ ) ___ - __ - __" />
                    </div>
                    <div className="form-group">
                        <label>
                            Ваш email <span>*</span>
                        </label>
                        <input type="email" placeholder="Введите email" />
                    </div>
                </div>
            </div>

            <div className="step">
                <h2 className="step-title">Шаг 2: Выберите способ оплаты</h2>
                <form className="payment-methods">
                    <div
                        className={`payment-method ${selectedPaymentMethod === 'card' ? 'active' : ''}`}
                    >
                        <label htmlFor="card" className="payment-content">
                            <input
                                type="radio"
                                name="payment"
                                id="card"
                                value="card"
                                onChange={() => handlePaymentMethod('card')}
                                checked={selectedPaymentMethod === 'card'}
                            />
                            <label></label>
                            <div>
                                <h3>Картой</h3>
                                <p>При получении заказа</p>
                            </div>
                        </label>
                    </div>
                    <div
                        className={`payment-method ${selectedPaymentMethod === 'cash' ? 'active' : ''}`}
                    >
                        <label htmlFor="cash" className="payment-content">
                            <input
                                type="radio"
                                name="payment"
                                id="cash"
                                value="cash"
                                onChange={() => handlePaymentMethod('cash')}
                                checked={selectedPaymentMethod === 'cash'}
                            />
                            <label></label>
                            <div>
                                <h3>Наличными</h3>
                                <p>При получении заказа</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>

            <div className="step">
                <h2 className="step-title">Шаг 3: Выберите способ доставки</h2>
                <form className="delivery-options">
                    <div
                        className={`delivery-option ${selectedDeliveryOption === 'pickup' ? 'active' : ''}`}
                    >
                        <label htmlFor="pickup" className="delivery-content">
                            <input
                                type="radio"
                                name="shipping"
                                id="pickup"
                                value="pickup"
                                onChange={() => handleDeliveryOption('pickup')}
                                checked={selectedDeliveryOption === 'pickup'}
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
                        className={`delivery-option ${selectedDeliveryOption === 'courier' ? 'active' : ''}`}
                    >
                        <label htmlFor="courier" className="delivery-content">
                            <input
                                type="radio"
                                name="shipping"
                                id="courier"
                                value="courier"
                                onChange={() => handleDeliveryOption('courier')}
                                checked={selectedDeliveryOption === 'courier'}
                            />
                            <label></label>
                            <div>
                                <h3>Доставка курьером</h3>
                                <p>Доставка в течение дня</p>
                            </div>
                        </label>
                    </div>
                </form>
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
        width: 50%;
    }

    & .form-group {
        margin-bottom: 20px;

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
            color: #ff4081;
        }
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
        padding: 15px;

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
