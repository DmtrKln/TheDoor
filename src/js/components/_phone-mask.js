function applyPhoneMask(input) {
  if (!input) return;

  input.addEventListener('input', (e) => {
    let digits = e.target.value.replace(/\D/g, '');

    if (digits.startsWith('8') || digits.startsWith('7')) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    
    let result = '+7';
    if (digits.length >= 1) result += ' (' + digits.slice(0, 3);
    if (digits.length >= 4) result += ') ' + digits.slice(3, 6);
    if (digits.length >= 7) result += '-' + digits.slice(6, 8);
    if (digits.length >= 9) result += '-' + digits.slice(8, 10);

    e.target.value = result;
  });

  input.addEventListener('focus', () => {
    if (!input.value) input.value = '+7';
  });

  input.addEventListener('blur', () => {
    if (input.value === '+7') input.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value.replace(/\D/g, '').length <= 1) {
      e.preventDefault();
      input.value = '';
    }
  });
}

const mask = document.querySelectorAll('.mask');

mask.forEach((input) => applyPhoneMask(input));


