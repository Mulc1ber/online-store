export const fransformOrder = (dbOrder) => ({
    id: dbOrder.id,
    hash: dbOrder.hash,
    createdAt: dbOrder.created_at,
    status: dbOrder.status,
    totalPrice: dbOrder.total_price,
    userInfo: dbOrder.user_info,
    user: dbOrder.user,
    products: dbOrder.products,
});
