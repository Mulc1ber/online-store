export const fransformProduct = (dbProduct) => ({
    id: dbProduct.id,
    name: dbProduct.name,
    price: dbProduct.price,
    category: dbProduct.category,
    imageUrl: dbProduct.image_url,
    description: dbProduct.description,
    specifications: dbProduct.specifications,
    shipping: dbProduct.shipping,
    stock: dbProduct.stock,
});
