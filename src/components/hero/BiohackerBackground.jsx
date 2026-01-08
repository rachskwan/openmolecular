import { useEffect, useRef, useState } from 'react';

// Simulated biomarker data streams
const biomarkers = [
  { name: 'NAD+', unit: 'μmol/L', range: [15, 45], decimals: 1 },
  { name: 'EPA:AA', unit: 'ratio', range: [0.1, 0.8], decimals: 2 },
  { name: 'hsCRP', unit: 'mg/L', range: [0.2, 3.5], decimals: 2 },
  { name: 'HbA1c', unit: '%', range: [4.5, 6.2], decimals: 1 },
  { name: 'VitD', unit: 'ng/mL', range: [20, 80], decimals: 0 },
  { name: 'B12', unit: 'pg/mL', range: [200, 900], decimals: 0 },
  { name: 'Omega3', unit: '%', range: [4, 12], decimals: 1 },
  { name: 'Cortisol', unit: 'μg/dL', range: [6, 23], decimals: 1 },
  { name: 'TSH', unit: 'mIU/L', range: [0.4, 4.5], decimals: 2 },
  { name: 'Ferritin', unit: 'ng/mL', range: [20, 200], decimals: 0 },
];

// Generate random value within range
const randomInRange = (min, max, decimals = 2) => {
  const val = min + Math.random() * (max - min);
  return val.toFixed(decimals);
};

// Streaming data line component
function DataStream({ delay = 0, speed = 1 }) {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const marker = biomarkers[Math.floor(Math.random() * biomarkers.length)];
        const value = randomInRange(marker.range[0], marker.range[1], marker.decimals);
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const userId = `u_${Math.random().toString(36).substr(2, 6)}`;

        const newLine = {
          id: Date.now() + Math.random(),
          text: `[${timestamp}] ${userId} | ${marker.name}: ${value} ${marker.unit}`,
          opacity: 1,
        };

        setLines(prev => {
          const updated = [...prev, newLine].slice(-12);
          return updated.map((line, i) => ({
            ...line,
            opacity: 0.3 + (i / updated.length) * 0.7,
          }));
        });
      }, 800 / speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, speed]);

  return (
    <div ref={containerRef} className="font-mono text-[10px] leading-relaxed space-y-0.5">
      {lines.map((line) => (
        <div
          key={line.id}
          style={{ opacity: line.opacity }}
          className="text-teal-400/80 whitespace-nowrap"
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}

// Waveform component (like heart rate / biomarker signal)
function Waveform({ color = 'teal', height = 40, speed = 1 }) {
  const canvasRef = useRef(null);
  const dataRef = useRef([]);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const h = canvas.height;

    // Initialize data
    for (let i = 0; i < width; i++) {
      dataRef.current.push(Math.random() * 0.3 + 0.35);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, h);

      // Shift data and add new point
      offsetRef.current += 0.5 * speed;
      if (offsetRef.current >= 1) {
        offsetRef.current = 0;
        dataRef.current.shift();

        // Generate organic signal with occasional spikes
        const noise = Math.random() * 0.15;
        const spike = Math.random() > 0.92 ? (Math.random() * 0.3 + 0.1) : 0;
        const base = 0.4 + Math.sin(Date.now() / 2000) * 0.1;
        dataRef.current.push(Math.min(0.95, Math.max(0.05, base + noise + spike)));
      }

      // Draw waveform
      ctx.beginPath();
      ctx.strokeStyle = color === 'teal' ? 'rgba(20, 184, 166, 0.6)' :
                        color === 'cyan' ? 'rgba(6, 182, 212, 0.6)' :
                        'rgba(16, 185, 129, 0.6)';
      ctx.lineWidth = 1.5;

      dataRef.current.forEach((val, i) => {
        const x = i;
        const y = h - (val * h);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw glow
      ctx.shadowColor = color === 'teal' ? 'rgba(20, 184, 166, 0.4)' :
                        color === 'cyan' ? 'rgba(6, 182, 212, 0.4)' :
                        'rgba(16, 185, 129, 0.4)';
      ctx.shadowBlur = 4;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [color, speed]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={height}
      className="opacity-60"
    />
  );
}

// Data rain column (matrix-style but with real data)
function DataRain({ column, speed = 1 }) {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    // Initialize with some data
    const initChars = [];
    for (let i = 0; i < 15; i++) {
      initChars.push({
        id: i,
        char: Math.random() > 0.7 ? biomarkers[Math.floor(Math.random() * biomarkers.length)].name.charAt(0) :
              Math.random() > 0.5 ? Math.floor(Math.random() * 10).toString() : '.',
        opacity: Math.random() * 0.5,
        y: i * 20,
      });
    }
    setChars(initChars);

    const interval = setInterval(() => {
      setChars(prev => prev.map(c => ({
        ...c,
        y: c.y + (2 * speed),
        opacity: c.y > 250 ? Math.max(0, c.opacity - 0.05) : Math.min(0.6, c.opacity + 0.02),
        char: c.y > 280 ?
          (Math.random() > 0.7 ? biomarkers[Math.floor(Math.random() * biomarkers.length)].name.charAt(0) :
           Math.random() > 0.5 ? Math.floor(Math.random() * 10).toString() : '.') : c.char,
      })).map(c => c.y > 300 ? { ...c, y: -20, opacity: 0 } : c));
    }, 50);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative h-full overflow-hidden" style={{ width: '12px' }}>
      {chars.map((c) => (
        <div
          key={c.id}
          className="absolute font-mono text-xs text-teal-500"
          style={{
            top: c.y,
            opacity: c.opacity,
            textShadow: '0 0 8px rgba(20, 184, 166, 0.5)',
          }}
        >
          {c.char}
        </div>
      ))}
    </div>
  );
}

// Scatter plot data points
function ScatterPlot() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Generate initial points
    const initial = [];
    for (let i = 0; i < 30; i++) {
      initial.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    setPoints(initial);

    // Slowly drift points
    const interval = setInterval(() => {
      setPoints(prev => prev.map(p => ({
        ...p,
        x: p.x + (Math.random() - 0.5) * 0.3,
        y: p.y + (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {points.map((p) => (
        <circle
          key={p.id}
          cx={p.x}
          cy={p.y}
          r={p.size / 10}
          fill="rgba(20, 184, 166, 0.5)"
          style={{ opacity: p.opacity }}
        />
      ))}
      {/* Connection lines between nearby points */}
      {points.slice(0, 15).map((p1, i) => {
        const p2 = points[(i + 1) % points.length];
        const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        if (dist < 30) {
          return (
            <line
              key={`line-${i}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="rgba(20, 184, 166, 0.15)"
              strokeWidth="0.3"
            />
          );
        }
        return null;
      })}
    </svg>
  );
}

// User count ticker
function UserTicker() {
  const [count, setCount] = useState(47832);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(prev => prev + Math.floor(Math.random() * 3));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] text-emerald-400/70">
      <span className="text-slate-500">{'//'}</span> active_contributors: {count.toLocaleString()}
    </div>
  );
}

// Raw JSON-like data snippet
function RawDataSnippet() {
  const [data, setData] = useState({});

  useEffect(() => {
    const update = () => {
      const marker = biomarkers[Math.floor(Math.random() * biomarkers.length)];
      setData({
        ts: Date.now(),
        src: 'user_submitted',
        marker: marker.name,
        val: randomInRange(marker.range[0], marker.range[1], marker.decimals),
        unit: marker.unit,
        verified: Math.random() > 0.3,
      });
    };

    update();
    const interval = setInterval(update, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[9px] text-slate-500 bg-black/20 p-2 rounded border border-slate-700/50">
      <div className="text-slate-600">{'{'}</div>
      <div className="pl-2">
        <span className="text-cyan-500">"src"</span>: <span className="text-emerald-400">"{data.src}"</span>,
      </div>
      <div className="pl-2">
        <span className="text-cyan-500">"marker"</span>: <span className="text-amber-400">"{data.marker}"</span>,
      </div>
      <div className="pl-2">
        <span className="text-cyan-500">"value"</span>: <span className="text-teal-400">{data.val}</span>,
      </div>
      <div className="pl-2">
        <span className="text-cyan-500">"verified"</span>: <span className={data.verified ? 'text-emerald-400' : 'text-red-400'}>{data.verified?.toString()}</span>
      </div>
      <div className="text-slate-600">{'}'}</div>
    </div>
  );
}

// Main biohacker background component
export default function BiohackerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Scatter plot layer */}
      <div className="absolute inset-0 opacity-40">
        <ScatterPlot />
      </div>

      {/* Data rain columns */}
      <div className="absolute top-0 left-[5%] h-full opacity-30">
        <DataRain column={1} speed={0.8} />
      </div>
      <div className="absolute top-0 left-[15%] h-full opacity-20">
        <DataRain column={2} speed={1.2} />
      </div>
      <div className="absolute top-0 right-[10%] h-full opacity-25">
        <DataRain column={3} speed={1} />
      </div>
      <div className="absolute top-0 right-[20%] h-full opacity-15">
        <DataRain column={4} speed={0.6} />
      </div>

      {/* Left data stream panel */}
      <div className="absolute left-4 top-8 w-64 opacity-60 hidden lg:block">
        <div className="text-[9px] text-slate-600 font-mono mb-1">
          {'// real-time biomarker submissions'}
        </div>
        <DataStream delay={0} speed={1} />
      </div>

      {/* Right data stream panel */}
      <div className="absolute right-4 top-8 w-56 opacity-50 hidden lg:block">
        <div className="text-[9px] text-slate-600 font-mono mb-1">
          {'// verified user data stream'}
        </div>
        <DataStream delay={500} speed={0.7} />
      </div>

      {/* Waveforms */}
      <div className="absolute bottom-20 left-8 opacity-40 hidden md:block">
        <div className="text-[8px] text-slate-600 font-mono mb-1">signal_01: hrv_proxy</div>
        <Waveform color="teal" height={35} speed={1} />
      </div>
      <div className="absolute bottom-8 left-8 opacity-30 hidden md:block">
        <div className="text-[8px] text-slate-600 font-mono mb-1">signal_02: glucose_var</div>
        <Waveform color="cyan" height={30} speed={0.7} />
      </div>
      <div className="absolute bottom-16 right-8 opacity-35 hidden md:block">
        <div className="text-[8px] text-slate-600 font-mono mb-1">signal_03: cortisol_trend</div>
        <Waveform color="emerald" height={32} speed={0.9} />
      </div>

      {/* Raw JSON snippets */}
      <div className="absolute top-1/3 left-4 opacity-40 hidden xl:block">
        <RawDataSnippet />
      </div>
      <div className="absolute bottom-1/3 right-4 opacity-35 hidden xl:block">
        <RawDataSnippet />
      </div>

      {/* User ticker */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-50">
        <UserTicker />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-600 opacity-40">
        v2.4.1 | node_42
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[8px] text-slate-600 opacity-40 hidden sm:block">
        lat: 0ms | sync: ok
      </div>

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)',
        }}
      />
    </div>
  );
}
