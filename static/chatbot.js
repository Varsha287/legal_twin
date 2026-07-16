// =========================================
// Legal Knowledge Twin
// chatbot.js
// =========================================


// ======================
// Backend API URL
// ======================

const API_URL = "http://127.0.0.1:8000/chat";


// ======================
// HTML Elements
// ======================

const chatBox = document.getElementById("chatBox");
const questionInput = document.getElementById("question");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");


// ======================
// Get Selected Topic
// ======================

const params = new URLSearchParams(window.location.search);

const selectedTopic = decodeURIComponent(
    params.get("topic") || "General"
);


// ======================
// Display Topic Name
// ======================

const topicTitle = document.getElementById("topicName");

if (topicTitle) {
    topicTitle.innerText = selectedTopic;
}


// ======================
// Enter Key
// ======================

questionInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendQuestion();

    }

});


// ======================
// Send Button
// ======================

sendBtn.addEventListener("click", sendQuestion);


// =========================================
// Send Question
// =========================================

async function sendQuestion() {

    const question = questionInput.value.trim();

    if (question === "") return;


    // Show user message

    addUserMessage(question);

    questionInput.value = "";

    typing.style.display = "flex";


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                topic: selectedTopic,

                question: question

            })

        });


        const data = await response.json();

        typing.style.display = "none";


        addBotMessage(

            data.answer || "No answer received.",

            data.source || selectedTopic

        );

    }

    catch (error) {

        typing.style.display = "none";

        addBotMessage(

            "Unable to connect to the backend server.",

            "Connection Error"

        );

        console.error(error);

    }

}


// =========================================
// User Message
// =========================================

function addUserMessage(text) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = `

        <div class="message">
            <p>${text}</p>
        </div>

        <div class="user-icon">
            <i class="fas fa-user"></i>
        </div>

    `;

    chatBox.appendChild(div);

    scrollBottom();

}


// =========================================
// AI Message
// =========================================

function addBotMessage(answer, source) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = `

        <div class="bot-icon">
            <i class="fas fa-scale-balanced"></i>
        </div>

        <div class="message">

            <p>${answer}</p>

            <div class="citation">

                <strong>Source:</strong> ${source}

            </div>

        </div>

    `;

    chatBox.appendChild(div);

    scrollBottom();

}


// =========================================
// Auto Scroll
// =========================================

function scrollBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

}