import { useSelector } from 'react-redux';
import { EmptyOrder } from '../empty-order/empty-order';
import { ORDER_STATUS } from '../../../../constants';
import { selectOrders } from '../../../../selectors';
import { sortedListOrders } from '../../utils';
import styled from 'styled-components';

export const MyOrderContainer = ({ className }) => {
    const { orders, isLoading, errorMessage } = useSelector(selectOrders);

    const sortedOrdersData = sortedListOrders(orders);

    return (
        <div className={className}>
            {isLoading ? (
                <h2 className="loading-order">Загрузка...</h2>
            ) : (
                <>
                    {sortedOrdersData.length > 0 ? (
                        sortedOrdersData.map((order) => (
                            <div key={order.id} className="order-card">
                                <div className="order-header">
                                    <div>
                                        <h3>Заказ #{order.id}</h3>
                                        <p>
                                            Дата:{' '}
                                            {new Date(order.createdAt).toLocaleString('ru-RU')}
                                        </p>
                                    </div>
                                    <span
                                        className={`order-status status-${order.status.toLowerCase()}`}
                                    >
                                        {order.status === ORDER_STATUS.DELIVERED
                                            ? 'Доставлен'
                                            : 'В обработке'}
                                    </span>
                                </div>
                                <div className="order-items">
                                    {order.products.map((item) => (
                                        <div key={item.id} className="order-item">
                                            <span className="item-image">
                                                <img src={item.imageUrl} alt={item.name} />
                                            </span>
                                            <div className="item-details">
                                                <h4>{item.name}</h4>
                                                <p>
                                                    {item.price} ₽ × {item.quantity}
                                                </p>
                                            </div>
                                            <div>{item.price * item.quantity} ₽</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-total">Итого: {order.totalPrice} ₽</div>
                            </div>
                        ))
                    ) : (
                        <>
                            {errorMessage ? (
                                <h2 className="order-error">{errorMessage}</h2>
                            ) : (
                                <EmptyOrder />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export const MyOrder = styled(MyOrderContainer)`
    & .order-card {
        background: #f5f5f5;
        border-radius: 10px;
        padding: 1.5rem;
        margin-bottom: 1rem;
    }

    & .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ddd;
    }

    & .order-status {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.9rem;
    }

    & .status-processing {
        background: #ffeeba;
        color: #856404;
    }

    & .status-delivered {
        background: #d4edda;
        color: #155724;
    }

    & .order-items {
        display: grid;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    & .order-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1rem;
        align-items: center;
    }

    & .item-image {
        width: 100px;
        height: 70px;
        & img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }

    & .order-total {
        text-align: right;
        font-weight: bold;
        font-size: 1.1rem;
        color: #ff4081;
    }

    & .loading-order,
    & .order-error {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 380px;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }
`;
