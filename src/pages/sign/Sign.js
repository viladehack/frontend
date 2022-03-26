// import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FromSignUp from "../../components/FromSignUp";
import DynamicSingUp from "../../components/DynamicSingUp";
// import axios from "axios";

const Sing = ({ name, setName }) => {
  // 1- initialize variables
  // Fake user:
  // const [name, setName] = useState();

  // //2- Post data
  // useEffect(() => {
  //   // POST request using axios inside useEffect React hook
  //   const user = { Username: name, Password: password };
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
      <Header user={name} />
      <h2>Sign up</h2>
      <div className="login-box">
        <FromSignUp setName={setName} />
        <DynamicSingUp />
        {/* <button type="submit">Sign me up</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default Sing;
