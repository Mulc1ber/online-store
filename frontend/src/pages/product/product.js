import { useParams } from 'react-router-dom';
import { Hero, Wrapper } from '../../components';
import { DetailsSection } from './components';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../selectors';

export const Product = () => {
    const params = useParams();
    const products = useSelector(selectProducts);

    const productById = products.find((product) => product.id === Number(params.id));

    return (
        <Wrapper>
            {productById ? (
                <>
                    <Hero>
                        <h1>{productById.name}</h1>
                        <p>Подробная информация о товаре</p>
                    </Hero>

                    <DetailsSection productById={productById} />
                </>
            ) : (
                <p>Товар не найден.</p>
            )}
        </Wrapper>
    );
};
