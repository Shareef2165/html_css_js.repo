// Function to update the status message
function updateStatus(method, message) {
    const statusBox = document.getElementById('status');
    statusBox.textContent = `Status: ${message}, Method: ${method}`;
}

// Function to handle adding an item
function addItem(method) {
    updateStatus(method, 'Item added');
    alert(`Item added using ${method} method.`);
}

// Functions using call, apply, and bind
function callMethod() {
    addItem.call(null, 'call');
}

function applyMethod() {
    addItem.apply(null, ['apply']);
}

function bindMethod() {
    const bindedFunction = addItem.bind(null, 'bind');
    bindedFunction();
}

// Event listeners for buttons
document.getElementById('callButton').addEventListener('click', callMethod);
document.getElementById('applyButton').addEventListener('click', applyMethod);
document.getElementById('bindButton').addEventListener('click', bindMethod);
document.getElementById('submitButton').addEventListener('click', () => {
    alert('Submit button clicked');
});
