"use client";

import { useInView } from "react-intersection-observer";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimationWrapper = ({
  children,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0.05,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 ease-in-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
