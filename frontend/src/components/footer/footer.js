import { Logo } from '../header/components';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="footer-content">
                <div>
                    <Logo />
                    {/* <p>Мы любим аниме и хотим делиться этой любовью с вами!</p> */}
                </div>
                <div>
                    <h3>Контакты</h3>
                    <p>Email: info@animeshop.ru</p>
                    <p>Телефон: +7 (999) 123-45-67</p>
                </div>
                <div>
                    <h3>Мы в соцсетях</h3>
                    <p>VK • Telegram • Instagram</p>
                </div>
            </div>
        </div>
    );
};

export const Footer = styled(FooterContainer)`
    width: 100%;
    background: #212121;
    color: white;
    padding: 2rem;
    margin-top: 2rem;

    & .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }

    & h3 {
        margin: 0 0 0.5rem;
        text-align: center;
        text-decoration: underline;
    }

    & p {
        margin: 0 0 0.5rem;
        font-size: 0.9rem;
    }
`;
