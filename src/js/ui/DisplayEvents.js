class DisplayEvents {
  constructor() {
    this.content = document.getElementById('eventsContainer');
  }

  display(eventHighlights) {
    if (!this.content) return;

    let output = '<div class="card" style="width: 18rem;">';
    eventHighlights.forEach(event => {
      output += `
        <div class="card-header">
    ${event.strEvent}
  </div>
  <ul class="list-group list-group-flush">
    <li class="d-flex flex-column list-group-item">
          <div class="d-flex flex-row gap-1 align-items-center justify-content-center">
            <p>${event.dateEvent}</p>
            <img src="${event.strThumb}" alt="${event.strEvent}">
          </div>
          <p><a href="${event.strVideo}" target="_blank">Watch Highlights</a></p>
    </li>
  </ul>`;
    });
    output += '</div>';
    this.content.innerHTML = output;
  }
}

export default DisplayEvents;
