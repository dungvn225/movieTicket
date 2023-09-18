import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/reducers/rootReducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import 'antd/dist/reset.css';
import GlobleStyles from './components/GlobleStyles/GlobleStyles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './i18n'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <GlobleStyles>
   <Provider  store={store}>
   <App />
    </Provider>
    </GlobleStyles>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
