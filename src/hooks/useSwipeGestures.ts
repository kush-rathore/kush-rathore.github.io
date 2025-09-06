import { useEffect, useRef } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  direction?: 'horizontal' | 'vertical' | 'both';
}

export const useSwipeGestures = (options: SwipeGestureOptions) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold = 50, direction = 'horizontal' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startX = 0;
    let startY = 0;
    let isTracking = false;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isTracking = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTracking) return;
      e.preventDefault(); // Prevent scrolling while swiping
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTracking) return;
      
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      
      // Determine swipe direction based on configuration
      if (direction === 'horizontal' || direction === 'both') {
        if (absX > absY && absX > threshold) {
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight();
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft();
          }
        }
      }
      
      if (direction === 'vertical' || direction === 'both') {
        if (absY > absX && absY > threshold) {
          if (deltaY > 0 && onSwipeDown) {
            onSwipeDown();
          } else if (deltaY < 0 && onSwipeUp) {
            onSwipeUp();
          }
        }
      }
      
      isTracking = false;
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold, direction]);

  return elementRef;
};
