document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;

        if (email) {
            
            confirmationMessage.textContent = "Tack!";
            confirmationMessage.style.display = 'block';

            
            form.reset();
        }
    });
});
