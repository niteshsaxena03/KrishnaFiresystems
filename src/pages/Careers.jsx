import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { theme } from "../theme";
import { useMobile } from "../hooks/useMobile";

const Careers = () => {
  const isMobile = useMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });


  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(null);
  const [submitting, setSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) {
      alert("Please select a resume photo.");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    const formDataUpload = new FormData();
    formDataUpload.append("file", image);
    formDataUpload.append("upload_preset", "resume_data");
    const fileName = image.name.split(".")[0];
    formDataUpload.append("public_id", `Home/Resume/${fileName}`);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/dhcodkhrw/image/upload"
      );

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded * 100) / event.total);
          setUploadProgress(percent);
        }
      };

      xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        setUrl(response.secure_url);
        setUploading(false);
      };

      xhr.onerror = () => {
        alert("Upload failed.");
        setUploading(false);
      };

      xhr.send(formDataUpload);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!url) {
    alert("Please upload your resume photo before submitting.");
    return;
  }

  setSubmitting(true); // Start progress

  const templateParams = {
    ...formData,
    resume_url: url,
  };

  emailjs
    .send(
      "service_ru9c4u9", // Service ID
      "template_6yygras", // Template ID
      templateParams,
      "5O2ipjpZs8QcmPHZB" // Public Key
    )
    .then(() => {
    setFormSubmitted(true);
    setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
    });
    setImage(null);
    setUrl("");
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ← scroll to top
    })
    .catch(() => {
    setFormSubmitted(false);
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ← scroll to top on failure
    });

};


  const containerStyle = {
    padding: theme.spacing.xl,
    maxWidth: "800px",
    margin: "0 auto",
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
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const inputStyle = {
    width: "100%",
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    border: `1px solid ${theme.colors.lightGray}`,
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: theme.colors.secondary,
    color: "#fff",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    marginTop: theme.spacing.lg,
  };

  return (
    
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Apply Now</h1>
        <p style={subtitleStyle}>
          We're looking for passionate individuals to join our team. Submit your
          details and resume  below to begin your journey with Krishna Fire
          Systems.
        </p>
      </header>

      {submitting && (
      <div
        style={{
        marginBottom: "1rem",
        color: theme.colors.primary,
        fontWeight: "bold",
        }}
    >
        Submitting your application...
        <div style={{ height: "4px", background: "#eee", marginTop: "5px" }}>
        <div
            style={{
            height: "4px",
            width: "100%",
            background: theme.colors.secondary,
            animation: "progress 2s linear infinite",
            }}
        />
        </div>
    </div>
    )}

    {formSubmitted === true && !submitting && (
    <div
        style={{
        color: "#155724",
        backgroundColor: "#d4edda",
        border: "1px solid #c3e6cb",
        padding: "10px 15px",
        borderRadius: "4px",
        marginBottom: "1rem",
        fontWeight: "bold",
        }}
    >
        ✅ Application submitted successfully!
    </div>
    )}

    {formSubmitted === false && !submitting && (
    <div
        style={{
        color: "#721c24",
        backgroundColor: "#f8d7da",
        border: "1px solid #f5c6cb",
        padding: "10px 15px",
        borderRadius: "4px",
        marginBottom: "1rem",
        fontWeight: "bold",
        }}
    >
        ❌ Failed to submit the form. Please try again.
    </div>
)}


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="address"
          placeholder="Address (Current/Permanent)"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          style={inputStyle}
          required
        />

        <div style={{ margin: "20px 0" }}>
        <label
            htmlFor="resume-upload"
            style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#333",
            fontSize: "16px",
            }}
        >
            Upload Resume Photo
        </label>

        <input
            id="resume-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
            padding: "10px",
            border: "2px dashed ",
            borderRadius: "6px",
            width: "100%",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            }}
        />
        <small style={{ color: "#666", fontSize: "12px" }}>
            Accepted format: JPG, PNG (Max: 2MB)
        </small>
        </div>
        

        <button type="button" onClick={uploadImage} style={buttonStyle}>
        {uploading ? "Uploading..." : "Upload Resume Photo"}
        </button>


        {uploading && (
          <div style={{ marginTop: "10px" }}>
            Uploading: {uploadProgress}%{" "}
            <progress value={uploadProgress} max="100" />
          </div>
        )}

        {url && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={url}
              alt="Resume"
              style={{ width: "150px", borderRadius: "8px" }}
            />
          </div>
        )}

        <button type="submit" style={buttonStyle}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Careers;
