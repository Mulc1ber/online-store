import { useNavigate } from 'react-router-dom';
import { CartSummary } from '../../../../components';
import { CartItems } from '../cart-items/cart-items';
import styled from 'styled-components';

const CartContentContainer = ({ className }) => {
    const navigate = useNavigate();

    const handleOrderCompleted = () => navigate('/checkout');

    return (
        <div className={className}>
            <CartItems />
            <CartSummary handleOrderCompleted={handleOrderCompleted}>Оформить заказ</CartSummary>
        </div>
    );
};

export const CartContent = styled(CartContentContainer)`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
`;
