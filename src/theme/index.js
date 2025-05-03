export const theme = {
  colors: {
    primary: "#0B2F5C", // Dark blue
    secondary: "#A30000", // Dark red
    dark: "#000000", // Black
    darkBlue: "#051B38", // Darker blue
    lightBlue: "#1D5291", // Lighter blue
    darkRed: "#800000", // Darker red
    lightRed: "#C82333", // Lighter red
    white: "#FFFFFF", // White
    lightGray: "#E5E5E5", // Light gray for backgrounds
    gray: "#707070", // Gray for text
    // New navbar-specific colors
    navbarBlue: "#0A1E3A", // Richer, darker blue for navbar
    navHighlight: "#1E90FF", // Bright blue for active/hover states
    navGradientStart: "#091833", // Start color for navbar gradient
    navGradientEnd: "#183059", // End color for navbar gradient
  },
  gradients: {
    blueToBlack: "linear-gradient(135deg, #0B2F5C 0%, #000000 100%)",
    blackToRed: "linear-gradient(135deg, #000000 0%, #A30000 100%)",
    blueToDarkBlue: "linear-gradient(135deg, #1D5291 0%, #051B38 100%)",
    // New navbar gradient
    navbarGradient: "linear-gradient(to right, #091833 0%, #183059 100%)",
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
  },
  borderRadius: {
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "1rem", // 16px
    pill: "9999px", // Pill shape
  },
  boxShadow: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.2)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.3)",
    glow: "0 0 8px rgba(29, 82, 145, 0.6)",
    navbarShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      xxl: "2rem", // 32px
      xxxl: "3rem", // 48px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: 768,
  },
};

// Utility hook for detecting mobile screens
export const useMobileDetect = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= theme.breakpoints.mobile;
  }
  return false;
};

export default theme;
