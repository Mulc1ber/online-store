import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({
    children,
    className,
    active,
    // width,
    // height,
    // margin,
    // border,
    // padding,
    // size,
    // background,
    // color,
    // align,
    // transition,
    // hbackground,
    // hcolor,
    ...props
}) => {
    return (
        <button className={`${className} ${active ? 'active' : ''}`} {...props}>
            {children}
        </button>
    );
};

export const Button = styled(ButtonContainer)`
    width: ${({ width = 'auto' }) => width};
    height: ${({ height = 'auto' }) => height};
    margin: ${({ margin = '0' }) => margin};
    border: ${({ border = 'none' }) => border};
    padding: ${({ padding = '0.5rem 1rem' }) => padding};
    font-size: ${({ size = '1rem' }) => size};
    background: ${({ background = '#ff4081' }) => background};
    color: ${({ color = 'white' }) => color};
    text-align: ${({ align = 'center' }) => align};
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    transition: ${({ transition = '0.3s' }) => transition};
    &:hover {
        background: ${({ hbackground = '#3f51b5' }) => hbackground};
        color: ${({ hcolor = 'white' }) => hcolor};
    }

    &.active {
        background: #ff4081;
        color: white;
    }
`;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.string,
    // width: PropTypes.string,
    // height: PropTypes.string,
    // margin: PropTypes.string,
    // border: PropTypes.string,
    // padding: PropTypes.string,
    // size: PropTypes.string,
    // background: PropTypes.string,
    // color: PropTypes.string,
    // align: PropTypes.string,
    // transition: PropTypes.string,
    // hbackground: PropTypes.string,
    // hcolor: PropTypes.string,
};
