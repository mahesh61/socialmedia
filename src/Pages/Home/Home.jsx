import React from "react";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./Home.css";
import FeaturedPropertiesList from "../../Components/featuredPropertiesList/FeaturedPropertiesList";
import Mail from "../../Components/mail/Mail";
function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Header />
      <div className="homeContainer">
        <h1 className="featuredTttle">Explore India</h1>
        <span className="desc">
          These popular destinations have a lot to offer
        </span>
        <Featured />
        <h1 className="homeTittle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTittle">Homes guests love</h1>
        <FeaturedPropertiesList />
        <Mail />
      </div>
    </div>
  );
}

export default Home;
