import { useState } from "react";
import Button from "../../common/Button/Button";
import "./Contact.css";

const SERVICES = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Kitchen & Bath Design",
  "Space Planning",
  "Furniture Curation",
  "Full Home Makeover",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero" style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.3), rgba(17, 17, 17, 0.7)), url('/assets/portfolio/project-18.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: 'calc(var(--header-height) + var(--space-20))',
        paddingBottom: 'var(--space-20)',
        borderBottom: '1px solid var(--color-border)',
        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
      }}>
        <div className="container">
          <span
            className="text-overline"
            style={{ display: "block", marginBottom: "var(--space-4)" }}
          >
            Get in Touch
          </span>
          <h1 className="text-section-title">
            Let's Start Your
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Design Journey
            </em>
          </h1>
          <p
            className="text-lead"
            style={{ maxWidth: 520, margin: "var(--space-5) auto 0" }}
          >
            Whether you have a project in mind or just want to explore
            possibilities — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Layout */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Info */}
            <div className="contact-info">
              <div className="contact-info-block">
                <span
                  className="text-overline"
                  style={{ marginBottom: "var(--space-3)", display: "block" }}
                >
                  Our Studio
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-2xl)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  Visit Us in Gurugram
                </h3>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: 2 }}>
                      Studio Address
                    </p>
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "var(--text-sm)",
                        lineHeight: "var(--leading-relaxed)",
                      }}
                    >
                      WEAFIX STUDIOS, Sector 8,<br />
                      Vir Nagar, Gurugram, Haryana 122001
                    </p>
                    <a
                      href="https://maps.app.goo.gl/hW3MQSmnNQpL8ZYZ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                      style={{ fontSize: "var(--text-xs)", marginTop: 4, display: "inline-block" }}
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: 2 }}>Phone</p>
                    <a href="tel:+919811178178" className="contact-link">
                      +91 98111 78178
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">💬</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: 2 }}>WhatsApp</p>
                    <a
                      href="https://wa.me/919811178178"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      +91 98111 78178
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: 2 }}>Email</p>
                    <a
                      href="mailto:info@weafixstudios.com"
                      className="contact-link"
                    >
                      info@weafixstudios.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">🕐</div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: 2 }}>
                      Studio Hours
                    </p>
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "var(--text-sm)",
                        lineHeight: "var(--leading-relaxed)",
                      }}
                    >
                      Monday – Saturday
                      <br />
                      10:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  title="WEAFIX STUDIOS Location — Gurugram"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8!2d77.0179431!3d28.4576004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d25333e285%3A0x3bb22b14b9f2254b!2sWEAFIX%20STUDIOS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <span style={{ fontSize: "3rem" }}>✨</span>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out to WEAFIX STUDIOS. We'll get back
                    to you within 24 hours to discuss how we can help transform
                    your space.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setSubmitted(false)}
                    id="contact-reset-btn"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontSize: "var(--text-2xl)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "var(--text-sm)",
                      marginBottom: "var(--space-8)",
                    }}
                  >
                    Fill in the form below and we'll respond within one business
                    day.
                  </p>

                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder=" "
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder=" "
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder=" "
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-service">
                        Service Interested In
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        className="form-select"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about your project, space, timeline, and any specific requirements..."
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      id="contact-submit-btn"
                    >
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="contact-strip">
        <div className="container">
          <div className="contact-strip-inner">
            <div className="contact-strip-item">
              <span className="contact-strip-icon">⚡</span>
              <div>
                <p style={{ fontWeight: 500 }}>Fast Response</p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Reply within 24 hours
                </p>
              </div>
            </div>
            <div className="contact-strip-item">
              <span className="contact-strip-icon">🎁</span>
              <div>
                <p style={{ fontWeight: 500 }}>Free Consultation</p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  No obligation, ever
                </p>
              </div>
            </div>
            <div className="contact-strip-item">
              <span className="contact-strip-icon">🔒</span>
              <div>
                <p style={{ fontWeight: 500 }}>Confidential</p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Your data is safe with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
