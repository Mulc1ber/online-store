import { Logo, Navigation } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="header-container">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export const Header = styled(HeaderContainer)`
    background: #212121;
    color: white;
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    // width: 1416px;
    top: 0;
    z-index: 100;

    & .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        // max-width: 1416px;
        margin: 0 auto;
        padding: 1rem;
    }
`;
