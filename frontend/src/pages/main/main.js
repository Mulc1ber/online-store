import { Hero, Wrapper } from '../../components';
import { ProductGrid } from './components';

export const Main = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>Добро пожаловать в мир аниме!</h1>
                <p>Лучший выбор товаров для истинных ценителей</p>
            </Hero>

            <ProductGrid />
        </Wrapper>
    );
};
