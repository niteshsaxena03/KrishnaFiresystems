import { Link } from "react-router-dom";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import { useState, useEffect } from "react";

const Home = () => {
  const [bgImage, setBgImage] = useState(
    "https://res.cloudinary.com/dhcodkhrw/image/upload/v1749029004/Home_g1dstg.jpg"
  );

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;

    img.onerror = () => {
      setBgImage(
        "https://5.imimg.com/data5/SELLER/Default/2024/11/467114283/SW/ZL/AL/234876236/fire-system-and-fire-safety-equipment-in-india.jpg"
      );
    };
  }, []);

  const isMobile = useMobile();

  const heroSectionStyle = {
    height: isMobile ? "60vh" : "80vh",
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.colors.white,
    marginTop: "-20px",
    marginLeft: isMobile ? "-1rem" : "-2rem",
    marginRight: isMobile ? "-1rem" : "-2rem",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.gradients.blueToBlack,
    opacity: 0.63,
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    padding: theme.spacing.xl,
  };

  const heroTitleStyle = {
    fontSize: isMobile
      ? theme.typography.fontSize.xxl
      : theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
  };

  const heroSubtitleStyle = {
    fontSize: isMobile
      ? theme.typography.fontSize.lg
      : theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.light,
    marginBottom: theme.spacing.xl,
  };

  const ctaButtonStyle = {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    border: "none",
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.bold,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: theme.boxShadow.md,
    transition: "background-color 0.3s ease",
  };

  const sectionStyle = {
    padding: `${theme.spacing.xxl} 0`,
    textAlign: "center",
  };

  const sectionTitleStyle = {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.xl,
    color: theme.colors.primary,
  };

  const introTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: theme.spacing.xl,
  };

  const featuredServiceStyle = {
    background: theme.gradients.blackToRed,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xl,
    color: theme.colors.white,
    maxWidth: "800px",
    margin: "0 auto",
    boxShadow: theme.boxShadow.lg,
  };

  const featuredServiceTitleStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
  };

  const featuredServiceTextStyle = {
    fontSize: theme.typography.fontSize.md,
    lineHeight: "1.6",
    marginBottom: theme.spacing.lg,
  };

  const linkButtonStyle = {
    color: theme.colors.white,
    textDecoration: "none",
    fontWeight: theme.typography.fontWeight.bold,
    display: "inline-block",
    borderBottom: `2px solid ${theme.colors.white}`,
    padding: `${theme.spacing.xs} 0`,
    transition: "opacity 0.3s ease",
  };

  return (
    <div>
      <section style={heroSectionStyle}>
        <div style={overlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>
            Krishna Firesystems Pvt.Ltd.
          </h1>
          <p style={heroSubtitleStyle}>
            Leading Provider of Fire Protection Solutions Since 1995
          </p>
          <Link to="/contact" style={ctaButtonStyle}>
            Get in Touch
          </Link>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          Welcome to Krishna Fire
          <span
            style={{
              fontSize: "0.6em",
              verticalAlign: "super",
              marginLeft: "2px",
            }}
          >
            ®
          </span>
        </h2>
        <p style={introTextStyle}>
          Established in 1995, Krishna Fire
          <span
            style={{
              fontSize: "0.8em",
              verticalAlign: "super",
              marginLeft: "1px",
            }}
          >
            ®
          </span>{" "}
          has emerged as a leader in the fire protection industry. With nearly
          three decades of experience, we specialize in delivering cutting-edge
          fire-fighting systems and safety solutions tailored to meet the
          diverse needs of our clients.
        </p>

        <div style={featuredServiceStyle}>
          <h3 style={featuredServiceTitleStyle}>
            Complete Fire Protection Solutions
          </h3>
          <p style={featuredServiceTextStyle}>
            We offer comprehensive fire safety systems including fire hydrant
            systems, gas-based suppression, foam flooding, fire extinguishers,
            high-pressure water pumps, and annual maintenance services. Our
            solutions are trusted by government bodies, private corporations,
            and industrial sectors.
          </p>
          <Link to="/services" style={linkButtonStyle}>
            Explore Our Services →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
