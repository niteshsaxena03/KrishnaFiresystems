import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Services = () => {
  const isMobile = useMobile();

  const servicesList = [
    {
      id: 1,
      title: "Fire Hydrant Systems",
      description:
        "Design, installation, and maintenance of complete fire hydrant systems, incorporating hose reels, sprinklers, and fire alarm systems.",
      icon: "🚿",
    },
    {
      id: 2,
      title: "Gas-Based Fire Suppression",
      description:
        "Specialized in CO2, clean agent gases like FK-5-1-12/NOVEC-1230, and other advanced fire suppression solutions for critical areas.",
      icon: "💨",
    },
    {
      id: 3,
      title: "Foam Flooding Systems",
      description:
        "AFFF foam flooding, Deluge valve, Medium Velocity and High Velocity Water Spray (MVWS & HVWS) for liquid paint booth and more.",
      icon: "🧯",
    },
    {
      id: 4,
      title: "Fire Extinguishers",
      description:
        "Supply and maintenance of a wide range of ISI-marked and TAC-approved fire extinguishers, with professional refilling and repair services.",
      icon: "🧯",
    },
    {
      id: 5,
      title: "High-Pressure Water Pumps",
      description:
        "Installation of diesel and electric motor-driven high-pressure water pump sets connected to fire pipelines.",
      icon: "⚙️",
    },
    {
      id: 6,
      title: "Annual Maintenance Contracts",
      description:
        "Comprehensive maintenance services for fire safety systems and extinguishers to ensure they remain fully functional and compliant.",
      icon: "📋",
    },
    {
      id: 7,
      title: "Security Systems",
      description:
        "Advanced solutions including access control systems, CCTV, video door phones, and electronic safes to enhance overall safety measures.",
      icon: "📹",
    },
    {
      id: 8,
      title: "Personal Protective Equipment",
      description:
        "Supply of PPE and related safety gear for fire and general industrial safety requirements.",
      icon: "🥽",
    },
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

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing.xl,
  };

  const serviceCardStyle = {
    background: theme.colors.white,
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xl,
    boxShadow: theme.boxShadow.sm,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const serviceIconStyle = {
    fontSize: "3rem",
    marginBottom: theme.spacing.md,
    color: theme.colors.primary,
  };

  const serviceTitleStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
    color: theme.colors.primary,
  };

  const serviceDescriptionStyle = {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray,
    lineHeight: "1.6",
    flex: 1,
  };

  const serviceCardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: theme.boxShadow.md,
  };

  // Enhanced card style with hover effect
  const getCardStyle = (index) => {
    const isEven = index % 2 === 0;

    return {
      ...serviceCardStyle,
      background: isEven ? theme.colors.white : theme.gradients.blueToDarkBlue,
      color: isEven ? theme.colors.dark : theme.colors.white,
      ":hover": serviceCardHoverStyle,
    };
  };

  const getServiceTitleStyle = (index) => {
    const isEven = index % 2 === 0;
    return {
      ...serviceTitleStyle,
      color: isEven ? theme.colors.primary : theme.colors.white,
    };
  };

  const getServiceDescriptionStyle = (index) => {
    const isEven = index % 2 === 0;
    return {
      ...serviceDescriptionStyle,
      color: isEven ? theme.colors.gray : theme.colors.lightGray,
    };
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Services</h1>
        <p style={subtitleStyle}>
          We offer a comprehensive range of fire safety products and services
          tailored to meet your specific needs. Our expert team ensures the
          highest quality solutions for all your fire protection requirements.
        </p>
      </header>

      <div style={servicesGridStyle}>
        {servicesList.map((service, index) => (
          <div
            key={service.id}
            style={{
              ...getCardStyle(index),
              background:
                index % 2 === 0
                  ? theme.colors.white
                  : theme.gradients.blueToDarkBlue,
            }}
          >
            <div style={serviceIconStyle}>{service.icon}</div>
            <h3 style={getServiceTitleStyle(index)}>{service.title}</h3>
            <p style={getServiceDescriptionStyle(index)}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
