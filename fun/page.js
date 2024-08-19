window.addEventListener("load", function() {
    const container = document.querySelector('.container');

    container.addEventListener('animationend', function() {
        // Redirect to the main page after the animation ends
        window.location.href = '../index.html'; // Replace with your actual main page file name
    });
});
