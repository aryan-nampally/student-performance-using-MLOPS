document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#predict-form');
  const btn = document.querySelector('#submit-btn');
  const resultContainer = document.querySelector('#result-container');
  const resultValue = document.querySelector('#prediction-value');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // UI Loading State
      btn.classList.add('loading');
      btn.disabled = true;

      // Hide previous result if any
      resultContainer.classList.remove('visible');

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: formData
        });

        if (response.ok) {
          const data = await response.json();

          // Artificial delay for smooth animation flow
          setTimeout(() => {
            resultValue.textContent = Math.round(data.result); // Rounding just in case
            resultContainer.classList.add('visible');
            btn.classList.remove('loading');
            btn.disabled = false;
          }, 600);
        } else {
          console.error('Server error');
          btn.classList.remove('loading');
          btn.disabled = false;
        }
      } catch (error) {
        console.error('Error:', error);
        btn.classList.remove('loading');
        btn.disabled = false;
      }
    });
  }

  // Input animation helpers
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
});