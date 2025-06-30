import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// markers :
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  const isMobile = useMobile();
  const position = [28.536802035038527, 77.22817935200763];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (formData) => {
    // Prepare parameters to send to EmailJS
     const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    cc_email: "delhi@krishnafiresystems.com", 
    };

    emailjs
      .send(
        "service_ru9c4u9",
        "template_ofuae3r",
        templateParams,
        "5O2ipjpZs8QcmPHZB"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setFormSubmitted(true);
          // Reset form after success
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Email Js Part :
    sendEmail(formData);

    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    });
  };

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

  const contactSectionStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  };

  const formContainerStyle = {
    padding: theme.spacing.xl,
    background: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.boxShadow.md,
  };

  const infoContainerStyle = {
    padding: theme.spacing.xl,
    background: theme.gradients.blueToDarkBlue,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const formGroupStyle = {
    marginBottom: theme.spacing.lg,
  };

  const labelStyle = {
    display: "block",
    marginBottom: theme.spacing.xs,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.gray,
  };

  const inputStyle = {
    width: "100%",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    border: `1px solid ${theme.colors.lightGray}`,
    fontSize: theme.typography.fontSize.md,
    fontFamily: theme.typography.fontFamily,
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "150px",
    resize: "vertical",
  };

  const buttonStyle = {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    border: "none",
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.bold,
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
  };

  const infoTitleStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.lg,
  };

  const infoItemStyle = {
    display: "flex",
    marginBottom: theme.spacing.lg,
    alignItems: "flex-start",
  };

  const infoIconStyle = {
    marginRight: theme.spacing.md,
    fontSize: theme.typography.fontSize.xl,
  };

  const infoTextStyle = {
    lineHeight: "1.6",
  };

  const mapContainerStyle = {
    width: "100%",
    height: "250px",
    marginTop: theme.spacing.xl,
    borderRadius: theme.borderRadius.sm,
    overflow: "hidden",
  };

  const directorSectionStyle = {
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

  const directorImageStyle = {
    width: isMobile ? "80px" : "120px",
    height: isMobile ? "80px" : "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: `3px solid ${theme.colors.primary}`,
  };

  const directorInfoStyle = {
    flex: 1,
  };

  const directorTextStyle = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: "1.6",
    marginBottom: theme.spacing.md,
    fontStyle: "italic",
  };

  const directorNameStyle = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  const directorRoleStyle = {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray,
    marginBottom: theme.spacing.md,
  };

  const directorPhoneStyle = {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary,
  };

  const successMessageStyle = {
    padding: theme.spacing.lg,
    backgroundColor: "rgba(75, 181, 67, 0.1)",
    borderRadius: theme.borderRadius.sm,
    color: "#4BB543",
    marginBottom: theme.spacing.lg,
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={subtitleStyle}>
          Get in touch with our team for any inquiries regarding our fire safety
          products and services. We're here to help you with your fire
          protection needs.
        </p>
      </header>

      <div style={contactSectionStyle}>
        <div style={formContainerStyle}>
          <h2
            style={{
              fontSize: theme.typography.fontSize.xl,
              marginBottom: theme.spacing.lg,
            }}
          >
            Send Us a Message
          </h2>

          {formSubmitted && (
            <div style={successMessageStyle}>
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={textareaStyle}
                required
              ></textarea>
            </div>

            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        </div>

        <div style={infoContainerStyle}>
          <div>
            <h2 style={infoTitleStyle}>Contact Information</h2>

            <div style={infoItemStyle}>
              <span style={infoIconStyle}>📍</span>
              <div style={infoTextStyle}>
                <strong>Registered Office:</strong>
                <br />
                B-305, 3rd Floor, Ansal Chamber-1, Bhikaji Cama Place, New Delhi
                – 110066
              </div>
            </div>

            <div style={infoItemStyle}>
              <span style={infoIconStyle}>🏭</span>
              <div style={infoTextStyle}>
                <strong>Works:</strong>
                <br />S - 321, Chirag Delhi, Near Bhagat Singh College, New
                Delhi – 110017
              </div>
            </div>

            <div style={infoItemStyle}>
              <span style={infoIconStyle}>📞</span>
              <div style={infoTextStyle}>
                <strong>Phone:</strong>
                <br />
                <strong>Registered Office</strong>: 011-40582491
                <br />
                <strong>Works</strong>: 011-45725370
              </div>
            </div>

            <div style={infoItemStyle}>
              <span style={infoIconStyle}>✉️</span>
              <div style={infoTextStyle}>
                <strong>Email:</strong>
                <br />
                delhi@krishnafiresystems.com
              </div>
            </div>
          </div>
          <div style={mapContainerStyle}>
            <MapContainer
              center={position}
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Krishna Fire
                  <span style={{ fontSize: "0.7em", verticalAlign: "super" }}>
                    ®
                  </span>{" "}
                  Office
                  <br />
                  Ansals Chamber I, Delhi
                </Popup>
              </Marker>
              <Circle
                center={position}
                radius={200}
                pathOptions={{ fillOpacity: 0.2 }}
              />
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Managing Director Section */}
      <div style={directorSectionStyle}>
        <div style={directorInfoStyle}>
          <h3 style={directorNameStyle}>Udai Thakur</h3>
          <p style={directorRoleStyle}>Managing Director</p>
          <p style={directorTextStyle}>
            "We assure you about our best services and products and look forward
            to serving your esteemed organization with the highest standards of
            quality and reliability."
          </p>
          <div style={directorPhoneStyle}>
            <span style={{ fontSize: "20px" }}>📱</span> 98101-39453
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
