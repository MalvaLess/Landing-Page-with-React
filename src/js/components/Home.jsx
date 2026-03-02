import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
/* import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/237/200/300",
		title: "Dog",
		description: "Very cute dog",
	},
	{
		image: "https://picsum.photos/id/100/200/300",
		title: "Beach",
		description: "Beautiful beach",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "Mountain",
		description: "Beautiful mountain",
	},
	{
		image: "https://picsum.photos/id/543/200/300",
		title: "Forest",
		description: "Peaceful forest",
	}
]; */

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      {/* <div className="container">
        <div className="row">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card cards={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer /> */}
    </div>
  );
};

export default Home;
