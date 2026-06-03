interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function WaveDivider({ 
  topColor = '#134980', 
  bottomColor = '#f8fafc',
  flip = false 
}: WaveDividerProps) {
  const bgColor = flip ? topColor : bottomColor;
  
  // Path invertido para ambos - curva hacia arriba
  const pathD = "M0,120 C240,40 480,0 720,60 C960,120 1200,80 1440,120 L1440,0 L0,0 Z";

  return (
    <div style={{ 
      width: '100%', 
      display: 'block',
      lineHeight: 0,
      fontSize: 0,
      background: bgColor,
    }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          display: 'block',
          height: flip ? '60px' : '80px',
          transform: flip ? 'rotate(180deg)' : undefined,
        }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Onda siempre azul */}
        <path
          d={pathD}
          fill="#134980"
        />
      </svg>
    </div>
  );
}
