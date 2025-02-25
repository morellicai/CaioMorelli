// scroll com o header sumindo
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});
// Todos os IDs dos cartões
const cards = [
    "card-projeto1",
    "card-projeto2",
    "card-projeto3",
    "card-projeto4",
    "card-projeto5",
    "card-projeto6",
    "card-projeto7"
];
// Função dos Serviços
function card(event, type) {
    event.preventDefault();
    // Exibe o cartão correto com base no 'type' e oculta os outros
    cards.forEach(cardId => {
        const cardElement = document.getElementById(cardId);
        cardElement.style.display = (cardId === `card-${type}`) ? "block" : "none";
    });
}

// Adicionando os event listeners de forma genérica
document.querySelectorAll('.list-services').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
    })
    button.addEventListener('mouseover', function(event) {
        event.preventDefault();

        document.querySelectorAll('.list-services').forEach(activeButton => activeButton.classList.remove('active'));

        button.classList.add('active');

        const type = button.getAttribute('data-type');
        card(event, type);
    });
});

// Sobrescrita do formulário
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Logo entraremos em contato. Obrigado');
    form.reset();
});

const hero = document.getElementById('hero-text');
const heroOpened = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
heroOpened.observe(hero);

document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.sectionsSite', {
        duration: 1000,
        origin: 'left',
        distance: '100px'
    });
});
