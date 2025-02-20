// Utility function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
// Elements
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const colorPicker = document.getElementById('colorPicker');
const applyBtn = document.getElementById('applyBtn');
const randomBtn = document.getElementById('randomBtn');
const copyBtn = document.getElementById('copyBtn');
const presetButtons = document.querySelectorAll('.color-btn');

// Function to update the UI with the new color
function updateColor(newColor) {
    document.body.style.backgroundColor = newColor;
    colorDisplay.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
    // Sync custom color picker value
    colorPicker.value = newColor;
  }

// Apply custom color from color picker
applyBtn.addEventListener('click', () => {
    updateColor(colorPicker.value);
  });

// Random color button
randomBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    updateColor(randomColor);
  });
      