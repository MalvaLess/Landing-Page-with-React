import React from "react";

//include images into your bundle

import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="container">
		   <Card/>
		   <Footer/>
		
		</div>
	);
};

export default Home;