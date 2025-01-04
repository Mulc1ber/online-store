export const fransformOrder = (dbOrder) => ({
    hash: dbOrder.hash,
    createdAt: dbOrder.created_at,
    status: dbOrder.status,
    totalPrice: dbOrder.total_price,
    userInfo: dbOrder.user_info,
    user: dbOrder.user,
    products: dbOrder.products,
});
