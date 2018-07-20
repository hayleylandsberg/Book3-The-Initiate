// // Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
let input = document.getElementById("input");
let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", function() {
	console.log("I work!");
	cardCreator();
});

function cardCreator() {
	output.innerHTML += `<div class="card"><p>${input.value}</p><button class="deleteBtn">Delete Me</button></div>`
};

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

window.addEventListener("click", function() {
	if (event.target.classList.contains("deleteBtn")) {
		event.target.parentNode.remove();
	}
});