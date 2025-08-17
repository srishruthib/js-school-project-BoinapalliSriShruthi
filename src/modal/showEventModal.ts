import { Event } from '../types';
export function showEventModal(modal: HTMLElement, event: Event): void {
  const modalBody = modal.querySelector('.modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <img src="${event.imageURL}" class="modal-image">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <small>${event.year} | ${event.category} | ${event.location}</small>
      <button class="close-modal">Close</button>
    `;
    modal.style.display = 'block';
  }
}