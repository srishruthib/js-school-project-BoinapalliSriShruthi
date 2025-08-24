import { useCallback } from "react";
import { createPortal } from "react-dom";
import type { EventItem } from "../TimelineEvent";
import { MODAL_BACKGROUND, MODAL_SIZE, MODAL_BUTTONS } from "../constants";
import { useFocusTrap } from "../hooks/useFocusTrap";

type Props = {
  open: boolean;
  event: EventItem | null;
  onClose: () => void;
};

export default function EventModal({ open, event, onClose }: Props) {
  const modalRef = useFocusTrap<HTMLDivElement>(open, onClose);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!open || !event) return null;

  const { title, description, imageURL, year, category, location } = event;

  return createPortal(
    <div
      ref={modalRef}
      className={`modal fade ${open ? "show d-block" : ""}`}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="eventModalTitle"
      aria-hidden={!open}
      onClick={handleBackdropClick}
      style={{ backgroundColor: MODAL_BACKGROUND }}
    >
      <div className={`modal-dialog modal-dialog-centered ${MODAL_SIZE}`}>
        <div className="modal-content">
          <header className="modal-header">
            <h4 className="modal-title" id="eventModalTitle">
              {title}
            </h4>
            <button
              className="btn-close"
              onClick={onClose}
              aria-label="Close dialog"
            />
          </header>

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
