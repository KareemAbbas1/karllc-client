import { v4 as uuidv4 } from 'uuid';


export const addressData = [
    {
        id: uuidv4(),
        icon: "",
        content: {
            english: "385020, maykop, proletarskaya, 334, office 316",
            arabic: "عربي",
        }
    },
    {
        id: uuidv4(),
        icon: "",
        content: {
            english: "+793 855 09782",
            arabic: "+793 855 09782",
        }
    },
    {
        id: uuidv4(),
        icon: "",
        content: {
            english: "info@karllc-group.com",
            arabic: "info@karllc-group.com",
        }
    },
]


export const quickLinks = [
    {
        id: uuidv4(),
        link: {
            text: {
                english: "About us",
                arabic: "عن الشركة",
            },
            to: "/about-us"
        }
    },
    {
        id: uuidv4(),
        link: {
            text: {
                english: "Contact us",
                arabic: "اتصل بنا",
            },
            to: "/contact-us"
        }
    }
]