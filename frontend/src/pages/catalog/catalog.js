import { CatalogProductsGrid, CatalogSidebar } from './components';
import styled from 'styled-components';

const CatalogContainer = ({ className }) => {
    return (
        <div className={className}>
            <CatalogSidebar />
            <CatalogProductsGrid />
        </div>
    );
};

export const Catalog = styled(CatalogContainer)`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
    background: white;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
