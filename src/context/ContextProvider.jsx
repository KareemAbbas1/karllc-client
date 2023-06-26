/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    language: "",
    setLanguage: () => { },
});


export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("LANG") ? localStorage.getItem("LANG") : "English");

    return (
        <StateContext.Provider value={{
            language,
            setLanguage
        }}
        >
            {children}
        </StateContext.Provider>
    )
};


export const UseStateContext = () => useContext(StateContext);