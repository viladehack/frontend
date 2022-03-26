import Header from "../../components/Header";
import Canjeables from "../../components/Canjeables";
import Footer from "../../components/Footer";
// import axios from "axios";
// import { useState, useEffect } from "react";

const HappyViller = () => {
  // // 1- initialize variables
  // const [data, setData] = useState("");

  // //2- Get data
  // useEffect(() => {
  //   axios({
  //     url: "#",
  //   })
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [setData]);

  // //3- Post data
  // useEffect(() => {
  //   // POST request using axios inside useEffect React hook
  //   const ticket = { Username: name, Password: password };
  //   axios
  //     .post("#", user)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (
    <div className="background">
      <Header />
      <Canjeables />
      <Footer />
    </div>
  );
};

export default HappyViller;
