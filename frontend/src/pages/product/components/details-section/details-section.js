import { AdditionalInfo, DetailsContainer } from './components';
import { BackButton } from '../../../../components';
import styled from 'styled-components';

const DetailsSectionContainer = ({ className, ...props }) => {
    return (
        <div className={className}>
            <BackButton />
            <DetailsContainer {...props} />
            <AdditionalInfo {...props} />
        </div>
    );
};

export const DetailsSection = styled(DetailsSectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    border-radius: 10px;
    padding: 1rem 2rem 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
