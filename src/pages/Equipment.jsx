import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

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
      icon: "⚡",
      image:
        "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gas Cutting Set",
      quantity: 4,
      category: "cutting",
      description:
        "Industrial-grade gas cutting sets for precise metal cutting operations in fire equipment manufacturing.",
      icon: "🔥",
      image:
        "https://images.unsplash.com/photo-1574709755254-12b999f2553f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gas Welding Set",
      quantity: 2,
      category: "welding",
      description:
        "Gas welding equipment for specialized welding applications requiring controlled heat input.",
      icon: "🔥",
      image:
        "https://images.unsplash.com/photo-1605901710429-ab5e7be2c587?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chain Pulley Block (2 Ton)",
      quantity: 2,
      category: "lifting",
      description:
        "2-ton capacity chain pulley blocks for safe lifting and positioning of heavy components during installation.",
      icon: "⛓️",
      image:
        "https://images.unsplash.com/photo-1571388441855-b1a2f45a8ef1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "M.S. Pipe Cutting Machine",
      quantity: 12,
      category: "cutting",
      description:
        "Specialized pipe cutting machines for precise cutting of mild steel pipes used in fire hydrant and sprinkler systems.",
      icon: "⚙️",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chain Pulley Block (5 Ton)",
      quantity: 2,
      category: "lifting",
      description:
        "Heavy-duty 5-ton chain pulley blocks for handling large equipment during installation and maintenance.",
      icon: "⛓️",
      image:
        "https://images.unsplash.com/photo-1582012986780-cf9f34f2b709?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Angle Grinder",
      quantity: 6,
      category: "cutting",
      description:
        "Versatile angle grinders for cutting, grinding and polishing metal components of fire safety systems.",
      icon: "🔄",
      image:
        "https://images.unsplash.com/photo-1607275605105-a87104c7af62?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Straight Grinder",
      quantity: 4,
      category: "cutting",
      description:
        "Straight grinders for precision grinding operations in tight spaces and detailed work.",
      icon: "🔄",
      image:
        "https://images.unsplash.com/photo-1535813547-3e2a91bdc95b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Drill Machine (Hammer)",
      quantity: 12,
      category: "drilling",
      description:
        "Powerful hammer drill machines for concrete drilling during installation of fire safety systems.",
      icon: "🔨",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pistol Drill Machine",
      quantity: 4,
      category: "drilling",
      description:
        "Compact pistol-grip drill machines for precision drilling work in confined spaces.",
      icon: "🔨",
      image:
        "https://images.unsplash.com/photo-1512236077335-f1cda9239c11?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Hydraulic Pump",
      quantity: 8,
      category: "other",
      description:
        "High-pressure hydraulic pumps for testing and commissioning of fire safety equipment.",
      icon: "💧",
      image:
        "https://images.unsplash.com/photo-1470020037456-967b9a4181b1?auto=format&fit=crop&w=800&q=80",
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
    objectFit: "cover",
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

  const contactSectionStyle = {
    background:
      "linear-gradient(45deg, rgba(11, 47, 92, 0.05) 0%, rgba(163, 0, 0, 0.05) 100%)",
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginTop: theme.spacing.xxl,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: theme.spacing.xl,
  };

  const contactImageStyle = {
    width: isMobile ? "80px" : "120px",
    height: isMobile ? "80px" : "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: `3px solid ${theme.colors.primary}`,
  };

  const contactInfoStyle = {
    flex: 1,
  };

  const contactTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    marginBottom: theme.spacing.md,
  };

  const contactNameStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  const contactRoleStyle = {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray,
    marginBottom: theme.spacing.md,
  };

  const contactPhoneStyle = {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary,
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Technical Capabilities</h1>
        <p style={subtitleStyle}>
          Krishna Fire Systems is equipped with state-of-the-art machinery and
          tools to provide the highest quality fire safety solutions. Our
          comprehensive equipment inventory enables us to handle all aspects of
          installation, maintenance, and servicing.
        </p>
      </header>

      <div style={statsContainerStyle}>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>11</div>
          <div style={statLabelStyle}>Types of Equipment</div>
        </div>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>78</div>
          <div style={statLabelStyle}>Total Equipment Units</div>
        </div>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>30+</div>
          <div style={statLabelStyle}>Years of Experience</div>
        </div>
      </div>

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
            <img src={item.image} alt={item.name} style={equipmentImageStyle} />
            <div style={equipmentInfoStyle}>
              <div style={iconContainerStyle}>{item.icon}</div>
              <div style={equipmentHeaderStyle}>
                <h3 style={equipmentNameStyle}>{item.name}</h3>
                <div style={equipmentQuantityBadgeStyle}>{item.quantity}</div>
              </div>
              <p style={equipmentDescriptionStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={contactSectionStyle}>
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
          alt="Udai Thakur"
          style={contactImageStyle}
        />
        <div style={contactInfoStyle}>
          <h3 style={contactNameStyle}>Udai Thakur</h3>
          <p style={contactRoleStyle}>Technical Director</p>
          <p style={contactTextStyle}>
            "We assure you about our best services and products and look forward
            to serving your esteemed organization with the highest standards of
            quality and reliability."
          </p>
          <div style={contactPhoneStyle}>
            <span style={{ fontSize: "20px" }}>📱</span> 98101-39453
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
