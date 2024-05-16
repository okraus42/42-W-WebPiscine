function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  const newColor = getRandomColor();
  $('body').css('background-color', newColor);
}

$(document).ready(function() {
  $('#changeColorButton').click(changeBackgroundColor);
});

  
