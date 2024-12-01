document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("dynamic-popup");
    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");
    const submitButton = document.getElementById("submit-btn");

    let isQuizSubmitted = false; 

    const rainbowColors = [
        'rgba(255, 0, 0, 0.5)',   // Red
        'rgba(255, 127, 0, 0.5)', // Orange
        'rgba(255, 255, 0, 0.5)', // Yellow
        'rgba(0, 255, 0, 0.5)',   // Green
        'rgba(0, 0, 255, 0.5)',   // Blue
        'rgba(75, 0, 130, 0.5)',  // Indigo
        'rgba(143, 0, 255, 0.5)'  // Violet
    ];

    let colorIndex = 0;

    // Function to start the disco effect
    const startDiscoEffect = () => {
        discoInterval = setInterval(() => {
            overlay.style.backgroundColor = rainbowColors[colorIndex];
            colorIndex = (colorIndex + 1) % rainbowColors.length;
        }, 300); // Change color every 300ms
    };

    // Function to stop the disco effect
    const stopDiscoEffect = () => {
        clearInterval(discoInterval);
        overlay.style.backgroundColor = ""; 
    };

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
        if (isQuizSubmitted || window.isPopupActive) return; 

        window.isPopupActive = true;
        console.log("Popup shown, isPopupActive:", window.isPopupActive);

        disableInteractivity();
        popupImage.src = imageUrl; 
        popup.classList.remove("hidden");
        overlay.classList.remove("hidden");
        startDiscoEffect(); 

        setTimeout(() => {
            popup.classList.add("hidden");
            overlay.classList.add("hidden");

            stopDiscoEffect();
            enableInteractivity();
            window.isPopupActive = false;
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
            "static/picture/pic7.jpeg",
            "static/picture/pic8.jpeg",
            "static/picture/pic9.jpeg",
            "static/picture/pic10.jpeg",
            "static/picture/pic11.jpeg",
            "static/picture/pic12.jpeg",
            "static/picture/pic13.jpeg",
            "static/picture/pic14.jpeg",
            "static/picture/pic15.jpeg",
            "static/picture/pic16.jpeg",
            "static/picture/pic17.jpeg"
        ]; 

        const triggerPopup = () => {
            if (isQuizSubmitted) return; 
            
            const randomImage = images[Math.floor(Math.random() * images.length)];
            showPopup(randomImage);

            const nextInterval = Math.random() * (20000 - 10000) + 10000; 
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