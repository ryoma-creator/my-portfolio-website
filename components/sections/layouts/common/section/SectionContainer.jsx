// SectionContainer.jsx
export const SectionContainer = ({ children, className = "" }) => {
    return (
      <section className={`py-24 relative ${className}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  };