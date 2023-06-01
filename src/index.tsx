import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter, Route, Routes} from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './services/reducers';
import rootSaga from './services/sagas/sagas';
import Layout from './pages/Layout/Layout';
import PostsPage from './pages/PostsPage/PostsPage';
import UserPage from './pages/UserPage/UserPage';
import AboutMe from './pages/AboutMe/AboutMe';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PostsPage/>}/>
            <Route path='users/:id' element={<UserPage/>}/>
            <Route path='about-me' element={<AboutMe/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
