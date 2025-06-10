import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Clients = () => {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("all");

  // Client categories
  const categories = [
    { id: "all", name: "All Clients" },
    { id: "industrial", name: "Industrial" },
    { id: "commercial", name: "Commercial" },
    { id: "government", name: "Government" },
    { id: "hospitality", name: "Hospitality" },
    { id: "education", name: "Education" },
  ];
  // Client list from the company document
  const clients = [
    {
      name: "Lumax Industries Ltd.",
      location:
        "Plant-I, Pant Nagar, IP-2, Salempur, Haridwar, Sanand, Gujarat (Ahmadabad), Bawal, Rewari (Haryana)",
      category: "industrial",
      logo: "/lumax.png",
      logoBackground: "#ffff",
    },
    {
      name: "Lumax DK Industries Ltd.",
      location: "Plant-II, Pant Nagar",
      category: "industrial",
      logo: "/lumaxDK.png",
      logoBackground: "#ffff",
    },
    {
      name: "The Metropolitan Mall",
      location: "MGF – Saket, New Delhi",
      category: "commercial",
      logo: "/MGF.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "The Metropolitan Mall",
      location: "MGF – Jaipur",
      category: "commercial",
      logo: "/MGF.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "Fortis Hospital",
      location: "Vasant Kunj, New Delhi",
      category: "commercial",
      logo: "/fortis.png",
      logoBackground: "#ffff",
    },
    {
      name: "The Ambassador Hotel (Taj Group)",
      location: "New Delhi",
      category: "hospitality",
      logo: "/taj.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "Venu Eye Hospital",
      location: "New Delhi",
      category: "commercial",
      logo: "/venu.png",
      logoBackground: "#ffff",
    },
    {
      name: "Mahindra",
      location: "Mohali, Chandigarh",
      category: "industrial",
      logo: "/mh.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "C & S Switchgear Ltd.",
      location: "Sidcul, Haridwar",
      category: "industrial",
      logo: "/c&s.png",
      logoBackground: "#ffff",
    },
    {
      name: "Ambuja Cements Ltd.",
      location: "Bhagwanpur",
      category: "industrial",
      logo: "/ambuja.webp",
      logoBackground: "#ffff",
    },
    {
      name: "Step by Step World School",
      location: "NOIDA",
      category: "education",
      logo: "/stepbystep.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "The Millennium School",
      location: "Noida",
      category: "education",
      logo: "/millennium.webp",
      logoBackground: "#ffff",
    },
    {
      name: "Rotary Public School",
      location: "Gurgaon",
      category: "education",
      logo: "/rotary.png",
      logoBackground: "#ffff",
    },
    {
      name: "Delhi Metro Rail Corporation",
      location: "Delhi",
      category: "government",
      logo: "/dmrc.png",
      logoBackground: "#ffff",
    },
    {
      name: "Delhi Development Authority",
      location: "New Delhi",
      category: "government",
      logo: "/DDA.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "Punjab National Bank",
      location: "Bareilly & Muradabad Circle",
      category: "government",
      logo: "/pnb.png",
      logoBackground: "#ffff",
    },
    {
      name: "Power Trading Corporation",
      location: "New Delhi",
      category: "government",
      logo: "/ptc.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "Patanjali Food & Herbal Park",
      location: "Padartha, Haridwar",
      category: "industrial",
      logo: "/ptn.jpg",
      logoBackground: "#ffff",
    },
    {
      name: "TOYOTA TSUSHO India Pvt. Ltd",
      location: "IMT Manesar, Gurgaon",
      category: "industrial",
      logo: "/toyota.png",
      logoBackground: "#ffff",
    },
    {
      name: "Make-my-trip",
      location: "Udyog Vihar, Gurgaon",
      category: "commercial",
      logo: "/mmt.svg",
      logoBackground: "#ffff",
    },
  ];

  // Filter clients based on active category
  const filteredClients =
    activeCategory === "all"
      ? clients
      : clients.filter((client) => client.category === activeCategory);

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

  const clientsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(280px, 1fr))",
    gap: theme.spacing.xl,
  };

  const clientCardStyle = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    overflow: "hidden",
    boxShadow: theme.boxShadow.sm,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.boxShadow.md,
    },
  };

  const clientLogoContainerStyle = (logoBackground) => ({
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.md,
    backgroundColor: logoBackground || "#f8f8f8",
    borderBottom: `1px solid ${theme.colors.lightGray}`,
  });

  const clientInfoStyle = {
    padding: theme.spacing.lg,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const clientNameStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  const clientLocationStyle = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.gray,
    display: "flex",
    alignItems: "center",
  };

  const locationIconStyle = {
    marginRight: theme.spacing.xs,
    color: theme.colors.secondary,
  };

  const categoryBadgeStyle = (category) => {
    const colors = {
      industrial: { bg: "rgba(29, 82, 145, 0.1)", text: theme.colors.primary },
      commercial: { bg: "rgba(163, 0, 0, 0.1)", text: theme.colors.secondary },
      government: { bg: "rgba(76, 76, 76, 0.1)", text: "#4c4c4c" },
      hospitality: { bg: "rgba(20, 130, 50, 0.1)", text: "#148232" },
      education: { bg: "rgba(255, 153, 0, 0.1)", text: "#FF9900" },
    };

    const style = colors[category] || {
      bg: "rgba(76, 76, 76, 0.1)",
      text: "#4c4c4c",
    };

    return {
      display: "inline-block",
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      backgroundColor: style.bg,
      color: style.text,
      borderRadius: theme.borderRadius.pill,
      fontSize: theme.typography.fontSize.xs,
      fontWeight: theme.typography.fontWeight.medium,
      marginTop: theme.spacing.md,
      textTransform: "uppercase",
    };
  };

  const introBoxStyle = {
    background: theme.gradients.blackToRed,
    color: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xxl,
    textAlign: "center",
  };

  const introTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    marginBottom: 0,
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Clients</h1>
        <p style={subtitleStyle}>
          Over the years, Krishna Fire
          <span
            style={{
              fontSize: "0.8em",
              verticalAlign: "super",
              marginLeft: "1px",
            }}
          >
            ®
          </span>{" "}
          has earned the trust of numerous prestigious clients across various
          sectors. Our commitment to excellence has made us the preferred choice
          for fire safety solutions.
        </p>
      </header>

      <div style={introBoxStyle}>
        <p style={introTextStyle}>
          <strong>SOME IMPORTANT CLIENTS AND PROJECTS EXECUTED</strong>
          <br />
          We have lots of other customers who are using our fire and security
          equipment with full satisfaction.
        </p>
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

      <div style={clientsGridStyle}>
        {filteredClients.map((client, index) => (
          <div
            key={index}
            style={{
              ...clientCardStyle,
              transform: "none", // Initial state
            }}
          >
            <div style={clientLogoContainerStyle(client.logoBackground)}>
              <img src={client.logo} alt={`${client.name} logo`} />
            </div>
            <div style={clientInfoStyle}>
              <div>
                <h3 style={clientNameStyle}>{client.name}</h3>
                <p style={clientLocationStyle}>
                  <span style={locationIconStyle}>📍</span> {client.location}
                </p>
              </div>
              <span style={categoryBadgeStyle(client.category)}>
                {categories.find((cat) => cat.id === client.category)?.name ||
                  client.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
