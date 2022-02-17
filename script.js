// bringing in the HTML elements
const jokeBtn = document.getElementById("get-joke");
const jokeText = document.getElementById("joke-text");

// adding in the button function
jokeBtn.addEventListener("click", function () {
  // this joke api has been modified to exclude offensive jokes
  fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  )
    .then((res) => res.json())
    .then((data) => {
      // left log data to see the JSON keys in console
      console.log(data);
      // this statement handles the keys availability and HTML when the data is pulled in
      if (data.joke) {
        jokeText.innerHTML = `
        <p>${data.joke}</p>`;
      } else {
        jokeText.innerHTML = `
        <p>${data.setup}</p>
        <p>${data.delivery}</p>
      `;
      }
    })
    // display if JOKE api not available
    .catch((err) => {
      jokeText.innerHTML = `<p>No Jokes Available, Sorry!</p>`;
    });
});
