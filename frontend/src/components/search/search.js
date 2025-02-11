import PropTypes from 'prop-types';
import { Input } from '../input/input';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
    return (
        <div className={className}>
            <Input
                width={'100%'}
                height={'35px'}
                border={'1px solid #ff4081'}
                background={'transparent'}
                placeholder="Поиск товаров..."
                value={searchPhrase}
                onChange={onChange}
            />
        </div>
    );
};

export const Search = styled(SearchContainer)`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;

    & > input:focus {
        outline: none;
        box-shadow: 0 0px 3px rgba(255, 64, 129, 1);
    }
`;

Search.propTypes = {
    searchPhrase: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
