import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import EachBlogPage from "./pages/EachBlogPage.jsx";
import CertificationsAndAwardsPage from "./pages/CertificationsAndAwardsPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import BrandsPage from "./pages/BrandsPage.jsx";
import EachBrandPage from "./pages/EachBrandPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsAndConditionPage from "./pages/TermsAndConditionPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Milestones from "./components/about/Milestones.jsx";
import PhoneButton from "./components/PhoneButton.jsx";
import EachProductPage from "./pages/EachProductPage.jsx";
import Thankyou from "./components/Thankyou.jsx";
import SegmentsPage from "./pages/SegmentsPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import EachSegmentPage from "./pages/EachSegmentPage.jsx";
import NotFound from "./components/404_page.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route
          path="/certifications-awards"
          element={<CertificationsAndAwardsPage />}
        />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:slug" element={<EachBrandPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<EachBlogPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug" element={<EachProductPage />} />
        <Route path="/segments" element={<SegmentsPage />} />
        <Route path="/segments/:segmentName" element={<EachSegmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsAndConditionPage />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
