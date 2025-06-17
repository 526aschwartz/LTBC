// Add modal container to the body
const modalContainer = document.createElement("div");
modalContainer.innerHTML = `
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">Product Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modalBody">
          <!-- Content will be dynamically updated -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modalContainer);

// Product data
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

// Function to render players
function renderPlayers(list, rowElement, indexOffset) {
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    const globalIndex = indexOffset + i;

    const card = document.createElement("div");
    card.className = "card";

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
        <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#productModal" id="more-info-${globalIndex}">More Info</button>
      </div>
    `;

    rowElement.appendChild(card);

    // Quantity change event updates total price
    const qtySelect = document.getElementById(`qty-${globalIndex}`);
    const priceSpan = document.getElementById(`price-${globalIndex}`);
    qtySelect.onchange = function () {
      priceSpan.textContent = p.price * qtySelect.value;
    };

    // Add event listener to "More Info" button
    const moreInfoButton = document.getElementById(`more-info-${globalIndex}`);
    moreInfoButton.onclick = function () {
      const modalBody = document.getElementById("modalBody");
      modalBody.innerHTML = `
        <h6>${p.firstName} ${p.lastName}</h6>
        <p><strong>Price:</strong> $${p.price}</p>
        <p><strong>Photos:</strong></p>
        <div>
          ${p.photos
            .map(
              (photo, index) =>
                `<img src="${photo}" alt="Photo ${index + 1}" style="width: 50px; margin: 5px;">`
            )
            .join("")}
        </div>
        <p>This is a beautiful handcrafted wooden ${p.lastName}. Perfect for kids and collectors alike!</p>
      `;
    };
  }
}

// Render players
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

renderPlayers(firstRowPlayers, row1, 0);
renderPlayers(secondRowPlayers, row2, firstRowPlayers.length);
