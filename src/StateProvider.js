import React,{createContext, useContext, useReducer} from "react";

//PREPARE THE DATALAYER
export const StateContext = createContext();

//WERAP THE APP AND PROVIDE THE DATA LAYER

export const StateProvider = ({reducer, initialState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//PULL INFORMATIO FROM THE DATA LAYER
export const useStateValue = () => useContext(StateContext);
