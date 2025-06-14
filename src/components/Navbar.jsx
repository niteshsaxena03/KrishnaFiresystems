import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();
  const location = useLocation();

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/clients", label: "Clients" },
    { path: "/equipment", label: "Tools & Equipments" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: scrolled ? "60px" : "70px",
    background: scrolled
      ? theme.colors.navbarBlue
      : theme.gradients.navbarGradient,
    color: theme.colors.white,
    padding: `0 ${theme.spacing.xl}`,
    zIndex: 1000,
    boxShadow: scrolled ? theme.boxShadow.navbarShadow : "none",
    transition: "all 0.3s ease-in-out",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: isMobile
      ? theme.typography.fontSize.lg
      : theme.typography.fontSize.xl,
    color: theme.colors.white,
    textDecoration: "none",
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s ease",
  };

  const logoIconStyle = {
    marginRight: theme.spacing.sm,
    fontSize: isMobile ? "1.5rem" : "2rem",
    color: theme.colors.navHighlight,
  };

  const navLinksContainerStyle = {
    height: "100%",
  };

  const navLinksStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "70px" : "auto",
    left: 0,
    right: 0,
    width: isMobile ? "100%" : "auto",
    background: isMobile ? theme.colors.navbarBlue : "transparent",
    padding: isMobile ? `${theme.spacing.xl} ${theme.spacing.md}` : 0,
    boxShadow: isMobile ? theme.boxShadow.md : "none",
    zIndex: 999,
    alignItems: "center",
    height: isMobile ? "auto" : "100%",
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
    transform: isMobile
      ? menuOpen
        ? "translateY(0)"
        : "translateY(-10px)"
      : "none",
    opacity: isMobile ? (menuOpen ? 1 : 0) : 1,
    pointerEvents: isMobile ? (menuOpen ? "auto" : "none") : "auto",
  };

  const navItemStyle = {
    position: "relative",
    height: isMobile ? "auto" : "100%",
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = (isActive) => ({
  color: isActive ? theme.colors.navHighlight : theme.colors.white,
  textDecoration: "none",
  padding: isMobile ? theme.spacing.md : `0 ${theme.spacing.lg}`,
  margin: isMobile ? `${theme.spacing.xs} 0` : 0,
  fontWeight: theme.typography.fontWeight.bold, // ← BOLDER FONT FOR ALL
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: isMobile ? "auto" : "100%",
  transition: "color 0.2s ease, transform 0.2s ease",
  textTransform: "uppercase",
  fontSize: theme.typography.fontSize.sm,
  letterSpacing: "1px",
  transform: isActive && !isMobile ? "translateY(-2px)" : "none",
  "&:hover": {
    color: theme.colors.navHighlight,
  },
});

  // Active link indicator (visible on desktop only)
  const activeLinkIndicator = (isActive) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "3px",
    background: isActive ? theme.colors.navHighlight : "transparent",
    borderRadius: "3px 3px 0 0",
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    display: isMobile ? "none" : "block",
  });

  const burgerButtonStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 1001,
  };

  const burgerLineStyle = (pos) => ({
    width: "100%",
    height: "2px",
    background: theme.colors.white,
    borderRadius: "2px",
    transformOrigin: "center",
    transition: "all 0.3s ease-in-out",
    transform: menuOpen
      ? pos === "top"
        ? "rotate(45deg) translate(5px, 5px)"
        : pos === "middle"
          ? "scaleX(0)"
          : "rotate(-45deg) translate(5px, -5px)"
      : "none",
  });

  return (
    <nav style={navbarStyle}>
      <div style={navContainerStyle}>
        <div style={logoContainerStyle}>
          <Link to="/" style={logoStyle}>
            KRISHNA FIRE
            <span
              style={{
                fontSize: "0.6em",
                verticalAlign: "top",
                marginLeft: "1px",
                lineHeight: "1",
                position: "relative",
                top: "-0.3em",
              }}
            >
              ®
            </span>
          </Link>
        </div>

        <button
          style={burgerButtonStyle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span style={burgerLineStyle("top")}></span>
          <span style={burgerLineStyle("middle")}></span>
          <span style={burgerLineStyle("bottom")}></span>
        </button>

        <div style={navLinksContainerStyle}>
          <div style={navLinksStyle}>
            {routes.map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <div style={navItemStyle} key={route.path}>
                  <Link
                    to={route.path}
                    style={{
                      ...linkStyle(isActive),
                      color: isActive
                        ? theme.colors.navHighlight
                        : theme.colors.white,
                    }}
                    onClick={() => isMobile && setMenuOpen(false)}
                  >
                    {route.label}
                    {!isMobile && (
                      <div style={activeLinkIndicator(isActive)}></div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
