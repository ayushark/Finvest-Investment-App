import React from "react";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import Protected from "./components/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetailsFormStepper from "./pages/UserDetailsFormStepper";
import { GlobalContextProvider } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";

function App({history}) {

  function check() {
    if (localStorage.getItem("token") == null) {
      console.log("token not find");
      return false;
    }
    return true;
  }



  // function checkEmail() {
    
  //   if (localStorage.getItem("email") == null) {
  //     console.log("Email not find");
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<LandingPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route
            exact
            path="/add-user-details"
            element={
              // <Protected isRegistered = {checkEmail()}>
                <UserDetailsFormStepper />
              // </Protected>
            }
          />
        
        <Route
            exact
            path="/home"
            element={
              <Protected isLoggedIn = {check()}>
                <HomePage />
              </Protected>
            }
          />
        {/* <Route exact path="/add-user-details" element={ <UserDetailsFormStepper />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
