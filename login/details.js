function blockCard(button) {
    const statusElement = button.previousElementSibling.querySelector(".status");
    const unblockButton = button.nextElementSibling;

    if (statusElement.textContent === "Active") {
        statusElement.textContent = "Blocked";
        statusElement.classList.remove("active");
        statusElement.classList.add("blocked");
        button.disabled = true; // Disable block button after blocking
        unblockButton.style.display = "inline-block"; // Show unblock button
        button.style.display = "none"; // Hide block button after blocking
    }
}

function unblockCard(button) {
    const statusElement = button.previousElementSibling.previousElementSibling.querySelector(".status");
    const blockButton = button.previousElementSibling;

    if (statusElement.textContent === "Blocked") {
        statusElement.textContent = "Active";
        statusElement.classList.remove("blocked");
        statusElement.classList.add("active");
        button.style.display = "none"; // Hide unblock button after unblocking
        blockButton.disabled = false; // Enable block button
        blockButton.style.display = "inline-block"; // Show block button again
    }
}
