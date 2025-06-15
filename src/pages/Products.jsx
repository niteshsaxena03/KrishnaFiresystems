import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import { imageSet } from "../assets/products";

const Products = () => {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("fire-extinguishers");

  // Product categories
  const categories = [
    { id: "fire-extinguishers", name: "Fire Extinguishers" },
    { id: "hydrant-systems", name: "Hydrants & Sprinklers" },
    { id: "alarm-systems", name: "Alarm Systems" },
    { id: "safety-equipment", name: "Safety Equipment" },
    { id: "installations", name: "Installations" },
  ];

  // Sample products list
  const products = [
    {
      id: 1,
      category: "fire-extinguishers",
      image: imageSet[0],
    },
    {
      id: 2,
      category: "alarm-systems",
      image: imageSet[1],
    },
    {
      id: 3,
      category: "hydrant-systems",
      image: imageSet[2],
    },
    {
      id: 5,
      category: "hydrant-systems",
      image: imageSet[4],
    },
    {
      id: 6,
      category: "alarm-systems",
      image: imageSet[5],
    },
    {
      id: 7,
      category: "safety-equipment",
      image: imageSet[6],
    },
    {
      id: 9,
      category: "fire-extinguishers",
      image: imageSet[8],
    },
    {
      id: 10,
      category: "fire-extinguishers",
      image: imageSet[9],
    },
    {
      id: 11,
      category: "fire-extinguishers",
      image: imageSet[10],
    },
    {
      id: 12,
      category: "fire-extinguishers",
      image: imageSet[11],
    },
    {
      id: 13,
      category: "fire-extinguishers",
      image: imageSet[12],
    },
    {
      id: 14,
      category: "fire-extinguishers",
      image: imageSet[13],
    },
    {
      id: 15,
      category: "fire-extinguishers",
      image: imageSet[14],
    },
    {
      id: 16,
      category: "fire-extinguishers",
      image: imageSet[15],
    },
    {
      id: 17,
      category: "hydrant-systems",
      image: imageSet[16],
    },
    {
      id: 18,
      category: "hydrant-systems",
      image: imageSet[17],
    },
    {
      id: 19,
      category: "hydrant-systems",
      image: imageSet[18],
    },
    {
      id: 20,
      category: "hydrant-systems",
      image: imageSet[19],
    },
    {
      id: 21,
      category: "hydrant-systems",
      image: imageSet[20],
    },
    {
      id: 22,
      category: "hydrant-systems",
      image: imageSet[21],
    },
    {
      id: 23,
      category: "hydrant-systems",
      image: imageSet[22],
    },
    {
      id: 24,
      category: "hydrant-systems",
      image: imageSet[23],
    },
    {
      id: 25,
      category: "hydrant-systems",
      image: imageSet[24],
    },
    {
      id: 26,
      category: "hydrant-systems",
      image: imageSet[25],
    },
    {
      id: 27,
      category: "hydrant-systems",
      image: imageSet[26],
    },
    {
      id: 28,
      category: "hydrant-systems",
      image: imageSet[27],
    },
    {
      id: 29,
      category: "hydrant-systems",
      image: imageSet[28],
    },
    {
      id: 30,
      category: "hydrant-systems",
      image: imageSet[29],
    },
    {
      id: 31,
      category: "hydrant-systems",
      image: imageSet[30],
    },
    {
      id: 32,
      category: "hydrant-systems",
      image: imageSet[31],
    },
    {
      id: 33,
      category: "alarm-systems",
      image: imageSet[32],
    },
    {
      id: 34,
      category: "alarm-systems",
      image: imageSet[33],
    },
    {
      id: 35,
      category: "alarm-systems",
      image: imageSet[34],
    },
    {
      id: 36,
      category: "alarm-systems",
      image: imageSet[35],
    },
    {
      id: 37,
      category: "alarm-systems",
      image: imageSet[36],
    },
    {
      id: 38,
      category: "alarm-systems",
      image: imageSet[37],
    },
    {
      id: 39,
      category: "alarm-systems",
      image: imageSet[38],
    },
    {
      id: 40,
      category: "alarm-systems",
      image: imageSet[39],
    },
    {
      id: 41,
      category: "alarm-systems",
      image: imageSet[40],
    },
    {
      id: 42,
      category: "alarm-systems",
      image: imageSet[41],
    },
    {
      id: 43,
      category: "alarm-systems",
      image: imageSet[42],
    },
    {
      id: 44,
      category: "safety-equipment",
      image: imageSet[43],
    },
    {
      id: 45,
      category: "safety-equipment",
      image: imageSet[44],
    },
    {
      id: 46,
      category: "safety-equipment",
      image: imageSet[45],
    },
  ];

  // Filter products based on active category
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

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
    objectFit: "contain",
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
          offers a comprehensive range of high-quality fire safety products,
          including both Indian and imported brands, to meet all your fire
          protection needs.
        </p>
      </header>

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
                src={product.image.primary}
                alt={product.name}
                style={{
                  ...productImageStyle,
                  objectFit:
                    product.id === 4
                      ? "cover"
                      : productImageStyle?.objectFit || "contain",
                }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = product.image.secondary;
                }}
              />
            </div>
            <div style={productInfoStyle}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
