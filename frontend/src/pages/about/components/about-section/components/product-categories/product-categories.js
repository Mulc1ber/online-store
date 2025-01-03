import { ASSORTMENT } from '../../../../../../constants';
import styled from 'styled-components';

const ProductCategoriesContainer = ({ className }) => {
    return (
        <div className={className}>
            {ASSORTMENT.map((category, index) => (
                <div key={index} className="category-detail">
                    <div className="category-detail-icon">{category.icon}</div>
                    <div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const ProductCategories = styled(ProductCategoriesContainer)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 2rem 0;

    & .category-detail {
        width: 550px;
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    & .category-detail-icon {
        font-size: 2.5rem;
        color: #ff4081;
    }
`;
