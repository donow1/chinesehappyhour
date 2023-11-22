import React from 'react'
import './app.css'


import AHeader from './components/AHeader';
import CPathAndProgrammes from './components/CPathAndProgrammes';
import DTextResources from './components/DTextResources';
import SignUp from './components/EaSignUp';
import Login from './components/EbLogin';
import FContactMe from './components/FContactMe';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HExclusiveResources from './components/HExclusiveResources';


export default function App() {
  return (
    <div>
        <AHeader />
        <CPathAndProgrammes />
        <DTextResources />


{/*         <BrowserRouter>
          <Routes>
          <Route index element={<SignUp />}></Route>
          <Route path='register' element={<SignUp />}></Route>
          <Route path='login' element={<Login />}> </Route>
          <Route path='resource' element={<HExclusiveResources />}> </Route>
          </Routes>
        </BrowserRouter> */}




        <FContactMe />
    </div>
  );
}
