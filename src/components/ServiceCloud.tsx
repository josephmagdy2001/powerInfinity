import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const services = [
  'ERP', 'CRM', 'POS', 'Websites', 'HRsystems', 
  'Payroll', 'Employees', 'Video Editor', 'Marketing', 'Video AI'
];

const SphereItem = ({ text, index, count, mouseX, mouseY, radius }: { 
  text: string, 
  index: number, 
  count: number,
  mouseX: any,
  mouseY: any,
  radius: number
}) => {
  // Fibonacci Sphere Algorithm for uniform distribution
  const phi = Math.acos(1 - 2 * (index + 0.5) / count);
  const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

  const x = Math.cos(theta) * Math.sin(phi);
  const y = Math.sin(theta) * Math.sin(phi);
  const z = Math.cos(phi);

  // Dynamic rotation based on mouse and time
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Create motion values for smooth 3D effect
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Animation frame-like logic using useTransform
  const posX = useTransform(smoothMouseX, (val: any) => {
    const angleY = (val / 500) * Math.PI;
    const angleX = (Number(smoothMouseY.get()) / 500) * Math.PI;
    
    // Rotate coordinates
    const rotatedX = x * Math.cos(angleY) + z * Math.sin(angleY);
    return rotatedX * radius;
  });

  const posY = useTransform(smoothMouseY, (val: any) => {
    const angleX = (val / 500) * Math.PI;
    const angleY = (Number(smoothMouseX.get()) / 500) * Math.PI;
    
    // Rotate coordinates
    const rotatedY = y * Math.cos(angleX) - (x * Math.sin(angleY) + z * Math.cos(angleY)) * Math.sin(angleX);
    return rotatedY * radius;
  });

  const posZ = useTransform([smoothMouseX, smoothMouseY], ([mX, mY]: any) => {
    const angleY = (mX / 500) * Math.PI;
    const angleX = (mY / 500) * Math.PI;
    
    const rotatedZ = -x * Math.sin(angleY) * Math.cos(angleX) + y * Math.sin(angleX) + z * Math.cos(angleY) * Math.cos(angleX);
    return rotatedZ;
  });

  const scale = useTransform(posZ, [-1, 1], [0.5, 1.2]);
  const opacity = useTransform(posZ, [-1, 1], [0.3, 1]);
  const blur = useTransform(posZ, [-1, 0.5], [4, 0]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        x: posX,
        y: posY,
        z: posZ,
        scale,
        opacity,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        zIndex: useTransform(posZ, (v) => Math.round((v + 1) * 100)),
      }}
      className="cursor-pointer"
      whileHover={{ scale: 1.5, zIndex: 1000 }}
    >
      <div className="bg-white text-emerald-950 font-bold px-2 py-1 md:px-6 md:py-2.5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-emerald-100/20 whitespace-nowrap text-[10px] md:text-base transition-all duration-300 hover:bg-emerald-50 hover:shadow-emerald-500/20">
        {text}
      </div>
    </motion.div>
  );
};

export default function ServiceCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [radius, setRadius] = useState(250);

  // Responsive radius
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(90);
      } else {
        setRadius(250);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth drift animation
  const time = useMotionValue(0);
  React.useEffect(() => {
    let frame: number;
    const animate = (t: number) => {
      time.set(t / 2000); // Speed of auto-rotation
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Combine auto-rotation with mouse movement
  const combinedX = useTransform([mouseX, time], ([m, t]: any) => m + Math.sin(t) * 200);
  const combinedY = useTransform([mouseY, time], ([m, t]: any) => m + Math.cos(t) * 150);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        {services.map((service, index) => (
          <SphereItem 
            key={service} 
            text={service} 
            index={index} 
            count={services.length} 
            mouseX={combinedX}
            mouseY={combinedY}
            radius={radius}
          />
        ))}
      </div>
    </div>
  );
}
