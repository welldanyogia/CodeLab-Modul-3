import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Navbar() {
    return (
        <BrowserRouter>
            <div style={{
                display: "flex",
                // background: 'black',
                padding: '5px 0 5px 5px',
                fontSize: '20px'}}>
                <div>
                    <h4>
                        Navbar
                    </h4>
                </div>
                <div style={{ margin: '25px' }}>
                    <NavLink to='/' style={({isActive}) => ({
                        color : isActive ? 'blue' : 'black'})}>
                        Home
                    </NavLink>
                </div>

                <div style={{ margin: '25px' }}>
                    <NavLink to='/about' style={({isActive}) => ({
                        color : isActive ? 'blue' : 'black'})}>
                        About
                    </NavLink>
                </div>
                <div style={{ margin: '25px' }}>
                    <NavLink to='/contact' style={({isActive}) => ({
                        color : isActive ? 'blue' : 'black'})}>
                        Contact
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;