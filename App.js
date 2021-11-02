import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/MainStack';
import { Provider, useSelector } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./store/slices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";



const App = () => {

  const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    blacklist: [""], // navigation will not be persisted
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  let persistor = persistStore(store);
  
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
  )
}



export default App;