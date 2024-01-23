import '@/public/empty.css';
import '@/public/style.css';

import React, {useEffect} from "react";
import {createWrapper} from 'next-redux-wrapper';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import metaDataReducer from '@/store/reducers/meta_data';
import appReducer from '@/store/reducers/app';
import blogReducer from '@/store/reducers/blog';
import cartReducer from '@/store/reducers/cart';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import { AnimatePresence } from "framer-motion";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WEB_API_URL+'/graphql',
    cache: new InMemoryCache()
});


const rootReducer = combineReducers({
    metaData: metaDataReducer,
    app: appReducer,
    blog: blogReducer,
    cart: cartReducer
});

const persistConfig = {
    key: 'nzpira_main',
    storage,
    stateReconciler: hardSet
}

//const store = createStore(rootReducer, applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk));

const MyApp =  ({ Component, pageProps }) => {

    useEffect(()=>{
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles)
        } 
    })

    return (
        <ApolloProvider client={client}>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps}/>
            </AnimatePresence>
        </ApolloProvider>
    );

}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);


//withRedux wrapper that passes the store to the App Component

export default wrapper.withRedux(MyApp);
//export default wrapper.withRedux(appWithTranslation(MyApp));