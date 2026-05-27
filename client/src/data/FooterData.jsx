import logo from "../assets/uisppl.webp";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const FooterData = {
  company: {
    fullName: "Unique Infra & Sustainable Power Private Limited",
    logo: logo,
    description:
      "For product inquiries or our latest price list, please share your email with us. Our team will get in touch with you within 24 hours.",
    contact: {
      phone: "+91 92170 30961",
      email: "info@uisppl.com",
      addresses: [
        {
          title: "Corporate Address",
          value: "B30, Block B, Sector 60, Noida, Uttar Pradesh 201301",
        },
        {
          title: "WareHouse Address",
          value: "C-59, Sec-57, Noida, Uttar Pradesh 201301",
        },
      ],
    },
  },
  topBrands: [
    { name: "KEI Wire & Cables", link: "/brands/kei" },
    { name: "Bajaj Electricals", link: "/brands/bajaj" },
    { name: "Polycab", link: "/brands/polycab" },
    { name: "Phoenix Contact", link: "/brands/phoenix-contact" },
    { name: "Dowell's", link: "/brands/dowells" },
    { name: "Atomberg", link: "/brands/atomberg" },
    { name: "Innomotics", link: "/brands/innomotics" },
    { name: "HEX", link: "/brands/hex" },
    { name: "Crompton", link: "/brands/crompton" },
    { name: "Saatvik Solar", link: "/brands/saatvik" },
  ],
  industries: [
    { name: "Solar Power", link: "solar-power" },
    { name: "Hydro Power", link: "hydro-power" },
    { name: "Wind Energy", link: "wind-energy" },
    { name: "Data Centre", link: "data-centers" },
    { name: "Tunnel", link: "tunnel" },
    { name: "Airport", link: "airport" },
    { name: "Power Transmission", link: "power-transmission-distribution" },
    { name: "Steel Industries", link: "steel-industry" },
    { name: "Metro & Railways", link: "metro-railways" },
  ],
  quickLinks: [
    { name: "About Us", link: "/about" },
    { name: "Our Team", link: "/team" },
    { name: "Segments", link: "/segments" },
    { name: "Products", link: "/products" },
    { name: "Blogs & News", link: "/blogs" },
    { name: "Support & Help", link: "/contact" },
    { name: "Privacy & Policy", link: "/privacy-policy" },
    { name: "Terms & Condition", link: "/terms-of-service" },
  ],
  socialMedia: [
    {
      name: "Instagram",
      link: "https://www.instagram.com/uisppl",
      icon: <FaInstagram />,
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/uisppl",
      icon: <FaFacebookF />,
      color: "bg-blue-800",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/uisppl",
      icon: <FaLinkedinIn />,
      color: "bg-blue-600",
    },
  ],
};

export default FooterData;
