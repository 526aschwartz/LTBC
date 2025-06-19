// Get a reference to the element where the result message will be displayed
const result = document.getElementById("result");

// Add an event listener for the form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior (which would reload the page)
  e.preventDefault();

  // Create a new FormData object from the form element
  const formData = new FormData(form);

  // Create an empty object to hold the form data as key-value pairs
  var object = {};

  // Convert the FormData entries into a plain JavaScript object
  formData.forEach((value, key) => {
    object[key] = value;
  });

  // Convert the object into a JSON string
  var json = JSON.stringify(object);

  // Show a temporary message while waiting for the API response
  result.innerHTML = "Please wait...";

  // Send the form data to the Web3Forms API using the Fetch API
  fetch("https://api.web3forms.com/submit", {
    method: "POST", // Use POST request to send data
    headers: {
      "Content-Type": "application/json", // Specify the content type
      Accept: "application/json" // Expect a JSON response
    },
    body: json // Attach the JSON string as the request body
  })
    .then(async (response) => {
      // Parse the response as JSON
      let json = await response.json();

      // Check if the response was successful (HTTP status 200)
      if (response.status == 200) {
        // Display the success message
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        // Log the response and show the error message
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      // Handle any network or unexpected errors
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      // Reset the form fields after submission
      form.reset();

      // Hide the result message after 5 seconds
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
