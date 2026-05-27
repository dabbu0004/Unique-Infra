import { useEffect } from "react";
import BrandsWeTrust from "../components/home/BrandsWeTrust";
import Certificates from "../components/home/Certificates";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HomeHero from "../components/home/HomeHero";
import WhoWeAre from "../components/home/WhoWeAre";
import StatsBanner from "../components/home/StatsBanner";
import OurClients from "../components/home/Clients";
import MeetTheFounder from "../components/home/MeetTheFounder";
import CtaBanner from "../components/CtaBanner";
import Blogs from "../components/home/Blogs";
import GlobalReach from "../components/home/GlobalReach";
import InstagramSection from "../components/home/InstagramSection";
import IndustriesWeServe from "../components/home/IndustriesWeServe";
import ContactHero from "../components/contact/ContactHero";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeHero />
      <StatsBanner />
      <IndustriesWeServe />
      <BrandsWeTrust />
      <WhoWeAre />
      <MeetTheFounder />
      <FeaturedProducts />
      <Certificates />
      <GlobalReach />
      <OurClients />
      <Blogs />
      <InstagramSection />
      <CtaBanner />
      <ContactHero />
    </div>
  );
};

export default HomePage;
