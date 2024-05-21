class DisplayEvents {
    constructor() {
        this.eventsContainer = document.getElementById('eventsContainer');
    }

    display(events) {
        if (!this.eventsContainer) return;

        let output = '<h2>Upcoming Events</h2><ul>';
        events.forEach(event => {
            output += `
        <li>
          <h3>${event.strEvent}</h3>
          <p>Date: ${event.dateEvent}</p>
          <p>Venue: ${event.strVenue}</p>
        </li>`;
        });
        output += '</ul>';
        this.eventsContainer.innerHTML = output;
    }
}

export default DisplayEvents;
