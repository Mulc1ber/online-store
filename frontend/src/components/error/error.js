import styled from 'styled-components';

const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 210px);
`;

export const Error = ({ error }) =>
    error && (
        <StyledError>
            <h2>Ошибка</h2>
            <div>{error}</div>
        </StyledError>
    );
