class DisplayEvents {
  constructor() {
    this.content = document.getElementById('eventsContainer');
  }

  display(eventHighlights) {
    if (!this.content) return;

    let output = '<h2>Event Highlights</h2><ul>';
    eventHighlights.forEach(event => {
      output += `
        <li>
          <h3>${event.strEvent}</h3>
          <p>${event.dateEvent}</p>
          <img src="${event.strThumb}" alt="${event.strEvent}">
          <p><a href="${event.strVideo}" target="_blank">Watch Highlights</a></p>
        </li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
}

export default DisplayEvents;
