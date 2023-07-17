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
            chinese: "贸易"
        },
        description: {
            english: "We will be happy to help you organize your activities in the field of trade. ",
            arabic: "يسعدنا مساعدتك في تنظيم أنشطتك في مجال التجارة.",
            russian: "Mы с радостью поможем вам организовать вашу деятельность в сфере торговли.",
            chinese: "我们很乐意帮助您组织您在贸易领域的活动"
        },
        to: "/trade",
    },
    {
        id: uuidv4(),
        icon: LogisticsIcon,
        title: {
            english: "Logistics",
            arabic: "الخدمات اللوجستية",
            russian: "Логистика",
            chinese: "后勤。"
        },
        description: {
            english: "Our highly qualified team will prepare the best ship for your cargo and offer the best price on the market.",
            arabic: "سيقوم فريقنا المؤهل تأهيلا عاليا بإعداد أفضل سفينة لشحنتك وتقديم أفضل سعر في السوق.",
            russian: "Наша высококвалифицированная команда подготовит для вашего груза оптимальный корабль и предложит лучшую цену на рынке.",
            chinese: "我们高素质的团队将为您的货物准备最好的船，并提供市场上最优惠的价格。"
        },
        to: "/logistics",
    },
    {
        id: uuidv4(),
        icon: RealEstateIcon,
        title: {
            english: "Real Estate",
            arabic: "التطوير العقاري",
            russian: "Недвижимость",
            chinese: "房地产。"
        },
        description: {
            english: "Our Turkish office will help you organize the purchase of housing at the best prices, as well as assistance in paperwork",
            arabic: "سيساعدك مكتبنا في تركيا في تنظيم شراء المساكن بأفضل الأسعار ، بالإضافة إلى المساعدة في الأعمال الورقية",
            russian: "Наш Турецкий офис поможет вам организовать покупку жилья по лучшим ценам, также помощь в оформлении документов",
            chinese: "我们的土耳其办事处将帮助您以最优惠的价格安排购买住房，并协助办理文书工作"
        },
        to: "https://tolerance-realestate.com/",
    },
]


export const slider = {
    headline: {
        english: "Our Branches & companies are distributed around the world. ",
        arabic: "فروعنا وشركاتنا موزعة في جميع أنحاء العالم.",
        russian: "Наши филиалы и компании распределены по всему миру.",
        chinese: "我们的分支机构和公司分布在世界各地。"
    },
    secondaryParagraph: {
        english: "Like out impact, KAR LLc ability to meet your goals continues to grow.",
        arabic: "مثل التأثير الخارجي ، تستمر قدرة مجوعة شركات على تحقيق أهدافك في النمو.",
        russian: "Как и наше влияние, способность ООО «КАР» достигать поставленных целей продолжает расти.",
        chinese: "与我们的影响力一样，KAR LLc 实现您目标的能力也在不断增强。"
    },
    whyKar: {
        english: "Why KarLLC",
        arabic: "لماذا كار",
        russian: "почему ООО \"К.А.Р.\"",
        chinese: "为什么选择卡尔有限责任公司"
    },
    filters: [
        {
            english: "TRADE",
            arabic: "التجارة",
            russian: "Торговля",
            chinese: "贸易",
            to: "/trade"
        },
        {
            english: "LOGISTICS & SHIPPING",
            arabic: "الخدمات اللوجيستية",
            russian: "Логистика",
            chinese: "后勤。",
            to: "/logistics"
        },
        {
            english: "REAL ESTATE",
            arabic: "التطوير العقاري",
            russian: "Недвижимость",
            chinese: "房地产。",
            to: "https://tolerance-realestate.com/"
        },
    ],
    branches: [
        {
            id: uuidv4(),
            image: KarPetUAE,
            title: {
                english: "KAR PETROLEUM DMCC (UAE)",
                arabic: "عربي",
                russian: "КАР ПЕТРОЛЕУМ DMCC (ОАЭ)",
                chinese: "KAR LLC（俄罗斯）",
            },
            description: {
                english: "KAR PETROLEUM DMCC is based in the United Arab Emirates. The main activity is the sale of oil and oil products. We entrust this difficult task to true professionals. Documentation, loading and delivery is fully handled by our company. We value our reputation and want our customers to be satisfied with the quality.",
                arabic: "يقع مقر كار للبترول DMCC في الإمارات العربية المتحدة. النشاط الرئيسي هو بيع النفط والمنتجات النفطية. نعهد بهذه المهمة الصعبة إلى محترفين حقيقيين. يتم التعامل مع التوثيق والتحميل والتسليم بشكل كامل من قبل شركتنا. نحن نقدر سمعتنا ونريد لعملائنا أن يكونوا راضين عن الجودة.",
                russian: "KAR PETROLEUM DMCC базируется в Объединенных Арабских Эмиратах. Основным видом деятельности является продажа нефти и нефтепродуктов. Это непростое дело мы доверяем настоящим профессионалам. Документация, погрузка и доставка полностью ложатся на плечи нашей компании. Мы дорожим своей репутацией и хотим, чтобы Наши клиенты были довольны качеством.",
                chinese: "KAR PETROLEUM DMCC 总部位于阿拉伯联合酋长国。 主要活动是销售石油和石油产品。 我们将这项艰巨的任务委托给真正的专业人士。 文件、装载和交付完全由我公司处理。 我们重视我们的声誉，并希望我们的客户对质量感到满意。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: "https://res.cloudinary.com/dqmqc0uaa/image/upload/v1689608972/pexels-tom-fisk-3057960_qgulcr.webp",
            title: {
                english: "KAR LLC Egypt",
                arabic: "عربي",
                russian: "КАР ООО Египет",
                chinese: "KAR LLC 埃及",
            },
            description: {
                english: "The office of \"K.A.R\" LLC in Egypt is a logistics office.  Our team will select for you the best conditions for cargo transportation and prepare all the necessary documents.",
                arabic: "مكتب \"K.A.R\" LLC في مصر هو مكتب لوجستي. سيقوم فريقنا باختيار أفضل الظروف لنقل البضائع وإعداد جميع المستندات اللازمة.",
                russian: "Офис ООО \"К.А.Р\" в Египте - логистический офис. Наша команда подберет для вас лучшие условия для перевозки груза и подготовит все необходимые документы.",
                chinese: "“K.A.R”LLC在埃及的办事处是一个物流办事处。 我们的团队将为您选择最佳的货物运输条件并准备所有必要的文件。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: KarRus,
            title: {
                english: "KAR LLC (RUS)",
                arabic: "عربي",
                russian: "ООО \"КАР\" (РОС)",
                chinese: "KAR LLC（俄罗斯）",
            },
            description: {
                english: "KAR LLC is located in Russia and the main activity of the company is the export of sugar to other countries. The high quality of transportation allows you to deliver sugar without losing the quality of the product. Our highly qualified team will take care of all the necessary documentation for the transportation of the goods. We have many satisfied clients. Ready for cooperation.",
                arabic: "تقع شركة KAR LLC في روسيا والنشاط الرئيسي للشركة هو تصدير السكر إلى دول أخرى. تتيح لك جودة النقل العالية توصيل السكر دون فقدان جودة المنتج. سيهتم فريقنا المؤهل تأهيلا عاليا بجميع الوثائق اللازمة لنقل البضائع. لدينا العديد من العملاء الراضين. جاهز للتعاون.",
                russian: "ООО \"КАР\" находится в России и основным видом деятельности компании является экспорт сахара в другие страны. Высокое качество перевозок позволяет доставить сахар без потери качества продукта. Наша высококвалифицированная команда позаботится об этом вся необходимая документация для перевозки груза. ",
                chinese: "“KAR” LLC 位于俄罗斯，该公司的主要业务是将糖出口到其他国家。 高质量的运输使您能够在不损失产品质量的情况下运送糖。 我们高素质的团队将负责处理货物运输的所有必要文件。 我们有许多满意的客户。 准备合作。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: KarEmlak,
            title: {
                english: "KAR EMLAK PETROLEUM (TUR)",
                arabic: "عربي",
                russian: "КАР ПЕТРОЛЕУМ (ТУР)",
                chinese: "KAR EMLAK 石油公司（土耳其）",
            },
            description: {
                english: "The main activity of the Kar Petroleum LLC is petroleum products. We deliver from all over the world. Our customers have trusted the quality of our products for many years. Kar Petroleum LLC (Turkey) is engaged in the wholesale supply of food products. We guarantee excellent quality and fast delivery. We are interested in our customers receiving high quality products in a short time and at a good price.",
                arabic: "النشاط الرئيسي لشركة Kar Petroleum LLC هو المنتجات البترولية. نقوم بالتوصيل من جميع أنحاء العالم. لقد وثق عملاؤنا في جودة منتجاتنا لسنوات عديدة. تعمل شركة Kar Petroleum LLC (تركيا) في توريد المنتجات الغذائية بالجملة. نحن نضمن الجودة الممتازة والتسليم السريع. نحن مهتمون بحصول عملائنا على منتجات عالية الجودة في وقت قصير وبسعر جيد.",
                russian: "Основным направлением деятельности ООО \"Кар Петролеум\" являются нефтепродукты. Наши клиенты уже много лет доверяют качеству нашей продукции. Также ООО \"Кар Петролеум\" (Турция) занимается оптовыми поставками продуктов питания. Мы гарантируем отличное качество и быструю доставку. Мы заинтересованы в том, чтобы наши клиенты получали продукцию высокого качества в короткие сроки и по хорошей цене.",
                chinese: "Kar Petroleum LLC 的主要业务是石油产品。 我们从世界各地发货。 多年来，我们的客户一直信赖我们产品的质量。 Kar Petroleum LLC（土耳其）从事食品批发供应业务。 我们保证优良的品质和快速的交货。 我们希望我们的客户能够在短时间内以优惠的价格获得高质量的产品。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: KarOu,
            title: {
                english: "KAR PETROLEUM OU (ESTONIA)",
                arabic: "عربي",
                russian: "KAR PETROLEUM OU (ЭСТОНИЯ)",
                chinese: "卡尔石油公司（爱沙尼亚）",
            },
            description: {
                english: "The company is located in Estonia and sells engine oil and fuel. We have reliable suppliers, a large assortment and excellent product quality. It is important for us that every time you choose.",
                arabic: "تقع الشركة في إستونيا وتبيع زيت المحرك والوقود. لدينا موردين موثوقين ، تشكيلة كبيرة وجودة منتج ممتازة. من المهم بالنسبة لنا أن تختار في كل مرة.",
                russian: "Компания находится в Эстонии и занимается реализацией моторных масел и топлива. У нас надежные поставщики, большой ассортимент и отличное качество продукции. Нам важно, чтобы каждый раз вы выбирали нашу компанию.",
                chinese: "该公司位于爱沙尼亚，销售发动机油和燃料。 我们拥有可靠的供应商、品种齐全、产品质量优良。 您每次的选择对我们来说都很重要。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: KarPetRus,
            title: {
                english: "KAR LLC (RUS)",
                arabic: "عربي",
                russian: "ООО \"КАР\" (РОС)",
                chinese: "KAR LLC（俄罗斯）",
            },
            description: {
                english: "Production of building materials is the main activity of the company. We use quality wood (pine) for processing. Our factory employs highly experienced specialists who monitor the progress of wood processing. We have purchased high-tech machines that cut wood with high precision. The sawdust that remains after processing the wood is pressed and briquettes are obtained. Our product will be exported to other countries. Houses built from our materials will serve for a long time. You and your family will appreciate the high quality.",
                arabic: "إنتاج مواد البناء هو النشاط الرئيسي للشركة. نستخدم خشب الصنوبر عالي الجودة للمعالجة. يوظف مصنعنا متخصصين ذوي خبرة عالية يراقبون تقدم معالجة الأخشاب. لقد اشترينا آلات عالية التقنية لقطع الأخشاب بدقة عالية. يتم ضغط نشارة الخشب التي تبقى بعد معالجة الخشب ويتم الحصول على قوالب. سيتم تصدير منتجاتنا إلى دول أخرى. البيوت المبنية من موادنا ستعمل لفترة طويلة. سوف تقدر أنت وعائلتك الجودة العالية.",
                russian: "Производство строительных материалов является основным направлением деятельности компании. Для обработки мы используем качественную древесину (сосна).На нашем заводе работают высококвалифицированные специалисты, которые следят за процессом обработки древесины. Мы работаем на премиальных станках, которые распиливают древесину с высокой точностью. Опилки, которые остаются после обработки древесины, прессуются и получаются брикеты. Наш продукт будет экспортироваться в другие страны. Дома, построенные из наших материалов, будут служить долго. Вы и ваша семья оцените высокое качество.",
                chinese: "建筑材料的生产是公司的主要业务。 我们使用优质木材（松木）进行加工。 我们工厂经验丰富的专家负责监控木材加工的进度。 我们购买了能够高精度切割木材的高科技机器。 木材加工后剩余的锯末被压制并获得煤球。 我们的产品将出口到其他国家。 用我们的材料建造的房屋可以使用很长时间。 您和您的家人一定会欣赏它的高品质。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: Tourism,
            title: {
                english: "Celine Tourism LLC (RUS)",
                arabic: "عربي",
                russian: "- ООО «Селин Туризм» (RUS)",
                chinese: "席琳旅游有限责任公司（俄罗斯）",
            },
            description: {
                english: "If you want to take a break from the daily bustle, visit new countries, learn the culture of the peoples of the world or just have a great time, then our travel agency ‘’CELINE TOURISM’’ will always help you with this! Our company is always ready to suggest any information on the direction you are interested in (most often confirmed by personal experience). We also offer assistance in choosing a tour at a special price, assistance in obtaining a visa, finding hotels and simply unloading you from these worries and allowing you to enjoy your vacation. We care about our customers.",
                arabic: "إذا كنت ترغب في أخذ قسط من الراحة من الصخب اليومي ، أو زيارة بلدان جديدة ، أو التعرف على ثقافة شعوب العالم أو مجرد قضاء وقت ممتع ، فستساعدك وكالة السفر \"CELINE TOURISM\" دائمًا في هذا الأمر! شركتنا مستعدة دائمًا لاقتراح أي معلومات عن الاتجاه الذي تهتم به (غالبًا ما تؤكده التجربة الشخصية). نقدم أيضًا المساعدة في اختيار جولة بسعر خاص ، والمساعدة في الحصول على تأشيرة ، والعثور على الفنادق ، وإفراغك من هذه المخاوف والسماح لك بالاستمتاع بإجازتك. نحن نهتم بعملائنا.",
                russian: "Если вы хотите отдохнуть от повседневной суеты, посетить новые страны, познакомиться с культурой народов мира или просто отлично провести время, то наша туристическая компания «СЕЛИН ТУРИЗМ» всегда поможет вам в этом! Мы всегда готовы предоставить информацию, по интересующему Вас направлению, а также помощь в выборе тура по специальной цене, помощь в получении визы, поиске отелей, позволяя вам наслаждаться отдыхом. Мы заботимся о наших клиентах.",
                chinese: "如果您想逃离日常的喧嚣，游览新的国家，了解世界各国人民的文化或只是享受美好时光，那么我们的旅行社“CELINE TOURISM”将始终为您提供帮助！ 我们公司随时准备建议您感兴趣的方向的任何信息（通常通过个人经验确认）。 我们还提供优惠价格选择旅游团、办理签证、寻找酒店等方面的帮助，让您轻松摆脱这些后顾之忧，让您享受假期。 我们关心我们的客户。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: ToleranceBg,
            title: {
                english: "Tolerance Real Estate (TUR)",
                arabic: "عربي",
                russian: "Недвижимость толерантности (ТУР)",
                chinese: "容忍房地产 (TUR)",
            },
            description: {
                english: "It is a Turkish company specializing in real estate and legal advice in modern residential complexes (apartments and villas) and commercial real estate (offices and shops) and has branches in many Turkish provinces, we are proud of our multinational professional staff scattered inside and outside Turkey with years of experience in the field, qualified and authorized to provide professional real estate advice to our valued clients",
                arabic: "هي شركة تركية متخصصة في العقارات والاستشارات القانونية في المجمعات السكنية الحديثة (شقق وفيلات) والعقارات التجارية (مكاتب ومحلات تجارية) ولها فروع في العديد من المحافظات التركية ، نفخر بموظفينا المحترفين متعددي الجنسيات المنتشرين في الداخل والخارج تركيا مع سنوات من الخبرة في هذا المجال ، مؤهلة ومرخصة لتقديم المشورة العقارية المهنية لعملائنا الكرام",
                russian: "Это турецкая компания, специализирующаяся на недвижимости и юридических консультациях в современных жилых комплексах (квартиры и виллы) и коммерческой недвижимости (офисы и магазины) и имеющая филиалы во многих турецких провинциях, мы гордимся нашим многонациональным профессиональным персоналом, находящимся внутри и за пределами Турции с многолетним опытом работы в этой области, квалифицированным и уполномоченным предоставлять профессиональные консультации по недвижимости нашим уважаемым клиентам.",
                chinese: "它是一家土耳其公司，专门从事现代住宅综合体（公寓和别墅）和商业房地产（写字楼和商店）的房地产和法律咨询，并在土耳其许多省份设有分支机构，我们为遍布国内外的跨国专业员工感到自豪土耳其在该领域拥有多年经验，有资格并被授权为我们尊贵的客户提供专业的房地产建议。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
        {
            id: uuidv4(),
            image: Dobro,
            title: {
                english: "DOBRO LLC (RUS)",
                arabic: "عربي",
                russian: "ООО ДОБРО (РУС)",
                chinese: "DOBRO LLC（俄罗斯）",
            },
            description: {
                english: "Our company is engaged in the production and sale of halal meat of the highest quality. We also produce wheat flour and dairy products such as cheese, yogurt, cottage cheese. Eco-friendly products will delight you and your family every day.",
                arabic: "تعمل شركتنا في إنتاج وبيع اللحوم الحلال بأعلى جودة. نحن ننتج أيضًا دقيق القمح ومنتجات الألبان مثل الجبن والزبادي والجبن القريش. المنتجات الصديقة للبيئة ستسعدك أنت وعائلتك كل يوم.",
                russian: "Наша компания занимается производством и реализацией мяса халяль высшего качества. Также мы производим пшеничную муку и молочные продукты такие как сыр, йогурт, творог. Экологичные продукты будут радовать Вас и Вашу семью каждый день.",
                chinese: "我们公司从事最高品质的清真肉类的生产和销售。 我们还生产小麦粉和乳制品，如奶酪、酸奶、干酪。 环保产品将让您和您的家人每天都感到高兴。",
            },
            readMore: {
                english: "Read more",
                arabic: "اقرأ أكثر",
                russian: "Читать далее",
                chinese: "阅读更多",
            },
        },
    ]
}



export const karInNumbers = {
    title: {
        english: "In numbers",
        arabic: "بالأرقام",
        russian: "В цифрах",
        chinese: "从数字来看"
    },
    secondaryParagraph: {
        english: "Like out impact, KAR LLc ability to meet your goals continues to grow.",
        arabic: "مثل التأثير الخارجي ، تستمر قدرة مجوعة شركات كار على تحقيق أهدافك في النمو.",
        russian: "Как и наше влияние, способность ООО «КАР» достигать поставленных целей продолжает расти.",
        chinese: "与我们的影响力一样，KAR LLc 实现您目标的能力也在不断增强。"
    },
    items: [
        {
            id: uuidv4(),
            title: {
                english: "Trading volume",
                arabic: "حجم التداول",
                russian: "доход с торгов",
                chinese: "交易量"

            },
            number: 60
        },
        {
            id: uuidv4(),
            title: {
                english: "Cargo shipped monthly",
                arabic: "شحن البضائع شهريا",
                russian: "Успешных доставок в месяц ",
                chinese: "每月成功交付"
            },
            number: 1000
        },
        {
            id: uuidv4(),
            title: {
                english: "Real State projects",
                arabic: "مشاريع عقارية",
                russian: "Совершенных сделок\nв сфере недвижимости ",
                chinese: "房地产项目"
            },
            number: 124
        },
    ]
}


export const getQuote = {
    title: {
        english: "Get a Quote",
        arabic: "احصل على عرض",
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