/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import styled from "styled-components";
// import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
import ScrollToTop from "./ScrollToTop";
import { UseStateContext } from "../context/ContextProvider"





const PageComponent = ({ children }) => {

    const { setOpenMenu } = UseStateContext();

    


    return (
        <>
            <main
                onClick={() => setOpenMenu(false)}
            // className="flex items-center w-screen h-auto border border-black"
            // style={{ height: 'calc(100vh - 104px)'}}
            >
                <ScrollToTop />

                <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto px-2 xl:px-12 2xl:px-0 ">
                    {children}

                    
                </div>
            </main>
        </>
    )
}

export default PageComponent