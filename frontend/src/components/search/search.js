import { Input } from '../input/input';
// import { Icon } from '../icon/icon';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
    return (
        <div className={className}>
            <Input
                width={'800px'}
                height={'35px'}
                border={'1px solid #ff4081'}
                background={'transparent'}
                placeholder="Поиск товаров..."
                value={searchPhrase}
                onChange={onChange}
            />
            {/* <Icon
                faIcon={'fa-search'}
                position={'absolute'}
                padding={'0 0.4rem'}
                size={'1.1rem'}
                color={'#ff4081'}
                top={'6px'}
                right={'4px'}
                isButton={true}
            /> */}
        </div>
    );
};

export const Search = styled(SearchContainer)`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    font-size: 1rem;

    & > input:focus {
        outline: none;
        box-shadow: 0 0px 3px rgba(255, 64, 129, 1);
    }

    // display: flex;
    // justify-content: center;
    // width: 300px;
    // position: relative;

    // & > input {
    //     padding-right: 32px;
    //     &:focus {
    //         outline: none;
    //     }
    // }
`;
