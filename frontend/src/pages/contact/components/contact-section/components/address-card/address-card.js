import styled from 'styled-components';

const AddressCardContainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="address-icon">📍</div>
            <div className="address-details">
                <p>г. Москва, ул. Анимешная, д. 42</p>
                <p>Метро: Отаку</p>
                <p>Режим работы: Пн-Вс с 10:00 до 22:00</p>
            </div>
        </div>
    );
};

export const AddressCard = styled(AddressCardContainer)`
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0 0;

    & .address-icon {
        font-size: 3rem;
        color: #ff4081;
    }

    & .address-details {
        margin: 0.5rem 0;
        font-size: 1.1rem;
    }
`;
