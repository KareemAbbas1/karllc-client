/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    language: "",
    setLanguage: () => { },
    loading: false,
    setLoading: () => { },
    openMenu: false,
    setOpenMenu: () => { },
    onScrollableLinkClick: () => {},
});




export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("LANG") ? localStorage.getItem("LANG") : "English");
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(true);



    const scrollTo = (id) => {
        window.scrollTo({ top: `${document.getElementById(id).offsetTop}` });
    };

    const onScrollableLinkClick = (id, currentLocation, navigate) => {
        if (currentLocation.pathname !== "/") {
            setLoading(true)
            navigate("/");
            setOpenMenu(false)
            setTimeout(() => {
                scrollTo(id)
            }, 300)
        } else {
            setOpenMenu(false)
            scrollTo(id)
        }
    }

    return (
        <StateContext.Provider value={{
            language,
            setLanguage,
            openMenu,
            setOpenMenu,
            loading,
            setLoading,
            onScrollableLinkClick
        }}
        >
            {children}
        </StateContext.Provider>
    )
};


export const UseStateContext = () => useContext(StateContext);