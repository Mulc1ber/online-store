import { AuthTabs } from '../auth-tabs/auth-tabs';
import { AuthForm } from '../auth-form/auth-form';
import styled from 'styled-components';

const AuthContainerContainer = ({ className, active, ...rest }) => {
    return (
        <div className={className}>
            <AuthTabs active={active} />

            <AuthForm {...rest} />
        </div>
    );
};

export const AuthContainer = styled(AuthContainerContainer)`
    width: 400px;
    max-width: 400px;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
