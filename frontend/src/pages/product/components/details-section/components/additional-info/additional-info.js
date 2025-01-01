import { Button } from '../../../../../../components';
import styled from 'styled-components';

const AdditionalInfoContainer = ({ className, activeTab, setActiveTab, getTabContent }) => {
    return (
        <div className={className}>
            <div className="product-tabs">
                <Button
                    padding={'0.8rem 1.5rem'}
                    background={'#f5f5f5'}
                    color={'#212121'}
                    active={`${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Описание
                </Button>
                <Button
                    padding={'0.8rem 1.5rem'}
                    background={'#f5f5f5'}
                    color={'#212121'}
                    active={`${activeTab === 'specifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('specifications')}
                >
                    Характеристики
                </Button>
                <Button
                    padding={'0.8rem 1.5rem'}
                    background={'#f5f5f5'}
                    color={'#212121'}
                    active={`${activeTab === 'shipping' ? 'active' : ''}`}
                    onClick={() => setActiveTab('shipping')}
                >
                    Доставка
                </Button>
            </div>
            <div className="tab-content">
                <pre>{getTabContent()}</pre>
            </div>
        </div>
    );
};

export const AdditionalInfo = styled(AdditionalInfoContainer)`
    width: 100%;

    & .product-tabs {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    & .tab-content {
        padding: 1.5rem;
        background: #f5f5f5;
        border-radius: 10px;
        line-height: 1.6;
    }
`;
