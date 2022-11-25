import React from "react";
import { Footer } from "./footer";
import { Home } from "./home";
import {Navbar} from './navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Main = ()=>{
    return(
        <>
            <Navbar/>  <br/>

            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                </Routes>
            </BrowserRouter>  <br/>
           
                
            <Footer/>
        </>
    )
}