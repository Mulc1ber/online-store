import { useState } from 'react';
import { AdditionalInfo, DetailsContainer } from './components';
import { BackButton } from '../../../../components';
import { getTabContent } from '../../utils';
import styled from 'styled-components';

const DetailsSectionContainer = ({ className, productById }) => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className={className}>
            <BackButton />
            <DetailsContainer productById={productById} />
            <AdditionalInfo
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                getTabContent={() => getTabContent(activeTab, productById)}
            />
        </div>
    );
};

export const DetailsSection = styled(DetailsSectionContainer)`
    display: flex;
    flex-direction: column;
    // gap: 1.5rem;
    align-items: flex-start;
    background: white;
    border-radius: 10px;
    padding: 1rem 2rem 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
