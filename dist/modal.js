export function setupModal(modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            modal.style.display = 'none';
        }
    });
}
export function showEventModal(modal, event) {
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
