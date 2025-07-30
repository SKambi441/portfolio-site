
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize EmailJS
emailjs.init("0hrpG0PBH0S6zY91i"); // 🔑 Replace with your actual public key

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Optional: Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('form-status-message');

    if (name && email && message) {
        // Send form data to EmailJS
        emailjs.send("service_5pzraet","template_iekxixi", this);
           .then(function(response) {
                statusMessage.textContent = "✅ Message sent successfully! Thank you 🙌";
                statusMessage.style.color = "green";
                e.target.reset();
            }, function(error) {
                statusMessage.textContent = "❌ Failed to send message. Please try again.";
                statusMessage.style.color = "red";
                console.error("FAILED...", error);
            });
    } else {
        statusMessage.textContent = "⚠️ Please fill in all fields.";
        statusMessage.style.color = "orange";
    }
});

// Chatbot functionality
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user-message');
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleUserInput() {
    const userInput = chatbotInput.value.trim();
    if (userInput === '') return;
    
    addUserMessage(userInput);
    chatbotInput.value = '';
    
    // More natural language responses
    setTimeout(() => {
        const inputLower = userInput.toLowerCase();
        
        if (inputLower.includes('hello') || inputLower.includes('hi') || inputLower.includes('hey')) {
            addBotMessage('Hello! 😊 How can I help you learn about Siphokuhle today?');
        } 
        else if (inputLower.includes('who are you')) {
            addBotMessage("I'm Sipho's virtual assistant. I can tell you about her skills, projects, and experience in AI and automation.");
        }
        else if (inputLower.includes('skill') || inputLower.includes('what can') || inputLower.includes('expert')) {
            addBotMessage("Sipho has developed strong skills in chatbot development, no-code automation, and AI tools. She's particularly good with Dialogflow, Zapier, and creating accessible tech solutions. Would you like me to tell you more about any specific skill?");
        }
        else if (inputLower.includes('project') || inputLower.includes('work') || inputLower.includes('build')) {
            addBotMessage("Sipho has worked on some really interesting projects! There's an IT education chatbot, a system that turns quotes into images automatically, and an AI prototype for defect detection. Which one would you like to hear more about?");
        }
        else if (inputLower.includes('chatbot') && inputLower.includes('education')) {
            addBotMessage("The IT education chatbot was built with Dialogflow to help students learn tech concepts through conversation. It provides interactive tutorials and answers questions about IT topics. Pretty cool, right?");
        }
        else if (inputLower.includes('image') || inputLower.includes('quote') || inputLower.includes('generator')) {
            addBotMessage("The quote-to-image generator automatically creates branded images from text quotes using Zapier, Google Sheets, and Canva's API. It's a great example of how Sipho combines no-code tools to create practical solutions.");
        }
        else if (inputLower.includes('defect') || inputLower.includes('detection')) {
            addBotMessage("The defect detection mock-up shows how AI could be used for quality control. Sipho created it with Figma and Teachable Machine to demonstrate the potential of computer vision in manufacturing.");
        }
        else if (inputLower.includes('contact') || inputLower.includes('get in touch') || inputLower.includes('reach')) {
            addBotMessage("You can contact Sipho directly through the form on this website. She's always interested in connecting with people about AI, automation, or potential collaborations.");
        }
        else if (inputLower.includes('resume') || inputLower.includes('cv') || inputLower.includes('experience')) {
            addBotMessage("You can download Sipho's resume from the Resume section. It details her professional experience, education, and technical capabilities. Would you like me to highlight any particular aspect?");
        }
        else if (inputLower.includes('background') || inputLower.includes('about') || inputLower.includes('who is')) {
            addBotMessage("Sipho is passionate about using technology to solve real problems. With experience in data, customer service, and cloud computing, she's building her AI expertise through hands-on projects. Her focus is on making tech accessible and impactful.");
        }
        else if (inputLower.includes('thank') || inputLower.includes('thanks')) {
            addBotMessage("You're very welcome! 😊 Let me know if there's anything else you'd like to know about Sipho's work.");
        }
        else if (inputLower.includes('bye') || inputLower.includes('goodbye')) {
            addBotMessage("Goodbye! Feel free to come back if you have more questions about Sipho's portfolio. Have a great day!");
        }
        else {
            addBotMessage("I'm not entirely sure I understand. Could you try asking about Sipho's skills, projects, or background? I'd be happy to share details about those!");
        }
    }, 500);
}

chatbotSend.addEventListener('click', handleUserInput);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});
