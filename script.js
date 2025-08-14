document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  // 1. Fetch and parse events.json
  fetch("data/events.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load events");
      }
      return response.json();
    })
    .then((events) => {
        // 2. Render event markers
      events.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.className = "event-marker";
        eventElement.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <small>${event.year} | ${event.location}</small>
                `;

        // 3. Attach click handler for modal
        eventElement.addEventListener("click", () => {
          modal.querySelector(".modal-body").innerHTML = `
                        <img src="${event.imageURL}" class="modal-image">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <small>${event.year} | ${event.category} | ${event.location}</small>
                        <button class="close-modal">Close</button>
                    `;
          modal.style.display = "block";
        });

        timeline.appendChild(eventElement);
      });
    })
    .catch((error) => {
      console.error("Error loading events:", error);
      timeline.innerHTML =
        "<p>Failed to load events. Please try again later.</p>";
    });

  // 4. Close modal functionality
  modal.addEventListener("click", function (e) {
    if (e.target === this || e.target.classList.contains("close-modal")) {
      this.style.display = "none";
    }
  });
});
