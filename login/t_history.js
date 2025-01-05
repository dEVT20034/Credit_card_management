// Function to filter transactions based on status and date range
function filterTransactions() {
    const statusFilter = document.getElementById('status').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const transactions = document.querySelectorAll('.transaction-card');

    transactions.forEach(transaction => {
        const status = transaction.getAttribute('data-status');
        const date = transaction.getAttribute('data-date');

        let dateIsValid = true;
        
        // Check if the transaction date is within the selected range
        if (startDate && date < startDate) {
            dateIsValid = false;
        }
        if (endDate && date > endDate) {
            dateIsValid = false;
        }

        // Check if the status matches the filter
        const statusIsValid = statusFilter === 'all' || status === statusFilter;

        // Show or hide transaction based on filters
        if (statusIsValid && dateIsValid) {
            transaction.style.display = 'block';
        } else {
            transaction.style.display = 'none';
        }
    });

    // After applying the filters, also apply the search query
    searchTransactions();
}

// Function to handle search
function searchTransactions() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const transactions = document.querySelectorAll('.transaction-card');

    transactions.forEach(transaction => {
        const transactionId = transaction.querySelector('h3').textContent.toLowerCase();
        
        if (transactionId.includes(searchQuery)) {
            transaction.style.display = 'block';
        } else {
            transaction.style.display = 'none';
        }
    });
}
