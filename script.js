// Rain Animation
function createRain() {
    const rain = document.getElementById('rain');
    const dropCount = 100;
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rain.appendChild(drop);
    }
}

// Function to change text content dynamically
function changeText() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Sir Dube Water Projects - Making a Difference';
}

// Function to modify CSS styles with nature theme
function changeStyles() {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#e8f5e9';  // Light green background
    body.style.fontFamily = 'Georgia, serif';
    body.style.color = '#2e7d32';  // Dark green text
    
    const heading = document.querySelector('h1');
    heading.style.color = '#1b5e20';  // Darker green for heading
    heading.style.textAlign = 'center';
    heading.style.textShadow = '2px 2px 4px rgba(0,0,0,0.1)';
    
    // Style all h2 elements
    const subheadings = document.querySelectorAll('h2');
    subheadings.forEach(h2 => {
        h2.style.color = '#388e3c';
        h2.style.borderBottom = '2px solid #81c784';
        h2.style.paddingBottom = '5px';
    });
    
    // Style the table
    const table = document.querySelector('table');
    if (table) {
        table.style.border = '2px solid #81c784';
        table.style.backgroundColor = '#f1f8e9';
    }
    
    // Style the form
    const form = document.querySelector('form');
    if (form) {
        form.style.backgroundColor = '#f1f8e9';
        form.style.padding = '20px';
        form.style.borderRadius = '10px';
        form.style.border = '2px solid #81c784';
    }
    
    // Style buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#4caf50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.margin = '5px';
        button.style.transition = 'background-color 0.3s';
    });
}

// Function to add a new element
function addElement() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New water project location added!';
    newDiv.style.padding = '10px';
    newDiv.style.margin = '10px';
    newDiv.style.backgroundColor = '#c8e6c9';
    newDiv.style.border = '1px solid #81c784';
    newDiv.style.borderRadius = '5px';
    document.body.appendChild(newDiv);
}

// Function to remove an element
function removeElement() {
    const elements = document.querySelectorAll('div');
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createRain();
    
    // Add buttons to the page
    const buttonContainer = document.createElement('div');
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.margin = '20px';
    
    const changeTextBtn = document.createElement('button');
    changeTextBtn.textContent = 'Change Heading';
    changeTextBtn.onclick = changeText;
    
    const changeStyleBtn = document.createElement('button');
    changeStyleBtn.textContent = 'Change to Nature Theme';
    changeStyleBtn.onclick = changeStyles;
    
    const addElementBtn = document.createElement('button');
    addElementBtn.textContent = 'Add Element';
    addElementBtn.onclick = addElement;
    
    const removeElementBtn = document.createElement('button');
    removeElementBtn.textContent = 'Remove Element';
    removeElementBtn.onclick = removeElement;
    
    buttonContainer.appendChild(changeTextBtn);
    buttonContainer.appendChild(changeStyleBtn);
    buttonContainer.appendChild(addElementBtn);
    buttonContainer.appendChild(removeElementBtn);
    
    document.body.insertBefore(buttonContainer, document.body.firstChild);
}); 