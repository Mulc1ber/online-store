import PropTypes from 'prop-types';
import styled from 'styled-components';

const SortContainer = ({ className, onSortChange, currentSort }) => {
    return (
        <div className={className}>
            <span>Сортировать по:</span>
            <select value={currentSort} onChange={onSortChange}>
                <option value="name-asc">Названию (А-Я)</option>
                <option value="name-desc">Названию (Я-А)</option>
                <option value="price-asc">Цене (по возрастанию)</option>
                <option value="price-desc">Цене (по убыванию)</option>
                <option value="category-asc">Категории</option>
            </select>
        </div>
    );
};

export const Sort = styled(SortContainer)`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & span {
        font-size: 0.9rem;
    }

    & select {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #ff4081;
        cursor: pointer;
        &:focus {
            outline: none;
            box-shadow: 0 0px 3px rgba(255, 64, 129, 1);
        }
    }
`;

Sort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onSortChange: PropTypes.func.isRequired,
};
