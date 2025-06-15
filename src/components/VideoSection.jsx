import React, { useEffect, useState } from "react";

const ToolDemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 20px",
        gap: "40px",
        flexWrap: "wrap",
        background: "#f0f8ff",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
        transition: "opacity 1s ease-out, transform 1s ease-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
      }}
    >
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "#0B2F5C",
            margin: 0,
            lineHeight: "1.2",
            letterSpacing: "-0.5px",
          }}
        >
          Our Tool & <br /> Equipment Demo
        </h2>
        <p
          style={{
            marginTop: "20px",
            fontSize: "1.2rem",
            color: "#444",
            fontWeight: "500",
          }}
        >
          Experience the real-time usage of our fire safety tools and equipment.
        </p>
      </div>

      <div style={{ flex: 1, minWidth: "300px" }}>
        <video
          src="/demo.mp4"
          poster="/ppe.jpg"
          muted
          controls
          loop
          style={{
            width: "100%",
            aspectRatio: "16 / 9", 
            borderRadius: "12px",
            objectFit: "cover", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            transition: "transform 0.4s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </section>
  );
};

export default ToolDemoSection;
