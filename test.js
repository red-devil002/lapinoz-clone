const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const content = item.querySelector('.content');
  const icon = item.querySelector('.icon');

  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      content.style.display = 'none';
      item.classList.remove('active');
      icon.style.transform = 'translateY(-50%)';
    } else {
      content.style.display = 'block';
      item.classList.add('active');
      icon.style.transform = 'translateY(-50%) rotate(90deg)';
    }
  });
});
