import { TAB_DATA } from '../../utils';
import { TabButtonAccount } from '../tab-button-account/tab-button-account';
import styled from 'styled-components';

const TabButtonsAccountContainer = ({ className, activeTab, handleTabClick }) => {
    return (
        <div className={className}>
            {TAB_DATA.map((tab) => (
                <TabButtonAccount
                    key={tab.id}
                    tab={tab.id}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                >
                    {tab.label}
                </TabButtonAccount>
            ))}
        </div>
    );
};

export const TabButtonsAccount = styled(TabButtonsAccountContainer)`
    display: flex;
    gap: 1rem;
`;
