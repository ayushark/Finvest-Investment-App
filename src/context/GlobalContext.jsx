import React, { useReducer, createContext } from "react";

export const GlobalContext = createContext([]);

const initialState = {
  email: "ayushrajkhare5@gmail.com",
  //Demographics
  city: "",
  phoneNumber: "",
  politicallyExposed: false,
  partyName: "",
  //Account
  panNumber: "",
  dateOfBirth: "",
  //Bank
  cardHolderName: "",
  debitCardNumber: "",
  expirationDate: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_DEMOGRAPHICS_INFO":
      return {
        ...state,
        city: action.city,
        phoneNumber: action.phoneNumber,
        politicallyExposed: action.politicallyExposed,
        partyName: action.partyName,
      };
    case "SAVE_ACCOUNT_INFO":
      return {
        ...state,
        panNumber: action.panNumber,
        dateOfBirth: action.dateOfBirth,
      };
    case "SAVE_BANK_INFO":
      return {
        ...state,
        cardHolderName: action.cardHolderName,
        debitCardNumber: action.debitCardNumber,
        expirationDate: action.expirationDate,
      };

    default:
      return {
        ...state,
      };
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
