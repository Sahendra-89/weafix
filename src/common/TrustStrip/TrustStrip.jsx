import "./TrustStrip.css";

const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6M9 13h4"/>
      </svg>
    ),
    label: "Modern Design",
    sub: "Elegant & Functional",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    label: "Quality Materials",
    sub: "Premium & Durable",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L2 7l10 4 10-4-10-4z"/>
        <path d="M2 17l10 4 10-4M2 12l10 4 10-4"/>
      </svg>
    ),
    label: "Custom Solutions",
    sub: "Tailored For You",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
    label: "On Time Delivery",
    sub: "Reliable & Efficient",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: "Award Winning",
    sub: "Recognised Studio",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <path d="M9 22V12h6v10"/>
      </svg>
    ),
    label: "350+ Projects",
    sub: "Across 10 Cities",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: "Client First",
    sub: "98% Satisfaction",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "10-Year Warranty",
    sub: "Peace of Mind",
  },
];

// Duplicate for seamless infinite loop
const ITEMS = [...TRUST_ITEMS, ...TRUST_ITEMS];

export default function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Trust indicators">
      <div className="trust-track">
        {ITEMS.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="trust-icon-wrap">{item.icon}</span>
            <div className="trust-text">
              <span className="trust-label">{item.label}</span>
              <span className="trust-sub">{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
