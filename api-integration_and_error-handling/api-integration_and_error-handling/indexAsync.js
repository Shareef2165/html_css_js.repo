
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
}

function updateDOM(data) {
    const container = document.getElementById('data-container');
    container.textContent = JSON.stringify(data, null, 2); 
}

async function main() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    try {
        const data = await fetchData(apiUrl);
        updateDOM(data);
    } catch (error) {
        console.error('An error occurred:', error);
        updateDOM('Failed to load data.');
    }
}

main();
