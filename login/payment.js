// Function to toggle payment method details based on selection
document.getElementById('payment-method').addEventListener('change', function() {
    var paymentMethod = this.value;
    var cardDetails = document.getElementById('card-details');
    var netBankingDetails = document.getElementById('net-banking-details');

    if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
        cardDetails.style.display = 'block';
        netBankingDetails.style.display = 'none';
    } else if (paymentMethod === 'net-banking') {
        cardDetails.style.display = 'none';
        netBankingDetails.style.display = 'block';
    }
});

// Function to handle the payment process (e.g., validation)
function processPayment() {
    var paymentMethod = document.getElementById('payment-method').value;

    if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
        var cardNumber = document.getElementById('card-number').value;
        var expiryDate = document.getElementById('expiry-date').value;
        var cvv = document.getElementById('cvv').value;

        // Validate the inputs (you can add your custom validation logic here)
        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please complete all credit card details.');
            return;
        }
    } else if (paymentMethod === 'net-banking') {
        var bankName = document.getElementById('bank-name').value;
        var accountNumber = document.getElementById('account-number').value;

        // Validate the inputs (you can add your custom validation logic here)
        if (!bankName || !accountNumber) {
            alert('Please complete all net banking details.');
            return;
        }
    }

    // If validation passes, you can proceed with the payment (e.g., submit to a server)
    alert('Payment Successful!');
    window.location.href = 'confirmation.html'; // Redirect to confirmation page
}
