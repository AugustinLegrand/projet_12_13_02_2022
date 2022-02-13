import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './pages/Components/Header/Header';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import UserPage from './pages/User/User';
import reportWebVitals from './reportWebVitals';
import './index.css'
import AsideComponent from './pages/Components/Aside/Aside';

ReactDOM.render(
  <BrowserRouter>
    <AsideComponent />
    <HeaderComponent />
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/user' element={<UserPage />}>
        <Route path=':userID' element={<UserPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
