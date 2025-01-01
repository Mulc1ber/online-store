import { Input } from '../../../input/input';
import { Button } from '../../../button/button';
import { AuthFormError } from '../auth-form-error/auth-form-error';
import styled from 'styled-components';

const AuthFormContainer = ({
    className,
    isRegistering,
    formData,
    handleInputChange,
    errorMessage,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('клик во вкладке', isRegistering);
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            <Input
                padding={'0.8rem'}
                height={'auto'}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Логин"
            />

            <Input
                padding={'0.8rem'}
                height={'auto'}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Пароль"
            />

            {isRegistering && (
                <Input
                    padding={'0.8rem'}
                    height={'auto'}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Повторите пароль"
                />
            )}

            <Button type="submit" padding={'1rem'}>
                {isRegistering ? 'Зарегистрироваться' : 'Войти'}
            </Button>
            {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
        </form>
    );
};

export const AuthForm = styled(AuthFormContainer)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;
