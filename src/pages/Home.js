import React from "react";
import "../styles/style.css"
import "../styles/scrollbar.css"
import HomeNavbar from "../components/HomeNavbar";
import MainHomeSection from "../components/MainHomeSection";
import HomeInfoSection from "../components/HomeInfoSection";
import HomeContactSection from "../components/HomeContactSection";
import checkLogin from "../config/checkLogin";

const Home = () => {
  checkLogin()
  return (
    <div className="">
      <section id="main">
        <HomeNavbar/>
        <MainHomeSection/>
      </section>
      <HomeInfoSection/>
      <HomeContactSection/>
    </div>
  );
};

export default Home;
