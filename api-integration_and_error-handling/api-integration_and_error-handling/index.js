function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } 
            else {
                reject(new Error('Request failed with status ' + xhr.status));
            }
        };

        xhr.onerror = function() {
            reject(new Error('Network error'));
        };

        xhr.send();
    });
}

function updateDOM(data) {
    const container = document.getElementById('data-container');
    container.textContent = data;
}

document.getElementById('fetch-button').addEventListener('click', () => {
    const endpoint = document.getElementById('endpoint').value;
    const apiUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;

    fetchData(apiUrl)
        .then(response => {
            const data = JSON.parse(response);
            updateDOM(JSON.stringify(data));
        })
        .catch(error => {
            console.error('An error occurred:', error);
            updateDOM('Failed to load data.');
        });
});