import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import App from './App';
import {UserProvider} from './contexts/user.context';
import {CategoriesProvider} from './contexts/categories.context';
import {CartProvider} from './contexts/cart.context';

import './index.scss';
import {persistor, store} from "./store/store";

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
