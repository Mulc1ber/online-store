import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTabsContainer = ({ className, active }) => {
    return (
        <div className={className}>
            <Link to="/login" className={`${active === 'login' ? 'active' : ''}`}>
                Вход
            </Link>
            <Link to="/register" className={`${active === 'register' ? 'active' : ''}`}>
                Регистрация
            </Link>
        </div>
    );
};

export const AuthTabs = styled(AuthTabsContainer)`
    display: flex;
    margin-bottom: 2rem;
    border-bottom: 2px solid #f5f5f5;

    & > a {
        flex: 1;
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        color: #212121;
        transition: all 0.3s;
    }

    & .active {
        color: #ff4081;
        border-bottom: 2px solid #ff4081;
    }
`;

AuthTabs.propTypes = {
    active: PropTypes.string.isRequired,
};
