/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    language: "",
    setLanguage: () => { },
    loading: false,
    setLoading: () => { },
    openMenu: false,
    setOpenMenu: () => { }
});


export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("LANG") ? localStorage.getItem("LANG") : "English");
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <StateContext.Provider value={{
            language,
            setLanguage,
            openMenu,
            setOpenMenu,
            loading,
            setLoading
        }}
        >
            {children}
        </StateContext.Provider>
    )
};


export const UseStateContext = () => useContext(StateContext);