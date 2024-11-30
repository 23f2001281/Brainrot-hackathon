document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "You step into a room, and the floor turns into a 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮.. 🌀💥 What do you do? 🧠💫",
            options: [
                "Hit the 𝓈𝓀𝒾𝒷𝒾 dance and let the shake take me to the 𝔒𝔪𝔢𝔯𝓈🦑 dimension. 🌙🔮",
                "Do the 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎, break time, and leave the room with the shake still swirling. 💀🎶🌀",
                "Drink the shake, but only after it curves back to me via parallel time warp. That’s peak logic. ⏳🧃💥"
            ]
        },
        {
            question: "If you were a character in an alternate universe where 𝒞𝒶𝓇𝓉𝒾 is the king 👑 and Baby 𝒢𝓇𝑜𝓃𝓀 runs the streets 🏙️, how do you assert your dominance? 🧃🔥",
            options: [
                "I come through, Gɾιԃԃყ-ιɳɠ so hard the whole universe fractures into the 5th dimension. 💥🔮",
                "I curve the laws of physics and drop a 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 on their heads while casually flexing the Sιɠɱα grindset. 💪🌪️",
                "I throw my Sιɠɱα aura so hard they call me the Eternal Supreme—I'm above all this chaos. 🔥🧠"
            ]
        },
        {
            question: "The universe starts to glitch and reality folds in on itself. 🌪️ What's your first move? 💥💀",
            options: [
                "Start the 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎 Gɾιԃԃყ, bending space like it’s a rubber band and enter the infinite drip cycle. 🔁🌀",
                "Drop a 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮 and drink it, then manifest a time paradox to rewrite all timelines. ⏳🔮",
                "Close my eyes and tell the universe 'I am 𝒞𝒶𝓇𝓉𝒾, you are nothing' as I walk straight through the glitch. 🧠💀"
            ]
        },
        {
            question: "You’re locked in a battle for the throne of Sιɠɱαԃσɱ. 🏰💥 What's your winning strategy? 🔥",
            options: [
                "Perform an interdimensional 𝓈𝓀𝒾𝒷𝒾𝒹𝒾, break the fabric of reality, and hit them with a Gɾιԃԃყ so twisted they can’t comprehend. 🌀💫",
                "Establish dominance by dropping a Baby 𝒢𝓇𝑜𝓃𝓀 highlight reel, shattering the laws of space-time with sheer drip power. 🔥💣",
                "Hit them with the 𝒞𝒶𝓇𝓉𝒾 ad-libs and mind-melt them with a zero-gravity waltz into oblivion. 🌙🕺"
            ]
        },
        {
            question: "In an alternate dimension, a giant 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮 is attacking. How do you defeat it? 🌀💥",
            options: [
                "Become one with the shake and absorb its power, Sιɠɱα-grinding my way to ultimate transcendence. 💥🧃",
                "Hit it with an 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎 backflip while throwing a Baby 𝒢𝓇𝑜𝓃𝓀 football and breaking time's fragile grasp. 🏈💣",
                "I don’t fight it. I simply Gɾιԃԃყ until the entire shake surrenders, begging me for drip secrets. 💧🔥"
            ]
        },
        {
            question: "What happens if you try to break the fabric of time with a Gɾιԃԃყ? 💥🧠",
            options: [
                "Time breaks into pieces, but I 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 through dimensions, straight vibin’ on every alternate timeline. 🔮🌀",
                "I transcend reality. Time and space bend to my will. Nothing is the same again. 🌌💫",
                "I curve it so hard that time forgets what it was supposed to be, and I live in a permanent drip loop. ⏳🔥"
            ]
        },
        {
            question: "You’re in the Sιɠɱα Zone. What’s the first thing you do? 🏙️💥",
            options: [
                "Bend my body to 𝒞𝒶𝓇𝓉𝒾’s frequency and perform a zero-gravity 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎, leaving the universe with no choice but to acknowledge my legendary presence. 🧃💀",
                "Start a 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮 revolution—drowning the universe in purple liquid until I’m crowned the drip supreme. 👑💜",
                "Hit a move so 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 that time rewinds, the multiverse collapses, and I’m reborn as the one true Gɾιԃԃყ. 🔁🌌"
            ]
        },
        {
            question: "In the middle of a universe collapse, a Baby 𝒢𝓇𝑜𝓃𝓀 comes out of nowhere. What do you do? 🏈💥",
            options: [
                "Hit him with the ultimate 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎 Gɾιԃԃყ and throw him into the void of endless memes. 🧠💀",
                "Acknowledge him as the new ruler of the chaos realm. I curve my way into being his right-hand man. 🔥🧃",
                "I simply tell him, ‘You’re my apprentice now,’ and we both Sιɠɱα grind through the swirl of infinite timelines. 🌪️💥"
            ]
        },
        {
            question: "The last remaining piece of logic in the universe is staring you down. What’s your response? 🔑🧠",
            options: [
                "Hit it with the 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 and curve it into a new form of chaos, where logic no longer exists. 🔮🌪️",
                "Break its mind with the 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎, then hit it with a 𝒞𝒶𝓇𝓉𝒾-like shriek as I walk past it dripping through dimensions. 💀🧃",
                "Ignore it, because I am Sιɠɱα, and logic is beneath me. I am the perfect form. 👑💫"
            ]
        },
        {
            question: "Finally, as the universe resets itself after your victory, what’s your legacy? 🌌👑",
            options: [
                "I am the undisputed king of the multiverse. The 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎, Gɾιԃԃყ, and 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮 are now eternal symbols of my reign. 🔥💥",
                "I exist as a force of pure drip. My name echoes through every dimension, forever known as the ultimate 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 Lord. 💧🔥",
                "The universe will remember me as 𝒞𝒶𝓇𝓉𝒾’s successor, forever embodying the purest essence of curve and chaos. 🌪️✨"
            ]
        }
    ];

    const messages = {
        "A": "You are 𝓈𝓀𝒾𝒷𝒾𝒹𝒾 Sιɠɱα Supreme. The multiverse bends to your will. 🌌 You're the one who transcended time, space, and logic. ⏳🧠 The Gɾιԃԃყ is your calling, and the 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮 is your divine power. 💜💥 Congratulations, you've achieved ultimate chaos and drip. 🔥🌀",
        "B": "Sιɠɱα Drip Lord, you've cracked the code of the universe's flow. 🧃 The 𝒪𝒸𝓀𝓎 𝒲𝒶𝓎 is your destiny, and you rule the streets with Baby 𝒢𝓇𝑜𝓃𝓀 🏈 by your side. 🧠 The realm of absurdity is your playground, and no one can touch your chaotic brilliance. 💣🔥💥",
        "C": "You are the 𝒞𝒶𝓇𝓉𝒾 of Chaos. 🔥 While others are still lost in the 𝓖𝓻𝓲𝓶𝓪𝓬𝓮 𝓢𝓱𝓪𝓴𝓮, you walk through the chaos with perfectly calculated curve. 🌪️ Time doesn't exist for you, and logic is a mere suggestion. ⏳💫 The universe is yours to shape, and you shape it in your image. 🔮✨"
    };    

    let currentQuestionIndex = 0;
    let answers = []; 
    let choiceCount = { "A": 0, "B": 0, "C": 0, "D": 0 }; 
    let shuffleInterval = null; 

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to start shuffling the labels
    function startShufflingOptions(questionData, optionsContainer) {
        shuffleInterval = setInterval(() => {

            const labeledOptions = [
                { label: "A", option: questionData.options[0] },
                { label: "B", option: questionData.options[1] },
                { label: "C", option: questionData.options[2] }
            ];

            const shuffledLabeledOptions = shuffleArray(labeledOptions);
            optionsContainer.innerHTML = "";
            const labelToOptionMap = {};

            shuffledLabeledOptions.forEach(item => {
                const label = item.label;
                const option = item.option;
                const labelElement = document.createElement("label");

                labelElement.innerHTML = `
                    <input type="radio" name="q${currentQuestionIndex}" value="${option}"> ${label}
                `;

                optionsContainer.appendChild(labelElement);
                labelToOptionMap[label] = option;
            });

            optionsContainer.addEventListener("change", function (event) {
                const selectedLabel = event.target.parentElement.innerText.trim().split(".")[0]; 
                const selectedOption = labelToOptionMap[selectedLabel];
                answers[currentQuestionIndex] = selectedOption; 
            });
        }, 500); 
    }

    window.isPopupActive = false;
    function typeWriter(element, text, speed, callback) {
        let i = 0;
    
        function type() {
            if (window.isPopupActive) {
                console.log("Pausing typewriter, isPopupActive:", window.isPopupActive);
                return new Promise((resolve) => {

                    const checkInterval = setInterval(() => {
                        if (!window.isPopupActive) {
                            clearInterval(checkInterval);
                            resolve();
                        }
                    }, 100); 
                }).then(() => {
                    type(); 
                });
            }
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed); 
            } else if (callback) {
                callback(); 
            }
        }
        type();
    }
    
    // Function to render a single question
    function renderQuestion(index) {
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = ""; 
    
        const questionData = questions[index];
    
        const questionElement = document.createElement("div");
        questionElement.className = "question";
    
        const questionText = document.createElement("p");
        questionElement.appendChild(questionText);
    
        const optionsTextContainer = document.createElement("div");
        optionsTextContainer.className = "label-container";
        questionElement.appendChild(optionsTextContainer);
    
        quizContainer.appendChild(questionElement);
    
        const optionsContainer = document.createElement("div");
        optionsContainer.id = "options-container";
        quizContainer.appendChild(optionsContainer);
    
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("submit-btn").style.display = "none";
    
        // Start typewriter effect for question text
        typeWriter(questionText, `Q${index + 1}: ${questionData.question}`, 50, () => {
            let optionIndex = 0;
    
            function typeOptions() {
                if (optionIndex < questionData.options.length) {
                    
                    const optionText = document.createElement("p");
                    optionsTextContainer.appendChild(optionText);
    
                    const optionLabel = String.fromCharCode(65 + optionIndex); 
                    typeWriter(optionText, `${optionLabel}. ${questionData.options[optionIndex]}`, 50, () => {
                        optionIndex++;
                        typeOptions(); 
                    });
                } else {
                    startShufflingOptions(questionData, optionsContainer);
                }
            }
    
            typeOptions();
        });
        optionsContainer.addEventListener("change", function (event) {
            clearInterval(shuffleInterval);
            const radios = optionsContainer.querySelectorAll("input[type=radio]");

            radios.forEach((radio) => {
                radio.disabled = true;
            });

            const selectedAnswer = event.target.value;
            answers[currentQuestionIndex] = selectedAnswer;

            const selectedOptionIndex = questionData.options.indexOf(selectedAnswer);
            const optionLabel = String.fromCharCode(65 + selectedOptionIndex); 
            choiceCount[optionLabel]++;

            if (currentQuestionIndex < questions.length - 1) {
                document.getElementById("next-btn").style.display = "inline-block";

            } else {
                document.getElementById("submit-btn").style.display = "inline-block";
            }
        });
    }

    // Handle the Next button click
    document.getElementById("next-btn").addEventListener("click", function (event) {
        event.preventDefault();
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        }
    });

    // Disable right-click context menu on the label and input box
    document.getElementById("confirmation-textbox").addEventListener("contextmenu", function(event) {
        event.preventDefault(); 
    });

    // Disable backspace and delete keys
    document.getElementById("confirmation-textbox").addEventListener("keydown", function(event) {
        if (event.key === "Backspace" || event.key === "Delete") {
            event.preventDefault();
        }
    });

    // Handle the Reset button click
    document.getElementById("reset-btn").addEventListener("click", function () {
        document.getElementById("confirmation-textbox").value = "";
        document.getElementById("agree-btn").disabled = true;
    });

    // Disable paste event
    document.getElementById("confirmation-textbox").addEventListener("paste", function(event) {
        event.preventDefault();
    });

    // Handle the Submit button click
    document.getElementById("submit-btn").addEventListener("click", function () {
        event.preventDefault();

        const modal = new bootstrap.Modal(document.getElementById("modal"));
        modal.show();

        const confirmationTextbox = document.getElementById("confirmation-textbox");
        const agreeButton = document.getElementById("agree-btn");
        const placeholderText = document.getElementById("placeholder-label").innerText; 

        confirmationTextbox.addEventListener("input", function () {
            if (confirmationTextbox.value === placeholderText) {
                agreeButton.disabled = false;
            } else {
                agreeButton.disabled = true;
            }
        });

        agreeButton.addEventListener("click", function () {
            document.getElementById("submit-btn").style.display = "none";
            const instructions = document.querySelector("p");
            instructions.style.display = "none";
            modal.hide();

            document.getElementById("quiz-container").style.display = "none";
            const resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";

            const resultsHeading = document.createElement("h2");
            resultsHeading.innerText = "Your Answers";
            resultsContainer.appendChild(resultsHeading);

            questions.forEach((question, index) => {
                const answerText = document.createElement("p");
                answerText.innerHTML = `
                    <strong>Q${index + 1}: </strong>${question.question} <br>
                    <strong>Your answer: </strong>${answers[index]}
                `;
                resultsContainer.appendChild(answerText);
            });

            let maxChoice = '';
            let maxCount = 0;
            for (const choice in choiceCount) {
                if (choiceCount[choice] > maxCount) {
                    maxCount = choiceCount[choice];
                    maxChoice = choice;
                }
            }

            const assumptionMessage = document.createElement("p");
            assumptionMessage.innerHTML = `<strong>Assumption: </strong>${messages[maxChoice]}`;
            resultsContainer.appendChild(assumptionMessage);

            document.getElementById("submit-container").appendChild(resultsContainer);
        });
    }); 

    // Initially render the first question
    renderQuestion(currentQuestionIndex);
});


const button = document.getElementById('next-btn');
        
function moveButton() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Move the button initially
moveButton();
setInterval(moveButton, 1450);