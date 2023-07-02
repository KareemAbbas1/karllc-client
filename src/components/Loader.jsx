import styled from "styled-components"
import Logo from '../assets/Logo.png'



const Loading = styled.div`
    border: 6px solid #f3f3f3;
    border-radius: 50%;
    border-top: 6px solid #1869FE;
    width: 220px;
    height: 220px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`
const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            <Loading />
            <img src={Logo} className="w-[100px] h-auto absolute" />
        </div>
    )
}

export default Loader