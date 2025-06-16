const firstRowPlayers = [
  {
    firstName: "Wooden",
    lastName: "Boat",
    price: 50,
    photos: ["imgs/boat1.jpg", "imgs/boat2.jpg", "imgs/boat3.jpg"],
  },
  {
    firstName: "Wooden",
    lastName: "Blocks",
    price: 100,
    photos: ["imgs/block1.jpg", "imgs/block2.jpg", "imgs/block3.jpg"],
  },
  {
    firstName: "Wooden",
    lastName: "Car",
    price: 45,
    photos: ["imgs/car1.jpg", "imgs/car2.jpg", "imgs/car3.jpg"],
  }
];

const secondRowPlayers = [
  {
    firstName: "Wooden",
    lastName: "Plane",
    price: 55,
    photos: ["imgs/plane1.jpg", "imgs/plane2.jpg", "imgs/plane3.jpg"],
  },
  {
    firstName: "Igor",
    lastName: "Shesterkin",
    price: 60,
    photos: ["imgs/train2.jpg", "imgs/train1.jpg", "imgs/train5.jpg"],
  }
];

// Call renderPlayers with actual row elements instead of IDs
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

renderPlayers(firstRowPlayers, row1, 0);
renderPlayers(secondRowPlayers, row2, firstRowPlayers.length);

function renderPlayers(list, rowElement, indexOffset) {
  // const row = document.getElementById(rowId);  <-- removed this line, now rowElement is passed in

  list.forEach((p, i) => {
    const globalIndex = indexOffset + i;

    const card = document.createElement("div");
    card.className = "card";

    // Use the first photo only (no carousel)
    const photo = p.photos[0];

    card.innerHTML = `
      <img src="${photo}" alt="${p.firstName} ${p.lastName}" />
      <div class="card-title">${p.firstName} ${p.lastName}</div>
      <div class="card-body">
        <p>Price: $<span id="price-${globalIndex}">${p.price}</span></p>
        <label for="qty-${globalIndex}">Quantity:</label><br />
        <select id="qty-${globalIndex}" style="width: 60%; margin: 0 auto;">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    `;

    rowElement.appendChild(card);

    // Quantity change event updates total price
    const qtySelect = card.querySelector(`#qty-${globalIndex}`);
    const priceSpan = card.querySelector(`#price-${globalIndex}`);
    qtySelect.addEventListener("change", () => {
      const quantity = Number(qtySelect.value);
      const total = p.price * quantity;
      priceSpan.textContent = total;
    });
  });
}
