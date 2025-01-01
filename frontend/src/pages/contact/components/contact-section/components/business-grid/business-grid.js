import { BUSINESS_MAIL } from '../../../../../../constants';
import styled from 'styled-components';

const BusinessGridContainer = ({ className }) => {
    return (
        <div className={className}>
            {BUSINESS_MAIL.map((mail, index) => (
                <div key={index} className="business-card">
                    <div className="business-icon">{mail.icon}</div>
                    <h3>{mail.title}</h3>
                    <p>{mail.description}</p>
                    <a className="contact-button" href={`mailto:${mail.email}`}>
                        {mail.email}
                    </a>
                </div>
            ))}
        </div>
    );
};

export const BusinessGrid = styled(BusinessGridContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0;

    & .business-card {
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-5px);
        }
    }

    & .business-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ff4081;
    }

    & .contact-button {
        display: inline-block;
        background: #ff4081;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 1rem;
        transition: background 0.3s;
        &:hover {
            background: #3f51b5;
        }
    }
`;
