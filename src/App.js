import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <>
      App component
    </>
  );
}

export default App;
