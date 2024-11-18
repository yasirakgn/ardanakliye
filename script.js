const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
});
