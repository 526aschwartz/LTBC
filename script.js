const players = [
  {
    firstName: "Vincent",
    lastName: "Trocheck",
    price: 31,
    photo: 'imgs/Trocheck.png',
  },
  {
    firstName: "Vincent",
    lastName: "Trocheck",
    price: 31,
    photo: 'imgs/Trocheck.png',
  },
  {
    firstName: "Vincent",
    lastName: "Trocheck",
    price: 31,
    photo: 'imgs/Trocheck.png',
  },
  {
    firstName: "Vincent",
    lastName: "Trocheck",
    price: 31,
    photo: 'imgs/Trocheck.png',
  },
  {
    firstName: "Vincent",
    lastName: "Trocheck",
    price: 31,
    photo: 'imgs/Trocheck.png',
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';
    list.forEach((p, index) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
            <p id="price-${index}" class="small text-muted mb-0">Price: $${p.price}</p>
            <label for="qty-${index}" class="form-label mt-2">Quantity:</label>
            <select id="qty-${index}" style="width: 60%; margin: 0 auto;">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      `;

      grid.appendChild(col);

      // Add event listener to each quantity dropdown directly
      const qtySelect = document.getElementById(`qty-${index}`);
      const priceText = document.getElementById(`price-${index}`);
      const basePrice = p.price;

      qtySelect.addEventListener('change', function () {
        const quantity = Number(this.value);
        const total = basePrice * quantity;
        priceText.textContent = "Price: $" + total;
      });
    });
  };

  render(players);
});