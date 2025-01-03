// components/ui/BackgroundGradient.jsx
export default function BackgroundGradient({ startColor, endColor, children }) {
    return (
      <div className="relative">
        {/* グラデーション背景 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              180deg,
              ${startColor} 0%,
              ${endColor} 100%
            )`
          }}
        />
        
        {/* コンテンツ */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }