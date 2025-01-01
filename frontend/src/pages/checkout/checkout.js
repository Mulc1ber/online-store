import { useNavigate } from 'react-router-dom';
import { CartSummary, HeroHeading, Wrapper } from '../../components';
import { CheckoutSteps } from './components';
import styled from 'styled-components';
import { RESET_PRODUCTS_IN_CART } from '../../actions';
import { useDispatch } from 'react-redux';

const CheckoutContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOrderCompleted = () => {
        // TODO создать запрос на запись в БД данных о заказе.
        navigate('/successful-order');
        dispatch(RESET_PRODUCTS_IN_CART);
    };

    return (
        <Wrapper>
            <div className={className}>
                <HeroHeading>Оформление заказа</HeroHeading>
                <div className="checkout-container">
                    <CheckoutSteps />
                    <CartSummary handleOrderCompleted={handleOrderCompleted}>
                        Подтвердить заказ
                    </CartSummary>
                </div>
            </div>
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
`;
