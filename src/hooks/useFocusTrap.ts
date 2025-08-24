import { useEffect, useRef } from "react";


export const useFocusTrap = <T extends HTMLElement = HTMLDivElement>(
  isActive: boolean, 
  onClose?: () => void
) => {
  const containerRef = useRef<T>(null); 
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      
      lastFocusedElement.current = document.activeElement as HTMLElement;

      
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstFocusable = focusableElements[0] as HTMLElement;
      const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

      
      setTimeout(() => firstFocusable?.focus(), 0);

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isActive && onClose) {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }
      };

      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        
       
        setTimeout(() => {
          lastFocusedElement.current?.focus();
        }, 0);
      };
    }
  }, [isActive, onClose]);

  return containerRef;
};