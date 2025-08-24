import type { EventItem } from "../TimelineEvent";

export const isEventActive = (
  selectedEvent: EventItem | null,
  currentEvent: EventItem
): boolean => {
  return selectedEvent?.id === currentEvent.id;
};
