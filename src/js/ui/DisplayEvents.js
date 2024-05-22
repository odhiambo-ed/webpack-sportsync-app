class DisplayEvents {
  constructor() {
    this.content = document.getElementById('eventsContainer');
  }

  display(events) {
    if (!this.content) return;

    let output = '<h2>Upcoming Events</h2><ul>';
    events.forEach(event => {
      output += `
        <li>
          <h3>${event.strEvent}</h3>
          <p>${event.dateEvent} - ${event.strTime}</p>
          <p>${event.strHomeTeam} vs ${event.strAwayTeam}</p>
          <img src="${event.strThumb}" alt="${event.strEvent}">
          <p><a href="${event.strVideo}" target="_blank">Watch Highlights</a></p>
        </li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
}

export default DisplayEvents;
