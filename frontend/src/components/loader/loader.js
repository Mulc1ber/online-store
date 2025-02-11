import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoaderContainer = ({ className, isLoading }) => {
    return (
        <div className={`${className} ${isLoading ? 'active' : ''}`}>
            <div className={`loader-spinner ${isLoading ? 'active' : ''}`}></div>
            <h2 className="loader-text">Загрузка...</h2>
        </div>
    );
};

export const Loader = styled(LoaderContainer)`
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: ${({ background = 'rgba(240, 240, 240, 0.5)' }) => background};

    &.active {
        display: block;
    }

    & .loader-spinner {
        display: block;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        border: 10px solid #f3f3f3;
        border-radius: 50%;
        border-top: 10px solid #ff4081;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    & .loader-text {
        position: absolute;
        top: calc(50% - 90px);
        left: calc(50% - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 500;
        color: #ff4081;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
