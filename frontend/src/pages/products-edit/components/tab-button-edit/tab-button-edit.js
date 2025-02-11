import { Button } from '../../../../components';

export const TabButtonEdit = ({ tab, activeTab, onClick, children }) => {
    const isActive = activeTab === tab;
    return (
        <Button
            active={`${isActive ? 'active' : ''}`}
            background={'#f5f5f5'}
            color={'#212121'}
            onClick={() => onClick(tab)}
        >
            {children}
        </Button>
    );
};
