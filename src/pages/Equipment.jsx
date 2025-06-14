import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import { EquipmentsimageSet as imageSet } from "../assets/equipments";

const Equipment = () => {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("all");

  // Equipment categories
  const categories = [
    { id: "all", name: "All Equipment" },
    { id: "welding", name: "Welding Equipment" },
    { id: "cutting", name: "Cutting Tools" },
    { id: "lifting", name: "Lifting Equipment" },
    { id: "drilling", name: "Drilling Equipment" },
    { id: "other", name: "Other Equipment" },
  ];

  // List of equipment from the company document with additional info and categorization
  const equipmentList = [
    {
      name: "Electric Welding Set",
      quantity: 22,
      category: "welding",
      description:
        "High-performance electric welding machines used for precision fabrication of fire safety equipment and components.",
      image: imageSet[0],
    },
    {
      name: "Gas Cutting Set",
      quantity: 4,
      category: "cutting",
      description:
        "Industrial-grade gas cutting sets for precise metal cutting operations in fire equipment manufacturing.",
      image: imageSet[1],
    },
    {
      name: "Gas Welding Set",
      quantity: 2,
      category: "welding",
      description:
        "Gas welding equipment for specialized welding applications requiring controlled heat input.",
      image: imageSet[2],
    },
    {
      name: "Chain Pulley Block (2,5 Ton)",
      quantity: 2,
      category: "lifting",
      description:
        "2,5-ton capacity chain pulley blocks for safe lifting and positioning of heavy components during installation.",
      image: imageSet[3],
    },
    {
      name: "M.S. Pipe Cutting Machine",
      quantity: 12,
      category: "cutting",
      description:
        "Specialized pipe cutting machines for precise cutting of mild steel pipes used in fire hydrant and sprinkler systems.",
      image: imageSet[4],
    },
    {
      name: "Angle Grinder",
      quantity: 6,
      category: "cutting",
      description:
        "Versatile angle grinders for cutting, grinding and polishing metal components of fire safety systems.",
      image: imageSet[5],
    },
    {
      name: "Straight Grinder",
      quantity: 4,
      category: "cutting",
      description:
        "Straight grinders for precision grinding operations in tight spaces and detailed work.",
      image: imageSet[6],
    },
    {
      name: "Drill Machine (Hammer)",
      quantity: 12,
      category: "drilling",
      description:
        "Powerful hammer drill machines for concrete drilling during installation of fire safety systems.",
      image: imageSet[7],
    },
    {
      name: "Pistol Drill Machine",
      quantity: 4,
      category: "drilling",
      description:
        "Compact pistol-grip drill machines for precision drilling work in confined spaces.",
      image: imageSet[8],
    },
    {
      name: "Hydraulic Pump",
      quantity: 8,
      category: "other",
      description:
        "High-pressure hydraulic pumps for testing and commissioning of fire safety equipment.",
      image: imageSet[9],
    },
  ];

  // Filter equipment based on active category
  const filteredEquipment =
    activeCategory === "all"
      ? equipmentList
      : equipmentList.filter((item) => item.category === activeCategory);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: theme.spacing.xl,
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: theme.spacing.xl,
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

  const statsContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  };

  const statCardStyle = {
    background: theme.gradients.blueToDarkBlue,
    color: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    flex: 1,
    textAlign: "center",
    boxShadow: theme.boxShadow.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const statNumberStyle = {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.xs,
  };

  const statLabelStyle = {
    fontSize: theme.typography.fontSize.md,
    opacity: 0.9,
  };

  const categoriesContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  };

  const categoryButtonStyle = (isActive) => ({
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    backgroundColor: isActive ? theme.colors.primary : "transparent",
    color: isActive ? theme.colors.white : theme.colors.primary,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.sm,
    cursor: "pointer",
    fontWeight: isActive
      ? theme.typography.fontWeight.bold
      : theme.typography.fontWeight.regular,
    transition: "all 0.3s ease",
  });

  const equipmentGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(350px, 1fr))",
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.xxl,
  };

  const equipmentCardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    overflow: "hidden",
    boxShadow: theme.boxShadow.md,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.boxShadow.lg,
    },
  };

  const equipmentImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  };

  const equipmentInfoStyle = {
    padding: theme.spacing.lg,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const equipmentHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  };

  const equipmentNameStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  };

  const equipmentQuantityBadgeStyle = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: theme.typography.fontSize.sm,
  };

  const equipmentDescriptionStyle = {
    fontSize: theme.typography.fontSize.md,
    lineHeight: "1.6",
    color: theme.colors.gray,
    marginBottom: theme.spacing.md,
    flex: 1,
  };

  const iconContainerStyle = {
    fontSize: "24px",
    marginBottom: theme.spacing.sm,
  };

  const introSectionStyle = {
    background: theme.gradients.blackToRed,
    color: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xl,
    position: "relative",
    overflow: "hidden",
  };

  const introPatternsStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.05,
    background:
      "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 20%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 20%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 20%)",
  };

  const introContentStyle = {
    position: "relative",
    zIndex: 1,
  };

  const introTitleStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const introParagraphStyle = {
    fontSize: theme.typography.fontSize.md,
    lineHeight: "1.6",
    marginBottom: 0,
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Technical Capabilities</h1>
        <p style={subtitleStyle}>
          Krishna Fire
          <span
            style={{
              fontSize: "0.8em",
              verticalAlign: "super",
              marginLeft: "1px",
            }}
          >
            ®
          </span>{" "}
          is equipped with state-of-the-art machinery and tools to provide the
          highest quality fire safety solutions. Our comprehensive equipment
          inventory enables us to handle all aspects of installation,
          maintenance, and servicing.
        </p>
      </header>

      <div style={introSectionStyle}>
        <div style={introPatternsStyle}></div>
        <div style={introContentStyle}>
          <h2 style={introTitleStyle}>Professional Equipment Inventory</h2>
          <p style={introParagraphStyle}>
            With our extensive range of specialized equipment, we have the
            capability to handle projects of any scale and complexity. Our
            technical team is trained to utilize these resources effectively,
            ensuring precision, efficiency, and reliability in every task. From
            cutting and welding to lifting and drilling, our equipment inventory
            is designed to meet the diverse needs of fire safety system
            installation and maintenance.
          </p>
        </div>
      </div>

      <div style={categoriesContainerStyle}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={categoryButtonStyle(activeCategory === category.id)}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={equipmentGridStyle}>
        {filteredEquipment.map((item, index) => (
          <div
            key={index}
            style={{
              ...equipmentCardStyle,
              transform: "none", // Initial state
            }}
          >
            <img
              src={
                item.image.primary ? item.image.primary : item.image.secondary
              }
              alt={item.name}
              style={equipmentImageStyle}
            />
            <div style={equipmentInfoStyle}>
              <div style={equipmentHeaderStyle}>
                <h3 style={equipmentNameStyle}>{item.name}</h3>
                <div style={equipmentQuantityBadgeStyle}>{item.quantity}</div>
              </div>
              <p style={equipmentDescriptionStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
