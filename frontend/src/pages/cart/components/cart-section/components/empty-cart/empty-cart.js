import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmptyCartConstainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="empty-cart-icon">🛒</div>
            <h2>Корзина пуста</h2>
            <p>Добавьте товары из каталога</p>
            <Link to="/catalog" className="button-in-catalog">
                Перейти в каталог
            </Link>
        </div>
    );
};

export const EmptyCart = styled(EmptyCartConstainer)`
    text-align: center;
    padding: 4rem 2rem;

    & .empty-cart-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        color: #ff4081;
    }

    & .button-in-catalog {
        display: inline-block;
        background: #ff4081;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 2rem;
        transition: background 0.3s;
        &:hover {
            background: #3f51b5;
        }
    }
`;
