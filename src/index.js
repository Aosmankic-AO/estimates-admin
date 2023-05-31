import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import DataAnonymizationPage from './pages/data_anonymization/DataAnonymization';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/anonymization" Component={DataAnonymizationPage} />
        </Routes>
      </BrowserRouter>
);

