import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import { useState } from "react";

const Projects = () => {
  const isMobile = useMobile();
  const [activeCategory, setActiveCategory] = useState("all");

  // Project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "industrial", name: "Industrial" },
    { id: "commercial", name: "Commercial" },
    { id: "government", name: "Government" },
  ];

  // Projects list
  const projects = [
    {
      id: 1,
      name: "Lumax Industries Ltd.",
      location: "Plant-I, Pant Nagar",
      description:
        "Complete fire protection system installation including hydrants and alarms.",
      category: "industrial",
      image:
        "https://images.unsplash.com/photo-1531884070720-875c7622e741?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "The Metropolitan Mall",
      location: "MGF – Saket, New Delhi",
      description:
        "State-of-the-art fire safety and security system for a commercial shopping complex.",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1581541239456-ad6f53a8bb2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Delhi Metro Rail Corporation",
      location: "New Delhi",
      description:
        "Comprehensive fire safety systems for metro stations and facilities.",
      category: "government",
      image:
        "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Fortis Hospital",
      location: "Vasant Kunj, New Delhi",
      description:
        "Advanced fire protection and evacuation systems for healthcare facility.",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Mahindra & Mahindra",
      location: "Mohali, Chandigarh",
      description:
        "Fire suppression and alarm systems for manufacturing facilities.",
      category: "industrial",
      image:
        "https://images.unsplash.com/photo-1565349429170-7cef2b1258fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Punjab National Bank",
      location: "Multiple locations in U.P.",
      description:
        "Security and fire safety installations across multiple bank branches.",
      category: "government",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "The Ambassador Hotel (Taj Group)",
      location: "New Delhi",
      description:
        "Comprehensive fire protection systems for luxury hospitality establishment.",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Power Trading Corporation",
      location: "New Delhi",
      description:
        "Fire safety and suppression systems for power infrastructure.",
      category: "government",
      image:
        "https://images.unsplash.com/photo-1508516476096-c359c7272b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

  const projectsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
  };

  const projectCardStyle = {
    overflow: "hidden",
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.boxShadow.md,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    background: theme.colors.white,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const projectImageContainerStyle = {
    height: "200px",
    overflow: "hidden",
    position: "relative",
  };

  const projectImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const projectInfoStyle = {
    padding: theme.spacing.lg,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const projectNameStyle = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  };

  const projectLocationStyle = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.md,
    fontWeight: theme.typography.fontWeight.medium,
  };

  const projectDescriptionStyle = {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray,
    lineHeight: "1.6",
    flex: 1,
  };

  const categoryTagStyle = {
    display: "inline-block",
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    textTransform: "uppercase",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "";
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Projects</h1>
        <p style={subtitleStyle}>
          Explore our portfolio of successfully completed fire safety and
          protection projects across various industries and sectors.
        </p>
      </header>

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

      <div style={projectsGridStyle}>
        {filteredProjects.map((project) => (
          <div key={project.id} style={projectCardStyle}>
            <div style={projectImageContainerStyle}>
              <img
                src={project.image}
                alt={project.name}
                style={projectImageStyle}
              />
              <div style={overlayStyle}></div>
            </div>
            <div style={projectInfoStyle}>
              <h3 style={projectNameStyle}>{project.name}</h3>
              <p style={projectLocationStyle}>{project.location}</p>
              <p style={projectDescriptionStyle}>{project.description}</p>
              <span style={categoryTagStyle}>
                {getCategoryName(project.category)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
