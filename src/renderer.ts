import { Event } from './types';

export function createEventElement(event: Event): HTMLDivElement {
  const element = document.createElement('div');
  element.className = 'event-marker';
  element.innerHTML = `
    <h3>${event.title}</h3>
    <p>${event.description}</p>
    <small>${event.year} | ${event.location}</small>
  `;
  return element;
}