export const addOrder = (orderResult) =>
    fetch('http://localhost:3005/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(orderResult),
    }).then((createdOrder) => createdOrder.json());
