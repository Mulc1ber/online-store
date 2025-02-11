import { TAB_DATA } from '../../utils';
import { TabButtonEdit } from '../tab-button-edit/tab-button-edit';
import styled from 'styled-components';

const TabButtonsEditContainer = ({ className, activeTab, handleTabClick }) => {
    return (
        <div className={className}>
            {TAB_DATA.map((tab) => (
                <TabButtonEdit
                    key={tab.id}
                    tab={tab.id}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                >
                    {tab.label}
                </TabButtonEdit>
            ))}
        </div>
    );
};

export const TabButtonsEdit = styled(TabButtonsEditContainer)`
    display: flex;
    gap: 0.5rem;
`;
