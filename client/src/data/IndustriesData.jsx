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
  MdOutlinePriceCheck,
  MdSupportAgent,
  MdOutlineEnergySavingsLeaf
} from "react-icons/md";

import { TbSolarPanel2, TbTruckDelivery, TbWorldUpload } from "react-icons/tb";
import { BsLightningChargeFill, BsBoxSeam, BsBuildingFillGear } from "react-icons/bs";

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
        image: saatvikOffer
      },
      {
        title: "Electrical Components & Accessories",
        desc: "Complete range of electrical components to ensure safety, efficiency and long-term performance.",
        icon: FiSettings,
        features: ["Lugs & Glands", "Cable Trays", "Junction Boxes", "Earthing Materials", "Lightning Arrestors", "Conduits & Accessories"],
        image: saatvikOffer
      },
      {
        title: "Inverters & Protection Solutions",
        desc: "Advanced inverters and protection devices for smooth energy conversion and system safety.",
        icon: FiCpu,
        features: ["String Inverters", "On-Grid Inverters", "Hybrid Inverters", "SPDs & Fuses", "AC/DC Combiner Boxes"],
        image: saatvikOffer
      }
    ],
    whyChooseUs: [
      { icon: FiBox, title: "Ready Stock Availability" },
      { icon: FiAward, title: "Authorized Premium Partner Brands" },
      { icon: FiTruck, title: "Fast Delivery & Turnaround" },
      { icon: FiGrid, title: "Wide Product Range" },
      { icon: FaShieldAlt, title: "Trusted by Industry Leaders" },
      { icon: MdOutlinePriceCheck, title: "Competitive Pricing" }
    ],
    whereUsed: [
      { image: solar, label: "Residential Rooftops" },
      { image: solar, label: "Commercial Buildings" },
      { image: solar, label: "Industrial Projects" },
      { image: solar, label: "Solar Farms" },
      { image: solar, label: "Government Projects" }
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
    competencies: [ /* Keeping old data safe */ ],
    // --- NEW LAYOUT FIELDS ---
    heroTagline: "Innovative Solutions for",
    heroHighlight: "Hydro Power",
    heroSubtext: "We supply electrical, automation, and instrumentation products to hydropower plant construction and maintenance projects.",
    featuresBar: [
      { icon: FaWater, title: "RENEWABLE ENERGY" },
      { icon: FiSettings, title: "INDUSTRIAL SUPPLY" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR HYDRO SOLUTIONS",
      title: "End-to-End Hydro Power Solutions",
      desc1: "Innovative hydroelectric solutions harnessing the power of water for efficient energy production.",
      desc2: "Our product range supports EPC contractors and power utilities operating run-of-river and reservoir-based hydro plants.",
      calloutIcon: FaCheckCircle,
      calloutText: "Providing certified components for hydro plant operations.",
      image: hydro
    },
    keyComponents: { items: [] }, // Empty as requested
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Hydro Plant Electrical Products",
        desc: "Hydropower plants require robust electrical equipment to handle high output and challenging site conditions.",
        icon: FiZap,
        features: ["HT Cables & Switchgear", "Bus Ducts & Transformers"],
        image: hydro
      },
      {
        title: "Hydro Plant Automation Products",
        desc: "Efficient hydro plant operation depends on precise control and monitoring systems.",
        icon: FiActivity,
        features: ["PLCs & DCS Hardware", "Flow & Pressure Sensors"],
        image: hydro
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Ready for",
      highlight: "Hydro Power?",
      desc: "Get comprehensive solutions from a trusted supplier for your next big project.",
      features: [
        { icon: FaCheckCircle, title: "Quality Assured" },
        { icon: TbTruckDelivery, title: "Fast Delivery" }
      ]
    }
  },
  {
    id: "wind-energy",
    image: wind,
    icon: FaWind,
    title: "Wind Energy",
    description: "Cutting-edge wind energy systems designed to capture natural wind power for a sustainable tomorrow.",
    badges: ["WIND POWER", "PRODUCT DISTRIBUTOR"],
    heroDesc: "We supply specialized electrical, instrumentation, and automation products required for onshore and offshore wind energy projects. Our portfolio supports wind farm developers, EPC contractors, and OEMs with reliable and certified components.",
    competencies: [ /* Keeping old data safe */ ],
    // --- NEW LAYOUT FIELDS ---
    heroTagline: "Empowering Projects with",
    heroHighlight: "Wind Energy",
    heroSubtext: "We supply specialized electrical, instrumentation, and automation products required for onshore and offshore wind energy projects.",
    featuresBar: [
      { icon: FaWind, title: "WIND POWER" },
      { icon: FiBox, title: "PRODUCT DISTRIBUTOR" }
    ],
    aboutSection: {
      subtitle: "ABOUT OUR WIND SOLUTIONS",
      title: "Comprehensive Wind Energy Supply",
      desc1: "Cutting-edge wind energy systems designed to capture natural wind power for a sustainable tomorrow.",
      desc2: "Our portfolio supports wind farm developers, EPC contractors, and OEMs with reliable and certified components.",
      calloutIcon: FaCheckCircle,
      calloutText: "Certified components for turbine and substation needs.",
      image: wind
    },
    keyComponents: { items: [] }, // Empty as requested
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Electrical Supply for Wind Turbines",
        desc: "Wind turbines operate in harsh environments and demand highly durable electrical components.",
        icon: FiWind,
        features: ["MV Switchgear & Cables", "Earthing & Protection"],
        image: wind
      },
      {
        title: "SCADA & Monitoring Products",
        desc: "Efficient wind farm management depends on accurate data collection and remote monitoring.",
        icon: FiActivity,
        features: ["Sensors & Anemometers", "Communication Equipment"],
        image: wind
      }
    ],
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
    heroTagline: "Critical Infrastructure for",
    heroHighlight: "Data Centers",
    heroSubtext: "Precision power, cooling, and structured cabling products for data center construction.",
    featuresBar: [
      { icon: FaServer, title: "IT INFRASTRUCTURE" },
      { icon: FiShield, title: "CRITICAL SUPPLY" }
    ],
    aboutSection: {
      subtitle: "ABOUT DATA CENTER SOLUTIONS",
      title: "State-of-the-art infrastructure supply",
      desc1: "Ensuring optimal performance, security, and scalability for your IT infrastructure.",
      desc2: "Our distribution portfolio supports hyperscale, enterprise, and colocation data center developers with certified, high-reliability components.",
      calloutIcon: FaCheckCircle,
      calloutText: "Mission-Critical Power & Data Supply",
      image: dataCenter
    },
    keyComponents: { items: [] },
    specialOfferings: null,
    detailedSolutions: [
      {
        title: "Data Center Power Products",
        desc: "Data centers demand the highest level of power reliability.",
        icon: FiZap,
        features: ["UPS & Static Transfer", "PDUs & Busbar Trunking"],
        image: dataCenter
      },
      {
        title: "Structured Cabling Products",
        desc: "High-performance data centers rely on robust structured cabling infrastructure.",
        icon: FiDatabase,
        features: ["Fiber Optic & Copper", "Cable Management"],
        image: dataCenter
      }
    ],
    whyChooseUs: [],
    whereUsed: [],
    cta: {
      title: "Building a",
      highlight: "Data Center?",
      desc: "Contact us for critical supply solutions.",
      features: []
    }
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