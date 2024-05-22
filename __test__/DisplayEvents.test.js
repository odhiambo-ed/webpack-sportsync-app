/* eslint-disable no-undef */
import DisplayEvents from '../src/js/ui/DisplayEvents';

describe('DisplayEvents', () => {
  let displayEvents;
  let container;

  beforeEach(() => {
    document.body.innerHTML = '<div id="eventsContainer"></div>';
    container = document.getElementById('eventsContainer');
    displayEvents = new DisplayEvents();
  });

  it('should display event highlights', () => {
    const highlights = [
      { strEvent: 'Match 1', dateEvent: '2024-05-20', strThumb: 'thumb.jpg', strVideo: 'video.mp4' }
    ];
    displayEvents.display(highlights);

    expect(container.innerHTML).toContain('Match 1');
    expect(container.innerHTML).toContain('2024-05-20');
    expect(container.innerHTML).toContain('thumb.jpg');
    expect(container.innerHTML).toContain('video.mp4');
  });
});
