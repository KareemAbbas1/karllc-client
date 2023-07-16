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
            title: {
                english: "Freight Transportation",
                arabic: "نقل الشحنات.",
                russian: "Доставка грузов",
                chinese: "货物交付",
            },
            paragraph: {
                english: "Container:\n Based on container type, loading, discharge point, CIF rate, THC.\nChartering:\n Based on type, loading, time of loading and discharge, estination rate",
                arabic: "الحاوية:\n بناءً على نوع الحاوية ، التحميل ، نقطة التفريغ ، معدل CIF ، THC.\nالتأجير:\n على أساس النوع ، التحميل ، وقت التحميل والتفريغ ، معدل التجهيز",
                russian: "集装箱：\n 基于集装箱类型、装货点、卸货点、CIF 费率、THC。\n 租船：\n根据类型、装载情况、装卸时间、预计费率",
                chinese: "Контейнер:\n в зависимости от типа контейнера, загрузки, точки разгрузки, ставки CIF, THC.\nФрахтование:\n в зависимости от типа, погрузки, времени погрузки и разгрузки, скорости отправления."
            }
        },
        {
            title: {
                english: "Warehousing and Distribution",
                arabic: "التخزين والتوزيع.",
                russian: "Складирование и дистрибьюция",
                chinese: "储存及分发",
            },
            paragraph: {
                english: "Select the port and your preferred warehouse within that port.",
                arabic: "حدد المنفذ والمستودع المفضل لديك داخل هذا المنفذ.",
                russian: "Выберите порт и предпочитаемый склад в этом порту.",
                chinese: "选择港口以及该港口内您的首选仓库。"
            }
        },
        {
            title: {
                english: "Customs Clearance",
                arabic: "التخليص الجمركي.",
                russian: "Таможенное оформление",
                chinese: "清关服务",
            },
            paragraph: {
                english: "Available for all ports expect Egypt",
                arabic: "متاح لجميع الموانئ ماعدا مصر.",
                russian: "Доступно для всех портов, кроме Египта",
                chinese: "适用于除埃及以外的所有港口"
            }
        },
    ],
    getQuote: {
        english: "Get a Quote",
        arabic: "احصل على عرض",
        russian: "Подробности",
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
                english: "What is international logistics?",
                arabic: "ما هي الخدمات اللوجستية الدولية؟",
                russian: "Что такое международная логистика?",
                chinese: "什么是国际物流？",
            },
            a: {
                english: "International logistics is the organization and management of the movement of goods and information across borders of different countries.",
                arabic: "اللوجستيات الدولية هي تنظيم وإدارة حركة البضائع والمعلومات عبر حدود البلدان المختلفة.",
                russian: "Международная логистика - это организация и управление перемещением товаров и информации через границы разных стран.",
                chinese: "国际物流是指通过管理及组织不同国家之间的货物和信息流动。",
            }
        },
        {
            id: uuidv4(),
            q: {
                english: "What are the key advantages of international logistics?",
                arabic: "ما هي المزايا الرئيسية للخدمات اللوجستية الدولية؟",
                russian: "Какие основные преимущества международной логистики?",
                chinese: "国际物流有哪些主要优势？",
            },
            a: {
                english: "International logistics allows companies to expand their market reach, gain access to new customers and resources, and improve the efficiency of product delivery.",
                arabic: "تسمح الخدمات اللوجستية الدولية للشركات بتوسيع نطاق وصولها إلى الأسواق ، والوصول إلى عملاء وموارد جديدة ، وتحسين كفاءة توصيل المنتج.",
                russian: "Международная логистика позволяет компании расширить свой рынок сбыта, получить доступ к новым клиентам и ресурсам, а также улучшить эффективность поставок товаров.",
                chinese: "国际物流使得公司能够拓展市场，获得新的客户和资源，并提高产品交付的效率。",
            }
        },
        {
            id: uuidv4(),
            q: {
                english: "What challenges and difficulties can arise in international logistics?",
                arabic: "ما هي التحديات والصعوبات التي يمكن أن تنشأ في مجال الخدمات اللوجستية الدولية؟",
                russian: "Какие вызовы и трудности могут возникнуть в сфере международной логистики?",
                chinese: "国际物流可能会遇到哪些挑战和困难？",
            },
            a: {
                english: "Some of the main challenges include complexities in customs clearance, differences in rules and regulations between countries, language and cultural barriers, as well as managing the lengthy delivery process.",
                arabic: "تشمل بعض التحديات الرئيسية التعقيدات في التخليص الجمركي ، والاختلافات في القواعد واللوائح بين البلدان ، والحواجز اللغوية والثقافية ، فضلاً عن إدارة عملية التسليم المطولة.",
                russian: "Некоторые из основных трудностей включают сложности в таможенном оформлении, различия в правилах и нормах между странами, языковые и культурные барьеры, а также управление длинным процессом доставки.",
                chinese: "一些主要挑战包括复杂的海关清关过程，不同国家之间的规则和法规的差异，语言和文化障碍，以及管理漫长的交货过程。",
            }
        },
    ]
}