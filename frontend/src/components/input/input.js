import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
    width: ${({ width = '100%' }) => width};
    height: ${({ height = '30px' }) => height};
    padding: ${({ padding = '0 10px' }) => padding};
    border: ${({ border = '1px solid #aaa' }) => border};
    background: ${({ background = 'white' }) => background};
    color: ${({ color = '#212121' }) => color};
    border-radius: 5px;
    font-size: ${({ size = '14px' }) => size};
`;
