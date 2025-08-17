import { Event } from '../types';
export function setupModal(modal: HTMLElement): void {
  modal.addEventListener('click', (e: MouseEvent) => {
    if (e.target === modal || (e.target as HTMLElement).classList.contains('close-modal')) {
      modal.style.display = 'none';
    }
  });
}