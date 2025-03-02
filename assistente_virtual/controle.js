function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim();
    if (userText === "") return;

    let chatBox = document.getElementById("chat-box");

    // EXIBIR MENSAGEM DO USUÁRIO
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = userText;
    chatBox.appendChild(userMessage);

    // RESPOSTAS PADRÃO DA ASSISTENTE
    let response = getResponse(userText);

    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.textContent = response;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight; // Rolar para a última mensagem
    }, 500);

    inputField.value = ""; // LIMPA CAMPO DE ENTRADA
}

function getResponse(text) {
    let responses = {
        "oi": "Oi! Como posso te ajudar?",
        "olá": "Olá! Como posso te ajudar?",
        "qual seu nome?": "Eu sou a Paola, sua assistente virtual!",
        "como você está?": "Estou sempre bem, pronta para ajudar!",
        "adeus": "Até mais! Se precisar, estarei aqui!"
    };

    return responses[text.toLowerCase()] || "Desculpe, ainda não sei responder isso.";
}

// PERMITIR ENVIO AO PRESSIONAR ENTER
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
