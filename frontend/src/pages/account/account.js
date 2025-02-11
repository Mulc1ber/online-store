import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { MyOrder, MyProfile, TabButtonsAccount } from './components';
import { PrivateContent } from '../../components';
import { loadOrdersAsync } from '../../actions';
import { ROLE } from '../../constants';
import { TABS_ACCOUNT } from './utils';
import { checkAccess } from '../../utils';
import { selectUserRole } from '../../selectors';
import styled from 'styled-components';

const AccountContainer = ({ className }) => {
    const [activeTab, setActiveTab] = useState(TABS_ACCOUNT.PROFILE);

    const userRole = useSelector(selectUserRole);
    const dispatch = useDispatch();
    const match = useMatch('/account');

    useEffect(() => {
        const roleId = JSON.parse(sessionStorage.getItem('userData'))?.roleId || userRole;

        if (checkAccess([ROLE.ADMIN, ROLE.BUYER], roleId)) {
            dispatch(loadOrdersAsync());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userRole]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <PrivateContent access={[ROLE.ADMIN, ROLE.BUYER]} currentPage={match?.pattern.path}>
            <div className={className}>
                <TabButtonsAccount activeTab={activeTab} handleTabClick={handleTabClick} />

                {activeTab === TABS_ACCOUNT.PROFILE && <MyProfile />}
                {activeTab === TABS_ACCOUNT.ORDERS && <MyOrder />}
            </div>
        </PrivateContent>
    );
};

export const Account = styled(AccountContainer)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: white;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
