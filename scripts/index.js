const accordionItems = document.querySelectorAll('.accordion-item');

function faqsAccordion(e) {
  const pHeight = `${e.lastElementChild.lastElementChild.offsetHeight}px`;

  if (e.classList.contains('open')) {
    e.classList.remove('open');
    e.lastElementChild.style.maxHeight = `0`;
  } else {
    accordionItems.forEach(e2 => {
      e2.classList.remove('open');
      e2.lastElementChild.style.maxHeight = `0`;
    });
    e.classList.add('open');
    e.lastElementChild.style.maxHeight = pHeight;
  }
}

accordionItems.forEach(e =>
  e.addEventListener('click', () => faqsAccordion(e))
);
