import { createPortal } from "react-dom";
import type { EventItem } from "../TimelineEvent";
import { MODAL_BACKGROUND, MODAL_SIZE } from "../constants";
import { MODAL_BUTTONS } from "../constants";

type Props = {
  open: boolean;
  event: EventItem | null;
  onClose: () => void;
};

export default function EventModal({ open, event, onClose }: Props) {
  if (!open || !event) return null;

  const { title, description, imageURL, year, category, location } = event;

  return createPortal(
    <div
      className={`modal fade ${open ? "show d-block" : ""}`}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="eventModalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{ backgroundColor: MODAL_BACKGROUND }}
    >
      <div className={`modal-dialog modal-dialog-centered ${MODAL_SIZE}`}>
        <div className="modal-content">
          {/* Modal Header */}
          <header className="modal-header">
            <h5 className="modal-title" id="eventModalTitle">{title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </header>

          {/* Modal Body */}
          <section className="modal-body">
            <article>
              <img 
                src={imageURL} 
                alt={title} 
                className="img-fluid rounded mb-3" 
              />
              <p>{description}</p>
              <small className="text-muted">
                {year} | {category} | {location}
              </small>
            </article>
          </section>

          {/* Modal Footer */}
          <footer className="modal-footer">
            <button className="btn btn-primary" onClick={onClose}>
  {MODAL_BUTTONS.CLOSE}
</button>
          </footer>
        </div>
      </div>
    </div>,
    document.body
  );
}
