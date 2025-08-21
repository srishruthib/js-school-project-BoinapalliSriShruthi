import type { EventItem } from "../TimelineEvent";
import EventMarker from "./EventMarker";

type Props = {
  events: EventItem[];
  onSelect: (e: EventItem) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  return (
    <section id="timeline" className="container my-4">
      <h2 id="timeline-heading" className="visually-hidden">
        Timeline Events
      </h2>
      <div className="timeline-wrapper">
        {events.map((event, index) => (
          <div
            key={event.title + index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            onClick={() => onSelect(event)}
          >
            <div className="timeline-card-wrapper">
              <EventMarker event={event} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
