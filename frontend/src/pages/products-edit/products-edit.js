import { Hero, Wrapper } from '../../components';
import { EditorSection } from './components';

export const ProductsEdit = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>Панель администратора</h1>
                <p>Управление товарами</p>
            </Hero>

            <EditorSection />
        </Wrapper>
    );
};
