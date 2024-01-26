import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
// import CarDetails from "../pages/CarDetails";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Needs from "../pages/Needs"
import CarItem from "../components/UI/CarItem";
import Login from './../components/UI/Login';
import Profile from "../components/UI/profile";
import Header from '../components/Header/Header'
const Routers = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   console.log("toggled")
  //   setShowPopup(!showPopup);
  // };

  // const closePopup = () => {
  //   console.log("closed")
  //   setShowPopup(false);
  // };
  return (
<Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/header" element={<Header showPopup={showPopup} togglePopup={togglePopup} closePopup={closePopup} />} /> */}
      <Route path="/needs" element={<Needs />} />
      <Route path="/about" element={<About />} />
      <Route path="/Mechanic" element={<CarListing  />} />
      <Route path="/Profile" element={<Profile/>} />
      {/* <Route path="/cars/:slug" element={<CarDetails />} /> */}
      {/* <Route path='/Become Driver' element={<CarListing/>}/> */}
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
