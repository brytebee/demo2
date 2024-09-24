// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Access the h1 and second paragraph
const heading = document.querySelector("h1");
const secondParagraph = document.querySelectorAll("p")[1];

// Add event listeners to change their colors on click
heading.addEventListener("click", () => {
  heading.style.color = getRandomColor();
});

secondParagraph.addEventListener("click", () => {
  secondParagraph.style.color = getRandomColor();
});
