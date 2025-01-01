import { Hero, Wrapper } from '../../components';
import { AboutSection } from './components';

export const About = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>О нас</h1>
                <p>Добро пожаловать в AnimeShop - ваш надежный проводник в мир аниме!</p>
                <p>Мы любим аниме и хотим делиться этой любовью с вами!</p>
            </Hero>
            <AboutSection />
        </Wrapper>
    );
};
