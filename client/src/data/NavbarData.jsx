import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/uisppl.webp";
import BrandsPageData, {
  OtherBrandsData,
  TopBrandsData,
} from "./BrandsPageData";
import IndustriesData from "./IndustriesData";
import electrical from "../assets/brandsProducts/kei/PVC Winding Wires.webp";
import automation from "../assets/brandsProducts/phoenix/Edge computing.webp";
import tools from "../assets/brandsProducts/kei/KEI CHARGE EV.webp";
import mechanical from "../assets/brandsProducts/innomotics/Definite Purpose Motors.webp";
import lubricants from "../assets/products/lubricants.webp";
import safety from "../assets/products/safety.webp";

const dynamicSegmentsLinks = IndustriesData.map((industry) => ({
  title: industry.title,
  link: `/segments/${industry.id}`,
  image: industry.image,
}));

const mapBrandMenuItem = (brand) => ({
  name: brand.name,
  slug: brand.slug,
  category: brand.category?.[0] || brand.categories?.[0] || "Electrical",
  logo: brand.logo || null,
  image: brand.heroImage,
});

const dynamicBrandCategories = TopBrandsData.map(mapBrandMenuItem);

const dynamicOtherBrands = OtherBrandsData.map(mapBrandMenuItem);

const dynamicAllBrands = BrandsPageData.map(mapBrandMenuItem);

const dynamicProductCategories = [
  { name: "Electrical", image: electrical, brands: [] },
  { name: "Automation", image: automation, brands: [] },
  { name: "Tools & Tackles", image: tools, brands: [] },
  { name: "Mechanical", image: mechanical, brands: [] },
  { name: "Lubricants", image: lubricants, brands: [] },
  { name: "Safety", image: safety, brands: [] },
];

export const navbarData = {
  topbar: {
    contact: { phone: "+91 92170 30961", email: "info@uisppl.com" },
    socialMedia: [
      {
        id: "instagram",
        icon: FaInstagram,
        link: "https://www.instagram.com/uisppl",
        label: "Instagram",
        color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      },
      {
        id: "facebook",
        icon: FaFacebookF,
        link: "https://www.facebook.com/uisppl",
        label: "Facebook",
        color: "bg-blue-800",
      },
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/company/uisppl",
        label: "LinkedIn",
        color: "bg-blue-600",
      },
    ],
  },
  logo: {
    src: logo,
    alt: "Unique Infra & Sustainable Power Private Limited",
  },
  socialMedia: [
    {
      id: "instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/uisppl",
      label: "Instagram",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      id: "facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/uisppl",
      label: "Facebook",
      color: "bg-blue-800",
    },
    {
      id: "linkedin",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/uisppl",
      label: "LinkedIn",
      color: "bg-blue-600",
    },
  ],
  menuItems: [
    { id: "home", title: "Home", link: "/", hasMegaMenu: false },
    {
      id: "company",
      title: "Company",
      link: "/about",
      hasMegaMenu: true,
      megaMenuType: "company",
      companyLinks: [
        { title: "Overview", link: "/about" },
        { title: "Milestones", link: "/milestones" },
        { title: "Certifications & Awards", link: "/certifications-awards" },
        { title: "Our Team", link: "/team" },
      ],
    },
    {
      id: "brands",
      title: "Brands",
      link: "/brands",
      hasMegaMenu: true,
      megaMenuType: "brands",
      brandCategories: dynamicBrandCategories,
      otherBrands: dynamicOtherBrands,
      allBrands: dynamicAllBrands,
    },
    {
      id: "products",
      title: "Products",
      link: "/products",
      hasMegaMenu: true,
      megaMenuType: "products",
      categories: dynamicProductCategories,
      subcategories: dynamicProductCategories.map((cat) => cat.name),
    },
    {
      id: "segments",
      title: "Segments",
      link: "/segments",
      hasMegaMenu: true,
      megaMenuType: "segments",
      segmentsLinks: dynamicSegmentsLinks,
    },
    { id: "news", title: "News & Blogs", link: "/blogs", hasMegaMenu: false },
  ],
  ctaButton: { text: "Talk To Sales", link: "/contact" },
};
