export const APP_CONFIG = {
  NAME: "The Dev Horizon",
  LOGO: "/logo.png",
  DESCRIPTION: "A modern timeline application for tracking development events",
} as const;

export const MODAL_BACKGROUND = "rgba(0, 0, 0, 0.5)";
export const MODAL_SIZE = "modal-lg";
export const MODAL_BUTTONS = {
  CLOSE: "Close",
};

export const MESSAGES = {
  LOADING: "Loading events…",
  ERROR: "Failed to load events",
};

export const EVENTS_URL = "/data/events.json";

export const KEYBOARD_NAVIGATION_KEYS = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
] as const;

export type NavigationKey = (typeof KEYBOARD_NAVIGATION_KEYS)[number];

export const getNewFocusIndex = (
  key: string,
  currentIndex: number,
  totalEvents: number
): number => {
  switch (key) {
    case "ArrowRight":
    case "ArrowDown":
      return (currentIndex + 1) % totalEvents;
    case "ArrowLeft":
    case "ArrowUp":
      return (currentIndex - 1 + totalEvents) % totalEvents;
    case "Home":
      return 0;
    case "End":
      return totalEvents - 1;
    default:
      return currentIndex;
  }
};
export const TIMELINE_HEADINGS = {
  MAIN: "Timeline Events",
  ARIA_LABEL: "Timeline events",
} as const;
