/* eslint-disable */
import ErrorHandling from '../src/js/ui/ErrorHandling';

describe('ErrorHandling', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
  });

  it('should display an error message in the specified content element', () => {
    const message = 'An error occurred';
    const contentElementId = 'content';

    ErrorHandling.showError(message, contentElementId);

    const contentElement = document.getElementById(contentElementId);
    expect(contentElement).not.toBeNull();

    const errorElement = contentElement.querySelector('.error');
    expect(errorElement).not.toBeNull();
    expect(errorElement.innerText).toBe(message);
  });

  it('should clear previous content before displaying an error message', () => {
    const initialContent = '<p>Initial content</p>';
    const message = 'An error occurred';
    const contentElementId = 'content';

    document.getElementById(contentElementId).innerHTML = initialContent;

    ErrorHandling.showError(message, contentElementId);

    const contentElement = document.getElementById(contentElementId);
    expect(contentElement).not.toBeNull();
    expect(contentElement.innerHTML).not.toContain('Initial content');

    const errorElement = contentElement.querySelector('.error');
    expect(errorElement).not.toBeNull();
    expect(errorElement.innerText).toBe(message);
  });

  it('should not throw an error if the specified content element does not exist', () => {
    const message = 'An error occurred';
    const nonExistentElementId = 'nonExistentContent';

    expect(() => {
      ErrorHandling.showError(message, nonExistentElementId);
    }).not.toThrow();

    const nonExistentElement = document.getElementById(nonExistentElementId);
    expect(nonExistentElement).toBeNull();
  });
});
