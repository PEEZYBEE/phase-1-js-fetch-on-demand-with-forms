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
      vie data from the mock API using the entered ID
      fetch(`http://localhost:3000/movies/${movieID}`)
        .then((response) => {

          if (!response.ok) {
            throw new Error("Movie not found.");
          }
          return response.json();  
        })
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
   
          console.error(error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Movie not found";
          summary.innerText = error.message;
        });
    });
  };


document.addEventListener('DOMContentLoaded', init);