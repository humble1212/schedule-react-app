import React from "react";
import Authentication from "./UserRegistrationPage/Authentication";
import "./App.css";
import { useState } from "react";
import MainPage from "./Mainpage/MainPage";

function App() {
  const [pageState, setPagestate] = useState(true);
  const [loginState, setLoginState] = useState(false);

  function switchToMainPage() {
    pageState === true ? setPagestate(false) : setPagestate(true);
  }
  function switchLoginPage() {
    loginState === false ? setLoginState(true) : setLoginState(false);
  }

  const submitRegistration = (e) => {
    e.preventDefault();
    switchLoginPage();
  };

  const submitLogin = (e) => {
    e.preventDefault();
    switchToMainPage();
  };

  // todo: do the password confirmation before page loading
  return (
    <main className="Auth-page-css">
      {pageState ? (
        <Authentication
          submitRegistration={submitRegistration}
          submitLogin={submitLogin}
          loginState={loginState}
          setLoginState={setLoginState}
        />
      ) : (
        <MainPage />
      )}
    </main>
  );
}

export default App;
