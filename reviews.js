// Define the top set of user reviews
const topReviews = [
  {
    name: "Emily R.",
    role: "⭐⭐⭐⭐⭐", // Displayed as a role but represents the star rating
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

// Define the bottom set of user reviews
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

// Run this code after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the container elements where the reviews will be inserted
  const topRow = document.getElementById('reviewRowTop');
  const bottomRow = document.getElementById('reviewRowBottom');

  // A reusable function to render reviews in a given container
  const render = (list, container) => {
    // Clear any existing content in the container
    container.innerHTML = '';

    // Loop through each review object in the list
    list.forEach(review => {
      // Create a new div element for the review card
      const col = document.createElement('div');
      col.className = 'review-card'; // Assign a CSS class for styling

      // Define the inner HTML of the card using the review data
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${review.name}</h5> <!-- Reviewer's name -->
            <p class="review-role mb-2">${review.role}</p> <!-- Star rating -->
            <p class="small text-muted mb-0">${review.message}</p> <!-- Review text -->
          </div>
        </div>
      `;

      // Append the review card to the container
      container.appendChild(col);
    });
  };

  // Render the top and bottom review sections using the review lists
  render(topReviews, topRow);
  render(bottomReviews, bottomRow);
});
