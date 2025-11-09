const searchBar = document.getElementById('searchBar');
const resultDisplay = document.getElementById('resultDisplay');

searchBar.addEventListener('input', function() {
    const query = searchBar.value;
    fetch('../data/records.json')
        .then(response => response.json())
        .then(data => {
            if (data[query]) {
                resultDisplay.textContent = data[query];
            } else {
                resultDisplay.textContent = 'No results found.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultDisplay.textContent = 'Error fetching data.';
        });
});