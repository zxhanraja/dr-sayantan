import React, { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
  isLeaving?: boolean;
}

export function RippleButton({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"button">) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState<Ripple | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = useCallback((event: React.MouseEvent) => {
    if (isHovered || !buttonRef.current) return;
    setIsHovered(true);

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ x, y, size, key: Date.now() });
  }, [isHovered]);

  const removeRipple = useCallback((event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    setIsHovered(false);
    
    if (!buttonRef.current) return;
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ x, y, size, key: Date.now(), isLeaving: true });
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!buttonRef.current || !isHovered || !ripple) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple(prev => prev ? { ...prev, x, y } : null);
  }, [isHovered, ripple]);

  return (
    <button
      ref={buttonRef}
      className={`relative flex items-center justify-center overflow-hidden transition-all duration-[600ms] ${className}`}
      onMouseEnter={(e) => {
        if (e.target === e.currentTarget) {
          createRipple(e);
        }
      }}
      onMouseLeave={(e) => {
        if (e.target === e.currentTarget) {
          removeRipple(e);
        }
      }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <span className="relative z-[2] flex items-center justify-center gap-2">{children}</span>
      
      <AnimatePresence>
        {ripple && (
          <motion.span
            key={ripple.key}
            className="absolute rounded-full bg-current opacity-10 pointer-events-none z-[1]"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: ripple.isLeaving ? 0 : 1,
              x: '-50%',
              y: '-50%',
            }}
            exit={{ scale: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              if (ripple.isLeaving) {
                setRipple(null);
              }
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}

// Demo Component
export function Component() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col gap-6 items-center">
        <RippleButton onClick={() => console.log('Button clicked!')}>
          Click Me
        </RippleButton>
      </div>
    </div>
  );
}
