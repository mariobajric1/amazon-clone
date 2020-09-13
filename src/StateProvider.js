import React, { createContext, useContext, useReducer } from "react";

//prepares react contect api / datalayer
export const StateContext = createContext();

//wrap app
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//pull info
export const useStateValue = () => useContext(StateContext);
