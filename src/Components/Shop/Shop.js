import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Footer from "../Footer/Footer";
import Product from "./Product";

const Shop = ()=>{
    return (
        <>
            <Navbar />
            <Searchbar />
            <Product head="All Products" />
            <Footer />
        </>
    )
}

export default Shop;