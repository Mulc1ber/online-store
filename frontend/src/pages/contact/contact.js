import { Hero, Wrapper } from '../../components';
import { ContactSection } from './components';

export const Contact = () => {
    return (
        <Wrapper>
            <Hero>
                <h1>Контакты</h1>
                <p>Мы всегда на связи и готовы помочь вам!</p>
            </Hero>
            <ContactSection />
        </Wrapper>
    );
};
