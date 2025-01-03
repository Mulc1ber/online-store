import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroHeadingContainer = ({ className, children }) => {
    return <h1 className={className}>{children}</h1>;
};

export const HeroHeading = styled(HeroHeadingContainer)`
    margin-bottom: 3rem;
    text-transform: uppercase;
`;

HeroHeading.propTypes = {
    children: PropTypes.node.isRequired,
};
