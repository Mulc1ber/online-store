export const addProduct = ({
    name,
    price,
    category,
    imageUrl,
    description,
    specifications,
    shipping,
    stock,
}) =>
    fetch('http://localhost:3005/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            name,
            price,
            category,
            image_url: imageUrl,
            description,
            specifications,
            shipping,
            stock,
        }),
    }).then((createdProduct) => createdProduct.json());
