import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

// more info: https://bluuweb.github.io/react/formularios/#react-hook-form
const FromSignUp = () => {
  // 1. State del componente!
  const [user, setUser] = useLocalStorage();
  // const [user, setUser] = useState();
  const [listUser, setListUser] = useState([]);

  // 2. Funciones
  // handleInputChange: modifica el state a cada cambio de los inputs
  function handleInputChange(element) {
    setUser({ ...user, [element.target.name]: element.target.value });
  }

  //3. handleSubmitUserData: guarda en localstorage
  function handleSubmitUserData(event) {
    event.preventDefault();
    // Objetivo: pintar por consola el user / guardar en localstorage

    // 3.1. Pintar por consola el user
    console.log("Guardando usuario", user);
    setListUser([...listUser, user]);

    // 3.2. Guardar el localstorage
    localStorage.setItem("listUser", JSON.stringify(listUser));

    // 3.3 Clean value
    event.target.reset();

    setUser();
  }

  // Render / return
  return (
    <form className="top">
      <input
        type="text"
        name="nick"
        id="nick"
        placeholder="Nick"
        onChange={(element) => handleInputChange(element)}
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={(element) => handleInputChange(element)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        // More info of autoComplete:
        // https://stackoverflow.com/questions/54970352/input-elements-should-have-autocomplete-attributes
        autoComplete="on"
        onChange={(element) => handleInputChange(element)}
      />
      <Link to="/HappyGreen">
        <button type="submit">Sign me up</button>
      </Link>
    </form>
  );
};

export default FromSignUp;
