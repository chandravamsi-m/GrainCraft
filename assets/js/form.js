/**
 * form.js
 * Handles multi-step form logic for the quote page
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.form-step'));
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const submitBtn = document.getElementById('submit-btn');
  const progressFill = document.getElementById('progress-fill');

  let currentStep = 1;

  const updateForm = () => {
    // Hide all steps
    steps.forEach(step => {
      step.style.display = 'none';
      step.classList.remove('active');
    });

    // Show current step
    const activeStep = form.querySelector(`.form-step[data-step="${currentStep}"]`);
    activeStep.style.display = 'block';
    setTimeout(() => activeStep.classList.add('active'), 10);

    // Update Progress
    const progress = (currentStep / steps.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Update Buttons
    if (currentStep === 1) {
      prevBtn.style.visibility = 'hidden';
    } else {
      prevBtn.style.visibility = 'visible';
    }

    if (currentStep === steps.length) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'block';
    } else {
      nextBtn.style.display = 'block';
      submitBtn.style.display = 'none';
    }
  };

  nextBtn.addEventListener('click', () => {
    const activeStep = form.querySelector(`.form-step[data-step="${currentStep}"]`);
    const inputs = activeStep.querySelectorAll('input[required], select[required], textarea[required]');
    
    let isValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            isValid = false;
        }
    });

    if (isValid && currentStep < steps.length) {
      currentStep++;
      updateForm();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateForm();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, you'd send this via fetch/Formspree
    alert('Thank you! Your inquiry has been received. We will be in touch within 48 hours.');
    window.location.href = '../index.html';
  });
});
