import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import registerBackground from "../assets/mydollarImage.jpg";
import {NavLink, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { base_Url_UserManagement } from "../api/bootapi";
import axios from "axios";
const RegisterPage = () => {
  
  const [registerationData, setregisterationData] = useState();
   const navigate = useNavigate();

    //  console.log(registerationData.email)
    const registerUser = (data) => {
      console.log(data);
      axios
      .post(`${base_Url_UserManagement}/registerUser`,data)
      .then(
        (response)=>{
          console.log(response);
          navigate('/add-user-details');
        },
        (error)=>{
          console.log(error);
        }
      )
    }


  let myemail = '';

  // console.log(registerationData);
  const handleForm = (e) => {
    console.log("this is working");
    console.log(registerationData.email);
   
    localStorage.setItem("email", `${registerationData.email}`);
    
     registerUser(registerationData);
    e.preventDefault();
  }

  return (

    <>
    <Navbar/>
           <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-4">
            <img className="object-fill" src= {registerBackground}alt=""  />
      </div>
      <div class=" col-start-4 col-end-7 ml-8 mt-4">
       
          <div class=" bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8">
          

              <form class="max-w-lg border rounded-lg p-4 h-full" onSubmit={handleForm}>
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold mx-8 mt-4">
                Create your account
              </h2>
              <p class="text-indigo-500 font-semibold mx-8 mt-1">Increase your wealth by investing<span className="block">  into our smart portfolios.</span></p>
                <div class="flex flex-col gap-4 p-4 md:p-8">
                <div>
                    <label
                      for="firstName"
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                     First Name
                    </label>
                    <input
                      name="firstName"
                      onChange={(e) => {
                        setregisterationData({ ...registerationData, firstName:e.target.value });
                      }}
                      required
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>  
                  <div>
                    <label
                      for="lastName"
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      onChange={(e) => {
                        setregisterationData({ ...registerationData, lastName:e.target.value });
                      }}
                      required
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>  
                  <div>
                    <label
                      for="email"
                      
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      onChange={(e) => {
                        setregisterationData({ ...registerationData, email:e.target.value });
                      }}
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label
                      for="password"
                      required  
                      class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      onChange={(e) => {
                        setregisterationData({ ...registerationData, password:e.target.value });
                      }}
                      class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>

                  <button class="block bg-indigo-500 hover:bg-indigo-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Register
                  </button>
                </div>

                <div class="flex justify-center items-center bg-gray-100 p-4">
                  <p class="text-gray-500 text-sm text-center">
                    Already have an account?{" "}
                    <NavLink
                      to="#"
                      class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                    >
                      Login
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
 
  );
};

export default RegisterPage;
