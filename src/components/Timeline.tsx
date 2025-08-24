import { useRef } from "react";
import type { EventItem } from "../TimelineEvent";
import EventMarker from "./EventMarker";
import { TIMELINE_HEADINGS } from "../constants";
import { useTimelineNavigation } from "../hooks/useTimelineNavigation";
import { isEventActive } from "../utils/eventUtils";

type Props = {
  events: EventItem[];
  onSelect: (e: EventItem) => void;
  selectedEvent: EventItem | null;
};

export default function Timeline({ events, onSelect, selectedEvent }: Props) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useTimelineNavigation(eventRefs, events.length);

  return (
    <section id="timeline" className="container my-4">
      <h2 id="timeline-heading" className="visually-hidden">
        {TIMELINE_HEADINGS.MAIN}
      </h2>
      <div
        ref={timelineRef}
        className="timeline-wrapper"
        role="list"
        aria-label={TIMELINE_HEADINGS.ARIA_LABEL}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            role="listitem"
          >
            <div className="timeline-card-wrapper">
              <EventMarker
                ref={(el) => {
                  eventRefs.current[index] = el;
                }}
                event={event}
                isActive={isEventActive(selectedEvent, event)}
                onSelect={() => onSelect(event)}
                tabIndex={0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
