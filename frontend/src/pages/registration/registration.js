import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthTabs, Button, Input } from '../../components';
import { registerUserAsync } from '../../actions';
import { useResetForm } from '../../hooks';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';
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
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
            passcheck: '',
        },
        resolver: yupResolver(regFormSchema),
    });

    const [serverError, setServerError] = useState(null);

    const dispatch = useDispatch();

    const roleId = useSelector(selectUserRole);

    useResetForm(reset);

    const onSubmit = ({ login, password }) => {
        dispatch(registerUserAsync(login, password))
            .then(() => {
                console.log('Успешная регистрация');
            })
            .catch((error) => {
                setServerError(`Ошибка запроса: ${error.message}`);
            });
    };

    const formError =
        errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
    const errorMessage = formError || serverError;

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/" />;
    }

    return (
        <div className={className}>
            <div className="container">
                <AuthTabs active={'register'} />

                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        padding={'0.8rem'}
                        height={'auto'}
                        type="text"
                        placeholder="Логин..."
                        {...register('login', {
                            onChange: () => setServerError(null),
                        })}
                    />
                    <Input
                        padding={'0.8rem'}
                        height={'auto'}
                        type="password"
                        placeholder="Пароль..."
                        {...register('password', {
                            onChange: () => setServerError(null),
                        })}
                    />
                    <Input
                        padding={'0.8rem'}
                        height={'auto'}
                        type="password"
                        placeholder="Повторите Пароль..."
                        {...register('passcheck', {
                            onChange: () => setServerError(null),
                        })}
                    />
                    <Button type="submit" padding={'1rem'}>
                        Зарегистрироваться
                    </Button>
                    {errorMessage && <div className="auth-form-error">{errorMessage}</div>}
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
    height: calc(100vh - 242px);

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

        & input:focus {
            outline: none;
            border-color: #ff4081;
            box-shadow: 0 0px 3px rgba(255, 64, 129, 1);
        }
    }

    & .auth-form-error {
        text-align: center;
        background-color: #ffd1d1;
        padding: 10px;
        color: red;
    }
`;
