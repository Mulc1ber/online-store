import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { CATEGORIES } from '../../constants/categories';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateProductsInCart } from '../../actions';
import { addingToCart } from '../../utils';

const CardContainer = ({ className, product }) => {
    const [added, setAdded] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (timerId && !added) {
            clearTimeout(timerId);
        }
    }, [timerId, added]);

    return (
        <div className={className}>
            <Link
                to={`/product/${product.id}`}
                className="product-image"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></Link>
            <div className="product-info">
                <p className="product-article">Артикул: {product.id}</p>
                <Link to={`/product/${product.id}`} className="product-name">
                    {product.name}
                </Link>
                <p className="product-description" title={product.description}>
                    {product.description}
                </p>
                <p className="product-category">{CATEGORIES[product.category]}</p>
                <p className="product-price">{product.price}₽</p>
                <Button
                    width={'100%'}
                    background={added ? '#3f51b5' : '#ff4081'}
                    size={'0.8rem'}
                    onClick={() =>
                        addingToCart(
                            added,
                            setAdded,
                            setTimerId,
                            dispatch,
                            updateProductsInCart,
                            product,
                            1,
                        )
                    }
                >
                    {added ? 'Добавлено!' : 'В корзину'}
                </Button>
            </div>
        </div>
    );
};

export const Card = styled(CardContainer)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ff4081;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-5px);
    }

    & .product-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        padding: 1rem;
        border-radius: 5px;
        // font-size: 4rem;
        background: #f5f5f5;
        color: #212121;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    & .product-info {
        padding: 1rem;
    }

    & .product-article {
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
        color: #666;
    }

    & .product-name {
        margin-bottom: 0.4rem;
        font-size: 1.2rem;
        color: #212121;
        font-weight: bold;
        transition: color 0.3s;
        &:hover {
            color: #ff4081;
        }
    }

    & .product-description {
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #666;
    }

    & .product-category {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #ff4081;
    }

    & .product-price {
        color: #ff4081;
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
`;
