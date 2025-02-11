import styled from 'styled-components';
import { Button, Input } from '../../../../components';

export const MyProfileContainer = ({ className }) => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    return (
        <form className={className} onSubmit={(e) => e.preventDefault()}>
            <div className="profile-field">
                <label>Роль:</label>
                <Input
                    type="text"
                    height={'45px'}
                    border={'1px solid #ddd'}
                    size={'1rem'}
                    readOnly={true}
                    value={userData.roleId === 0 ? 'Администратор' : 'Пользователь'}
                />
            </div>
            <div className="profile-field">
                <label>Логин:</label>
                <Input
                    type="text"
                    height={'45px'}
                    border={'1px solid #ddd'}
                    size={'1rem'}
                    readOnly={true}
                    value={userData.login}
                />
            </div>
            {/* <div className="profile-field">
                <label>Почта:</label>
                <Input
                    type="email"
                    height={'45px'}
                    border={'1px solid #ddd'}
                    size={'1rem'}
                    readOnly={true}
                />
            </div> */}
            {/* <div className="profile-field">
                <label>Пароль:</label>
                <Input
                    type="password"
                    height={'45px'}
                    border={'1px solid #ddd'}
                    size={'1rem'}
                    readOnly={true}
                />
            </div> */}
            {/* <div>
                <Button>Изменить</Button>
                <Button type="submit">Сохранить изменения</Button>
            </div> */}
        </form>
    );
};

export const MyProfile = styled(MyProfileContainer)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & .profile-field {
        display: grid;

        & label {
            font-weight: bold;
            color: #212121;

            & span {
                font-size: 1.2rem;
                color: #ff4081;
            }
        }

        & input:focus {
            outline: none;
            border-color: #ff4081;
        }
    }
`;
