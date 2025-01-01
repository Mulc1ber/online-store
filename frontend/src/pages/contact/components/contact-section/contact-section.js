import { AddressCard, BusinessGrid, ContactGrid } from './components';
import styled from 'styled-components';

const ContactSectionContainer = ({ className }) => {
    return (
        <>
            <div className={className}>
                <h2>Связаться с нами</h2>
                <ContactGrid />
            </div>

            <div className={className}>
                <h2>Для бизнеса</h2>
                <BusinessGrid />
            </div>

            <div className={className}>
                <h2>Наш адрес</h2>
                <AddressCard />
            </div>
        </>
    );
};

export const ContactSection = styled(ContactSectionContainer)`
    background: white;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
