
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './components/HomePage';

import rootReducer from './reducers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </Provider>
  )
}
export default App