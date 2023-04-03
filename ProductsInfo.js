import React from "react";
import Head from "../Component/Head";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import Detail from "./Detail";

function ProductInfo(){
    return(
        <div>
            <Head/>
            <Navbar/>
            <Dropdown/>
            <Detail/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ProductInfo;