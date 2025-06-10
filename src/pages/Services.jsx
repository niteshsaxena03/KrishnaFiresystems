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

  // Slider styles
  const sliderContainerStyle = {
    width: "100%",
    overflow: "hidden",
    padding: `${theme.spacing.xl} 0`,
    background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)",
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xxl,
    position: "relative",
  };

  const sliderTrackStyle = {
    display: "flex",
    animation: "slideServices 15s linear infinite",
    gap: theme.spacing.lg,
  };

  const serviceSlideStyle = {
    minWidth: "200px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.boxShadow.sm,
    padding: theme.spacing.lg,
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    border: `2px solid ${theme.colors.lightGray}`,
  };

  const serviceIconStyle = {
    fontSize: "2.5rem",
    marginBottom: theme.spacing.sm,
    color: theme.colors.primary,
  };

  const serviceTitleStyle = {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    textAlign: "center",
    lineHeight: "1.3",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes slideServices {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${servicesList.length * 220}px);
            }
          }
          
          .service-slide:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>

      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Services</h1>
        <p style={subtitleStyle}>
          We offer a comprehensive range of fire safety products and services
          tailored to meet your specific needs. Our expert team ensures the
          highest quality solutions for all your fire protection requirements.
        </p>
      </header>

      {/* Animated Services Slider */}
      <div style={sliderContainerStyle}>
        <div style={sliderTrackStyle}>
          {/* Double the services for seamless loop */}
          {[...servicesList, ...servicesList].map((service, index) => (
            <div
              key={index}
              className="service-slide"
              style={serviceSlideStyle}
            >
              <div style={serviceIconStyle}>{service.icon}</div>
              <h3 style={serviceTitleStyle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
