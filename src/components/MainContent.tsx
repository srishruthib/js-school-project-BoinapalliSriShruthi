import { useEffect, useState } from "react";
import Timeline from "./Timeline";
import EventModal from "./EventModal";
import type { EventItem } from "../TimelineEvent";
import { MESSAGES, EVENTS_URL } from "../constants"; // ✅ import constants

export default function MainContent() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selected, setSelected] = useState<EventItem | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(EVENTS_URL) // ✅ use constant
      .then((res) => {
        if (!res.ok) throw new Error(MESSAGES.ERROR); // ✅ use constant
        return res.json();
      })
      .then((data: EventItem[]) => setEvents(data))
      .catch((e: unknown) =>
        setError(e instanceof Error ? e.message : MESSAGES.ERROR) // ✅ use constant
      )
      .finally(() => setLoading(false));
  }, []);

  const handleSelect = (event: EventItem) => {
    setSelected(event);
    setOpen(true);
  };

  const handleClose = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <>
      <main className="flex-grow-1">
        <div className="container py-4">
          {loading && <p className="text-center">{MESSAGES.LOADING}</p>} {/* ✅ use constant */}
          {error && <p className="text-danger text-center">{error}</p>}

          {!loading && !error && (
            <Timeline events={events} onSelect={handleSelect} />
          )}
        </div>
      </main>

      <EventModal open={open} event={selected} onClose={handleClose} />
    </>
  );
}
