import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroContainer = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export const Hero = styled(HeroContainer)`
    background: linear-gradient(45deg, #ff4081, #3f51b5);
    color: white;
    padding: 4rem 2rem;
    // border-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 2rem;
    text-align: center;

    & h1 {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.5s ease-out;
    }

    & p {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        animation: fadeIn 0.3s ease-out 0.5s both;
    }

    @keyframes slideIn {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.9;
        }
    }
`;

Hero.propTypes = {
    children: PropTypes.node.isRequired,
};
