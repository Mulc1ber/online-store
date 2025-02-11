import { CONTACTS } from '../../../../constants';
import styled from 'styled-components';

const ContactGridContainer = ({ className }) => {
    return (
        <div className={className}>
            {CONTACTS.map((method, index) => (
                <div key={index} className="contact-card">
                    <div className="contact-icon">{method.icon}</div>
                    <h3>{method.title}</h3>
                    <p className="contact-description">{method.description}</p>
                    <p className="contact-detail">{method.detail}</p>
                </div>
            ))}
        </div>
    );
};

export const ContactGrid = styled(ContactGridContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0;

    & .contact-card {
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-5px);
        }
    }

    & .contact-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ff4081;
    }

    & .contact-description {
        font-size: 1.2rem;
        color: #ff4081;
        margin: 0.5rem 0;
    }

    & .contact-detail {
        color: #212121;
        font-size: 0.9rem;
    }
`;
