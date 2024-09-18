document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        // Convert FormData to JSON object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Send data to the server using Fetch API
        fetch('/api/contact', { // Update this URL to your server's API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                responseMessage.textContent = 'Your message has been sent successfully!';
                form.reset(); // Clear the form fields
            } else {
                responseMessage.textContent = 'There was an error sending your message. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.textContent = 'There was an error sending your message. Please try again.';
        });
    });
});
