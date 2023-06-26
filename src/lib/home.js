import { v4 as uuidv4 } from 'uuid';
import LogisticsIcon from "../assets/LogisticsIcon.png";
import TradeIcon from "../assets/TradeIcon.png";
import RealEstateIcon from "../assets/RealEstateIcon.png";
import KarRus from "../assets/KAR-LLC-Russia.jpeg";
import KarEmlak from "../assets/KAR-Emlak.jpeg";
import KarOu from "../assets/KAR-PETROLEUM-OU.jpeg";
import KarPetRus from "../assets/KAR-PETROLEUM-RUS.webp";
import KarPetUAE from "../assets/KAR-PETROLEUM-UAE.jpg";
// import DobroLLc from "../assets/DobroLLc.jpeg";



export const hero = {
    english: "AOCTABNM \n BONPEKN OACTORTEABCTBAM",
    arabic: "شركة تجارة وشحن واسثمار عقاري"
}

export const scrollDown = {
    english: "scroll down",
    arabic: "التمرير للأسفل",
}

export const cards = [
    {
        id: uuidv4(),
        icon: TradeIcon,
        title: {
            english: "Trade & Stocks",
            arabic: "عربي",
        },
        description: {
            english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            arabic: "عربي",
        },
        to: "/trade",
    },
    {
        id: uuidv4(),
        icon: LogisticsIcon,
        title: {
            english: "Logistics",
            arabic: "عربي",
        },
        description: {
            english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            arabic: "عربي",
        },
        to: "/logistics",
    },
    {
        id: uuidv4(),
        icon: RealEstateIcon,
        title: {
            english: "Real Estate",
            arabic: "عربي",
        },
        description: {
            english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            arabic: "عربي",
        },
        to: "https://www.facebook.com",
    },
]


export const slider = {
    headline: {
        english: "Our Branches & companies are distributed ar. ",
        arabic: "عربي",
    },
    secondaryParagraph: {
        english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its ",
        arabic: "عربي",
    },
    whyKar: {
        english: "Why KarLLC",
        arabic: "عربي",
    },
    filters: [
        {
            english: "TRADE & STOCKS",
            arabic: "عربي",
        },
        {
            english: "LOGISTICS & SHIPPING",
            arabic: "عربي",
        },
        {
            english: "REAL ESTATE",
            arabic: "عربي",
        },
    ],
    branches: [
        {
            id: uuidv4(),
            image: KarRus,
            title: {
                english: "KAR LLC (RUS)",
                arabic: "عربي",
            },
            description: {
                english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The ",
                arabic: "عربي",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
            },
        },
        {
            id: uuidv4(),
            image: KarPetUAE,
            title: {
                english: "KAR PETROLEUM DMCC (UAE)",
                arabic: "عربي",
            },
            description: {
                english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The ",
                arabic: "عربي",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
            },
        },
        {
            id: uuidv4(),
            image: KarEmlak,
            title: {
                english: "KAR EMLAK PETROLEUM (TUR)",
                arabic: "عربي",
            },
            description: {
                english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The ",
                arabic: "عربي",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
            },
        },
        {
            id: uuidv4(),
            image: KarOu,
            title: {
                english: "KAR PETROLEUM OU (ESTONIA)",
                arabic: "عربي",
            },
            description: {
                english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The ",
                arabic: "عربي",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
            },
        },
        {
            id: uuidv4(),
            image: KarPetRus,
            title: {
                english: "KAR LLC (RUS)",
                arabic: "عربي",
            },
            description: {
                english: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The",
                arabic: "عربي",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
            },
        },
    ]
}



export const karInNumbers = {
    title: {
        english: "In numbers",
        arabic: "بالأرقام"
    },
    secondaryParagraph: {
        english: "Like out impact, KAR LLc ability to meet your goals continues to grow.",
        arabic: "عربي",
    },
    items: [
        {
            id: uuidv4(),
            title: {
                english: "Trading volume",
                arabic: "عربي",
            },
            number: 60
        },
        {
            id: uuidv4(),
            title: {
                english: "Cargo shipped monthly",
                arabic: "عربي",
            },
            number: 1000
        },
        {
            id: uuidv4(),
            title: {
                english: "Real State projects",
                arabic: "عربي",
            },
            number: 124
        },
    ]
}


export const getQuote = {
    title: {
        english: "Get a Quote",
        arabic: "عربي",
    },
    button: {
        english: "Send Message",
        arabic: "إرسال"
    },
    inputFields: [
        {
            id: uuidv4(),
            placeHolder: {
                english: "Required Field",
                arabic: "عربي",
            }
        },
        {
            id: uuidv4(),
            placeHolder: {
                english: "Required Field",
                arabic: "عربي",
            }
        },
        {
            id: uuidv4(),
            placeHolder: {
                english: "Required Field",
                arabic: "عربي",
            }
        },
        {
            id: uuidv4(),
            placeHolder: {
                english: "Required Field",
                arabic: "عربي",
            }
        },
        {
            id: uuidv4(),
            placeHolder: {
                english: "Required Field",
                arabic: "عربي",
            }
        },
    ]
}