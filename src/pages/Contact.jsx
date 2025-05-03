import { useState } from "react";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Contact = () => {
  const isMobile = useMobile();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here you would typically send the data to a server
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
                011-40582491, 011-45725370
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5308501746373!2d77.19119687548754!3d28.616054175960448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229d3aaaaa71%3A0xc289649add6d96c8!2sAnsal%20Chamber%20I%2C%20Bhikaji%20Cama%20Place%2C%20New%20Delhi%2C%20Delhi%20110066!5e0!3m2!1sen!2sin!4v1683805070782!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Fire Systems office location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
