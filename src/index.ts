// src/index.ts
import { fetchEvents } from './fetcher';
import { createEventElement } from './renderer';
import { setupModal } from './modal/setupModal';
import { showEventModal } from './modal/showEventModal';

document.addEventListener('DOMContentLoaded', async () => {
  const timeline = document.getElementById('timeline');
  const modal = document.getElementById('modal');

  if (!timeline || !modal) return;

  setupModal(modal);

  try {
    const events = await fetchEvents();
    events.forEach(event => {
      const element = createEventElement(event);
      element.addEventListener('click', () => showEventModal(modal, event));
      timeline.appendChild(element);
    });
  } catch (error) {
    timeline.innerHTML = '<p>Failed to load events. Please try again later.</p>';
  }
});