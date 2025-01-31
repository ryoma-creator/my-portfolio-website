// components/ui/GlowingButton.jsx
export const GlowingButton = ({ children, className, ...props }) => {
    return (
      <button 
        className={`relative px-6 py-3 rounded-full overflow-hidden ${className}`} 
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#CCF8FF]/80 to-[#EF96C5]/80" />
        <div className="absolute -inset-1 bg-gradient-to-r from-[#CCF8FF] to-[#EF96C5] blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  };