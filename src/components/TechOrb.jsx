import React, { useEffect, useRef, useMemo } from "react";

// ─── Icon definitions ────────────────────────────────────────────────────────
const ICONS = [
  {
    label: "React",
    color: "#20232a",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    label: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <rect width="32" height="32" fill="#F7DF1E" rx="4" />
        <text x="5" y="26" fontSize="16" fontWeight="bold" fill="#222" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    label: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <rect width="32" height="32" fill="#3178C6" rx="4" />
        <text x="4" y="25" fontSize="14" fontWeight="bold" fill="#fff" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    label: "Tailwind",
    color: "#0EA5E9",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#0EA5E9" rx="4" />
        <path d="M7 13c.8-3.2 2.9-4.8 5.6-4.8-2.8 3.2-1.6 4.8.8 4.8 2.8 0 4.8-1.6 5.6-4.8-.8 3.2-2.9 4.8-5.6 4.8 2.8-3.2 1.6-4.8-.8-4.8-2.8 0-4.8 1.6-5.6 4.8z" fill="#fff" />
        <path d="M14 21c.8-3.2 2.9-4.8 5.6-4.8-2.8 3.2-1.6 4.8.8 4.8 2.8 0 4.8-1.6 5.6-4.8-.8 3.2-2.9 4.8-5.6 4.8 2.8-3.2 1.6-4.8-.8-4.8-2.8 0-4.8 1.6-5.6 4.8z" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Node.js",
    color: "#3C873A",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#2E7D32" rx="4" />
        <text x="3" y="19" fontSize="9" fontWeight="bold" fill="#fff" fontFamily="monospace">NODE</text>
        <text x="3" y="27" fontSize="9" fontWeight="bold" fill="#a5d6a7" fontFamily="monospace">.JS</text>
      </svg>
    ),
  },
  {
    label: "MongoDB",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#13aa52" rx="4" />
        <path d="M16 5 C16 5, 11 12, 11 17.5 C11 22 13.5 26 16 27 C18.5 26 21 22 21 17.5 C21 12 16 5 16 5Z" fill="#fff" />
        <rect x="15" y="22" width="2" height="5" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#1a1a2e" rx="4" />
        <text x="4" y="22" fontSize="11" fontWeight="bold" fill="#3776AB" fontFamily="monospace">Py</text>
        <circle cx="24" cy="10" r="3" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    label: "Git",
    color: "#F4511E",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#F4511E" rx="4" />
        <circle cx="22" cy="10" r="3" fill="#fff" />
        <circle cx="10" cy="16" r="3" fill="#fff" />
        <circle cx="22" cy="22" r="3" fill="#fff" />
        <line x1="13" y1="15.2" x2="19.2" y2="10.8" stroke="#fff" strokeWidth="1.5" />
        <line x1="13" y1="16.8" x2="19.2" y2="21.2" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Firebase",
    color: "#FF6D00",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#FF6D00" rx="4" />
        <path d="M10 24l3.5-14 3 5.5 2.5-4.5L22 24H10z" fill="#FFCA28" />
        <path d="M10 24l3.5-14 3 5.5-2 8.5H10z" fill="#FFA000" opacity="0.8" />
      </svg>
    ),
  },
  {
    label: "Power BI",
    color: "#F2C811",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#1a1a2e" rx="4" />
        <rect x="5" y="18" width="5" height="9" fill="#F2C811" rx="1" />
        <rect x="13" y="12" width="5" height="15" fill="#F2C811" opacity="0.75" rx="1" />
        <rect x="21" y="6" width="5" height="21" fill="#F2C811" opacity="0.5" rx="1" />
      </svg>
    ),
  },
  {
    label: "Vite",
    color: "#646cff",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#1a1a2e" rx="4" />
        <polygon points="16,5 28,26 22,26 16,15 10,26 4,26" fill="#646cff" opacity="0.9" />
        <polygon points="16,5 22,26 16,20" fill="#ffbd2e" opacity="0.95" />
      </svg>
    ),
  },
  {
    label: "HTML",
    color: "#E44D26",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect width="32" height="32" fill="#E44D26" rx="4" />
        <text x="3" y="24" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="monospace">HTML</text>
      </svg>
    ),
  },
];

// ─── 3D sphere point distribution (Fibonacci / golden angle) ─────────────────
function fibonacciSphere(n, radius) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2; // -1 to 1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TechOrb() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const frameRef = useRef(null);
  const rotRef = useRef({ x: 0.3, y: 0 }); // current euler angles
  const velRef = useRef({ x: 0.0003, y: 0.005 }); // angular velocity
  const mouseRef = useRef({ dragging: false, lastX: 0, lastY: 0 });

  const RADIUS = 160;
  const COUNT = ICONS.length;

  const basePoints = useMemo(() => fibonacciSphere(COUNT, RADIUS), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Mouse drag to spin ──────────────────────────────────────
    const onMouseDown = (e) => {
      mouseRef.current = { dragging: true, lastX: e.clientX, lastY: e.clientY };
    };
    const onMouseMove = (e) => {
      if (!mouseRef.current.dragging) return;
      const dx = e.clientX - mouseRef.current.lastX;
      const dy = e.clientY - mouseRef.current.lastY;
      velRef.current.y = dx * 0.0012;
      velRef.current.x = dy * 0.0012;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };
    const onMouseUp = () => {
      mouseRef.current.dragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // ── Animation loop ──────────────────────────────────────────
    let lastT = null;

    function animate(t) {
      const dt = lastT !== null ? Math.min(t - lastT, 32) : 16;
      lastT = t;

      if (!mouseRef.current.dragging) {
        // auto-rotate
        velRef.current.y += (0.005 - velRef.current.y) * 0.04;
        velRef.current.x += (0.0003 - velRef.current.x) * 0.04;
      } else {
        // dampen velocity when not dragging
        velRef.current.x *= 0.92;
        velRef.current.y *= 0.92;
      }

      rotRef.current.x += velRef.current.x;
      rotRef.current.y += velRef.current.y;

      const cx = Math.cos(rotRef.current.x);
      const sx = Math.sin(rotRef.current.x);
      const cy = Math.cos(rotRef.current.y);
      const sy = Math.sin(rotRef.current.y);

      basePoints.forEach((pt, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        // rotate around Y then X
        const x1 = pt.x * cy + pt.z * sy;
        const y1 = pt.y;
        const z1 = -pt.x * sy + pt.z * cy;
        const x2 = x1;
        const y2 = y1 * cx - z1 * sx;
        const z2 = y1 * sx + z1 * cx;

        // depth: normalise z to [0,1]
        const depth = (z2 / RADIUS + 1) / 2; // 0=back, 1=front
        const scale = 0.55 + 0.55 * depth;
        const opacity = 0.25 + 0.75 * depth;
        const zIndex = Math.round(depth * 100);

        el.style.transform = `translate(${x2}px, ${y2}px) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = zIndex;
      });

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [basePoints]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        cursor: "grab",
      }}
    >
      {/* ── Ambient glow layers ── */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.12) 40%, transparent 72%)",
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
          filter: "blur(16px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Sphere grid rings (decorative SVG) ── */}
      <svg
        width="380"
        height="380"
        viewBox="-190 -190 380 380"
        style={{
          position: "absolute",
          pointerEvents: "none",
          opacity: 0.18,
        }}
      >
        {/* equator */}
        <ellipse cx="0" cy="0" rx="160" ry="42" stroke="rgba(160,140,255,0.7)" strokeWidth="0.8" fill="none" strokeDasharray="4 8" />
        {/* tilted ring 1 */}
        <ellipse cx="0" cy="0" rx="160" ry="80" stroke="rgba(130,100,255,0.5)" strokeWidth="0.8" fill="none" strokeDasharray="3 10" transform="rotate(30)" />
        {/* tilted ring 2 */}
        <ellipse cx="0" cy="0" rx="160" ry="80" stroke="rgba(130,100,255,0.4)" strokeWidth="0.8" fill="none" strokeDasharray="3 10" transform="rotate(-30)" />
        {/* meridian */}
        <ellipse cx="0" cy="0" rx="40" ry="160" stroke="rgba(160,140,255,0.35)" strokeWidth="0.8" fill="none" strokeDasharray="2 12" />
        {/* outer glow ring */}
        <circle cx="0" cy="0" r="160" stroke="rgba(120,100,255,0.2)" strokeWidth="1" fill="none" />
      </svg>

      {/* ── Glowing core sphere ── */}
      <div
        style={{
          position: "absolute",
          width: 52,
          height: 52,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 38% 35%, rgba(200,190,255,0.95), rgba(120,80,255,0.8) 55%, rgba(70,30,200,0.4) 100%)",
          boxShadow:
            "0 0 28px 10px rgba(120,90,255,0.45), 0 0 60px 20px rgba(99,102,241,0.2), inset 0 0 14px rgba(255,255,255,0.22)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      {/* inner core highlight */}
      <div
        style={{
          position: "absolute",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 75%)",
          transform: "translate(-10px, -10px)",
          pointerEvents: "none",
          zIndex: 51,
        }}
      />

      {/* ── Draggable orb scene ── */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: 380,
          height: 380,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ICONS.map((icon, i) => (
          <div
            key={icon.label}
            ref={(el) => (itemRefs.current[i] = el)}
            title={icon.label}
            style={{
              position: "absolute",
              width: 52,
              height: 52,
              willChange: "transform, opacity",
              transition: "none",
            }}
          >
            {/* Card body */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 14,
                background: "rgba(12,10,28,0.82)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                overflow: "hidden",
                position: "relative",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "42%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)",
                  borderRadius: "14px 14px 0 0",
                  pointerEvents: "none",
                }}
              />
              {icon.svg}
              <span
                style={{
                  fontSize: 7.5,
                  fontWeight: 600,
                  color: "rgba(210,200,255,0.85)",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  lineHeight: 1,
                  padding: "0 3px",
                }}
              >
                {icon.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Floating tooltip hint ── */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 10,
          color: "rgba(148,130,255,0.55)",
          letterSpacing: "0.08em",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        drag to rotate
      </div>
    </div>
  );
}
