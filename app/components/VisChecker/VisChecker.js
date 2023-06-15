'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function VisChecker({ children, placeholder, onVisibleChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (onVisibleChange) onVisibleChange(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onVisibleChange]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
}
