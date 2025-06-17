const topReviews = [
  {
    name: "Emily R.",
    role: "⭐⭐⭐⭐⭐",
    message: "Absolutely love this! The quality is amazing and the service was top notch. "
  },
  {
    name: "Sofia L.",
    role: "⭐⭐⭐⭐⭐",
    message: "Everything was perfect — the packaging, the product, and the support! "
  },
  {
    name: "Ben T.",
    role: "⭐⭐⭐⭐⭐",
    message: "Seriously impressed with how smooth and professional everything was. "
  }
];

const bottomReviews = [
  {
    name: "Rachel M.",
    role: "⭐⭐⭐⭐⭐",
    message: "Incredible experience! Will definitely be coming back for more. "
  },
  {
    name: "Noah K.",
    role: "⭐⭐⭐⭐⭐",
    message: "Fast, friendly, and flawless. Highly recommend to anyone. "
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const topRow = document.getElementById('reviewRowTop');
  const bottomRow = document.getElementById('reviewRowBottom');

  const render = (list, container) => {
    container.innerHTML = '';
    list.forEach(review => {
      const col = document.createElement('div');
      col.className = 'review-card';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${review.name}</h5>
            <p class="review-role mb-2">${review.role}</p>
            <p class="small text-muted mb-0">${review.message}</p>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  };

  render(topReviews, topRow);
  render(bottomReviews, bottomRow);
});
