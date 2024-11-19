import React from "react";
import "../../styles/index.css";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import Navbar from "./navbar";
import Jumbotron from "./jumbotron"
import Cards from "./cards"
import Footer from "./footer"

const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Cards/>
		<Footer/>
		</>

	);
};

export default Home;