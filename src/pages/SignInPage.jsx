import React, { useState } from "react"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {NavLink, useNavigate} from 'react-router-dom'
import loginBackground from '../assets/mydollarImage.jpg'
import { base_Url_AuthManagement } from "../api/bootapi";
import axios from "axios"

const SignInPage = () => {

  const navigate = useNavigate();
  const [SignInData, setSignInData] = useState();
 //formHandler fUNCTION
 const handleForm = (e) => {
  authentication(SignInData);
  e.preventDefault();
};


const authentication = (data) => {
  axios.post(`${base_Url_AuthManagement}/token`, data).then(
    (response) => {
      //console.log(response.data);
      navigate('/home')
      console.log('sucess');
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      //  console.log(localStorage.getItem("token"));
    },
    (error) => {
    console.log(error);
    }
  );
};  


  return (
    <>
    <Navbar/>
    <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-4">
            <img className="object-fill" src= {loginBackground}alt=""  />
      </div>
      <div class=" col-start-4 col-end-7 ml-8 mt-4">
       
          <div class=" bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8">
          

              <form class="max-w-lg border rounded-lg p-4 h-full" onSubmit={handleForm}>
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold mx-8 mt-4">
                Welcome back
              </h2>
              <p class="text-gray-400 font-regular mx-8">Please enter your details</p>
                <div class="flex flex-col gap-4 p-4 md:p-8">
                  <div>
                    <label
                      for="email"
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      onChange={(e) => {
                        setSignInData({ ...SignInData, email: e.target.value });
                      }}
                   />
                  </div>

                  <div>
                    <label
                      for="password"
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      onChange={(e) => {
                        setSignInData({ ...SignInData, password: e.target.value });
                      }}
                    />
                  </div>

                  <button class="block bg-indigo-500 hover:bg-indigo-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Log in
                  </button>
                </div>

                <div class="flex justify-center items-center bg-gray-100 p-4">
                  <p class="text-gray-500 text-sm text-center">
                    Don't have an account?{" "}
                    <NavLink
                      to="#"
                      class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                    >
                      Register
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
    
    </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default SignInPage