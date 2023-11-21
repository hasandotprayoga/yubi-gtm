// gtm.js

// Function to extract the 'id' parameter from the URL
function extractIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to make HTTP request
function fetchData(id) {
    if (!id) {
        console.error('ID parameter is required.');
        return;
    }

    console.log('ID:', id);

    // Use the provided 'id' parameter in your logic
    // For example, you can use it in your URL or any other way you need
    // Modify the following line as per your requirements
    fetch(`https://example.com/api/data?id=${id}`)
        .then(response => response.json())
        .then(data => {
            // Process the data as needed
            console.log('Data:', data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Extract 'id' from the URL and call the fetchData function
const idFromUrl = extractIdFromUrl();
fetchData(idFromUrl);
