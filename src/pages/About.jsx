import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import CountUp from "react-countup";


const About = () => {
  const isMobile = useMobile();

  const sectionStyle = {
    padding: `${theme.spacing.xl} 0`,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
    textAlign: "center",
  };

  const subHeadingStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.md,
  };

  const paragraphStyle = {
    fontSize: theme.typography.fontSize.md,
    lineHeight: "1.6",
    marginBottom: theme.spacing.lg,
  };

  const overviewSectionStyle = {
    background: theme.colors.lightGray,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xl,
  };

  const highlightBoxStyle = {
    background: theme.gradients.blueToBlack,
    color: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing.xl,
    boxShadow: theme.boxShadow.md,
  };

  const statBoxStyle = {
    flex: 1,
    padding: theme.spacing.lg,
  };

  const statNumberStyle = {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.sm,
  };

  const statTextStyle = {
    fontSize: theme.typography.fontSize.md,
  };

  const listContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  };

  const listColumnStyle = {
    flex: 1,
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.sm,
    borderLeft: `4px solid ${theme.colors.primary}`,
  };

  const listIconStyle = {
    marginRight: theme.spacing.sm,
    color: theme.colors.primary,
    fontSize: theme.typography.fontSize.lg,
  };

  return (
    <div>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>
            About Krishna Fire
            <span
              style={{
                fontSize: "0.6em",
                verticalAlign: "super",
                marginLeft: "2px",
              }}
            >
              ®
            </span>
          </h1>

          <div style={highlightBoxStyle}>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>
              <CountUp start={0} end={30} duration={3.5} suffix="+" />
            </div>
            <div style={statTextStyle}>Years of Experience</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>
              <CountUp start={0} end={500} duration={4} suffix="+" />
            </div>
            <div style={statTextStyle}>Projects Completed</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>
              <CountUp start={0} end={250} duration={3.5} suffix="+" />
            </div>
            <div style={statTextStyle}>Happy Clients</div>
          </div>
        </div>

          <div style={overviewSectionStyle}>
            <h2 style={subHeadingStyle}>Company Overview</h2>
            <p style={paragraphStyle}>
              Established in 1995 and headquartered in Delhi, Krishna Fire
              <span
                style={{
                  fontSize: "0.8em",
                  verticalAlign: "super",
                  marginLeft: "1px",
                }}
              >
                ®
              </span>{" "}
              has emerged as a leader in the fire protection industry. With
              nearly three decades of experience, we specialize in delivering
              cutting-edge fire-fighting systems and safety solutions tailored
              to meet the diverse needs of our clients.
            </p>
            <p style={paragraphStyle}>
              As an ISO 9001:2000 certified company, our commitment to
              excellence, safety, and reliability has earned us the trust of a
              wide array of clients, spanning government bodies, private
              corporations, and industrial sectors. Our business is built on the
              principles of punctuality, trustworthiness, and customer
              satisfaction, which have enabled us to cultivate strong,
              long-lasting relationships with our clients.
            </p>
            <p style={paragraphStyle}>
              With a clear focus on providing innovative, efficient, and durable
              fire protection solutions, we stand at the forefront of ensuring
              safety in various environments. Our vision is to continue being a
              trusted leader in the fire protection industry by delivering the
              highest quality of services and products.
            </p>
          </div>

          <h2 style={subHeadingStyle}>Certifications & Key Facts</h2>
          <div style={listContainerStyle}>
            <div style={listColumnStyle}>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>ISO 9001:2000 Certified Company</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Founded in 1995 and headquartered in Delhi</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Skilled workforce with technical expertise</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Comprehensive maintenance services</div>
                </li>
              </ul>
            </div>
            <div style={listColumnStyle}>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Trusted by government and private sectors</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Customized fire protection systems</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Deals in various Indian & imported brands</div>
                </li>
                <li style={listItemStyle}>
                  <span style={listIconStyle}>🔰</span>
                  <div>Dedicated to safety and quality assurance</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
