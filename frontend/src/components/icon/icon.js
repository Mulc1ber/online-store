import styled from 'styled-components';

const IconContainer = ({ children, className, faIcon, isButton, active, ...props }) => {
    return (
        <div className={className} {...props}>
            <i className={`fa ${faIcon} ${active ? 'active' : ''}`} aria-hidden="true"></i>
            {children}
        </div>
    );
};

export const Icon = styled(IconContainer)`
    position: ${({ position = 'relative' }) => position};
    display: ${({ display = 'block' }) => display};
    margin: ${({ margin = '0' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    font-size: ${({ size = '1rem' }) => size};
    cursor: ${({ isButton }) => (isButton ? 'pointer' : 'default')};
    color: ${({ color = 'white' }) => color};
    right: ${({ right = '0' }) => right};
    top: ${({ top = '0' }) => top};
    transition: all 0.3s;
    &:hover {
        color: ${({ hcolor = 'white' }) => hcolor};
    }

    & .active {
        color: white;
    }
`;
