import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import About from './About';
import Contact from './Contact';

function Main() {
    return(
        <>
        <Routes>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/home' element={<Home/>}/>
        </Routes>
        </>
    );
}
export default Main;