// Import necessary dependencies and components
import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import data from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faTrain, faPlane, faUtensils, faLandmark, faPalette } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

const Home = () => {
  const cityData = data.cities[0];

 
  const places = Array.isArray(cityData.places) ? cityData.places : [];
  const restaurants = Array.isArray(cityData.restaurents) ? cityData.restaurents : [];
  const hotels = Array.isArray(cityData.Hotels) ? cityData.Hotels : [];

  return (
    <>
    
      <div className="home-container">
        <Navbar />
        <main className="hero-section">
          <div className="navigation-options">
            <ul>
            <li style={{ color: " #4B5320" }}>
                <Link to = '/Hotel'>
                <FontAwesomeIcon icon={faHotel} style={{ color: "#8A2BE2", fontSize: "33px" }} /> Hotels
                </Link>
              </li>
              <li style={{ color: "#3E2723" }}>
                <Link to="/trains">
                  <FontAwesomeIcon icon={faTrain} style={{ color: "#0E4D92", fontSize: "33px" }} />Trains
                </Link>
              </li>
            
              <li style={{ color: "black" }}>
                <Link to="/Restaurent">
                <FontAwesomeIcon icon={faUtensils} style={{ color: "#FF5722", fontSize: "33px" }} /> Restaurants
              </Link>
              </li>
              <li style={{ color: "Black" }}>
                <Link to="/places">
                <FontAwesomeIcon icon={faLandmark} style={{ color: " #f95959", fontSize: "33px" }} /> Famous-Places
                </Link>
              </li>
              <li style={{ color: "black" }}>
                <Link to="/culture">
                <FontAwesomeIcon icon={faPalette} style={{ color: " #fdc57b", fontSize: "33px" }} /> Culture
                </Link>
              </li>

            </ul>
          </div>
          <h2>Explore the world with ExploreXpress</h2>
        </main>
      </div>
      <section className="popular-places">
        <h4>Popular Places in {cityData.city}</h4>
        <div className="places-container">
          {places.map(place => (
            <div key={place.name} className="place">
              <img src={place.image1} alt={place.name} />
              <h5>{place.name}</h5>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="famous-restaurants">
  <h4>Famous Restaurants in {cityData.city}</h4>
  <div className="restaurants-container">
    {restaurants.map(restaurant => (
      <div key={restaurant.name} className="restaurant">
        <img src={restaurant.image1} alt={restaurant.name} />
        <h5>{restaurant.name}</h5>
        <p>Rating:{restaurant.Rating}</p>
      </div>
    ))}
  </div>
</section>

<section className="famous-hotels">
  <h4>Famous Hotels in {cityData.city}</h4>
  <div className="hotels-container">
    {hotels.map(hotel => (
      <div key={hotel.name} className="hotel">
        <img src={hotel.image1} alt={hotel.name} />
        <p>{hotel.address}</p>
        <h5>{hotel.name}</h5>
        <p>Rating:{hotel.Rating}</p>
      </div>
    ))}
  </div>
</section>


      <section className="contact-details">

      </section>
      <section className="contact-details">
        <h3>Contact Us</h3>
        <p>Got questions or need assistance? Our team is here to help you with your travel plans, bookings, and any inquiries you might have.</p>
        <ul>
          <li>Email: contact@explorexpress.com</li>
          <
li>Phone: +123 456 7890</li>
<li>Address: 123 Explore Street, Adventure City, EX 45678</li>
</ul>
</section>
    </>
  );
};

export default Home;
