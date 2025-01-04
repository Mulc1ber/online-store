import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { calculateTotal } from '../../utils';
import { Button } from '../button/button';
import { selectCounter, selectProductsInCart, selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartSummaryContainer = ({ className, children, handleOrderCompleted }) => {
    const productsInCart = useSelector(selectProductsInCart);
    const productsCount = useSelector(selectCounter);
    const roleId = useSelector(selectUserRole);

    const totalPrice = calculateTotal(productsInCart);

    return (
        <div>
            <div className={className}>
                <h3>Итого</h3>
                <div className="summary-row">
                    <span>Товары ({productsCount})</span>
                    <span>{totalPrice} ₽</span>
                </div>
                <div className="summary-row">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                </div>
                <div className="summary-total">
                    <span>К оплате</span>
                    <span>{totalPrice} ₽</span>
                </div>
                <>
                    {roleId === ROLE.GUEST ? (
                        <Link to="/login">
                            <Button
                                width={'100%'}
                                padding={'1rem'}
                                margin={'1rem 0 0'}
                                size={'1.1rem'}
                            >
                                {children}
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            width={'100%'}
                            padding={'1rem'}
                            margin={'1rem 0 0'}
                            size={'1.1rem'}
                            onClick={() => handleOrderCompleted(totalPrice)}
                        >
                            {children}
                        </Button>
                    )}
                </>
            </div>
        </div>
    );
};

export const CartSummary = styled(CartSummaryContainer)`
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 10px;
    position: sticky;
    top: 6.25rem;

    & .summary-row {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
    }

    & .summary-total {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 2px solid #ff4081;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

CartSummary.propTypes = {
    children: PropTypes.node.isRequired,
    handleOrderCompleted: PropTypes.func.isRequired,
};
