import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '../../components';
import { AuthFormError } from '../../components/auth/components/auth-form-error/auth-form-error';
import { AuthTabs } from '../../components/auth/components/auth-tabs/auth-tabs';
import styled from 'styled-components';

const regFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполните поле логин.')
        .matches(/\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры.')
        .min(3, 'Неверно заполнен логин. Минимальная длина логина 3 символа.')
        .max(15, 'Неверно заполнен логин. Максимальная длина логина 15 символов.'),
    password: yup
        .string()
        .required('Заполните поле пароль.')
        .matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %.')
        .min(6, 'Неверно заполнен пароль. Минимальная длина пароля 6 символа.')
        .max(30, 'Неверно заполнен пароль. Максимальная длина пароля 30 символов.'),
    passcheck: yup
        .string()
        .required('Заполните повтор пароля.')
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают.'),
});

const RegistrationContainer = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
            passcheck: '',
        },
        resolver: yupResolver(regFormSchema),
    });

    // const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const isRegistering = !!useMatch('/register');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const errorMessage = 'Ошибка! Неверно введены данные';

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('клик во вкладке', isRegistering);
    };

    return (
        <div className={className}>
            <div className="container">
                <AuthTabs active={'register'} />

                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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
            </div>
        </div>
    );
};

export const Registration = styled(RegistrationContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100vh - 210px);

    & .container {
        width: 400px;
        max-width: 400px;
        padding: 2rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    & .auth-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`;
