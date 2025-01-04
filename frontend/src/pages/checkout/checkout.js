import { useMatch, useNavigate } from 'react-router-dom';
import { CartSummary, HeroHeading, PrivateContent, Wrapper } from '../../components';
import { CheckoutSteps } from './components';
import { ROLE } from '../../constants';
import styled from 'styled-components';

const CheckoutContainer = ({ className }) => {
    const productsInCart = JSON.parse(localStorage.getItem('cart'));
    const navigate = useNavigate();
    const match = useMatch('/checkout');

    const handleOrderCompleted = () => {
        // TODO создать запрос на запись в БД данных о заказе.
        const orderHash = Math.random().toFixed(10).slice(2);
        navigate(`/successful-order/${orderHash}`);
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
                    <div className="checkout-container">
                        <CheckoutSteps />
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
`;
