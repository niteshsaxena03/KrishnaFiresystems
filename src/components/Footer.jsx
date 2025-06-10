import { Link } from "react-router-dom";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Footer = () => {
  const isMobile = useMobile();

  const footerStyle = {
    backgroundColor: theme.colors.darkBlue,
    color: theme.colors.white,
    padding: `${theme.spacing.xl} ${theme.spacing.md}`,
    width: "100%",
  };

  const footerContentStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing.xl,
  };

  const footerSectionStyle = {
    flex: 1,
    marginBottom: isMobile ? theme.spacing.lg : 0,
  };

  const footerTitleStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
    color: theme.colors.lightRed,
  };

  const footerTextStyle = {
    fontSize: theme.typography.fontSize.sm,
    lineHeight: "1.6",
    marginBottom: theme.spacing.sm,
  };

  const socialLinksStyle = {
    display: "flex",
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  };

  const socialIconStyle = {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.lg,
    textDecoration: "none",
  };

  const footerBottomStyle = {
    borderTop: `1px solid ${theme.colors.gray}`,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
    textAlign: "center",
    fontSize: theme.typography.fontSize.sm,
  };

  const linkStyle = {
    color: theme.colors.white,
    textDecoration: "none",
    display: "block",
    marginBottom: theme.spacing.sm,
    transition: "color 0.2s ease",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>
            KRISHNA FIRE
            <span
              style={{
                fontSize: "0.6em",
                verticalAlign: "super",
                marginLeft: "2px",
              }}
            >
              ®
            </span>
          </h3>
          <p style={footerTextStyle}>
            Established in 1995, we are leaders in fire protection systems and
            safety solutions.
          </p>
          <div style={socialLinksStyle}>
            <a href="#" style={socialIconStyle} aria-label="Facebook">
              📱
            </a>
            <a href="#" style={socialIconStyle} aria-label="Twitter">
              🐦
            </a>
            <a href="#" style={socialIconStyle} aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>

        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>Quick Links</h3>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About Us
          </Link>
          <Link to="/services" style={linkStyle}>
            Our Services
          </Link>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact Us
          </Link>
        </div>

        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>Contact Us</h3>
          <p style={footerTextStyle}>
            <strong>Registered Office:</strong> B-305, 3rd Floor, Ansal
            Chamber-1, Bhikaji Cama Place, New Delhi – 110066,{" "}
            <strong>Phone:</strong> 011-40582491
          </p>
          <p style={footerTextStyle}>
            <strong>Works:</strong> S - 321, Chirag Delhi, Near Bhagat Singh
            College, New Delhi – 110017, <strong>Phone:</strong> 011-45725370
          </p>
          <p style={footerTextStyle}>
            <strong>Email:</strong> delhi@krishnafiresystems.com
          </p>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <p>
          © {new Date().getFullYear()} Krishna Fire
          <span
            style={{
              fontSize: "0.8em",
              verticalAlign: "super",
              marginLeft: "1px",
            }}
          >
            ®
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
