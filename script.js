const players = [
  {
    firstName: "Wooden",
    lastName: "Boat",
    price: 50,
    photos: [
      "imgs/boat1.jpg",
      "imgs/boat2.jpg",
      "imgs/boat3.jpg",
    ],
  },
  {
    firstName: "Wooden",
    lastName: "Blocks",
    price: 100,
    photos: [
      "imgs/block1.jpg",
      "imgs/block2.jpg",
      "imgs/block3.jpg",
    ],
  },
  {
    firstName: "Wooden",
    lastName: "Car",
    price: 45,
    photos: [
      "imgs/car1.jpg",
      "imgs/car2.jpg",
      "imgs/car3.jpg",
    ],
  },
  {
    firstName: "Wooden",
    lastName: "Plane",
    price: 55,
    photos: [
      "imgs/plane1.jpg",
      "imgs/plane2.jpg",
      "imgs/plane3.jpg",
    ],
  },
  {
    firstName: "Igor",
    lastName: "Shesterkin",
    price: 60,
    photos: [
      "imgs/train2.jpg",
      "imgs/train1.jpg",
      "imgs/train5.jpg",
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";
    list.forEach((p, index) => {
      const col = document.createElement("div");
      col.className = "col-6 col-lg-4 mb-4";

      // Create a unique carousel ID for each card
      const carouselId = `carousel-${index}`;

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${p.photos
                .map(
                  (photo, idx) => `
                <div class="carousel-item ${idx === 0 ? "active" : ""}">
                  <img src="${photo}" class="d-block w-100" alt="${p.firstName} ${p.lastName}">
                </div>`
                )
                .join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
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

      // Add event listener to each quantity dropdown
      const qtySelect = document.getElementById(`qty-${index}`);
      const priceText = document.getElementById(`price-${index}`);
      const basePrice = p.price;

      qtySelect.addEventListener("change", function () {
        const quantity = Number(this.value);
        const total = basePrice * quantity;
        priceText.textContent = "Price: $" + total;
      });
    });
  };

  render(players);
});