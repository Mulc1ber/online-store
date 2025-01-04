import { Route, Routes } from 'react-router-dom';
import { Error, Footer, Header } from './components';
import { ERROR } from './constants';
import {
    Main,
    About,
    Authorization,
    Cart,
    Catalog,
    Contact,
    Product,
    Registration,
    ProductsEdit,
    Checkout,
    SuccessfulOrder,
} from './pages';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setProductsInCart, setUser, updateProductsInCart } from './actions';

const Page = styled.div`
    width: 100%;
    min-height: calc(100vh - 142px);
    padding: 68px 0 0;
`;

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 1416px;
    // margin: 0 auto;
`;

export const App = () => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem('userData');

        if (!currentUserDataJSON) return;

        const currentUserData = JSON.parse(currentUserDataJSON);

        dispatch(
            setUser({
                ...currentUserData,
                roleId: Number(currentUserData.roleId),
            }),
        );
    }, [dispatch]);

    useLayoutEffect(() => {
        const productsInCartJSON = localStorage.getItem('cart');

        if (!productsInCartJSON) return;

        dispatch(setProductsInCart(JSON.parse(productsInCartJSON)));
    }, [dispatch]);

    return (
        <AppColumn>
            <Header />
            <Page>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/products/edit" element={<ProductsEdit />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:name" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/successful-order/:hash" element={<SuccessfulOrder />}></Route>

                    <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
                </Routes>
            </Page>
            <Footer />
        </AppColumn>
    );
};
