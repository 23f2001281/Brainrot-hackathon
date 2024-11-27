document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("dynamic-popup");
    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");
    const submitButton = document.getElementById("submit-btn");

    let isQuizSubmitted = false; 

    // Function to disable interactivity
    const disableInteractivity = () => {
        document.body.classList.add("no-interaction");
    };

    // Function to enable interactivity
    const enableInteractivity = () => {
        document.body.classList.remove("no-interaction");
    };

    // Function to show the popup
    const showPopup = (imageUrl) => {
        if (isQuizSubmitted) return; 

        disableInteractivity();
        popupImage.src = imageUrl; 
        popup.classList.remove("hidden");
        overlay.classList.remove("hidden");

        setTimeout(() => {
            popup.classList.add("hidden");
            overlay.classList.add("hidden");
            enableInteractivity();
        }, 5000);
    };

    const startPopupLoop = () => {
        const images = [
            "static/picture/pic1.jpeg",
            "static/picture/pic2.jpeg",
            "static/picture/pic3.jpeg",
            "static/picture/pic4.jpeg",
            "static/picture/pic5.jpeg",
            "static/picture/pic6.jpeg",
            "static/picture/pic7.jpeg"
        ]; 

        const triggerPopup = () => {
            if (isQuizSubmitted) return; 
            
            const randomImage = images[Math.floor(Math.random() * images.length)];
            showPopup(randomImage);

            const nextInterval = Math.random() * (15000 - 5000) + 5000; 
            setTimeout(triggerPopup, nextInterval);
        };

        triggerPopup();
    };

    // Start the popup loop
    startPopupLoop();

    // Stop popup loop when the submit button is clicked
    submitButton.addEventListener("click", () => {
        isQuizSubmitted = true;
    });
});