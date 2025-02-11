import { Outlet } from 'react-router-dom';
import { Hero, Wrapper } from '../components';

export const CommonLayout = ({ option }) => {
    const { title, description } = option;
    return (
        <>
            <Wrapper>
                <Hero>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Hero>
                <Outlet />
            </Wrapper>
        </>
    );
};
