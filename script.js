let gradientFactor = 0.5; // Fator de interpolação (0 a 1)
let increasing = true;

const white = [255, 255, 255]; // Cor branca em RGB
const gray = [27, 26, 26]; // Cor cinza em RGB

function animateBackground() {
    const interpolatedColor = white.map((channel, index) => Math.round(channel + gradientFactor * (gray[index] - channel)));

    document.body.style.background = `linear-gradient(to bottom, rgb(${interpolatedColor.join(", ")}), rgb(${gray.join(", ")}))`;

    if (increasing) {
        gradientFactor += 0.005; // Aumenta o fator de interpolação gradualmente
        if (gradientFactor >= 1) {
            increasing = false;
        }
    } else {
        gradientFactor -= 0.005; // Diminui o fator de interpolação gradualmente
        if (gradientFactor <= 0) {
            increasing = true;
        }
    }

    requestAnimationFrame(animateBackground);
}

document.addEventListener("DOMContentLoaded", function() {
    animateBackground();

    // Selecionar os botões
    const buttons = document.querySelectorAll('.button, .long-button');

    // Adicionar estilos de sombreamento aos botões
    buttons.forEach(button => {
        button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.4)'; // Ajuste o valor do alfa para tornar o sombreamento mais escuro
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.5)'; // Ajuste o valor do alfa ao passar o cursor
        });
        button.addEventListener('mouseout', () => {
            button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.4)'; // Restaura o sombreamento original
        });
    });
});
