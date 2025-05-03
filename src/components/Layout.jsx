import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useMobile } from "../hooks/useMobile";
import { theme } from "../theme";

const Layout = () => {
  const isMobile = useMobile();

  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    paddingTop: "60px", // To account for fixed navbar
  };

  const contentStyle = {
    flex: 1,
    padding: isMobile ? theme.spacing.md : theme.spacing.xl,
  };

  return (
    <div style={mainStyle}>
      <Navbar />
      <main style={contentStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
