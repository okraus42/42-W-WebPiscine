function backgroundRandomiser() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let string = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";
	return string;
}

function changeBackgroundColor() {
	const newColor = backgroundRandomiser();
	$('body').css('background-color', newColor);
}

$(document).ready(function() {
	$('#changeColorButton').click(changeBackgroundColor);
});

  
