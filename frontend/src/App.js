import { Route, Routes } from 'react-router-dom';
import { Error } from './components';
import { ERROR, HERO } from './constants';
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
    Account,
} from './pages';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setProductsInCart, setUser } from './actions';
import { AppLayout, CommonLayout } from './layouts';

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
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<CommonLayout option={HERO.MAIN} />}>
                    <Route path="/" element={<Main />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.ACCOUNT} />}>
                    <Route path="/account" element={<Account />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.PRODUCT} />}>
                    <Route path="/product/:id" element={<Product />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.CATALOG} />}>
                    <Route path="/catalog" element={<Catalog />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.CATALOG} />}>
                    <Route path="/catalog/:name" element={<Catalog />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.ABOUT} />}>
                    <Route path="/about" element={<About />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.CONTACT} />}>
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route path="/" element={<CommonLayout option={HERO.CART} />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>

                {/* <Route path="/account" element={<Account />} /> */}

                <Route path="/products/edit" element={<ProductsEdit />} />

                <Route path="/login" element={<Authorization />} />
                <Route path="/register" element={<Registration />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/successful-order/:hash" element={<SuccessfulOrder />} />

                <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
            </Route>
        </Routes>
    );
};
