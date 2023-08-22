export const products = [
    "Freight all kinds",
    "Personal",
    "Animal & Animal Products",
    "Vegetable Products",
    "Animal and Vegetable Fats and Oils",
    "Foodstuffs, Beverages and Tobacco",
    "Mineral Products",
    "Chemicals & Allied Industries",
    "Plastics/Rubbers",
    "Raw Hides, Skins, Leather, & Furs",
    "Wood & Wood Products",
    "Pulp of Wood and Fibrous Material",
    "Textiles",
    "Footwear/Headgear",
    "Stone/Glass",
    "Precious Stone, Metal, Pearls and Coins",
    "Base Metals",
    "Machinery/Electrical",
    "Precision Instruments",
    "Arms and Ammunition",
    "Miscellaneous Manufactured Articles",
    "Works of Art",
    "Unique US National HS Codes",
    "Vehicles"
];


export const cargoTypes = [
    "hazardous cargo",
    "Perishable cargo",
    "Oversized cargo",
    "Liquid cargo",
];

export const cargoDetails = [
    { name: "IMO", cargoType: "hazardous cargo", required: true },
    { name: "UN Number", cargoType: "hazardous cargo", required: true },
    { name: "Temperature Regime", cargoType: "Perishable cargo", required: false },
    { name: "Length", cargoType: "Oversized cargo", required: false },
    { name: "Width", cargoType: "Oversized cargo", required: false },
    { name: "Height", cargoType: "Oversized cargo", required: false }
];


export const deliveryTypes = [
    "Sea",
    "Land"
];


export const landTransportaionTypes = [
    "Full Container Load FCL",
    "Full Truck Load FTL",
    "Less Truck Load LTL",
];


export const seaTransportaionTypes = [
    "Full Container Load FCL",
    "Less Container Load LCL",
    "Bulk",
];


export const transportationDetails = [
    { name: "Container Type", transTypes: ["Full Container Load FCL", "Full Truck Load FTL"], required: true },
    { name: "Quantity of Containers", transTypes: ["Full Container Load FCL", "Full Truck Load FTL"], required: true },
    { name: "Weight", transTypes: ["Full Container Load FCL", "Less Container Load LCL", "Full Truck Load FTL", "Less Truck Load LTL"], required: false },
    { name: "Volume", transTypes: ["Less Container Load LCL", "Less Truck Load LTL"], required: false },
    { name: "Height", transTypes: ["Oversized cargo"], required: false },
    { name: "Ship Type", transTypes: ["Bulk"], required: true },
    { name: "Gross Weight", transTypes: ["Bulk"], required: true },
    { name: "Loading Rate", transTypes: ["Bulk"], required: false },
    { name: "Discharging Rate", transTypes: ["Bulk"], required: false },
];


export const containerTypes = [
    "20 Standard",
    "40 Standard",
    "40 High-Cube",
    "20 Refrigerated",
    "40 Refrigerated",
    "20 Open Top",
    "40 Open Top",
    "20 Flatrack",
    "40 Flatrack",
    "20 Tank",
    "20 Flatrack Collapsible",
    "40 Flatrack Collapsible",
    "20 Platform",
    "40 Platform",
    "20 Bulk",
    "45 High-Cube",
    "10 Standard",
  ]