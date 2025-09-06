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
      
      const touch = e.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      
      // Only prevent default if we're clearly doing a swipe gesture
      // Allow normal scrolling if movement is primarily vertical and we're not in vertical swipe mode
      if (direction === 'horizontal' && absX > absY && absX > 20) {
        e.preventDefault();
      } else if (direction === 'vertical' && absY > absX && absY > 20) {
        e.preventDefault();
      } else if (direction === 'both' && (absX > 20 || absY > 20)) {
        // For 'both' mode, only prevent if there's clear intentional swipe movement
        if (absX > absY && absX > 30) {
          e.preventDefault(); // Horizontal swipe
        } else if (absY > absX && absY > 30) {
          // Only prevent vertical scroll if it's a clear swipe gesture
          // Allow normal page scrolling for small movements
          if (absY > 50) {
            e.preventDefault();
          }
        }
      }
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
        // For vertical swipes, use a higher threshold to avoid conflicts with page scrolling
        const verticalThreshold = direction === 'both' ? threshold * 1.5 : threshold;
        if (absY > absX && absY > verticalThreshold) {
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
