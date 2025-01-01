import { ADVANTAGES } from '../../../../../../constants';
import styled from 'styled-components';

const AdvantagesContainer = ({ className }) => {
    return (
        <div className={className}>
            {ADVANTAGES.map((advantage, index) => (
                <div key={index} className="advantage-card">
                    <div className="advantage-icon">{advantage.icon}</div>
                    <h3>{advantage.title}</h3>
                    <p>{advantage.description}</p>
                </div>
            ))}
        </div>
    );
};

export const Advantages = styled(AdvantagesContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0;

    & .advantage-card {
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-5px);
        }
    }

    & .advantage-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ff4081;
    }
`;
