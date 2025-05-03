import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Equipment = () => {
  const isMobile = useMobile();

  // List of equipment from the company document
  const equipmentList = [
    { name: "Electric Welding Set", quantity: 22 },
    { name: "Gas Cutting Set", quantity: 4 },
    { name: "Gas Welding Set", quantity: 2 },
    { name: "Chain Pulley Block (2 Ton)", quantity: 2 },
    { name: "M.S. Pipe Cutting Machine", quantity: 12 },
    { name: "Chain Pulley Block (5 Ton)", quantity: 2 },
    { name: "Angle Grinder", quantity: 6 },
    { name: "Straight Grinder", quantity: 4 },
    { name: "Drill Machine (Hammer)", quantity: 12 },
    { name: "Pistol Drill Machine", quantity: 4 },
    { name: "Hydraulic Pump", quantity: 8 },
  ];

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: theme.spacing.xl,
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: theme.spacing.xxl,
  };

  const titleStyle = {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  };

  const subtitleStyle = {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.gray,
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const sectionTitleStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.lg,
    marginTop: theme.spacing.xl,
    position: "relative",
    paddingLeft: theme.spacing.lg,
    display: "inline-block",
  };

  const titleDecoratorStyle = {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "4px",
    height: "80%",
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.sm,
  };

  const equipmentGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing.lg,
  };

  const equipmentCardStyle = {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.boxShadow.sm,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.colors.lightGray}`,
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.boxShadow.md,
    },
  };

  const equipmentNameStyle = {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.dark,
  };

  const equipmentQuantityStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    backgroundColor: "rgba(11, 47, 92, 0.1)",
    borderRadius: theme.borderRadius.circle,
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const introSectionStyle = {
    backgroundColor: theme.gradients.blueToBlack,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.white,
    marginBottom: theme.spacing.xl,
  };

  const introTitleStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
  };

  const introParagraphStyle = {
    fontSize: theme.typography.fontSize.md,
    lineHeight: "1.6",
  };

  const contactSectionStyle = {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginTop: theme.spacing.xxl,
    textAlign: "center",
  };

  const contactTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    marginBottom: theme.spacing.md,
  };

  const contactNameStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  };

  const contactPhoneStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary,
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Plant & Equipment</h1>
        <p style={subtitleStyle}>
          Krishna Fire Systems is equipped with state-of-the-art machinery and
          tools to provide the highest quality fire safety solutions. Our
          advanced equipment enables us to deliver exceptional service across
          all our projects.
        </p>
      </header>

      <div style={introSectionStyle}>
        <h2 style={introTitleStyle}>Technical Capabilities</h2>
        <p style={introParagraphStyle}>
          With our extensive range of specialized equipment, we have the
          capability to handle projects of any scale and complexity. Our
          technical team is trained to utilize these resources effectively,
          ensuring precision, efficiency, and reliability in every task.
        </p>
      </div>

      <div>
        <h2 style={sectionTitleStyle}>
          <span style={titleDecoratorStyle}></span>
          Equipment Inventory
        </h2>
        <div style={equipmentGridStyle}>
          {equipmentList.map((item, index) => (
            <div key={index} style={equipmentCardStyle}>
              <div style={equipmentNameStyle}>{item.name}</div>
              <div style={equipmentQuantityStyle}>{item.quantity}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={contactSectionStyle}>
        <p style={contactTextStyle}>
          We assure you about our best services and products and look forward to
          serving your esteemed organization.
        </p>
        <p>
          <span style={contactNameStyle}>Udai Thakur</span>
          <br />
          <span style={contactPhoneStyle}>98101-39453</span>
        </p>
      </div>
    </div>
  );
};

export default Equipment;
