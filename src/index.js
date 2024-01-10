document.addEventListener("DOMContentLoaded", () => {
    //  The code that is loaded when the DOM content is fully loaded
  
    // Fetch and display all ramen the images
    fetch("http://localhost:3000/ramens")
      .then(response => response.json())
      .then(ramens => {
        // Retrieve the ramen-menu div
        const ramenMenu = document.getElementById("ramen-menu");
  
        // Loop through each ramen and create an image element for it
        ramens.forEach(ramen => {
          const ramenImage = document.createElement("img");
          ramenImage.src = ramen.image;
          ramenImage.alt = ramen.name;
  
          // Adding a click event listener to display information about the selected ramen
          ramenImage.addEventListener("click", () => displayRamenDetails(ramen));
          ramenMenu.appendChild(ramenImage);
        });
      });
  
    // Display the details of the ramen that is selected
    function displayRamenDetails(ramen) {
      // Retrieving the elements that are used to display ramen details
      const ramenDetail = document.getElementById("ramen-detail");
      const ratingDisplay = document.getElementById("rating-display");
      const commentDisplay = document.getElementById("comment-display");
  
      // Creating elements for ramen details
      const detailImage = document.createElement("img");
      const nameElement = document.createElement("h2");
      const restaurantElement = document.createElement("h3");
  
      // Updating details with the selected ramen's information
      detailImage.src = ramen.image;
      nameElement.textContent = ramen.name;
      restaurantElement.textContent = ramen.restaurant;
      ratingDisplay.textContent = ramen.rating;
      commentDisplay.textContent = ramen.comment;
  
      // Clear the previous details(in the ramen-detail div)
      ramenDetail.innerHTML = "";
  
      // Appending the updated details to the ramen-detail div
      ramenDetail.appendChild(detailImage);
      ramenDetail.appendChild(nameElement);
      ramenDetail.appendChild(restaurantElement);
      ramenDetail.appendChild(ratingDisplay);
      ramenDetail.appendChild(commentDisplay);
    }
  /*
    // Handle form submission for creating new ramen
    const newRamenForm = document.getElementById("new-ramen");
    newRamenForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Retrieve values from the form
      const newName = document.getElementById("new-name").value;
      const newRestaurant = document.getElementById("new-restaurant").value;
      const newImage = document.getElementById("new-image").value;
      const newRating = document.getElementById("new-rating").value;
      const newComment = document.getElementById("new-comment").value;
  
      // Create a new ramen object with the form values
      const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      };
  
      // Display the new ramen in the menu
      const ramenMenu = document.getElementById("ramen-menu");
      const newRamenImage = document.createElement("img");
      newRamenImage.src = newImage;
      newRamenImage.alt = newName;
  
      // Add click event listener to the new ramen image
      newRamenImage.addEventListener("click", () => displayRamenDetails(newRamen));
      ramenMenu.appendChild(newRamenImage);
    });
  
  });
  */
