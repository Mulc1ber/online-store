import styled from 'styled-components';

const HeroHeadingContainer = ({ className, children }) => {
    return <h1 className={className}>{children}</h1>;
};

export const HeroHeading = styled(HeroHeadingContainer)`
    margin-bottom: 3rem;
    text-transform: uppercase;
`;
