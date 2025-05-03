import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Products = () => {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("all");

  // Product categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "fire-extinguishers", name: "Fire Extinguishers" },
    { id: "hydrant-systems", name: "Hydrant Systems" },
    { id: "suppression-systems", name: "Suppression Systems" },
    { id: "alarm-systems", name: "Alarm Systems" },
    { id: "safety-equipment", name: "Safety Equipment" },
  ];

  // Sample products list
  const products = [
    {
      id: 1,
      name: "CO2 Fire Extinguisher",
      origin: "Indian",
      category: "fire-extinguishers",
      description:
        "ISI-marked CO2 fire extinguishers for electrical fires, available in various capacities.",
      image:
        "https://images.unsplash.com/photo-1617950268959-f55106539d5c?auto=format&fit=crop&w=800&q=80",
      features: [
        "ISI Marked",
        "Pressure Tested",
        "Multiple Sizes Available",
        "2-Year Warranty",
      ],
    },
    {
      id: 2,
      name: "Advanced Fire Alarm Control Panel",
      origin: "Imported",
      category: "alarm-systems",
      description:
        "Microprocessor-based addressable fire alarm control panel with multi-zone capabilities.",
      image:
        "https://images.unsplash.com/photo-1620283085693-5e08b1d7518d?auto=format&fit=crop&w=800&q=80",
      features: [
        "Addressable Technology",
        "LCD Display",
        "Battery Backup",
        "Multi-Zone Programming",
      ],
    },
    {
      id: 3,
      name: "Fire Hydrant Valve",
      origin: "Indian",
      category: "hydrant-systems",
      description:
        "Single outlet landing valve for fire hydrant systems, manufactured to IS standards.",
      image:
        "https://images.unsplash.com/photo-1522408189481-5fc98386d3e8?auto=format&fit=crop&w=800&q=80",
      features: [
        "IS:5290 Compliant",
        "Working Pressure 15 kg/cm²",
        "Gunmetal Construction",
        "Easy Installation",
      ],
    },
    {
      id: 4,
      name: "NOVEC 1230 Fire Suppression System",
      origin: "Imported",
      category: "suppression-systems",
      description:
        "Clean agent fire suppression system ideal for server rooms and sensitive equipment areas.",
      image:
        "https://images.unsplash.com/photo-1579847188804-2cea4a0d6eeb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Environmentally Friendly",
        "Zero Ozone Depletion",
        "Rapid Discharge",
        "Non-Conductive",
      ],
    },
    {
      id: 5,
      name: "Fire Hose Reel",
      origin: "Indian",
      category: "hydrant-systems",
      description:
        "Swing-type fire hose reel with 30m hose, compliant with IS:884 standards.",
      image:
        "https://images.unsplash.com/photo-1529268209110-62be1d87fe75?auto=format&fit=crop&w=800&q=80",
      features: [
        "IS:884 Certified",
        "30m Hose Length",
        "Swinging Type",
        "Easy Operation",
      ],
    },
    {
      id: 6,
      name: "Advanced Smoke Detector",
      origin: "Imported",
      category: "alarm-systems",
      description:
        "Photoelectric smoke detector with advanced false alarm prevention technology.",
      image:
        "https://images.unsplash.com/photo-1614772903208-d85b2d4c18ef?auto=format&fit=crop&w=800&q=80",
      features: [
        "Dual Sensor Technology",
        "Early Warning",
        "Low Battery Alert",
        "Self-Testing",
      ],
    },
    {
      id: 7,
      name: "Firefighter Safety Helmet",
      origin: "Indian",
      category: "safety-equipment",
      description:
        "High-temperature resistant safety helmet for firefighting personnel.",
      image:
        "https://images.unsplash.com/photo-1603910234616-3b9a323c0cf0?auto=format&fit=crop&w=800&q=80",
      features: [
        "Heat Resistant",
        "Impact Protection",
        "Integrated Visor",
        "Adjustable Size",
      ],
    },
    {
      id: 8,
      name: "Automatic Water Sprinkler",
      origin: "Imported",
      category: "suppression-systems",
      description:
        "Quick response automatic sprinkler head for ceiling installation in commercial buildings.",
      image:
        "https://images.unsplash.com/photo-1571173729433-28bf2099d6f4?auto=format&fit=crop&w=800&q=80",
      features: [
        "Various Temperature Ratings",
        "Decorative Finish Options",
        "Standard Thread",
        "UL Listed",
      ],
    },
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

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

  const filterContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  };

  const filterButtonStyle = (isActive) => ({
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

  const productsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(350px, 1fr))",
    gap: theme.spacing.xl,
  };

  const productCardStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadius.md,
    overflow: "hidden",
    boxShadow: theme.boxShadow.md,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: theme.colors.white,
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.boxShadow.lg,
    },
  };

  const productImageContainerStyle = {
    position: "relative",
    height: "250px",
    overflow: "hidden",
  };

  const productImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const productInfoStyle = {
    padding: theme.spacing.lg,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const productNameStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  };

  const productOriginStyle = (origin) => ({
    display: "inline-block",
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    backgroundColor:
      origin === "Indian" ? "rgba(255, 153, 0, 0.1)" : "rgba(0, 87, 168, 0.1)",
    color: origin === "Indian" ? "#FF9900" : "#0057A8",
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.md,
    textTransform: "uppercase",
  });

  const productDescriptionStyle = {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray,
    lineHeight: "1.6",
    marginBottom: theme.spacing.md,
    flex: 1,
  };

  const featuresContainerStyle = {
    marginTop: theme.spacing.md,
  };

  const featuresTitleStyle = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  const featuresListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  };

  const featureTagStyle = {
    display: "inline-block",
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.pill,
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.dark,
  };

  const infoBoxStyle = {
    backgroundColor: theme.gradients.blueToDarkBlue,
    color: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xxl,
    textAlign: "center",
  };

  const infoBoxTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    marginBottom: 0,
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Products</h1>
        <p style={subtitleStyle}>
          Krishna Fire Systems offers a comprehensive range of high-quality fire
          safety products, including both Indian and imported brands, to meet
          all your fire protection needs.
        </p>
      </header>

      <div style={infoBoxStyle}>
        <p style={infoBoxTextStyle}>
          <strong>Deals in:</strong> Various Indian & Imported brands with best
          quality products and services
        </p>
      </div>

      <div style={filterContainerStyle}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={filterButtonStyle(activeCategory === category.id)}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={productsGridStyle}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              ...productCardStyle,
              transform: "none", // Initial state
            }}
          >
            <div style={productImageContainerStyle}>
              <img
                src={product.image}
                alt={product.name}
                style={productImageStyle}
              />
            </div>
            <div style={productInfoStyle}>
              <h3 style={productNameStyle}>{product.name}</h3>
              <span style={productOriginStyle(product.origin)}>
                {product.origin} Brand
              </span>
              <p style={productDescriptionStyle}>{product.description}</p>

              <div style={featuresContainerStyle}>
                <h4 style={featuresTitleStyle}>Key Features</h4>
                <div style={featuresListStyle}>
                  {product.features.map((feature, index) => (
                    <span key={index} style={featureTagStyle}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
