const checkIn = document.querySelector('#check-in');
const checkOut = document.querySelector('#check-out');
const form = document.querySelector('#availability-form');
const message = document.querySelector('#form-message');

const today = new Date();
const asDateInput = (date) => date.toISOString().split('T')[0];
checkIn.min = asDateInput(today);
checkOut.min = asDateInput(today);

checkIn.addEventListener('change', () => {
  checkOut.min = checkIn.value;
  if (checkOut.value && checkOut.value <= checkIn.value) checkOut.value = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (new Date(checkOut.value) <= new Date(checkIn.value)) {
    message.textContent = 'Please choose a check-out date after your check-in date.';
    return;
  }
  message.textContent = 'Lovely — your dates are available. We’ll be in touch shortly to confirm your stay.';
});
