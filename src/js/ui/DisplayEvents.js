class DisplayEvents {
  constructor() {
    this.content = document.getElementById('eventsContainer');
  }

  display(eventHighlights) {
    if (!this.content) return;

    let output = '';
    // Display only the first 3 items
    eventHighlights.slice(0, 3).forEach(event => {
      output += `<div class="card" style="width: 90%">
        <div class="card-header">
          ${event.strEvent}
        </div>
        <ul class="list-group list-group-flush">
          <li class="d-flex flex-column list-group-item">
            <div class="d-flex flex-row gap-1 align-items-center justify-content-between">
              <p>${event.dateEvent}</p>
              <img src="${event.strThumb}" alt="${event.strEvent}" style="max-width: 100px; max-height: 100px;">
            </div>
            <p><a class="text-decoration-none" href="${event.strVideo}" target="_blank">Watch Highlights</a></p>
          </li>
        </ul>
      </div>`;
    });

    this.content.innerHTML = output;
  }
}

export default DisplayEvents;