import { AuthContainer } from './components/auth-container/auth-container';
import styled from 'styled-components';

const AuthComponent = ({ className, ...props }) => {
    return (
        <div className={className}>
            <AuthContainer {...props} />
        </div>
    );
};

export const Auth = styled(AuthComponent)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100vh - 210px);
`;
