import type { EventItem } from "../TimelineEvent";

type Props = {
  event: EventItem;
};

export default function EventMarker({
  event: { title, description, year, location},
}: Props) {
  return (
  <div className="card shadow-sm h-100">
    <div className="card-body">
      <h5 className="card-title text-primary">{title}</h5>
      <p className="card-text">{description}</p>
      <small className="text-muted">
        {year} | {location}
      </small>
    </div>
  </div>
);
}
