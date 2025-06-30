import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Clients from "../pages/Clients";
import Equipment from "../pages/Equipment";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";

import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
   <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers/>} />
      </Route>
    </Routes>
   </>
  );
};

export default AppRoutes;
