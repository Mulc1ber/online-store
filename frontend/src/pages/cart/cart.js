import { Hero, Wrapper } from '../../components';
import { CartSection } from './components';

export const Cart = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>Корзина</h1>
                <p>Ваши выбранные товары</p>
            </Hero>

            <CartSection />
        </Wrapper>
    );
};
