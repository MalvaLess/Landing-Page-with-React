import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 text-center">
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
