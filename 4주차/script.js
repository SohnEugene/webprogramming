const title = document.querySelector("h1");
const colorChangeButton = document.getElementById("color-change-button");
const alertButton = document.getElementById("alert-button");
const consoleButton = document.getElementById("console-button");
const messageArea = document.createElement('p');

colorChangeButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = "#" + randomColor;
});

alertButton.addEventListener("click", () => {
  alert("hello!");
});

consoleButton.addEventListener('click', function() {
    const messageText = document.createTextNode("hello!");
    messageArea.appendChild(messageText);
    document.body.appendChild(messageArea);
  });
