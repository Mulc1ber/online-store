import styled from 'styled-components';

const ButtonContainer = ({
    children,
    className,
    width,
    height,
    margin,
    border,
    padding,
    size,
    background,
    color,
    align,
    transition,
    hbackground,
    hcolor,
    active,
    addToCart,
    ...props
}) => {
    return (
        <button
            className={`${className} ${active ? 'active' : ''}`} // ${addToCart ? 'add-to-cart' : ''}
            {...props}
        >
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
    cursor: pointer;
    transition: ${({ transition = '0.3s' }) => transition};
    &:hover {
        background: ${({ hbackground = '#3f51b5' }) => hbackground};
        color: ${({ hcolor = 'white' }) => hcolor};
    }

    &.active {
        background: #ff4081;
        color: white;
    }

    // &.add-to-cart {
    //     padding: 0.8rem;
    // }
`;
