import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobile();
  const location = useLocation();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    zIndex: 1000,
    boxShadow: theme.boxShadow.md,
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: isMobile
      ? theme.typography.fontSize.lg
      : theme.typography.fontSize.xl,
    color: theme.colors.white,
    textDecoration: "none",
  };

  const navLinksStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "60px" : "auto",
    left: 0,
    width: isMobile ? "100%" : "auto",
    backgroundColor: isMobile ? theme.colors.primary : "transparent",
    padding: isMobile ? theme.spacing.md : 0,
    boxShadow: isMobile ? theme.boxShadow.md : "none",
  };

  const linkStyle = (isActive) => ({
    color: isActive ? theme.colors.lightRed : theme.colors.white,
    textDecoration: "none",
    padding: theme.spacing.md,
    margin: isMobile ? `${theme.spacing.xs} 0` : `0 ${theme.spacing.sm}`,
    fontWeight: isActive
      ? theme.typography.fontWeight.bold
      : theme.typography.fontWeight.medium,
    borderBottom: isActive ? `2px solid ${theme.colors.lightRed}` : "none",
    transition: "all 0.2s ease-in-out",
  });

  const burgerButtonStyle = {
    display: isMobile ? "block" : "none",
    background: "none",
    border: "none",
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.xl,
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={navContainerStyle}>
        <Link to="/" style={logoStyle}>
          KRISHNA FIRE SYSTEMS
        </Link>

        <button
          style={burgerButtonStyle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div style={navLinksStyle}>
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              style={linkStyle(location.pathname === route.path)}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
