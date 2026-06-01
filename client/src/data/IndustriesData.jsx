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
  FaGlobeAmericas
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
      title: "Ready to Go Solar?",
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
    heroDesc: "We supply specialized electrical, safety, and automation products for tunnel construction and operation projects.",
    competencies: [],
    heroTagline: "Advanced Solutions for",
    heroHighlight: "Tunnel Projects",
    heroSubtext: "Specialized electrical, safety, and automation products for tunnel construction.",
    featuresBar: [
      { icon: FaArchway, title: "INFRASTRUCTURE" },
      { icon: FiShield, title: "SAFETY PRODUCTS" }
    ],
    aboutSection: {
      subtitle: "ABOUT TUNNEL SOLUTIONS",
      title: "Underground Construction Infrastructure",
      desc1: "Advanced tunneling solutions for infrastructure projects, ensuring safety and efficiency.",
      desc2: "Our product range supports contractors and project owners with reliable components designed for underground environments.",
      calloutIcon: FaCheckCircle,
      calloutText: "Certified safety equipment for tunnel infrastructure.",
      image: tunnel
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Tunnel Lighting & Safety Products",
        desc: "Safety inside tunnels depends on reliable lighting and early warning systems.",
        icon: FiSun,
        features: ["Emergency Luminaires", "Fire & Detection Systems"],
        image: tunnel
      },
      {
        title: "Ventilation Automation Supply",
        desc: "Tunnel ventilation systems require precision automation to maintain air quality.",
        icon: FiWind,
        features: ["VFDs & Fan Controls", "Air Quality Sensors"],
        image: tunnel
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Starting a",
      highlight: "Tunnel Project?",
      desc: "We supply everything for underground environments.",
      features: []
    }
  },
  {
    id: "airport",
    image: airport,
    icon: FaPlane,
    title: "Airport",
    description: "Comprehensive airport infrastructure solutions enhancing operational efficiency and passenger experience.",
    badges: ["AVIATION", "CERTIFIED SUPPLY"],
    heroDesc: "We supply specialized electrical, automation, and airfield lighting products to airport construction and expansion projects.",
    competencies: [],
    heroTagline: "Comprehensive Infrastructure for",
    heroHighlight: "Airports",
    heroSubtext: "Specialized electrical, automation, and airfield lighting products to airport projects.",
    featuresBar: [
      { icon: FaPlane, title: "AVIATION" },
      { icon: FiAward, title: "CERTIFIED SUPPLY" }
    ],
    aboutSection: {
      subtitle: "ABOUT AIRPORT SOLUTIONS",
      title: "Airport Infrastructure Distribution",
      desc1: "Comprehensive airport infrastructure solutions enhancing operational efficiency and passenger experience.",
      desc2: "Our product range meets stringent aviation safety standards and supports contractors and airport authorities across India.",
      calloutIcon: FaCheckCircle,
      calloutText: "Certified aviation products for safe operations.",
      image: airport
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Airfield Lighting Products",
        desc: "Airfield lighting is a safety-critical requirement for every airport.",
        icon: FiSun,
        features: ["Runway & Taxiway Lights", "CCRs & Control Panels"],
        image: airport
      },
      {
        title: "Terminal Power Distribution",
        desc: "Airport terminals require uninterrupted power for security, baggage, and passenger systems.",
        icon: FiZap,
        features: ["UPS & Transfer Switches", "Busbar & Distribution"],
        image: airport
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Developing an",
      highlight: "Airport Facility?",
      desc: "Trusted components for aviation projects.",
      features: []
    }
  },
  {
    id: "power-transmission-distribution-substation",
    image: powerTransmission,
    icon: FaBolt,
    title: "Power Transmission",
    description: "Reliable power transmission, distribution, and substation solutions ensuring efficient energy delivery and grid stability.",
    badges: ["UTILITIES", "GRID SUPPLY"],
    heroDesc: "We supply electrical and automation products for power transmission, distribution, and substation projects.",
    competencies: [],
    heroTagline: "Efficient Energy Delivery with",
    heroHighlight: "Power Transmission",
    heroSubtext: "Electrical and automation products for transmission, distribution, and substations.",
    featuresBar: [
      { icon: FaBolt, title: "UTILITIES" },
      { icon: FiGrid, title: "GRID SUPPLY" }
    ],
    aboutSection: {
      subtitle: "ABOUT POWER SOLUTIONS",
      title: "Grid Stability & Transmission Supply",
      desc1: "Reliable power transmission, distribution, and substation solutions ensuring efficient energy delivery.",
      desc2: "Our portfolio supports utilities, EPC contractors, and state electricity boards with reliable components for grid infrastructure development.",
      calloutIcon: FaCheckCircle,
      calloutText: "Distributing reliable products for grid infrastructure.",
      image: powerTransmission
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Substation Product Supply",
        desc: "Substations form the backbone of the power grid and require highly reliable equipment.",
        icon: FiGrid,
        features: ["Transformers & Switchgear", "Protection Relays"],
        image: powerTransmission
      },
      {
        title: "Transmission Line Products",
        desc: "Overhead transmission lines require durable and certified line hardware.",
        icon: FiActivity,
        features: ["Conductors & Earth Wire", "Insulators & Fittings"],
        image: powerTransmission
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Strengthening the",
      highlight: "Power Grid?",
      desc: "Connect with us for reliable utility products.",
      features: []
    }
  },
  {
    id: "steel-industry",
    image: steel2,
    icon: FaIndustry,
    title: "Steel Industry",
    description: "Robust steel industry solutions tailored for modern manufacturing and construction needs.",
    badges: ["HEAVY INDUSTRY", "INDUSTRIAL DISTRIBUTOR"],
    heroDesc: "We supply heavy-duty electrical, automation, and instrumentation products to steel manufacturing plants.",
    competencies: [],
    heroTagline: "Robust Solutions for the",
    heroHighlight: "Steel Industry",
    heroSubtext: "Heavy-duty electrical, automation, and instrumentation products for steel manufacturing.",
    featuresBar: [
      { icon: FaIndustry, title: "HEAVY INDUSTRY" },
      { icon: FiTool, title: "INDUSTRIAL DISTRIBUTOR" }
    ],
    aboutSection: {
      subtitle: "ABOUT STEEL SOLUTIONS",
      title: "Industrial Manufacturing Supply",
      desc1: "Robust steel industry solutions tailored for modern manufacturing and construction needs.",
      desc2: "Our distribution capabilities support integrated steel plants, mini steel mills, and rolling mills with components built to withstand extreme industrial conditions.",
      calloutIcon: FaCheckCircle,
      calloutText: "Built to withstand extreme industrial environments.",
      image: steel2
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Electric Furnace Power Products",
        desc: "Electric arc and induction furnaces operate at extremely high currents and temperatures.",
        icon: FiTool,
        features: ["Furnace Cables & Busbars", "Electrode & Reactor Panels"],
        image: steel2
      },
      {
        title: "Steel Plant Automation Products",
        desc: "Modern steel plants rely on sophisticated automation to control systems.",
        icon: FiSettings,
        features: ["Drives & Motor Controls", "PLCs & HMIs"],
        image: steel2
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Upgrading your",
      highlight: "Steel Plant?",
      desc: "Get heavy-duty industrial components.",
      features: []
    }
  },
  {
    id: "metro&railways",
    image: metro,
    icon: FaTrain,
    title: "Metro & Railways",
    description: "Efficient metro and railways solutions designed to improve urban mobility and transportation infrastructure.",
    badges: ["URBAN TRANSIT", "INFRASTRUCTURE SUPPLY"],
    heroDesc: "We supply electrical, automation, and signaling products to metro rail, highway, and railway infrastructure projects.",
    competencies: [],
    heroTagline: "Urban Mobility with",
    heroHighlight: "Metro & Railways",
    heroSubtext: "Electrical, automation, and signaling products for large transit networks.",
    featuresBar: [
      { icon: FaTrain, title: "URBAN TRANSIT" },
      { icon: FiActivity, title: "INFRASTRUCTURE SUPPLY" }
    ],
    aboutSection: {
      subtitle: "ABOUT TRANSIT SOLUTIONS",
      title: "Urban Transportation Infrastructure",
      desc1: "Efficient metro and railways solutions designed to improve urban mobility.",
      desc2: "Our distribution network supports EPC contractors and government agencies with quality-assured components for large-scale transit systems.",
      calloutIcon: FaCheckCircle,
      calloutText: "Supplying reliable components to power urban transit.",
      image: metro
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Traction Power Equipment",
        desc: "Metro and railway traction systems demand ultra-reliable electrical equipment.",
        icon: FiZap,
        features: ["Traction Cables & Switchgear", "Protection & Earthing"],
        image: metro
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Building",
      highlight: "Transit Networks?",
      desc: "Reach out for transit infrastructure products.",
      features: []
    }
  }
];

export default IndustriesData;