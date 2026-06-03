interface WaveDividerProps {
  fill?: string;
  flip?: boolean;
}

export default function WaveDivider({ fill = '#134980', flip = false }: WaveDividerProps) {
  const gradientId = `waveGradient-${fill.replace('#', '')}`;

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      style={{
        width: '100%',
        display: 'block',
        height: '120px',
        transform: flip ? 'rotate(180deg)' : undefined,
      }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}
