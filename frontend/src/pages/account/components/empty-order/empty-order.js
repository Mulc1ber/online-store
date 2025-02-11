import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmptyOrderConstainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="empty-orders-icon">📦</div>
            <h3>У вас пока нет заказов</h3>
            <p>Самое время что-нибудь заказать!</p>
            <Link to="/catalog" className="contact-button">
                Перейти в каталог
            </Link>
        </div>
    );
};

export const EmptyOrder = styled(EmptyOrderConstainer)`
    text-align: center;
    padding: 3rem;
    background: #f5f5f5;
    border-radius: 10px;

    & .empty-orders-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    & .contact-button {
        display: inline-block;
        background: #ff4081;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 1rem;
        transition: background 0.3s;
        &::hover {
            background: #3f51b5;
        }
    }
`;
