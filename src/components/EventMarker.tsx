import { forwardRef } from "react";
import type { EventItem } from "../TimelineEvent";

type Props = {
  event: EventItem;
  isActive: boolean;
  onSelect: () => void;
  tabIndex?: number;
};

const EventMarker = forwardRef<HTMLButtonElement, Props>(
  ({ event, isActive, onSelect, tabIndex }: Props, ref) => {
    const { title, description, year, location } = event;

    return (
      <button
        ref={ref}
        className={`event-marker-btn ${
          isActive ? "event-marker-btn--active" : ""
        }`}
        onClick={onSelect}
        tabIndex={tabIndex}
        aria-current={isActive ? "step" : undefined}
        aria-label={`Event from ${year}: ${title}. ${
          isActive ? "Currently viewing details" : "View details"
        }`}
      >
        <div className="event-marker-body">
          <h3 className="event-marker-title">{title}</h3>
          <p className="event-marker-text">{description}</p>
          <small className="event-marker-meta">
            {year} | {location}
          </small>
        </div>
      </button>
    );
  }
);

EventMarker.displayName = "EventMarker";

export default EventMarker;
