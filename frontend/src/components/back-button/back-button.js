import { useNavigate } from 'react-router-dom';
import { Icon } from '../icon/icon';
import styled from 'styled-components';

const BackButtonContainer = ({ className }) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <div onClick={() => navigate(-1)} className="back-button-link">
                <Icon
                    faIcon={'fa-chevron-left'}
                    size={'0.9rem'}
                    color={'#ff4081'}
                    isButton={true}
                />
                Назад
            </div>
        </div>
    );
};

export const BackButton = styled(BackButtonContainer)`
    margin-bottom: 0.5rem;

    & .back-button-link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: #ff4081;
        border: 1px solid #ff4081;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background: #ff4081;
            color: white;
            & i {
                color: white;
                transition: 0.3s;
            }
        }
    }
`;
