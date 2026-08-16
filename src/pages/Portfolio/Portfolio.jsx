import { useState } from "react";
import portfolioData from "../../data/portfolio.json";
import "./Portfolio.css";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = portfolioData;

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero" style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.3), rgba(17, 17, 17, 0.7)), url('/assets/portfolio/project-1.jpg')`,
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
            Our Work
          </span>
          <h1 className="text-section-title">
            A Portfolio of
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Transformations
            </em>
          </h1>
          <p
            className="text-lead"
            style={{ maxWidth: 520, margin: "var(--space-5) auto 0" }}
          >
            {portfolioData.length} projects across India — each one a unique
            story of space, style, and craft.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section">
        <div className="container">
          {/* Count */}
          <p className="portfolio-count">
            Showing <span>{portfolioData.length}</span> project
            {portfolioData.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`portfolio-card${i % 5 === 0 ? " wide" : ""}`}
                onClick={() => setLightbox(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(project)}
                aria-label={`View ${project.title}`}
              >
                <div
                  className="portfolio-card-bg"
                  style={
                    project.image
                      ? {
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {
                          background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}bb 100%)`,
                        }
                  }
                />
                <div className="portfolio-card-overlay">
                  {/* Text on images has been removed per request */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project: ${lightbox.title}`}
        >
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div
              className="lightbox-image"
              style={
                lightbox.image
                  ? {
                      backgroundImage: `url(${lightbox.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      background: `linear-gradient(135deg, ${lightbox.color} 0%, ${lightbox.color}99 100%)`,
                    }
              }
            >
              <div className="lightbox-image-label">
                <span>{lightbox.category}</span>
                <span>{lightbox.area}</span>
              </div>
            </div>
            <div className="lightbox-info">
              <div className="lightbox-header">
                <div>
                  <h3 className="lightbox-title">{lightbox.title}</h3>
                  <p className="lightbox-location">
                    📍 {lightbox.location} · {lightbox.year}
                  </p>
                </div>
                <div className="lightbox-area-badge">{lightbox.area}</div>
              </div>
              <p className="lightbox-desc">{lightbox.description}</p>
              <div className="lightbox-tags">
                {lightbox.tags.map((tag) => (
                  <span key={tag} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
