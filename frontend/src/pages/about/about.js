import { Advantages, ProductCategories } from './components';
import styled from 'styled-components';

const AboutContainer = ({ className }) => {
    return (
        <>
            <div className={className}>
                <h2>Почему выбирают нас</h2>
                <Advantages />
            </div>
            <div className={className}>
                <h2>Наши товары</h2>
                <ProductCategories />
            </div>
        </>
    );
};

export const About = styled(AboutContainer)`
    background: white;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & > h2 {
        text-align: center;
    }
`;
