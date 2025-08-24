import { useEffect } from "react";
import {
  KEYBOARD_NAVIGATION_KEYS,
  getNewFocusIndex,
  type NavigationKey,
} from "../constants";

export const useTimelineNavigation = (
  eventRefs: React.RefObject<(HTMLButtonElement | null)[]>,
  totalEvents: number
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!KEYBOARD_NAVIGATION_KEYS.includes(e.key as NavigationKey)) {
        return;
      }

      e.preventDefault();

      const currentIndex = eventRefs.current.findIndex(
        (ref) => ref === document.activeElement
      );

      if (currentIndex === -1) return;

      const newIndex = getNewFocusIndex(e.key, currentIndex, totalEvents);
      eventRefs.current[newIndex]?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalEvents, eventRefs]);
};
