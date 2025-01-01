import { CartItems } from './components';
import { useNavigate } from 'react-router-dom';
import { CartSummary } from '../../../../../../components';
import styled from 'styled-components';

const CartContainerContainer = ({ className }) => {
    const navigate = useNavigate();

    const handleOrderCompleted = () => navigate('/checkout');

    return (
        <div className={className}>
            <CartItems />
            <CartSummary handleOrderCompleted={handleOrderCompleted}>Оформить заказ</CartSummary>
        </div>
    );
};

export const CartContainer = styled(CartContainerContainer)`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
`;
