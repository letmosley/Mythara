// Perguntas do quiz
const questions = [
    { question: "Você se sente confortável em situações onde não tem controle total.", effect: { caos: 2, equilibrio: -1, penumbra: 1 } },
    { question: "Observar o comportamento humano me ajuda a entender melhor o mundo.", effect: { ilusao: 2, almas: 1, penumbra: 1 } },
    { question: "Acredito que tudo tem um preço e que sempre há uma troca a ser feita.", effect: { barganha: 2, morte: 1 } },
    { question: "Encarar meus medos me permite evoluir e descobrir novas partes de mim mesmo(a).", effect: { medo: 2, vida: 1, almas: 1 } },
    { question: "É natural que algumas coisas precisem acabar para que outras possam começar.", effect: { morte: 2, vida: 1, equilibrio: 1 } },
    { question: "Prefiro analisar uma situação antes de decidir como agir.", effect: { almas: 2, penumbra: 1, ilusao: 1 } },
    { question: "Mudanças inesperadas são oportunidades de crescimento.", effect: { caos: 2, vida: 1, medo: 1 } },
    { question: "Acredito que toda situação tem um ponto de equilíbrio que deve ser alcançado.", effect: { equilibrio: 2, almas: 1, vida: 1 } },
    { question: "Existem momentos em que é melhor trabalhar nos bastidores do que se expor.", effect: { penumbra: 2, ilusao: 1, medo: 1 } },
    { question: "A morte não é o fim, mas uma parte necessária do ciclo da existência.", effect: { morte: 2, almas: 1 } },
    { question: "Criar ou imaginar realidades alternativas é algo que faço naturalmente.", effect: { ilusao: 2, penumbra: 1 } },
    { question: "Mesmo nas adversidades, acredito que sempre há algo para aprender.", effect: { caos: 2, vida: 1, almas: 1 } },
    { question: "Eu gosto de explorar coisas desconhecidas ou misteriosas.", effect: { medo: 2, ilusao: 1, penumbra: 1 } },
    { question: "Estar conectado(a) à energia ao meu redor me dá força e propósito.", effect: { vida: 2, equilibrio: 1, almas: 1 } },
    { question: "Tomar decisões difíceis é algo que me sinto preparado(a) para fazer.", effect: { morte: 2, barganha: 1, medo: 1 } },
    { question: "Eu aceito que o mundo é feito de extremos que coexistem.", effect: { equilibrio: 2, caos: 1, morte: 1 } },
    { question: "Eu prefiro aprender com experiências caóticas do que seguir um plano rígido.", effect: { caos: 2, vida: 1 } },
    { question: "Para mim, a aparência das coisas nem sempre reflete a verdade.", effect: { ilusao: 2, penumbra: 1 } },
    { question: "Acredito que sacrifícios são necessários para atingir grandes objetivos.", effect: { barganha: 2, morte: 1, medo: 1 } },
    { question: "Encarar o desconhecido é mais estimulante do que assustador.", effect: { medo: 2, ilusao: 1, caos: 1 } },
];

// Descrições e imagens das essências
const descriptions = {
    caos: "Você é a personificação da mudança e do imprevisível, sempre pronto(a) para encarar desafios.",
    ilusao: "Você domina o mundo das aparências e imaginações, criando realidades alternativas.",
    barganha: "Você compreende que toda conquista exige sacrifícios e trocas.",
    medo: "Você enfrenta o desconhecido com coragem e encontra força em suas vulnerabilidades.",
    penumbra: "Você prefere agir nas sombras, analisando antes de agir.",
    almas: "Você entende profundamente as conexões e energias que cercam o ser humano.",
    equilibrio: "Você busca harmonia e balanceia extremos com maestria.",
    vida: "Você é movido(a) pela energia vital, sempre em busca de crescimento e aprendizado.",
    morte: "Você entende que o fim é apenas o início de algo novo e necessário.",
};

const images = {
    caos: "images/caos.png",
    ilusao: "images/ilusao.png",
    barganha: "images/barganha.png",
    medo: "images/medo.png",
    penumbra: "images/penumbra.png",
    almas: "images/almas.png",
    equilibrio: "images/equilibrio.png",
    vida: "images/vida.png",
    morte: "images/morte.png",
};

// Variáveis de controle
let currentQuestionIndex = 0;
let scores = {
    caos: 0, ilusao: 0, barganha: 0, medo: 0, penumbra: 0, almas: 0, equilibrio: 0, vida: 0, morte: 0,
};

// Função para carregar uma pergunta
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
}

// Função para selecionar uma opção
function selectOption(value) {
    const effects = questions[currentQuestionIndex].effect;
    for (let essence in effects) {
        scores[essence] += effects[essence] * value;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Função para mostrar o resultado
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topEssence = sortedScores[0][0];

    document.getElementById("result").innerText = topEssence.charAt(0).toUpperCase() + topEssence.slice(1);
    document.getElementById("element-description").innerText = descriptions[topEssence];
    document.getElementById("element-image").src = images[topEssence];
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    scores = {
        caos: 0, ilusao: 0, barganha: 0, medo: 0, penumbra: 0, almas: 0, equilibrio: 0, vida: 0, morte: 0,
    };
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

// Função para compartilhar no WhatsApp
function shareOnWhatsApp() {
    const essence = document.getElementById("result").innerText;
    const description = document.getElementById("element-description").innerText;
    const message = `Descobri minha essência no Quiz das Essências! 🌟\n\nMinha essência é: *${essence}*\n${description}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
}

// Carregar a primeira pergunta ao iniciar a página
window.onload = loadQuestion;
