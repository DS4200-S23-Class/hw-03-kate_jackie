function changeStyle() {
	// change header from italic to normal
	if (document.getElementById("header").style.fontStyle == "italic") {
		document.getElementById("header").style.fontStyle = "normal";
	}

	// change header to italic
	else {
		document.getElementById("header").style.fontStyle = "italic";
	}
	
}
