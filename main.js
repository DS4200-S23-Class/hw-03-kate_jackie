function buttonClicked() {
	console.log("button was clicked");

	// select the element - taking from the HTML file 
	let buttonDiv = document.getElementById("header").style.font-style = "italic";

	// modify after the data is grabbed and stored 
	// old text will be replaced with new text 
	buttonDiv.innerHTML = newText;
}
