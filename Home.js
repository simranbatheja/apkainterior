import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Furniture from "./Furniture";
import Head from "./Head";
import List from "./List";
import Navbar from "./Navbar";
import NewSlider from "./NewSlider";
import Offer from "./Offer";
import Sale from "./Sale";
import Slider from "./Slider";


function Home(){
    return(
        <div>
            <Head/>
          <Navbar/>
          <Dropdown/>
          <Banner/>
          
          <Slider/>
          <Offer/>
          <Furniture/>
          <Sale/>
          <List/>
          <NewSlider/>
          
          <Contact/>
          <Footer/>
        </div>
    )
}

export default Home;