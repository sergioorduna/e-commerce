import React, { createContext, useContext, useReducer } from "react";

// capa donde se almacenan datos por pagina.
export const StateContext = createContext();

// esto provee los datos de las páginas.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//empujamos la información de las páginas
export const useStateValue = () => useContext(StateContext);
