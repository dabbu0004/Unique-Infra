import airport from "../assets/industries/airport2.webp";
import dataCenter from "../assets/industries/dataCentre.webp";
import hydro from "../assets/industries/hydro.webp";
import metro from "../assets/industries/metro2.webp";
import powerTransmission from "../assets/industries/powerTransmission.webp";
import steel2 from "../assets/industries/steel2.webp";
import solar from "../assets/industries/solar.webp";
import tunnel from "../assets/industries/tunnel.webp";
import wind from "../assets/industries/wind.webp";
import saatvikOffer from "../assets/brandsProducts/saatvik/saatvik1.webp";
import solarCable from "../assets/brandsProducts/kei/Rubber Cables (Rubber Flexible Cables).webp";
import solarElectricComponents from "../assets/brandsProducts/phoenix/Electronics housings.webp";
import solarInverter from "../assets/brandsProducts/phoenix/Industrial communication.webp";
import evImage from "../assets/industries/EV.jpg"; // Update with your actual image path

import {
  FaSolarPanel,
  FaWater,
  FaWind,
  FaServer,
  FaArchway,
  FaPlane,
  FaBolt,
  FaIndustry,
  FaTrain,
  FaCheckCircle,
  FaShieldAlt,
  FaBuilding,
  FaHome,
  FaGlobeAmericas,
  FaLightbulb,
  FaFan,
  FaTrafficLight,
  FaNetworkWired
} from "react-icons/fa";

import {
  FiGrid,
  FiBatteryCharging,
  FiSettings,
  FiTool,
  FiSun,
  FiActivity,
  FiShield,
  FiCpu,
  FiWind,
  FiZap,
  FiDatabase,
  FiHardDrive,
  FiBox,
  FiTruck,
  FiAward
  
} from "react-icons/fi";

import {
  MdOutlineCable,
  MdCable,
  MdElectricMeter,
  MdOutlinePlumbing,
  MdElectricBolt,
  MdComputer,
  MdSpeed,
  MdBatteryChargingFull,
  MdLightbulbOutline,
  MdOutlinePriceCheck,
  MdSupportAgent,
  MdOutlineEnergySavingsLeaf
} from "react-icons/md";

import { TbSolarPanel2, TbTruckDelivery, TbWorldUpload } from "react-icons/tb";
import { BsLightningChargeFill, BsBoxSeam, BsBuildingFillGear, BsClipboardCheck, BsServer, BsSpeedometer } from "react-icons/bs";
import { GiValve } from "react-icons/gi";
import { TbPropeller } from "react-icons/tb";
import { FaTools } from "react-icons/fa";

const IndustriesData = [
  {
    id: "solar-power",
    image: solar,
    icon: FaSolarPanel,
    title: "Solar Power",
    description: "Empowering industries with sustainable solar energy solutions for a greener future.",
    badges: ["RENEWABLE ENERGY", "TIER 1 DISTRIBUTOR"],
    heroDesc: "We supply premium-grade electrical and automation products to solar energy projects across India. From utility-scale ground-mounted plants to rooftop installations, our distribution network ensures every project gets the right components on time.",
    competencies: [
      {
        tabId: "grid-integration",
        tabTitle: "Grid-Tie Equipment",
        tabIcon: FiGrid,
        tabShortDesc: "Supply of inverters, switchgear, and grid synchronization components.",
        contentTitle: "Grid-Tie Equipment Supply",
        contentDesc: "Solar plants require highly reliable grid-tie components to ensure consistent energy export...",
        highlights: [
          { title: "Inverters & Switchgear", desc: "Supply of string and central inverters.", icon: FiZap },
          { title: "Protection Relays", desc: "Metering and protection equipment.", icon: FiShield },
        ],
        featureImage: solar,
        featureOverlay: "Utility-Scale Solar Supply",
        featureOverlaySub: "Delivering critical electrical products.",
      }
    ],
    // --- NEW LAYOUT FIELDS ---
    heroTagline: "Powering a Sustainable Future with",
    heroHighlight: "Solar Energy",
    heroSubtext: "Complete Solar Power Solutions – From Panels to Wiring.\nWe Deliver Everything Except Structure.",
    featuresBar: [
      { icon: FiGrid, title: "Wide Range of Solar Products" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: FiTruck, title: "Fast Delivery Across India" },
      { icon: TbWorldUpload, title: "Export Support" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR SOLAR SOLUTIONS",
      title: "End-to-End Solar Power Solutions",
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide a comprehensive range of solar power products and solutions for residential, commercial, and industrial applications.",
      desc2: "From high-quality solar panels to cables, connectors, and electrical components — we ensure everything required for solar plant infrastructure is readily available.",
      calloutIcon: FaCheckCircle,
      calloutText: "We supply all solar components except mounting structures.",
      image: solar
    },
    keyComponents: {
      subtitle: "COMPLETE SOLAR SYSTEM COMPONENTS",
      title: "Key Components Used in Solar Power Systems",
      items: [
        { icon: TbSolarPanel2, label: "Solar Panels" },
        { icon: MdOutlineCable, label: "DC Cables" },
        { icon: MdCable, label: "AC Cables" },
        { icon: FiCpu, label: "Inverters" },
        { icon: FaShieldAlt, label: "Earthing Materials" },
        { icon: BsBoxSeam, label: "Junction Boxes" },
        { icon: FiSettings, label: "Connectors (MC4 etc.)" },
        { icon: BsLightningChargeFill, label: "Lightning Protection" },
        { icon: FiGrid, label: "Cable Trays" },
        { icon: MdElectricMeter, label: "Distribution Panels" }
      ]
    },
    specialOfferings: {
      subtitle: "SOLAR PANELS WE OFFER",
      title: "High Efficiency Panels for Every Need",
      desc: "We deal in high efficiency panel panels from trusted brands for all types of solar installations.",
      cards: [
        {
          title: "Mono PERC Panels",
          image: saatvikOffer,
          features: ["High efficiency", "Better low-light performance", "Longer lifespan", "Ideal for rooftop installations"]
        },
        {
          title: "Bifacial Panels",
          image: saatvikOffer,
          features: ["Power generation from both sides", "Higher energy yield", "Better ROI", "Ideal for large-scale projects"]
        },
        {
          title: "Polycrystalline Panels",
          image: saatvikOffer,
          features: ["Cost effective solution", "Reliable performance", "Ideal for large-scale installations"]
        }
      ],
      buttonText: "Explore Our Panel Brands"
    },
    detailedSolutions: [
      {
        title: "Solar Cables & Wiring Solutions",
        desc: "Reliable and durable wiring is crucial for solar efficiency. We provide complete range of solar cables designed for long life and high performance.",
        icon: MdOutlineCable,
        features: ["DC Solar Cables", "AC Solar Cables", "Flexible Cables", "UV Resistant Cables", "Armored Cables"],
        image: solarCable
      },
      {
        title: "Electrical Components & Accessories",
        desc: "Complete range of electrical components to ensure safety, efficiency and long-term performance.",
        icon: FiSettings,
        features: ["Lugs & Glands", "Cable Trays", "Junction Boxes", "Earthing Materials", "Lightning Arrestors", "Conduits & Accessories"],
        image: solarElectricComponents
      },
      {
        title: "Inverters & Protection Solutions",
        desc: "Advanced inverters and protection devices for smooth energy conversion and system safety.",
        icon: FiCpu,
        features: ["String Inverters", "On-Grid Inverters", "Hybrid Inverters", "SPDs & Fuses", "AC/DC Combiner Boxes"],
        image: solarInverter
      }
    ],

    cta: {
      title: "Ready to ",
      highlight: "Go Solar?",
      desc: "Get our solar product solutions from a trusted supplier. We supply everything you need for solar projects - except structure - making us your one-stop solution partner.",
      features: [
        { icon: FaCheckCircle, title: "Quality Products You Can Trust" },
        { icon: TbTruckDelivery, title: "Pan India Delivery" },
        { icon: MdSupportAgent, title: "Technical Support You Can Rely On" },
        { icon: MdOutlineEnergySavingsLeaf, title: "Building a Greener Tomorrow" }
      ]
    }
  },
  {
    id: "hydro-power",
    image: hydro,
    icon: FaWater,
    title: "Hydro Power",
    description: "Innovative hydroelectric solutions harnessing the power of water for efficient energy production.",
    badges: ["RENEWABLE ENERGY", "INDUSTRIAL SUPPLY"],
    heroDesc: "We supply electrical, automation, and instrumentation products to hydropower plant construction and maintenance projects. Our product range supports EPC contractors and power utilities operating run-of-river and reservoir-based hydro plants.",
    competencies: [ /* Keeping old data safe */],

    // --- NEW LAYOUT FIELDS ---
    heroTagline: "Powering a Sustainable Future with",
    heroHighlight: "Hydro Power",
    heroSubtext: " We Offer Wide range of product used in Hydro Power.",
    featuresBar: [
      { icon: FiTool, title: "Wide Range of Hydro Products" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR HYDRO SOLUTIONS",
      title: "End-to-End Hydro Power Solutions",
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide end-to-end hydro power solutions with a wide range of industrial electrical products used in hydro power plant installations. From wires & cables, lugs & glands, AB/DB boxes, relays, connectors, terminal blocks, LV motors, LED lights, panels, and switchgears",
      desc2: " we ensure ready stock availability for both small and bulk project requirements, delivering expert support for smooth and efficient hydro power operations.",
      calloutIcon: BsClipboardCheck,
      calloutText: "We supply all hydro components except civil & structural works.",
      image: hydro
    },
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN HYDRO POWER SYSTEMS",
      title: "", // Left blank as per your image design
      items: [
        { icon: BsServer, label: "Control Panels" },
        { icon: FiZap, label: "Switchgear" },
        { icon: FaArchway, label: "Intake Gate Equipment" },
        { icon: MdOutlinePlumbing, label: "Penstock Pipes & Accessories" },
        { icon: GiValve, label: "Valves & Actuators" },
        { icon: MdElectricBolt, label: "Excitation Systems" },
        { icon: FiShield, label: "Protection Systems" },
        { icon: MdComputer, label: "SCADA & Automation" },
        { icon: MdSpeed, label: "Monitoring & Instrumentation" },
        { icon: MdOutlineCable, label: "Cables & Wiring Systems" },
        { icon: MdBatteryChargingFull, label: "DC Systems & Batteries" },
        { icon: MdLightbulbOutline, label: "Lighting & Earthing Systems" },
        { icon: TbPropeller, label: "Cooling & Ventilation Systems" },
        { icon: BsSpeedometer, label: "Measuring Instruments" },
        { icon: FaTools, label: "Tools & Installation Accessories" }
      ]
    },
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS FOR HYDRO PROJECTS",
      title: "",
      desc: "",
      cards: [
        {
          title: "Wires & Cables",
          image: hydro, // Replace with your actual cable image later
          features: [
            "HT & LT Power Cables",
            "Control & Instrumentation Cables",
            "Flexible & Marine Cables",
            "Armoured & Unarmoured Cables",
            "Custom Cable Solutions"
          ]
        },
        {
          title: "Control & Protection Systems",
          image: hydro, // Replace with your actual systems image later
          features: [
            "Automation Panels",
            "AB/DB Boxes",
            " Lighting and Earthing Solution",
            "Distribution Boxes",
            "Lugs and Glands "

          ]
        },
        {
          title: "Electrical Components & Accessories",
          image: hydro, // Replace with your actual accessories image later
          features: [
            "MCBs, MCCBs & ACBs",
            "Contactors & Relays",
            "Terminal Blocks & Connectors",
            "Cable Glands, Lugs & Ferrules",
            "Wiring Accessories"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
{
    id: "wind-energy",
    image: wind,
    icon: FaWind,
    title: "Wind Energy",
    description: "Cutting-edge wind energy systems designed to capture natural wind power for a sustainable tomorrow.",
    badges: ["WIND POWER", "PRODUCT DISTRIBUTOR"],
    heroTagline: "Powering a Sustainable Future with",
    heroHighlight: "Wind Energy",
    heroSubtext: "Unique Infra provides a complete range of industrial electrical products used in wind power projects. We support wind energy infrastructure with reliable products, ready stock availability, fast delivery, and pan-India supply support.",
    featuresBar: [
      { icon: FaWind, title: "WIND POWER" },
      { icon: FiBox, title: "PRODUCT DISTRIBUTOR" },
      { icon: TbTruckDelivery, title: "PAN INDIA DELIVERY" },
      { icon: MdSupportAgent, title: "EXPERT SUPPORT" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR WIND SOLUTIONS",
      title: "Comprehensive Wind Energy Supply",
      desc1: "Unique Infra & Sustainable Power Pvt. Ltd. is a trusted industrial electrical products supplier serving wind power projects across India. We offer a wide range of products including wires & cables, industrial automation solutions, lugs & glands, protection systems, industrial lighting, and LV motors. With ready stock, fast delivery, and expert support, we help industries maintain reliable and efficient operations.",
      desc2: "With ready stock, fast delivery, and expert support, we help wind energy projects maintain reliable and efficient operations across India.",
      calloutIcon: BsClipboardCheck,
      calloutText: "Certified components for turbine and substation needs.",
      image: wind
    },
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN WIND POWER SYSTEMS",
      title: "",
      items: [
        { icon: MdOutlineCable, label: "Wire & Cables" },
        { icon: MdComputer, label: "Industrial Automation" },
        { icon: MdElectricMeter, label: "Distribution Panels" },
        { icon: FaShieldAlt, label: "Earthing Materials" },
        { icon: BsLightningChargeFill, label: "Lightning Protection" },
        { icon: FiSettings, label: "Lugs & Glands" },
        { icon: BsBoxSeam, label: "Junction Boxes" },
        { icon: MdOutlineCable, label: "Connectors & Terminal Blocks" },
        { icon: FiShield, label: "Relays & MCBs" },
        { icon: FiGrid, label: "Cable Trays" },
        { icon: FiTool, label: "LV Motors" },
        { icon: MdLightbulbOutline, label: "Industrial Lighting" }
      ]
    },
    windOfferings: {
      subtitle: "WIND ELECTRICAL PRODUCTS WE OFFER",
      title: "High Performance Electrical Products for Wind Projects",
      topCards: [
        {
          icon: FiCpu,
          title: "1. Automation & Control",
          features: ["PLC Modules", "Relays", "SMPS", "Interface Modules", "Industrial Connectors", "Terminal Blocks", "Surge Protection Devices", "Monitoring Systems", "Communication Interfaces"],
          image: wind, // Replace with your Phoenix product image
          brandLogos: [wind] // Replace with Phoenix logo import
        },
        {
          icon: FiShield,
          title: "2. Protection & Distribution",
          features: ["MCBs", "Distribution Boards", "Junction Boxes", "Surge Protection Devices", "Earthing Systems", "Communication Interfaces","Lightning Protection Systems","Cable Trays"],
          image: wind, // Replace with distribution product image
          brandLogos: [wind, wind] // Replace with Dowells, HEX logo imports
        },
        {
          icon: MdLightbulbOutline,
          title: "3. Motors & Lighting",
          features: ["LV Motors", "Industrial Lighting", "Highmast Lights","Control Gear", "Accessories"],
          image: wind, // Replace with Motor/Light product image
          brandLogos: [wind, wind] // Replace with Innomotics, Bajaj logo imports
        }
      ],
      bottomCards: [
        {
          num: "01",
          title: "Wire & Cable Solutions",
          desc: "Reliable and durable wiring solutions are essential for efficient wind power generation, transmission, and turbine operations. We supply a complete range of industrial wire and cable solutions suitable for wind energy infrastructure and harsh environmental conditions.",
          features: ["HT & LT Power Cables", "Control & Instrumentation Cables", "Flexible & Marine Cables", "Armoured & Unarmoured Cables"],
          image: wind, // Replace with Cable product image
          brandLogos: [wind] // Replace with KEI logo import
        },
        {
          num: "02",
          title: "Industrial Automation & Control Solutions",
          desc: "Modern wind power systems require advanced automation and control solutions for monitoring, protection, and operational efficiency. We supply reliable automation products for wind turbine and substation applications.",
          features: ["PLC Modules", "Relays", "SMPS", "Interface Modules", "Monitoring Systems"],
          image: wind, // Replace with Automation product image
          brandLogos: [wind] // Replace with Phoenix logo import
        },
        {
          num: "03",
          title: "Electrical Components & Protection Systems",
          desc: "We supply a complete range of electrical components and safety solutions used in wind energy projects to ensure reliable power distribution and system protection.",
          features: ["MCBs & MCCBs", "Distribution Boards", "Junction Boxes", "Surge Protection Devices", "Earthing Systems"],
          image: wind, // Replace with Components product image
          brandLogos: [wind, wind] // Replace with Dowells, HEX logo imports
        }
      ]
    },
    detailedSolutions: [],
    specialOfferings: null,
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Ready for",
      highlight: "Wind Energy?",
      desc: "Partner with us for reliable wind farm components.",
      features: [
        { icon: FaCheckCircle, title: "Quality Assured" },
        { icon: TbTruckDelivery, title: "Fast Delivery" }
      ]
    }
  },
{
    id: "data-centers",
    image: dataCenter,
    icon: FaServer,
    title: "Data Centers",
    description: "State-of-the-art data center solutions ensuring optimal performance, security, and scalability for your IT infrastructure.",
    badges: ["IT INFRASTRUCTURE", "CRITICAL SUPPLY"],
    heroDesc: "We supply precision power, cooling, and structured cabling products for data center construction and fit-out projects.",
    competencies: [],
    
    // --- NEW LAYOUT FIELDS ---
    heroTagline: "Powering Infrastructure for",
    heroHighlight: "Data Centres",
    heroSubtext: "Complete range of industrial electrical products used in Data Centres projects.\nWe support projects with Genuine products, ready stock availability, fast delivery, and pan-India supply support.",
    featuresBar: [
      { icon: FaServer, title: "IT INFRASTRUCTURE" },
      { icon: FiShield, title: "CRITICAL SUPPLY" },
      { icon: FiBox, title: "READY STOCK" },
      { icon: TbTruckDelivery, title: "PAN INDIA DELIVERY" },
      { icon: MdSupportAgent, title: "EXPERT SUPPORT" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR DATA CENTRE SOLUTIONS",
      title: "End to end data Centres power Solution",
      desc1: "Unique Infra is India's trusted industrial electrical distributor, specializing in end-to-end power solutions for data centers.",
      desc2: "As authorized stockists for top power brands, we ensure 100% genuine products, expert technical support, and seamless Pan-India delivery. Partner with us to guarantee uninterrupted efficiency for your critical data infrastructure.",
      calloutIcon: BsClipboardCheck,
      calloutText: "We supply complete range of industrial electrical products used in Data Centres.",
      image: dataCenter
    },
    keyComponents: {
      subtitle: "KEY COMPONENTS",
      title: "", // Left blank as per your clean design style
      items: [
        { icon: MdOutlineCable, label: "Wire & Cables" },
        { icon: MdComputer, label: "Industrial Automation" },
        { icon: FiZap, label: "Distribution Boards" },
        { icon: FiShield, label: "Protection Devices" },
        { icon: FiGrid, label: "Cable Management" },
        { icon: FaShieldAlt, label: "Earthing Materials" },
        { icon: FiSettings, label: "Lugs & Glands" },
        { icon: BsBoxSeam, label: "Junction Boxes" },
        { icon: MdOutlineCable, label: "Connectors & Terminal Blocks" },
        { icon: MdLightbulbOutline, label: "Industrial Lighting" },
        { icon: TbPropeller, label: "Cooling Infrastructure" }
      ]
    },
    specialOfferings: {
      subtitle: "SECTION WISE PRODUCTS",
      title: "Key Electrical Products Used in Data Centres",
      desc: "",
      cards: [
        {
          title: "1. Wire & Cable Solutions",
          image: dataCenter, // Replace with actual cable image
          features: [
            "HT & LT Power Cables", 
            "Control & Flexible Cables", 
            "FRLS & XLPE Cables", 
            "Armoured & Single/Multi-Core"
          ]
        },
        {
          title: "2. Power Distribution & Protection",
          image: dataCenter, // Replace with actual distribution image
          features: [
            "Distribution Boards (DB)", 
            "MCBS & MCCBS", 
            "Surge Protection Devices (SPD)", 
            "Earthing & Lightning Protection"
          ]
        },
        {
          title: "3. Industrial Automation",
          image: dataCenter, // Replace with actual automation image
          features: [
            "PLC Modules", 
            "Interface Relays & SMPS", 
            "Monitoring Systems", 
            "Communication Interfaces"
          ]
        },
        {
          title: "4. Connectors & Accessories",
          image: dataCenter, // Replace with actual accessories image
          features: [
            "Lugs & Cable Glands", 
            "Connectors", 
            "Terminal Blocks", 
            "Ferrules & Wiring Accessories"
          ]
        },
        {
          title: "5. Cooling Infrastructure",
          image: dataCenter, // Replace with actual cooling image
          features: [
            "Industrial Fans", 
            "Exhaust Systems", 
            "HVAC Electrical Components", 
            "LV Motors (AHU, pumps, etc.)"
          ]
        },
        {
          title: "6. Industrial Lighting",
          image: dataCenter, // Replace with actual lighting image
          features: [
            "LED Industrial Lights", 
            "Highmast Lights", 
            "Utility Lighting", 
            "Emergency Lighting Solutions"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
{
    id: "tunnel",
    image: tunnel,
    icon: FaArchway,
    title: "Tunnel",
    description: "Advanced tunneling solutions for infrastructure projects, ensuring safety and efficiency in underground construction.",
    badges: ["INFRASTRUCTURE", "SAFETY PRODUCTS"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solutions",
    heroHighlight: "for Tunnel Projects",
    heroSubtext: "Safe. Reliable. Efficient. End-to-End electrical solutions for Road, Rail, Metro & Hydro Tunnels.\nPowering Infrastructure. Enabling Progress.",
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "Wide Range of Electrical Products" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT OUR TUNNEL SOLUTIONS",
      title: "End-to-End Electrical Solutions for Tunnels",
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide a comprehensive range of electrical products and solutions for all types of tunnel infrastructure projects. We maintain ready stock of essential products used in tunnel projects including power distribution systems, industrial lighting, cable management systems, automation panels, safety systems, earthing solutions, and control equipment required for reliable tunnel operations.",
      desc2: "From power distribution, lighting, cable management to safety & automation systems — we ensure reliability, safety and performance in the most challenging environments.",
      calloutIcon: BsClipboardCheck,
      calloutText: "We supply all electrical components except civil & structural works.",
      image: tunnel
    },
    
    // --- 15 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY ELECTRICAL COMPONENTS USED IN TUNNEL PROJECTS",
      title: "", 
      items: [
        { icon: FiZap, label: "LT & HT Switchgear" },
        { icon: MdElectricMeter, label: "Transformers & Distribution Boards" },
        { icon: MdOutlineCable, label: "Cables & Cable Accessories" },
        { icon: FiGrid, label: "Cable Tray & Support Systems" },
        { icon: MdOutlinePlumbing, label: "Conduit Pipes & Fittings" },
        { icon: MdLightbulbOutline, label: "Tunnel Lighting Systems" },
        { icon: FiSun, label: "Emergency & Exit Lighting" },
        { icon: FiShield, label: "Fire Alarm & Detection Systems" },
        { icon: MdSupportAgent, label: "Public Address Systems" },
        { icon: FaShieldAlt, label: "Earthing & Lightning Protection" },
        { icon: BsServer, label: "Control Panels & MCC / PCC" },
        { icon: MdBatteryChargingFull, label: "UPS & Battery Systems" },
        { icon: TbPropeller, label: "Ventilation & Jet Fan Control Panels" },
        { icon: MdComputer, label: "SCADA & Automation Systems" },
        { icon: BsSpeedometer, label: "Surge Protection & Isolation Systems" }
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS FOR TUNNEL PROJECTS",
      title: "",
      desc: "",
      cards: [
        {
          title: "Cables & Cable Accessories",
          image: tunnel, // Replace with your actual product cable image later
          features: [
            "HT & LT Power Cables",
            "Control & Instrumentation Cables",
            "Fire Survival Cables",
            "Flexible & Armoured Cables",
            "Cable Glands, Lugs & Ferrules",
            "Jointing & Termination Kits"
          ]
        },
        {
          title: "Power Distribution & Control",
          image: tunnel, // Replace with your actual distribution panel image later
          features: [
            "HT / LT Switchgear",
            "MDB, SDB, DB Panels",
            "MCC, PCC & APFC Panels",
            "VFD Panels",
            "Control & Relay Panels",
            "Motor Starters & Drives"
          ]
        },
        {
          title: "Lighting & Safety Systems",
          image: tunnel, // Replace with your actual safety light image later
          features: [
            "LED Tunnel Lighting",
            "Emergency Lighting",
            "Exit & Direction Signs",
            "Fire Alarm Systems",
            "Public Address Systems",
            "CCTV & Surveillance Systems"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
 {
    id: "airport",
    image: airport,
    icon: FaPlane,
    title: "Airport",
    description: "Comprehensive airport infrastructure solutions enhancing operational efficiency and passenger experience.",
    badges: ["AVIATION", "CERTIFIED SUPPLY"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solutions",
    heroHighlight: "for Airports",
    heroSubtext: "Providing End-to-End Electrical Solutions for Airport Infrastructure Projects.\nAt Unique Infra & Sustainable Power Pvt. Ltd., we supply a complete range of electrical products used in airport infrastructure projects.", //[cite: 15]
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "End-to-End Electrical Solutions" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT OUR AIRPORT SOLUTIONS",
      title: "Complete Electrical Infrastructure for Airport Projects",
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide design, supply, installation and commissioning support for electrical systems in airports.", 
      desc2: "From power distribution to advanced lighting, safety systems and automation - we ensure reliable, efficient and future-ready airport infrastructure.",
      calloutIcon: BsClipboardCheck,
      calloutText: "We supply all electrical components used in airport projects.",
      image: airport
    },
    
    // --- 20 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN AIRPORT PROJECTS", //[cite: 15]
      title: "", 
      items: [
        { icon: FiZap, label: "Power Distribution Panels (PDBs)" }, //[cite: 15]
        { icon: MdElectricMeter, label: "Switchgear (ACB, MCCB, MCB)" }, //[cite: 15]
        { icon: FiGrid, label: "Cable Trays & Supports" }, //[cite: 15]
        { icon: MdOutlineCable, label: "Wires & Cables (HT, LT, Control)" }, //[cite: 15]
        { icon: FaPlane, label: "Airfield Lighting Systems" }, //[cite: 15]
        { icon: MdLightbulbOutline, label: "Runway & Taxiway Lighting" }, //[cite: 15]
        { icon: FiSun, label: "Approach & PAPI Lighting Systems" }, //[cite: 15]
        { icon: FaLightbulb, label: "High Mast Lighting Systems" }, //[cite: 15]
        { icon: MdLightbulbOutline, label: "Terminal Lighting (LED Solutions)" }, //[cite: 15]
        { icon: FaShieldAlt, label: "Emergency Exit & Safety Lights" }, //[cite: 15]
        { icon: FiShield, label: "Fire Alarm & Detection Systems" }, //[cite: 15]
        { icon: MdSupportAgent, label: "Public Address & Voice Evacuation" }, //[cite: 15]
        { icon: MdBatteryChargingFull, label: "UPS & Battery Systems" }, //[cite: 15]
        { icon: MdComputer, label: "ATC & Communication Systems" }, //[cite: 15]
        { icon: FaShieldAlt, label: "Earthing & Lightning Protection" }, //[cite: 15]
        { icon: BsBoxSeam, label: "Junction Boxes & DBs" }, //[cite: 15]
        { icon: MdOutlinePlumbing, label: "Conduits & Cable Management" }, //[cite: 15]
        { icon: FiSettings, label: "Control & Automation Panels" }, //[cite: 15]
        { icon: BsSpeedometer, label: "Surge Protection Devices (SPD)" }, //[cite: 15]
        { icon: FiTool, label: "Cable Glands, Lugs & Ferrules" } //[cite: 15]
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS FOR AIRPORT PROJECTS", //[cite: 15]
      title: "",
      desc: "",
      cards: [
        {
          title: "Wire and Cable Accessories", //[cite: 15]
          image: airport, 
          features: [
            "HT & Power Cables", //[cite: 15]
            "Flexible & Armoured Cables", //[cite: 15]
            "Control & Instrumentation Cables", //[cite: 15]
            "Fire Survival Cables", //[cite: 15]
            "Data & Communication Cables", //[cite: 15]
            "Cable Glands & Accessories" //[cite: 15]
          ]
        },
        {
          title: "Power Distribution & Control System", //[cite: 15]
          image: airport, 
          features: [
            "PDBs & DBs", //[cite: 15]
            "MCCBs, MCBs & ACBs", //[cite: 15]
            "Contactors & Relays", //[cite: 15]
            "RCCB / ELCBs", //[cite: 15]
            "VFDs & Soft Starters", //[cite: 15]
            "SCADA & Automation Panels" //[cite: 15]
          ]
        },
        {
          title: "Lighting and Safety System", //[cite: 15]
          image: airport, 
          features: [
            "Airfield & Runway Lighting", //[cite: 15]
            "High Mast & Flood Lights", //[cite: 15]
            "LED Terminal Lighting", //[cite: 15]
            "Emergency Exit Lights", //[cite: 15]
            "Fire Alarm Systems", //[cite: 15]
            "Public Address Systems" //[cite: 15]
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    windOfferings: null,
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
{
    id: "power-transmission-distribution-substation",
    image: powerTransmission,
    icon: FaBolt,
    title: "Power Transmission",
    description: "Reliable power transmission, distribution, and substation solutions ensuring efficient energy delivery and grid stability.",
    badges: ["UTILITIES", "GRID SUPPLY"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solutions for", //[cite: 17]
    heroHighlight: "Power Transmission", //[cite: 17]
    heroSubtext: "Reliable. Efficient. Sustainable.\nSolutions for a Stronger Grid.", //[cite: 17]
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "End-to-End Electrical Solutions" }, //[cite: 17]
      { icon: FiAward, title: "Trusted Quality" }, //[cite: 17]
      { icon: FiBox, title: "Ready Stock Availability" }, //[cite: 17]
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" }, //[cite: 17]
      { icon: MdSupportAgent, title: "Expert Support" } //[cite: 17]
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT OUR POWER TRANSMISSION SOLUTIONS", //[cite: 17]
      title: "Complete Electrical Infrastructure for Power Transmission Projects", //[cite: 17]
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide a complete range of electrical products used in power transmission projects.", //[cite: 17]
      desc2: "As an authorised distributor of leading brands, we maintain ready stock for timely dispatch across India, ensuring uninterrupted supply for critical transmission infrastructure.", //[cite: 17]
      calloutIcon: BsClipboardCheck,
      calloutText: "We supply all electrical components used in power transmission projects.", //[cite: 17]
      image: powerTransmission
    },
    
    // --- 18 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN POWER TRANSMISSION PROJECTS", //[cite: 17]
      title: "", 
      items: [
        { icon: MdElectricMeter, label: "Power Transformers" }, //[cite: 17]
        { icon: FiZap, label: "GIS & AIS Switchgear" }, //[cite: 17]
        { icon: FaTools, label: "Transmission Line Hardware" }, //[cite: 17]
        { icon: MdOutlineCable, label: "Conductors (ACSR, AAAC, AAC)" }, //[cite: 17]
        { icon: FiSettings, label: "Insulators (Polymer & Porcelain)" }, //[cite: 17]
        { icon: BsLightningChargeFill, label: "Surge Arresters & Lightning Protection" }, //[cite: 17]
        { icon: MdSpeed, label: "CT, PT & VT" }, //[cite: 17]
        { icon: FaBolt, label: "Isolators & Disconnectors" }, //[cite: 17]
        { icon: BsServer, label: "Control & Relay Panels" }, //[cite: 17]
        { icon: MdComputer, label: "SCADA & Automation Systems" }, //[cite: 17]
        { icon: FaNetworkWired, label: "Communication Systems (PLCC, FO)" }, //[cite: 17]
        { icon: MdCable, label: "OPGW & ADSS Cables" }, //[cite: 17]
        { icon: FiTool, label: "Termination & Jointing Kits" }, //[cite: 17]
        { icon: FaShieldAlt, label: "Earthing & Grounding Systems" }, //[cite: 17]
        { icon: MdBatteryChargingFull, label: "Battery & DC Systems (Switchyard)" }, //[cite: 17]
        { icon: FiGrid, label: "Cable Trays & Supports" }, //[cite: 17]
        { icon: BsBoxSeam, label: "Junction Boxes & Enclosures" }, //[cite: 17]
        { icon: FaCheckCircle, label: "Safety & Tools (Transmission)" } //[cite: 17]
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS FOR POWER TRANSMISSION PROJECTS", //[cite: 17]
      title: "",
      desc: "",
      cards: [
        {
          title: "Wire & Cable Accessories", //[cite: 17]
          image: powerTransmission, // Replace with your actual product cable image later
          features: [
            "HT & Power Cables", //[cite: 17]
            "OPGW & ADSS Cables", //[cite: 17]
            "Control & Instrumentation Cables", //[cite: 17]
            "Underground & Earth Cables", //[cite: 17]
            "Cable Lugs, Glands & Ferrules", //[cite: 17]
            "Cable Jointing & Termination Kits" //[cite: 17]
          ]
        },
        {
          title: "Power Distribution & Control System", //[cite: 17]
          image: powerTransmission, // Replace with your actual distribution panel image later
          features: [
            "PDBs & DBs", //[cite: 17]
            "MCCBs, MCBs & ACBs", //[cite: 17]
            "Relays & Protection Devices", //[cite: 17]
            "VFDs & Soft Starters", //[cite: 17]
            "Control & Relay Panels", //[cite: 17]
            "SCADA & Automation Panels" //[cite: 17]
          ]
        },
        {
          title: "Transmission Line Solutions", //[cite: 17]
          image: powerTransmission, // Replace with your actual tower/insulator image later
          features: [
            "Conductors (ACSR, AAC, AAAC)", //[cite: 17]
            "Insulators & Disc Suspension", //[cite: 17]
            "Tower Hardware & Fittings", //[cite: 17]
            "Earthing & Lightning Protection", //[cite: 17]
            "Line Accessories & Clamps", //[cite: 17]
            "Stringing Tools & Equipment" //[cite: 17]
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    windOfferings: null,
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
 {
    id: "steel-industry",
    image: steel2,
    icon: FaIndustry,
    title: "Steel Industry",
    description: "Robust steel industry solutions tailored for modern manufacturing and construction needs.",
    badges: ["HEAVY INDUSTRY", "INDUSTRIAL DISTRIBUTOR"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solution for",
    heroHighlight: "Steel industry",
    heroSubtext: "Powering Steel industry with Complete industrial Electrical products.",
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "Complete Electrical Solutions" },
      { icon: FiAward, title: "Leading Brands" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Dispatch" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT STEEL SOLUTIONS",
      title: "Powering Steel Industry with Complete Industrial Electrical Products",
      desc1: "At Unique Infra & Sustainable Power Pvt. Ltd., we provide complete electrical solutions for the steel industry, supporting plants, rolling mills, and heavy industrial operations.",
      desc2: "We are authorised distributors of leading brands and ensure ready stock availability for fast dispatch. From power distribution, automation, and control systems to lighting, safety, and cable management — we deliver reliable, efficient, and high-performance solutions for continuous steel plant operations.",
      calloutIcon: BsClipboardCheck,
      calloutText: "Delivering reliable, efficient, and high-performance solutions for continuous steel plant operations.",
      image: steel2
    },
    
    // --- 18 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY COMPONENTS",
      title: "", 
      items: [
        { icon: FiZap, label: "Power Distribution Panels (PDBs)" },
        { icon: MdElectricMeter, label: "Switchgear (ACB, MCCB, MCB)" },
        { icon: BsServer, label: "Transformers (Dry & Oil Cooled)" },
        { icon: FiActivity, label: "VFDs & Soft Starters" },
        { icon: FiTool, label: "Motors & Drives" },
        { icon: FiGrid, label: "Busducts" },
        { icon: BsBoxSeam, label: "Control & Relay Panels" },
        { icon: MdComputer, label: "SCADA & Automation Systems" },
        { icon: MdOutlineCable, label: "Cables & Wires (HT, LT, Control)" },
        { icon: FiGrid, label: "Cable Trays & Supports" },
        { icon: FaShieldAlt, label: "Earthing & Lightning Protection" },
        { icon: MdBatteryChargingFull, label: "UPS & Battery Systems" },
        { icon: MdLightbulbOutline, label: "Industrial Lighting (LED)" },
        { icon: FiShield, label: "Fire Alarm & Detection Systems" },
        { icon: FiSun, label: "Emergency Exit & Safety Lights" },
        { icon: FaIndustry, label: "Crane Control & Festoon Systems" },
        { icon: BsSpeedometer, label: "Instrumentation & Process Control" },
        { icon: FaTools, label: "Tools & Accessories (Industrial)" }
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS",
      title: "",
      desc: "",
      cards: [
        {
          title: "Wire & Cable Accessories",
          image: steel2, // Replace with your actual product cable image later
          features: [
            "HT & Power Cables",
            "Flexible & Armoured Cables",
            "Control & Instrumentation Cables",
            "Fire Survival Cables",
            "Data & Communication Cables",
            "Cable Glands & Accessories"
          ]
        },
        {
          title: "Power Distribution & Control System",
          image: steel2, // Replace with your actual distribution panel image later
          features: [
            "PDBs & DBs",
            "MCCBs, MCBs & ACBs",
            "Contactors & Relays",
            "RCCB / ELCBs",
            "VFDs & Soft Starters",
            "SCADA & Automation Panels"
          ]
        },
        {
          title: "Safety, Lighting & Automation",
          image: steel2, // Replace with your actual safety/automation image later
          features: [
            "LED Highbay & Flood Lights",
            "Fire Alarm Systems",
            "Emergency Exit Lights",
            "Crane & Hoist Systems",
            "Process Control Solutions",
            "PLC, DCS & SCADA Systems"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    windOfferings: null,
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
{
    id: "metro&railways",
    image: metro,
    icon: FaTrain,
    title: "Metro & Railways",
    description: "Efficient metro and railways solutions designed to improve urban mobility and transportation infrastructure.",
    badges: ["URBAN TRANSIT", "INFRASTRUCTURE SUPPLY"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solutions for", //[cite: 18]
    heroHighlight: "Metro & Railway Industry", //[cite: 18]
    heroSubtext: "Complete Electrical Infrastructure for Metro & Railway Projects.", //[cite: 18]
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "End-to-End Electrical Solutions" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT TRANSIT SOLUTIONS",
      title: "Complete Electrical Infrastructure for Metro & Railway Projects", //[cite: 18]
      desc1: "We supply a comprehensive range of electrical products used in metro rail projects, railway stations, depots, traction substations, signalling, and trackside infrastructure.", //[cite: 18]
      desc2: "Our solutions enhance operational efficiency, ensure passenger safety, reduce downtime, and support modern, future-ready rail networks with reliable electrical infrastructure and advanced automation systems.", //[cite: 18]
      calloutIcon: BsClipboardCheck,
      calloutText: "Supplying reliable components to power urban transit and railway networks.",
      image: metro
    },
    
    // --- 15 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN METRO & RAILWAY PROJECTS", //[cite: 18]
      title: "", 
      items: [
        { icon: MdOutlineCable, label: "Cable & Wires (HT, LT, Control)" }, //[cite: 18]
        { icon: FaShieldAlt, label: "Earthing & Lightning Protection Systems" }, //[cite: 18]
        { icon: MdBatteryChargingFull, label: "UPS & Battery Systems" }, //[cite: 18]
        { icon: MdLightbulbOutline, label: "Emergency Exit & Safety Lights" }, //[cite: 18]
        { icon: FaTrain, label: "Platform Screen Doors (PSD)" }, //[cite: 18]
        { icon: MdSupportAgent, label: "Public Address & Communication Systems" }, //[cite: 18]
        { icon: FiZap, label: "Traction & Power Cables" }, //[cite: 18]
        { icon: BsBoxSeam, label: "PDBs & DBs" }, //[cite: 18]
        { icon: FaNetworkWired, label: "Interlocking Systems" }, //[cite: 18]
        { icon: MdCable, label: "Signalling & Communication Cables" }, //[cite: 18]
        { icon: FiShield, label: "Fire Survival Cables" }, //[cite: 18]
        { icon: MdComputer, label: "SCADA & Monitoring Systems" }, //[cite: 18]
        { icon: FaBolt, label: "Overhead Electrification (OHE) Systems" }, //[cite: 18]
        { icon: BsServer, label: "Control Panels & Automation Systems" }, //[cite: 18]
        { icon: MdElectricMeter, label: "Substation Equipment" } //[cite: 18]
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS USED IN METRO & RAILWAY PROJECTS", //[cite: 18]
      title: "",
      desc: "",
      cards: [
        {
          title: "Wire & Cable Systems", //[cite: 18]
          image: metro, // Replace with your actual product cable image later
          features: [
            "HT & LT Power Cables", //[cite: 18]
            "Control Cables", //[cite: 18]
            "Signalling & Communication Cables", //[cite: 18]
            "Fire Survival Cables", //[cite: 18]
            "Traction Cables" //[cite: 18]
          ]
        },
        {
          title: "Power Distribution & Control System", //[cite: 18]
          image: metro, // Replace with your actual distribution panel image later
          features: [
            "PDBs & DBs", //[cite: 18]
            "MCCB, MCB & ACB", //[cite: 18]
            "Control & Relay Panels", //[cite: 18]
            "SCADA Systems", //[cite: 18]
            "Automation Panels", //[cite: 18]
            "VFDs & Drives" //[cite: 18]
          ]
        },
        {
          title: "Railway Infrastructure Systems", //[cite: 18]
          image: metro, // Replace with your actual infrastructure image later
          features: [
            "Overhead Electrification (OHE) Equipment", //[cite: 18]
            "Interlocking Systems", //[cite: 18]
            "Traction Substation Equipment", //[cite: 18]
            "Platform Screen Doors (PSD)", //[cite: 18]
            "Emergency Lighting Systems", //[cite: 18]
            "Public Address Systems" //[cite: 18]
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    windOfferings: null,
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  },
  {
    id: "ev-vehicle-industry",
    image: evImage, // Make sure you imported this at the top!
    icon: FiBatteryCharging,
    title: "EV Vehicle Industry",
    description: "Complete Electrical Infrastructure for EV Vehicles, Charging & Manufacturing Ecosystem.",
    badges: ["E-MOBILITY", "INFRASTRUCTURE SUPPLY"],
    
    // --- HERO BANNER DATA ---
    heroTagline: "Electrical Solutions for",
    heroHighlight: "EV Vehicle Industry",
    heroSubtext: "Complete Electrical Infrastructure for EV Vehicles, Charging & Manufacturing Ecosystem.",
    
    // --- FEATURES BAR ---
    featuresBar: [
      { icon: FiShield, title: "Complete Electrical Solutions" },
      { icon: FiAward, title: "Trusted Quality" },
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: TbTruckDelivery, title: "Fast Delivery Across India" },
      { icon: MdSupportAgent, title: "Expert Support" }
    ],
    
    // --- ABOUT SECTION ---
    aboutSection: {
      subtitle: "ABOUT EV SOLUTIONS",
      title: "Complete Electrical Infrastructure for EV Vehicles, Charging & Manufacturing Ecosystem",
      desc1: "We supply a wide range of electrical products used in EV vehicles, battery systems, manufacturing plants, testing units, and EV infrastructure projects.",
      desc2: "From power distribution and control systems to wiring harness components, safety systems, and automation solutions — we support reliable performance, efficiency, and safety across the entire electric vehicle ecosystem.",
      calloutIcon: BsClipboardCheck,
      calloutText: "Supporting reliable performance, efficiency, and safety across the entire EV ecosystem.",
      image: evImage
    },
    
    // --- 12 KEY COMPONENTS GRID ---
    keyComponents: {
      subtitle: "KEY COMPONENTS USED IN EV VEHICLE INDUSTRY",
      title: "", 
      items: [
        { icon: MdOutlineCable, label: "EV Vehicle Wiring" },
        { icon: FiZap, label: "Power Distribution Units (PDU)" },
        { icon: FiBatteryCharging, label: "DC-DC Converters" },
        { icon: MdOutlineCable, label: "HV & LV Cables" },
        { icon: BsBoxSeam, label: "Control & Relay" },
        { icon: FiCpu, label: "Motor Control Units (MCU)" },
        { icon: FaShieldAlt, label: "Earthing & Protection Systems" },
        { icon: MdSpeed, label: "Sensors & Monitoring Systems" },
        { icon: FiSettings, label: "Connector & Terminal Systems" },
        { icon: BsLightningChargeFill, label: "Charging Components" },
        { icon: MdComputer, label: "Vehicle Control Electronics" },
        { icon: FiShield, label: "Fuse & Protection Systems" }
      ]
    },
    
    // --- 3 ESSENTIAL PRODUCT CARDS ---
    specialOfferings: {
      subtitle: "ESSENTIAL PRODUCTS",
      title: "Electrical Solutions for EV Vehicle Industry",
      desc: "",
      cards: [
        {
          title: "Wire & Cable Systems",
          image: evImage, // Replace with your actual product cable image later
          features: [
            "High Voltage EV Cables",
            "Low Voltage Control Cables",
            "Battery Connection Cables",
            "Shielded Communication Cables",
            "Automotive Wiring Harness Components"
          ]
        },
        {
          title: "Power & Control Systems",
          image: evImage, // Replace with your actual distribution/power image later
          features: [
            "DC-DC Converters",
            "Power Distribution Units (PDU)",
            "Vehicle Control Modules",
            "Fuse & Protection Units"
          ]
        },
        {
          title: "Safety & Automation Systems",
          image: evImage, // Replace with your actual safety/sensor image later
          features: [
            "Thermal Protection Systems",
            "Vehicle Monitoring Sensors",
            "Control Relays & Modules",
            "Diagnostic & Testing Systems",
            "Earthing & Electrical Protection Systems"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    windOfferings: null,
    detailedSolutions: [],
    whyChooseUs: [],
    whereUsed: [],
    cta: null
  }



];

export default IndustriesData;