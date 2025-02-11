import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = ({ className }) => (
    <Link to="/" className={className}>
        AnimeShop
    </Link>
);

export const Logo = styled(LogoContainer)`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff4081;
    transition: all 0.3s;
`;
