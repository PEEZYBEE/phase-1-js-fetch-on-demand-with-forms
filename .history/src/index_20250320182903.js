const init = () => {
    const inputForm = document.querySelector("form");

    // Add an event listener to the form to handle form submission
    inputForm.addEventListener("submit", (event) => {
      // Prevent the default form behavior (page reload)
      event.preventDefault();
  
      // Get the movie ID entered by the user
      const input = document.querySelector("input#searchByID");
      const movieID = input.value.trim();  // Remove extra whitespace
  
      // Check if the input field is empty
      if (!movieID) {
        alert("Please enter a movie ID.");
        return;
      }
  
      // Fetch movie data from the mock API using the entered ID
      fetch(`http://localhost:3000/movies/${movieID}`)
        .then((response) => {
          // If the movie is not found (404 error), handle the error
          if (!response.ok) {
            throw new Error("Movie not found.");
          }
          return response.json();  // Parse the JSON response
        })
        .then((data) => {
          // Get the elements where movie title and summary will be displayed
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the title and summary with the fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., if the movie is not found)
          console.error(error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Show error message if movie wasn't found
          title.innerText = "Movie not found";
          summary.innerText = error.message;
        });
    });
  };


document.addEventListener('DOMContentLoaded', init);