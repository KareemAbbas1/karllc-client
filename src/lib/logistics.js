import { v4 as uuidv4 } from 'uuid';


export const hero = {
    headline: {
        english: "Cargo. Delivery. WorldWide.",
        arabic: "شحن. توصيل. في جميع أنحاء العالم.",
        russian: "Доставка грузов по всему миру",
        chinese: "世界各地的货物交付",
    },
    secondaryParagraph: {
        english: "We are focused on fast, high-quality delivery of goods around the world. It is important for us to be trusted by our clients.",
        arabic: "نحن نركز على تسليم سريع وعالي الجودة للبضائع حول العالم. من المهم بالنسبة لنا أن نعرف أن العملاء الذين نعمل معهم يثقون بنا.",
        russian: "Мы ориентированы на быструю качественную доставку грузов по всему миру. Нам важно знать, что клиенты, с которыми мы работаем, доверяют нам.",
        chinese: "我们专注于快速，高质量地交付世界各地的货物。 对我们来说，重要的是要知道与我们合作的客户信任我们。",
    },
    bulletPoints: [
        {
            id: uuidv4(),
            title: {
                english: "Container",
                arabic: "حاوية",
                russian: "Контейнер",
                chinese: "容器",
            },
            paragraph: {
                english: "FCL (Full Container Load) – is an ocean shipping mode, in which the entire container is intended for one supplier and occupies a full container (regardless of size). FCL transportation can be filled directly at the supplier’s warehouse, and then sent to the container yard (container cargo station in the port). The container can be unloaded at the port of destination or the carrier can deliver to the recipient's warehouse.",
                arabic: "FCL (حمولة حاوية كاملة) – هو وضع الشحن البحري، حيث تكون الحاوية بأكملها مخصصة لمورد واحد وتحتل حاوية كاملة (بغض النظر عن الحجم). يمكن تعبئة نقل FCL مباشرة في مستودع المورد، ومن ثم إرساله إلى ساحة الحاويات (محطة شحن الحاويات في الميناء). يمكن تفريغ الحاوية في ميناء الوجهة أو يمكن للناقل تسليمها إلى مستودع المستلم.",
                russian: "FCL (Full Container Load) – режим морской перевозки, при котором весь контейнер предназначен для одного поставщика и занимает полный контейнер (независимо от его размера). Перевозка FCL может быть заполнена непосредственно на складе поставщика, а затем отправлена на контейнерную площадку (контейнерную грузовую станцию в порту). Контейнер может быть выгружен в порту назначения или доставлен перевозчиком на склад получателя.",
                chinese: "FCL（整箱装载）——是一种海运模式，其中整个集装箱供一个供应商使用，并占用一个完整的集装箱（无论尺寸）。整箱运输可直接在供应商仓库装货，然后发往集装箱堆场（港口集装箱货运站）。集装箱可以在目的港卸货，也可以由承运人运送到收件人的仓库。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Air & Sea Cargo",
                arabic: "الشحن الجوي والبحري.",
                russian: "Воздушные и морские перевозки",
                chinese: "空运和海运。",
            },
            paragraph: {
                english: "shipping goods via air carrier or sea freight shipping items are packed and loaded into ship.",
                arabic: "شحن البضائع عبر النقل الجوي أو الشحن البحري ، يتم تعبئة العناصر وتحميلها في السفينة.",
                russian: "Доставка товаров авиаперевозчиком или морским транспортом. Товары упаковываются и загружаются на корабль.",
                chinese: "通过空运或海运运输的货物被包装并装载到船上。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Custome clearance",
                arabic: "التخليص الجمركي.",
                russian: "Таможенное оформление",
                chinese: "报关",
            },
            paragraph: {
                english: "Simplifies documentation generation. Offers expert guidance and support to effortlessly navigate the complexities of customs clearance, expand your business globally, and focus on what matters most, boosting sales.",
                arabic: "يبسط عملية توليد الوثائق. يقدم إرشادات الخبراء والدعم للتغلب بسهولة على تعقيدات التخليص الجمركي، وتوسيع أعمالك على مستوى العالم، والتركيز على الأمور الأكثر أهمية، مما يعزز المبيعات.",
                russian: "Упрощает создание документации. Предлагает экспертное руководство и поддержку, позволяющую легко справляться со сложностями таможенного оформления, расширять свой бизнес по всему миру и сосредоточиться на самом важном — увеличении продаж.",
                chinese: "简化文档生成，提供专家指导和支持，轻松应对复杂的清关、在全球范围内拓展业务，并专注于最重要的事情——促进销售。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Inland Trucks",
                arabic: "الشاحنات الداخلية",
                russian: "Внутренние грузовики",
                chinese: "内陆卡车",
            },
            paragraph: {
                english: "Provides inland trucking from and to all of Egyptian ports/airports. Fast Freight International offers international trucking services from/to all Arab and Middle East countries, offering competitive rates, as well as fast and high-caliber services. Fast Freight International specializes in all kinds of low-bed trailers, for over-sized shipments, and reefer trailers, for fresh and frozen products. Our well-trained & experienced staff is always ready to hear from you for any inquiries, comments & consultations.",
                arabic: "توفير النقل بالشاحنات الداخلية من وإلى جميع الموانئ / المطارات المصرية. نقدم خدمات النقل بالشاحنات الدولية من وإلى جميع الدول العربية والشرق الأوسط، ونقدم أسعار تنافسية، بالإضافة إلى خدمات سريعة وعالية الجودة. تخصص في جميع أنواع المقطورات المنخفضة، الشحنات كبيرة الحجم، والمقطورات المبردة للمنتجات الطازجة والمجمدة. موظفينا المدربون جيدًا وذوي الخبرة على استعداد دائمًا للاستماع إليك في حالة وجود أي استفسارات أو تعليقات أو استشارات.",
                russian: "обеспечивает внутренние грузоперевозки из и во все египетские порты/аэропорты. Fast Freight International предлагает международные грузоперевозки из/во все арабские страны и страны Ближнего Востока, предлагая конкурентоспособные цены, а также быстрые и высококачественные услуги. Fast Freight International специализируется на всех видах низкорамных прицепов для негабаритных грузов и рефрижераторных прицепов для свежих и замороженных продуктов. Наш хорошо обученный и опытный персонал всегда готов услышать ваши вопросы, комментарии и консультации.",
                chinese: "-	提供往返于埃及所有港口/机场的内陆卡车运输。Fast Freight International 提供往返于所有阿拉伯和中东国家的国际货运服务，提供具有竞争力的价格以及快速、高品质的服务。Fast Freight International 专门生产用于超大货物的各种低床拖车以及用于新鲜和冷冻产品的冷藏拖车。我们训练有素且经验丰富的员工随时准备听取您的任何询问、意见和咨询。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Door-to-Door",
                arabic: "من الباب إلى الباب",
                russian: "От двери до двери",
                chinese: "送货上门。",
            },
            paragraph: {
                english: "Fast, easy, and affordable door-to-door shipping services with pick up, delivery, land transportation, customs, paperwork, and 24/7 tracking included. All-inclusive and transparent rates for your door-to-door shipment.",
                arabic: "خدمات شحن سريعة وسهلة وبأسعار معقولة من الباب إلى الباب مع الاستلام والتسليم والنقل البري والجمارك والأعمال الورقية والتتبع على مدار الساعة طوال أيام الأسبوع. أسعار شاملة للشحن من الباب إلى الباب.",
                russian: "Быстрые, простые и доступные услуги доставки «от двери до двери», включающие получение, доставку, наземную транспортировку, таможню, оформление документов и круглосуточное отслеживание. Комплексные и прозрачные тарифы на доставку «от двери до двери».",
                chinese: "快速、简单且经济实惠的门到门运输服务，包括提货、送货、陆运、海关、文书工作和 24/7 跟踪。为您的门到门运输提供全包且透明的费率。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Packing & Shipping",
                arabic: "التعبئة والشحن",
                russian: "Упаковка и доставка",
                chinese: "包装和运输。",
            },
            paragraph: {
                english: "Having a dedicated packing station will streamline your fulfillment process.",
                arabic: "سيؤدي وجود محطة تعبئة مخصصة بالعميل إلى تبسيط عملية التنفيذ الخاصة بك.",
                russian: "Наличие специальной упаковочной станции упростит процесс выполнения заказов.",
                chinese: "拥有专门的包装站将简化您的履行流程。"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Quarries Products",
                arabic: "منتجات المحاجر",
                russian: "Карьерная продукция",
                chinese: "出口采石场产品。",
            },
            paragraph: {
                english: "N/A",
                arabic: "N/A",
                russian: "N/A",
                chinese: "N/A"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Fruits & Vegetables",
                arabic: "الفاكهة والخضروات",
                russian: "Фрукты и овощи",
                chinese: "水果和蔬菜。",
            },
            paragraph: {
                english: "Supplying a premium quality fresh fruits and vegetables in order to fulfill needs all year round. Packaging, pesticide Management and traceability system. Confidence, continuity and premium products.",
                arabic: "توفير الفواكه والخضروات الطازجة عالية الجودة لتلبية الاحتياجات على مدار السنة. نظام التعبئة والتغليف وإدارة المبيدات وتتبعها. الثقة والاستمرارية والمنتجات المتميزة.",
                russian: "Поставка свежих фруктов и овощей высшего качества для удовлетворения потребностей круглый год. упаковка, управление пестицидами и система отслеживания. Уверенность, непрерывность и продукты премиум-класса",
                chinese: "供应优质新鲜水果和蔬菜，以满足全年需求。包装、农药管理和追溯系统。信心、连续性和优质产品"
            }
        },
        {
            id: uuidv4(),
            title: {
                english: "Chartering",
                arabic: "استئجار",
                russian: "Фрахтование",
                chinese: "租船",
            },
            paragraph: {
                english: "Chartering Tanker Vessels, Bulk Vessels, Cargo Vessels and Ro/Ro Vessel to anywhere and everywhere.",
                arabic: "تأجير السفن الناقلة والسفن السائبة وسفن الشحن وسفن الدحرجة إلى أي مكان وفي كل مكان.",
                russian: "Фрахтование танкеров, навалочных судов, грузовых судов и судов ро/ро в любом месте и в любом месте.",
                chinese: "将油轮、散货船、货船和滚装船租到任何地方"
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