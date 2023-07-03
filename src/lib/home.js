import { v4 as uuidv4 } from 'uuid';
import LogisticsIcon from "../assets/LogisticsIcon.png";
import TradeIcon from "../assets/TradeIcon.png";
import RealEstateIcon from "../assets/RealEstateIcon.png";
import KarRus from "../assets/KAR-LLC-Russia.jpeg";
import KarEmlak from "../assets/KAR-Emlak.jpeg";
import KarOu from "../assets/KAR-PETROLEUM-OU.jpeg";
import KarPetRus from "../assets/KAR-PETROLEUM-RUS.webp";
import KarPetUAE from "../assets/KAR-PETROLEUM-UAE.jpg";
import Tourism from "../assets/Tourism.jpg";
import ToleranceBg from "../assets/ToleranceBg.jpg";
import Dobro from "../assets/Dobro.jpeg";



export const hero = {
    english: "KAR LLC \nGROUP\nBUSSINES INCLUDES",
    arabic: "بعض الأعمال\nالتي تشملها\nمجموعة شركات كار",
    russian: "Деятельность\nгрупп\nкомпаний \"K.A.R\"",
    chinese: "“K.A.R”\n公司集团的活动"
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
            english: "Trade",
            arabic: "التجارة",
            russian: "Торговля",
            chineese: "贸易"
        },
        description: {
            english: "we will be happy to help you organize your activities in the field of trade. ",
            arabic: "يسعدنا مساعدتك في تنظيم أنشطتك في مجال التجارة.",
            russian: "мы с радостью поможем вам организовать вашу деятельность в сфере торговли.",
            chineese: "我们很乐意帮助您组织您在贸易领域的活动"
        },
        to: "/trade",
    },
    {
        id: uuidv4(),
        icon: LogisticsIcon,
        title: {
            english: "Logistics",
            arabic: "الخدمات اللوجستية",
            russian: "логистика.",
            chineese: "后勤。"
        },
        description: {
            english: "Our highly qualified team will prepare the best ship for your cargo and offer the best price on the market.",
            arabic: "سيقوم فريقنا المؤهل تأهيلا عاليا بإعداد أفضل سفينة لشحنتك وتقديم أفضل سعر في السوق.",
            russian: "Наша высококвалифицированная команда подготовит для вашего груза оптимальный корабль и предложит лучшую цену на рынке.",
            chineese: "我们高素质的团队将为您的货物准备最好的船，并提供市场上最优惠的价格。"
        },
        to: "/logistics",
    },
    {
        id: uuidv4(),
        icon: RealEstateIcon,
        title: {
            english: "Real Estate",
            arabic: "التطوير العقاري",
            russian: "недвижимость. ",
            chineese: "房地产。"
        },
        description: {
            english: "Our Turkish office will help you organize the purchase of housing at the best prices, as well as assistance in paperwork",
            arabic: "سيساعدك مكتبنا في تركيا في تنظيم شراء المساكن بأفضل الأسعار ، بالإضافة إلى المساعدة في الأعمال الورقية",
            russian: "Наш Турецкий офис поможет вам организовать покупку жилья по лучшим ценам, также помощь в оформлении документов",
            chineese: "我们的土耳其办事处将帮助您以最优惠的价格安排购买住房，并协助办理文书工作"
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
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "“KAR” LLC is located in Russia and the main activity of the company is the export of sugar to other countries. The high quality of transportation allows you to deliver sugar without losing the quality of the product. Our highly qualified team will take care of all the necessary documentation for the transportation of the goods. We have many satisfied clients. Ready for cooperation.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: KarPetUAE,
            title: {
                english: "KAR PETROLEUM DMCC (UAE)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "KAR PETROLEUM DMCC is based in the United Arab Emirates. The main activity is the sale of oil and oil products. We entrust this difficult task to true professionals. Documentation, loading and delivery is fully handled by our company. We value our reputation and want our customers to be satisfied with the quality.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: KarEmlak,
            title: {
                english: "KAR EMLAK PETROLEUM (TUR)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "The main activity of the Kar Petroleum LLC is petroleum products. We deliver from all over the world. Our customers have trusted the quality of our products for many years. Kar Petroleum LLC (Turkey) is engaged in the wholesale supply of food products. We guarantee excellent quality and fast delivery. We are interested in our customers receiving high quality products in a short time and at a good price.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: KarOu,
            title: {
                english: "KAR PETROLEUM OU (ESTONIA)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "The company is located in Estonia and sells engine oil and fuel. We have reliable suppliers, a large assortment and excellent product quality. It is important for us that every time you choose.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: KarPetRus,
            title: {
                english: "KAR LLC (RUS)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "Production of building materials is the main activity of the company. We use quality wood (pine) for processing. Our factory employs highly experienced specialists who monitor the progress of wood processing. We have purchased high-tech machines that cut wood with high precision. The sawdust that remains after processing the wood is pressed and briquettes are obtained. Our product will be exported to other countries. Houses built from our materials will serve for a long time. You and your family will appreciate the high quality.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: Tourism,
            title: {
                english: "Celine Tourism LLC (RUS)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "If you want to take a break from the daily bustle, visit new countries, learn the culture of the peoples of the world or just have a great time, then our travel agency ‘’CELINE TOURISM’’ will always help you with this! Our company is always ready to suggest any information on the direction you are interested in (most often confirmed by personal experience). We also offer assistance in choosing a tour at a special price, assistance in obtaining a visa, finding hotels and simply unloading you from these worries and allowing you to enjoy your vacation. We care about our customers.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: ToleranceBg,
            title: {
                english: "Tolerance Real Estate (TUR)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "It is a Turkish company specializing in real estate and legal advice in modern residential complexes (apartments and villas) and commercial real estate (offices and shops) and has branches in many Turkish provinces, we are proud of our multinational professional staff scattered inside and outside Turkey with years of experience in the field, qualified and authorized to provide professional real estate advice to our valued clients K.A.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
        },
        {
            id: uuidv4(),
            image: Dobro,
            title: {
                english: "DOBRO LLC (RUS)",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            description: {
                english: "Our company is engaged in the production and sale of halal meat of the highest quality. We also produce wheat flour and dairy products such as cheese, yogurt, cottage cheese. Eco-friendly products will delight you and your family every day.",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
            },
            readMore: {
                english: "Read more",
                arabic: "عربي",
                russian: "rus",
                turkish: "tur",
                chineese: "chi",
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