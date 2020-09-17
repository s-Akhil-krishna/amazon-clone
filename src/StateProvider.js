import React, { createContext, useContext, useReducer } from "react";

//preparing the datalayer
export const StateContext = createContext();

//linking the datalayer with our app.{providing the access to datalayer}
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// // Wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// // Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);