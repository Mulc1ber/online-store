import { useSelector } from 'react-redux';
import { CartContent, EmptyCart } from './components';
import { selectProductsInCart } from '../../selectors';
import styled from 'styled-components';

const CartContainer = ({ className }) => {
    const productsInCart = useSelector(selectProductsInCart);

    return (
        <div className={className}>
            {productsInCart?.length > 0 ? <CartContent /> : <EmptyCart />}
        </div>
    );
};

export const Cart = styled(CartContainer)`
    background: white;
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem auto 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
