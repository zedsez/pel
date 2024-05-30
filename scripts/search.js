document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    let currentFocus = -1;

    // Function to update the focus on search results
    function updateFocus(direction) {
        // Remove existing focus
        const items = resultsContainer.getElementsByTagName('a');
        if (currentFocus >= 0) items[currentFocus].classList.remove('focused');

        // Update focus based on direction
        currentFocus += direction;
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;

        // Set new focus
        items[currentFocus].classList.add('focused');
        items[currentFocus].focus();
    }

    // Event listener for arrow keys
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            updateFocus(1);
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            updateFocus(-1);
            event.preventDefault();
        }
    });
    // Event listener for enter key
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value;
            window.location.href = `${siteBaseUrl}/search-results.html?q=${encodeURIComponent(query)}`;
        }
    });

    // Fetch the JSON data
    fetch(siteBaseUrl + '/dentries.json')
        .then(response => response.json())
        .then(data => {
            // Handle search input
            document.getElementById('search-input').addEventListener('input', function (event) {
                const query = event.target.value.toLowerCase();
                const results = data.filter(page => {
                    const title = page.title ? page.title.toLowerCase() : '';
                    const content = page.content ? page.content.toLowerCase() : '';
                    return title.includes(query) || content.includes(query);
                });
                const resultsContainer = document.getElementById('search-results');
                resultsContainer.innerHTML = ''; // Clear previous results

                // Display search results
                results.forEach(result => {
                    const resultElement = document.createElement('ul');
                    resultElement.innerHTML = `
        <a href="${siteBaseUrl}${result.url}">
            <h4>${result.title}</h4>
            <p>${result.excerpt}</p>
        </a>
    `;
                    resultsContainer.appendChild(resultElement);
                });
            });
        });
});
