import { Hero, Wrapper } from '../../components';
import { CatalogSection } from './components';

export const Catalog = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>Каталог товаров</h1>
                <p>Найдите то, что искали</p>
            </Hero>
            <CatalogSection />
        </Wrapper>
    );
};
