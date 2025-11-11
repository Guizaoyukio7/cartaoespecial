
const loveMessages = [
    
    "Eu te amo muito ✨",
    
 
    "Você é especial demais pra mim 💕",
    
    
    "Obrigado por ser minha salvadora nos momentos difíceis 🎁💖"
];


function showMessage(index) {
    const messageDisplay = document.getElementById('dynamicMessage');
    
   
    messageDisplay.style.animation = 'none';
    
  
    setTimeout(() => {
        messageDisplay.textContent = loveMessages[index];
        messageDisplay.style.animation = 'slideIn 0.5s ease-in-out';
    }, 10);
}


window.addEventListener('load', () => {
    const messageDisplay = document.getElementById('dynamicMessage');
    messageDisplay.textContent = "Clique em um dos botões acima para receber uma mensagem especial! 💌";
});
