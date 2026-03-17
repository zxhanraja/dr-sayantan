import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    colorClass?: string;
    blobColorClass?: string;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
    ({ className, children, colorClass = 'bg-primary', blobColorClass = 'bg-primary', onMouseEnter, onMouseLeave, onMouseMove, ...props }, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        const [isHovered, setIsHovered] = useState(false);

        // Mouse coords relative to button center
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        // Spring physics for blobs (different stiffness for trailing effect)
        const blob1X = useSpring(mouseX, { stiffness: 100, damping: 10 });
        const blob1Y = useSpring(mouseY, { stiffness: 100, damping: 10 });

        const blob2X = useSpring(mouseX, { stiffness: 50, damping: 15 });
        const blob2Y = useSpring(mouseY, { stiffness: 50, damping: 15 });

        const blob3X = useSpring(mouseX, { stiffness: 30, damping: 20 });
        const blob3Y = useSpring(mouseY, { stiffness: 30, damping: 20 });

        // Magnetic pull for the button itself
        const buttonX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
        const buttonY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onMouseMove) onMouseMove(e);
            if (!buttonRef.current) return;

            const rect = buttonRef.current.getBoundingClientRect();
            // Calculate center of button
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance from center
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            mouseX.set(distanceX);
            mouseY.set(distanceY);
        };

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onMouseEnter) onMouseEnter(e);
            setIsHovered(true);
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onMouseLeave) onMouseLeave(e);
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
        };

        useEffect(() => {
            // Inject SVG filter to document body if it doesn't exist
            if (!document.getElementById('gooey-filter')) {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('id', 'gooey-filter');
                svg.style.position = 'absolute';
                svg.style.width = '0';
                svg.style.height = '0';
                svg.innerHTML = `
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        `;
                document.body.appendChild(svg);
            }
        }, []);

        return (
            <motion.button
                ref={(node) => {
                    if (typeof ref === 'function') ref(node);
                    else if (ref) ref.current = node;
                    buttonRef.current = node;
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: buttonX,
                    y: buttonY,
                }}
                className={cn(
                    "relative group outline-none overflow-visible touch-none",
                    className
                )}
                {...props}
            >
                {/* Gooey container */}
                <div
                    className="absolute inset-x-[-50px] inset-y-[-50px] pointer-events-none -z-10"
                    style={{ filter: "url('#goo')" }}
                >
                    {/* Main button solid background - anchored to center */}
                    <div className={cn("absolute inset-[50px] rounded-full", colorClass, "transition-all duration-300")} />

                    {/* Blobs that follow the mouse */}
                    <motion.div
                        style={{ x: blob1X, y: blob1Y }}
                        className={cn(
                            "absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 rounded-full mix-blend-multiply opacity-0",
                            blobColorClass
                        )}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 2 : 0.5 }}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.div
                        style={{ x: blob2X, y: blob2Y }}
                        className={cn(
                            "absolute top-1/2 left-1/2 w-6 h-6 -mt-3 -ml-3 rounded-full mix-blend-multiply opacity-0",
                            blobColorClass
                        )}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.5 : 0.5 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        style={{ x: blob3X, y: blob3Y }}
                        className={cn(
                            "absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 rounded-full mix-blend-multiply opacity-0",
                            blobColorClass
                        )}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.5 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>

                {/* Content layering (z-10 to stay above gooey container) */}
                <div className="relative z-10 w-full h-full flex flex-row items-center justify-center">
                    {children}
                </div>
            </motion.button>
        );
    }
);
