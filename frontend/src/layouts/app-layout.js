import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    width: 100%;
    min-height: calc(100vh - 242px);
`;

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AppLayout = () => (
    <AppColumn>
        <Header />
        <Page>
            <Outlet />
        </Page>
        <Footer />
    </AppColumn>
);
