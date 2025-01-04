import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperContainer = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export const Wrapper = styled(WrapperContainer)`
    margin: 0px auto auto;
    padding: 0 2rem;
    max-width: 1416px;
`;

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
