import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { useState } from "react";

const Home = () => {
  return (
    <div className="background">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
