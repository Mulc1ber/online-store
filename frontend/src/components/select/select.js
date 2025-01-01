import styled from 'styled-components';

const SelectContainer = ({ className, children, ...props }) => {
    return (
        <select className={className} {...props}>
            {children}
        </select>
    );
};

export const Select = styled(SelectContainer)`
    width: 100%;
    height: auto;
    padding: 0.7rem;
    border: 1px solid #ddd;
    background: white;
    color: #212121;
    border-radius: 5px;
    font-size: 14px;
`;
