import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import {Navigate, NavLink, useNavigate} from 'react-router-dom'
import Demographics from "./Demographics";
import { base_Url_UserManagement } from "../api/bootapi";
import LoadingBar from 'react-top-loading-bar'



const MAX_STEPS = 3;

const UserDetailsFormStepper = () => {

  //LoadingBar Progress
  const [progress, setProgress] = useState(0)


  //Error Handler States
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [panError, setPanError] = useState("");


  const [disable, setDisable] = useState(false);


  const navigate = useNavigate();

  //States
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [politicallyExposed, setPoliticallyExposed] = useState( );
  const [partyName, setPartyName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [debitCardNumber, setDebitCardNumber] = useState( "");
  const [expirationDate, setExpirationDate] = useState("");
  

  //Payload for backend
  const payload =  {
    email: `${localStorage.getItem('email')}`,
    city:city,
    partyName:partyName,
    panNumber: panNumber,
    dateOfBirth: dateOfBirth,
    cardHolderName:cardHolderName,
    debitCardNumber:debitCardNumber,
    expirationDate:expirationDate,
    partyName:partyName,
    politicallyExposed:politicallyExposed,
  }
  

   console.log(payload);

  const [error, setError] = useState({
    panError:{
      output:"",
      error: false,
    }

  });

  const validator = (type) => {
    console.log("chalgaya")
     switch(type) {

      case "panNumber": 
          const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/
          if(!regex.test(panNumber)) {
            setDisable(true);
            setError(
              {...error , panError: {
                output: "Pan is Invalid",
                error: false,
  
              }}
            );
            // console.log(panError);
           } else {
            setError({...error, panError: {
              output: "",
              error: true,
            }});
             
            setPanError("");
            setDisable(false);
           }

     }
  }

  console.log(error);



  // console.log(politicallyExposed);
  //Form Step
  const [formStep, setFormStep] = useState(0);
  // console.log(formStep)


  //API Call To Add Data in Backend
  const addUserData = (data) => {
    console.log(data);
    axios.put(`${base_Url_UserManagement}/addUserDetails`, data).then(
      (response) => {
        console.log("User Added Successfully");
        Navigate('/login')
      },
      (error) => {
        // ("Unable to add User!");
        console.log(error);
      }
    );
  };

  // Update Global State At Every Step
  // const updateGlobalState = (e) => {
  //   switch (formStep) {
  //     case 0:
  //       if (city === "" || phoneNumber === "") return;
  //       // save data to global state
  //       dispatch({
  //         type: "SAVE_DEMOGRAPHICS_INFO",
  //         city: city,
  //         phoneNumber: phoneNumber,
  //         politicallyExposed: politicallyExposed,
  //         partyName: partyName,
  //       });
  //       break;

  //     case 1:
  //       if (panNumber === "" || dateOfBirth === "") return;
        
  //       // save data to global state
  //       dispatch({
  //         type: "SAVE_ACCOUNT_INFO",
  //         panNumber: panNumber,
  //         dateOfBirth: dateOfBirth,
  //       });
  //       break;

  //     case 2:
  //       if (
  //         cardHolderName === "" ||
  //         debitCardNumber === "" ||
  //         expirationDate === ""
  //       )
  //         return;
  //       state.cardHolderName = cardHolderName;
  //       state.debitCardNumber = debitCardNumber;
  //       state.expirationDate = expirationDate;
  //       dispatch({
  //         type: "SAVE_BANK_INFO",
  //         cardHolderName: cardHolderName,
  //         debitCardNumber: debitCardNumber,
  //         expirationDate: expirationDate,
  //       });
  //       // console.log(state);
  //       addUserData(state);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  //Move to Next Steps
  const completeFormStep = (e) => {
    
    // if(disable !== true) {
     
    // } 
    setFormStep((cur) => cur + 1);

    if(formStep === 0) {
      setProgress(progress + 20);
    } else if(formStep === 1) {
      setProgress(progress + 50);
    }
    // updateGlobalState(formStep);
    // addUserData(payload);
    e.preventDefault();
  };

  console.log(formStep);
  // Render Buttons Differently for each Pages.
  const renderButton = () => {
    if (formStep > 2) {
      navigate('/home');
    } else if (formStep === 2) {
      return (
        <button
          onClick={() => setProgress(100)}
          type="submit"
          className="mt-6 bg-indigo-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Add Details
        </button>
      );
    } else {
      return (
       <button
          onClick={ 
            completeFormStep
            }
          type="button"
          className="mt-6 bg-indigo-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button> 
      );
      
    }

  };


  // const   handleOnBlur = (e) => {
  //   e.preventDefault();
  //   console.log("Working fine")
  //   const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/
  //   if(!regex.test(panNumber)) {
  //     setDisable(true);
  //     setPanError("Pan Number Invalid");
  //     console.log(panError);
  //    } else {
  //     setPanError("");
  //     setDisable(false);
  //    }
    
  // }

  const handleForm = (e) => {
    e.preventDefault();
    addUserData(payload);
    completeFormStep();
  
  }


  return (
    <React.Fragment>
   <LoadingBar
    color='#f11946'
    progress={progress}
    onLoaderFinished={() => setProgress(0)} />

     <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
      <div className="px-16 py-10">
        <form onSubmit={handleForm}>
          {formStep < MAX_STEPS && <p>Step {formStep + 1} of {MAX_STEPS}</p>}
          {formStep === 0 && (
            <Demographics city={city} setCity = {setCity} phoneNumber = {phoneNumber} setPhoneNumber = {setPhoneNumber} politicallyExposed = {politicallyExposed} setPoliticallyExposed = {setPoliticallyExposed} partyName={partyName} setPartyName = {setPartyName}/>
            // <section>
            //   <h2 className="font-semibold text-3xl mb-8">
            //     Personal Information
            //   </h2>
            //   <label htmlFor="cityName">City</label>
            //   <input
            //     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            //     placeholder="Enter your city"
            //     id="cityName"
            //     //   aria-describedby="emailHelp"
            //     onChange={(e) => setCity(e.target.value)}
            //     defaultValue={city}
            //     required
            //   />

            //   <label htmlFor="phoneNumber">Phone Number</label>
            //   <input
            //     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            //     placeholder="Enter your mobile no."
            //     id="phoneNumber"
            //     onChange={(e) => setPhoneNumber(e.target.value)}
            //     defaultValue={phoneNumber}
            //     type="text"
            //     required
            //   />

            //   <label htmlFor="politicallyExposed">
            //     Are you politically exposed?
            //   </label>
            //   <input
            //     className="inline-block shadow-md, box-border"
            //     type="checkbox"
            //     checked={politicallyExposed}
            //     onChange={e => setPoliticallyExposed(e.target.checked)}
            //   />

            //   <label htmlFor="partyName">Party Name</label>
            //   <input
            //     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            //     placeholder="Your favorite political party"
            //     id="phoneNumber"
            //     onChange={(e) => setPartyName(e.target.value)}
            //     defaultValue={partyName}
            //     type="text"
            //     required
            //   />
            // </section>
          )}

          {formStep === 1 && (
            <section>
              <div className="form-group">
                <label htmlFor="panCardNumber">Enter your PAN</label>
                <input
                className="uppercase m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your PAN No."
                  id="panNumber"
                  onChange={(e) => {
                  setPanNumber(e.target.value);
                  // validator("panNumber")
                }}
                  // setPanNumber(e.target.value)}}
                  // onBlur = {handleOnBlur}
                  // defaultValue={panNumber}
                  required
                />
               {error.panError.error && <div className="text-red-700">{error.panError.data}</div>}
                
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your DOB"
                  id="dateOfBirth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  defaultValue={dateOfBirth}
                  type="text"
                  required
                />
              </div>
            </section>
          )}

          {formStep === 2 && (
            <section>
              <div className="form-group">
                <label htmlFor="debitCardNumber">Card Number</label>
                <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your card no."
                  onChange={(e) => setDebitCardNumber(e.target.value)}
                  defaultValue={debitCardNumber}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Date of Expiry</label>
                <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                  // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Expiry date"
                  onChange={(e) => setExpirationDate(e.target.value)}
                  defaultValue={expirationDate}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardHolder">Card Holder Name</label>
                <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Card Holder"
                  onChange={(e) => setCardHolderName(e.target.value)}
                  defaultValue={cardHolderName}
                  required
                />
              </div>
            </section>
          )}

          {formStep === 3 && (

            <section>
              <h2 className="font-semibold text-3xl mb-8">Congratulations </h2>
              <label htmlFor="address">Your Data has been submitted</label>
              
              <NavLink to= './login'>
              <button className=" block p-8 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Move to Dashboard
              </button>
              </NavLink>
              
            </section>
          )}

          {renderButton()}
        </form>
      </div>
    </div>
    </React.Fragment>
   
   
  );
};

export default UserDetailsFormStepper;
