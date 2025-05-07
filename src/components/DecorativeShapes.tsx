
const DecorativeCircle = () => (
  <div className="absolute rounded-full bg-secondary/50 animate-pulse" 
    style={{
      width: '300px',
      height: '300px',
      top: '20%',
      right: '-150px',
      filter: 'blur(80px)',
      zIndex: 1
    }}
  />
);

const DecorativeSquare = () => (
  <div className="absolute bg-secondary/30" 
    style={{
      width: '200px',
      height: '200px',
      bottom: '10%',
      left: '-100px',
      transform: 'rotate(45deg)',
      filter: 'blur(60px)',
      zIndex: -1
    }}
  />
);

const DecorativeDots = () => (
  <div className="absolute grid grid-cols-3 gap-2 opacity-20"
    style={{
      top: '40%',
      right: '5%',
      zIndex: -1
    }}
  >
    {Array(9).fill(0).map((_, index) => (
      <div key={index} className="w-2 h-2 rounded-full bg-gray-400"></div>
    ))}
  </div>
);

const DecorativeWave = () => (
  <div className="absolute w-32 h-16 opacity-10"
    style={{
      bottom: '15%',
      left: '10%',
      backgroundImage: 'linear-gradient(45deg, transparent 25%, #888 25%, #888 50%, transparent 50%, transparent 75%, #888 75%, #888 100%)',
      backgroundSize: '16px 16px',
      zIndex: -1
    }}
  />
);

export { DecorativeCircle, DecorativeSquare, DecorativeDots, DecorativeWave };
