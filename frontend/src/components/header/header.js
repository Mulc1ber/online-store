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
    position: sticky;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    color: white;
    background: #212121;
    z-index: 100;

    & .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }
`;
