
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import BaseLayout from './components/layout/BaseLayout';
import Home from './components/HomePage';
import AllBooks from './components/AllBooks';
import BooksIRead from './components/BooksIRead';

import rootReducer from './reducers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)
const App = () => {



  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
          <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="components/allbooks" element={<AllBooks />} />
            <Route path="components/booksiread" element={<BooksIRead />} />
          </Routes>
          </BaseLayout>
      </Router>
      </PersistGate>
    </Provider>
  )
}
export default App