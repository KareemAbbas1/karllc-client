import { v4 as uuidv4 } from 'uuid';


export const hero = {
    headline: {
        english: "Cargo. Delivery. WorldWide.",
        arabic: "شحن. توصيل. في جميع أنحاء العالم.",
        russian: "Доставка грузов по всему миру",
        chinese: "世界各地的货物交付",
    },
    secondaryParagraph: {
        english: "We are focused on fast, high-quality delivery of goods around the world. It is important for us to know that the clients we work with trust us.",
        arabic: "نحن نركز على تسليم سريع وعالي الجودة للبضائع حول العالم. من المهم بالنسبة لنا أن نعرف أن العملاء الذين نعمل معهم يثقون بنا.",
        russian: "Мы ориентированы на быструю качественную доставку грузов по всему миру. Нам важно знать, что клиенты, с которыми мы работаем, доверяют нам.",
        chinese: "我们专注于快速，高质量地交付世界各地的货物。 对我们来说，重要的是要知道与我们合作的客户信任我们。",
    },
    bulletPoints: [
        {
            english: "Freight Transportation",
            arabic: "نقل الشحنات.",
            russian: "Доставка грузов",
            chinese: "货物交付",
        },
        {
            english: "Warehousing and Distribution",
            arabic: "التخزين والتوزيع.",
            russian: "Складирование и дистрибьюция",
            chinese: "储存及分发",
        },
        {
            english: "Customs Clearance",
            arabic: "التخليص الجمركي.",
            russian: "Таможенное оформление",
            chinese: "清关服务",
        },
    ],
    getQuote: {
        english: "Get a Quote",
        arabic: "احصل على عرض",
        russian: "получить цитату",
        chinese: "获取报价",
    },
}


export const cardsSection = {
    paragraph: {
        english: "Customized solutions for your business",
        arabic: "حلول مخصصة لعملك",
        russian: "Индивидуальные решения для вашего бизнеса",
        chinese: "为您的业务定制解决方案",
    },
    cards: [
        {
            id: 1,
            title: {
                english: "By Land",
                arabic: "بري",
                russian: "По суше",
                chinese: "陆路",
            },
            cost: {
                english: "From $2.5 per lbs",
                arabic: "",
            },
            weight: {
                english: "Up to 44,000 lbs",
                arabic: ""
            }
        },
        {
            id: 2,
            title: {
                english: "By Air",
                arabic: "جوي",
                russian: "Самолетом",
                chinese: "乘飞机",
            },
            cost: {
                english: "From $9 per lbs",
                arabic: ""
            },
            weight: {
                english: "Up to 20,000 lbs",
                arabic: ""
            }
        },
        {
            id: 3,
            title: {
                english: "By Sea",
                arabic: "بحري",
                russian: "Морем",
                chinese: "海运",
            },
            cost: {
                english: "From $2.5 per lbs",
                arabic: ""
            },
            weight: {
                english: "&infin;",
                arabic: "&infin;"
            }
        },
    ]
}

export const faqs = {
    paragraph: {
        english: "We are focused on fast, high-quality delivery of goods around the world. It is important for us to know that the clients we work with trust us.",
        arabic: "نحن نركز على تسليم سريع وعالي الجودة للبضائع حول العالم. من المهم بالنسبة لنا أن نعرف أن العملاء الذين نعمل معهم يثقون بنا.",
        russian: "Мы ориентированы на быструю качественную доставку грузов по всему миру. Нам важно знать, что клиенты, с которыми мы работаем, доверяют нам.",
        chinese: "我们专注于快速，高质量地交付世界各地的货物。 对我们来说，重要的是要知道与我们合作的客户信任我们。",
    },
    questions: [
        {
            id: uuidv4(),
            q: {
                english: "How do you define logistics and transport?",
                arabic: "كيف تُّعرف الخدمات اللوجستية والنقل؟",
                russian: "Как вы определяете логистику и транспорт?",
                chinese: "如何定义物流和运输?",
            },
            a: {
                english: "Transportation - moving goods from one place to another - is part of logistics. Logistics also includes product packaging for storage, shipping, and distribution networks that move products inside and outside the company to its customers.",
                arabic: "يعد نقل البضائع من مكان إلى آخر جزءًا من الخدمات اللوجستية. تشمل الخدمات اللوجستية أيضًا تغليف المنتجات لشبكات التخزين والشحن والتوزيع التي تنقل المنتجات داخل الشركة وخارجها إلى عملائها.",
                russian: "Транспортировка - перемещение товаров из одного места в другое - является частью логистики. Логистика также включает в себя упаковку продукции для хранения, отгрузку и распределительные сети, которые перемещают продукцию внутри компании и снаружи к ее клиентам.",
                chinese: "运输-将货物从一个地方移动到另一个地方-是物流的一部分。 物流还包括用于存储，运输和分销网络的产品包装，这些网络将产品在公司内外移动给客户。",
            }
        },
        {
            id: uuidv4(),
            q: {
                english: "How do you define logistics and transport?",
                arabic: "كيف تُّعرف الخدمات اللوجستية والنقل؟",
                russian: "Как вы определяете логистику и транспорт?",
                chinese: "如何定义物流和运输?",
            },
            a: {
                english: "Transportation - moving goods from one place to another - is part of logistics. Logistics also includes product packaging for storage, shipping, and distribution networks that move products inside and outside the company to its customers.",
                arabic: "يعد نقل البضائع من مكان إلى آخر جزءًا من الخدمات اللوجستية. تشمل الخدمات اللوجستية أيضًا تغليف المنتجات لشبكات التخزين والشحن والتوزيع التي تنقل المنتجات داخل الشركة وخارجها إلى عملائها.",
                russian: "Транспортировка - перемещение товаров из одного места в другое - является частью логистики. Логистика также включает в себя упаковку продукции для хранения, отгрузку и распределительные сети, которые перемещают продукцию внутри компании и снаружи к ее клиентам.",
                chinese: "运输-将货物从一个地方移动到另一个地方-是物流的一部分。 物流还包括用于存储，运输和分销网络的产品包装，这些网络将产品在公司内外移动给客户。",
            }
        },
        {
            id: uuidv4(),
            q: {
                english: "How do you define logistics and transport?",
                arabic: "كيف تُّعرف الخدمات اللوجستية والنقل؟",
                russian: "Как вы определяете логистику и транспорт?",
                chinese: "如何定义物流和运输?",
            },
            a: {
                english: "Transportation - moving goods from one place to another - is part of logistics. Logistics also includes product packaging for storage, shipping, and distribution networks that move products inside and outside the company to its customers.",
                arabic: "يعد نقل البضائع من مكان إلى آخر جزءًا من الخدمات اللوجستية. تشمل الخدمات اللوجستية أيضًا تغليف المنتجات لشبكات التخزين والشحن والتوزيع التي تنقل المنتجات داخل الشركة وخارجها إلى عملائها.",
                russian: "Транспортировка - перемещение товаров из одного места в другое - является частью логистики. Логистика также включает в себя упаковку продукции для хранения, отгрузку и распределительные сети, которые перемещают продукцию внутри компании и снаружи к ее клиентам.",
                chinese: "运输-将货物从一个地方移动到另一个地方-是物流的一部分。 物流还包括用于存储，运输和分销网络的产品包装，这些网络将产品在公司内外移动给客户。",
            }
        },
        {
            id: uuidv4(),
            q: {
                english: "How do you define logistics and transport?",
                arabic: "كيف تُّعرف الخدمات اللوجستية والنقل؟",
                russian: "Как вы определяете логистику и транспорт?",
                chinese: "如何定义物流和运输?",
            },
            a: {
                english: "Transportation - moving goods from one place to another - is part of logistics. Logistics also includes product packaging for storage, shipping, and distribution networks that move products inside and outside the company to its customers.",
                arabic: "يعد نقل البضائع من مكان إلى آخر جزءًا من الخدمات اللوجستية. تشمل الخدمات اللوجستية أيضًا تغليف المنتجات لشبكات التخزين والشحن والتوزيع التي تنقل المنتجات داخل الشركة وخارجها إلى عملائها.",
                russian: "Транспортировка - перемещение товаров из одного места в другое - является частью логистики. Логистика также включает в себя упаковку продукции для хранения, отгрузку и распределительные сети, которые перемещают продукцию внутри компании и снаружи к ее клиентам.",
                chinese: "运输-将货物从一个地方移动到另一个地方-是物流的一部分。 物流还包括用于存储，运输和分销网络的产品包装，这些网络将产品在公司内外移动给客户。",
            }
        },
    ]
}