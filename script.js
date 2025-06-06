document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const priceEl = card.querySelector('.price');
    const buttons = card.querySelectorAll('.item-list-button');

    if (priceEl && buttons.length > 0) {
      const baseText = priceEl.textContent.replace('$', '');
      const base = Number(baseText); // get base price once

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const qty = Number(btn.textContent);
          const total = base * qty;
          priceEl.textContent = '$' + total.toFixed(2);
        });
      });
    }
  });
});
