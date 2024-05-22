class ErrorHandling {
  static showError(message, contentElementId) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.innerText = message;
    const content = document.getElementById(contentElementId);
    if (content) {
      content.innerHTML = '';
      content.appendChild(errorElement);
    }
  }
}

export default ErrorHandling;
