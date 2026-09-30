const questions = [

    {
        q: "A conjugated chain has 8 p orbitals in its π system. How many π MOs result?",
        options: ["8", "4", "6", "16"],
        answer: 0
    },

    {
        q: "The 2pz orbital of atom A and the 2py orbital of atom B have the same energy, but they don't combine effectively. Why?",
        options: [
            "Their energies differ",
            "They have different symmetry about the molecular axis",
            "Both are antibonding",
            "2p orbitals never combine"
        ],
        answer: 1
    },

    {
        q: "A 1s orbital on one atom and a 2p orbital on another are well aligned along the axis. What is expected?",
        options: [
            "A strong BMO, since they overlap well",
            "Only an ABMO",
            "Combination as effective as two 2p orbitals",
            "Poor combination, due to the large energy difference"
        ],
        answer: 3
    },

    {
        q: "At the midpoint between two nuclei, ψA and ψB have equal values and the same sign. What are ψA + ψB and ψA − ψB there, in that order?",
        options: [
            "Zero and zero",
            "2ψ and 2ψ",
            "Zero and 2ψ",
            "2ψ and zero"
        ],
        answer: 3
    },

    {
        q: "In H₂, σ*1s is empty. How does it affect the molecule's total energy?",
        options: [
            "It adds a large positive energy",
            "It contributes nothing, because total energy is the sum over occupied MOs",
            "It lowers the total energy",
            "It contributes the same as σ1s"
        ],
        answer: 1
    },

    {
        q: "Why is He₂, (σ1s)²(σ*1s)², not stable?",
        options: [
            "It has only two electrons",
            "σ1s cannot hold two electrons",
            "The two He 1s orbitals differ in energy",
            "The destabilization by the σ*1s electrons cancels the stabilization by the σ1s electrons"
        ],
        answer: 3
    },

    {
        q: "What is the bond order of H₂⁺ (one electron)?",
        options: ["1", "0", "1.5", "0.5"],
        answer: 3
    },

    {
        q: "Which species has the same bond order as H₂⁺?",
        options: ["He₂⁺ (3 electrons)", "H₂", "He₂", "H₂²⁻"],
        answer: 0
    },

    {
        q: "Why is H₂ diamagnetic?",
        options: [
            "σ*1s is occupied",
            "It is homonuclear",
            "Its bond order is 1",
            "Both electrons are paired in σ1s"
        ],
        answer: 3
    },

    {
        q: "Two degenerate MOs receive two electrons in the ground state. How are they arranged?",
        options: [
            "Both in one orbital, paired",
            "One in each, with parallel spins",
            "One in each, with opposite spins",
            "Both in the higher orbital"
        ],
        answer: 1
    },

    {
        q: "Which arrangement is impossible in a single MO?",
        options: ["↑↑", "↑↓", "↑ (one electron)", "Empty"],
        answer: 0
    },

    {
        q: "A diatomic species has 7 electrons in bonding MOs and 2 in antibonding MOs. What is its bond order?",
        options: ["5", "4.5", "2.5", "3.5"],
        answer: 2
    },

    {
        q: "Molecule X has 6 bonding and 2 antibonding electrons. Molecule Y has 4 bonding and 2 antibonding. Which prediction is correct?",
        options: [
            "X has the longer, weaker bond",
            "X has the shorter, stronger bond",
            "Both have the same bond",
            "X has the longer, stronger bond"
        ],
        answer: 1
    },

    {
        q: "A diatomic species with bond order 2 gains one electron in an antibonding MO. Its new bond order is:",
        options: ["2.5", "1.5", "2", "1"],
        answer: 1
    },

    {
        q: "What happens if an electron is removed from an antibonding MO?",
        options: [
            "The bond order decreases and the bond lengthens",
            "The bond order is unchanged",
            "The bond order increases and the bond shortens",
            "The molecule always dissociates"
        ],
        answer: 2
    },

    {
        q: "In butadiene, an MO ψₙ (n = 1 to 4) has how many nodes?",
        options: ["n", "n + 1", "2n", "n − 1"],
        answer: 3
    },

    {
        q: "What are the HOMO and LUMO of butadiene in the ground state?",
        options: [
            "ψ₁ and ψ₂",
            "ψ₃ and ψ₄",
            "ψ₂ and ψ₃",
            "ψ₄ and ψ₁"
        ],
        answer: 2
    },

    {
        q: "How many unpaired π electrons does benzene have in its ground state?",
        options: ["6", "4", "2", "0"],
        answer: 3
    },

    {
        q: "Which statement about MO theory is INCORRECT?",
        options: [
            "Each electron in an MO belongs to only one nucleus",
            "Ψ² gives the probability density",
            "Atomic orbitals lose their identity after MOs form",
            "Each electron in an MO has spin +½ or −½"
        ],
        answer: 0
    },

    {
        q: "Which statement about bond order is INCORRECT?",
        options: [
            "A bond order of zero means no bond forms",
            "Bond orders 1, 2 and 3 correspond to single, double and triple bonds",
            "Bond order is directly proportional to dissociation energy",
            "Bond order is directly proportional to bond length"
        ],
        answer: 3
    },

    {
        q: "How does the bond length of H₂⁺ compare with that of H₂?",
        options: [
            "H₂⁺ is shorter",
            "They are equal",
            "H₂⁺ is longer",
            "It cannot be predicted"
        ],
        answer: 2
    },

    {
        q: "Which is the correct order of bond dissociation energy?",
        options: [
            "He₂ > H₂⁺ > H₂",
            "H₂ > H₂⁺ > He₂",
            "H₂⁺ > H₂ > He₂",
            "All are equal"
        ],
        answer: 1
    },

    {
        q: "Match the rules: (i) lowest-energy MO fills first, (ii) maximum two electrons with opposite spins, (iii) degenerate MOs get one electron each before pairing.",
        options: [
            "Aufbau, Pauli, Hund",
            "Hund, Pauli, Aufbau",
            "Pauli, Aufbau, Hund",
            "Aufbau, Hund, Pauli"
        ],
        answer: 0
    },

    {
        q: "A molecular orbital is formed by combining two atomic orbitals with very different energies. What does MO theory predict?",
        options: [
            "They combine effectively regardless of energy difference",
            "The combination is less effective because comparable/nearly equal energies are required",
            "They always form a pure antibonding orbital",
            "Energy difference only matters for p orbitals, not s orbitals"
        ],
        answer: 1
    },

    {
        q: "Two atomic orbitals have suitable energy and good overlap, but the wrong symmetry about the molecular axis. What happens?",
        options: [
            "They form only an antibonding orbital",
            "They still form a strong bonding MO",
            "Effective combination fails despite energy and overlap being favorable",
            "Symmetry is irrelevant once overlap is appreciable"
        ],
        answer: 2
    },

    {
        q: "Why does electron density concentrate between the nuclei in a bonding MO?",
        options: [
            "Because bonding orbitals have higher energy than atomic orbitals",
            "Because electrons are repelled equally from both nuclei",
            "Because ψBMO = ψA − ψB, a node forms between the nuclei",
            "Because ψBMO = ψA + ψB, constructive interference reinforces amplitude in the internuclear region"
        ],
        answer: 3
    },

    {
        q: "A molecule has equal numbers of electrons in bonding and antibonding orbitals. What does the bond order equation predict?",
        options: [
            "Bond order 1, a single bond",
            "Bond order 2, a double bond",
            "Bond order 0, so no bond forms",
            "Bond order equal to the total number of electrons"
        ],
        answer: 2
    },

    {
        q: "Why can a 2p orbital of one atom combine effectively with a 2p orbital of another atom, per the energy condition?",
        options: [
            "Because 2p orbitals always have zero overlap",
            "Because p orbitals have no symmetry requirements",
            "Because 2p orbitals are always antibonding",
            "Because they have the same principal quantum number, hence comparable/nearly equal energies"
        ],
        answer: 3
    },

    {
        q: "In degenerate molecular orbitals (same energy), how do electrons fill them?",
        options: [
            "They always pair up in the first available orbital",
            "They fill randomly with no spin preference",
            "They occupy the orbitals singly first with parallel spins, before any pairing",
            "Degenerate orbitals cannot hold electrons"
        ],
        answer: 2
    },

    {
        q: "Why does butadiene have exactly four π molecular orbitals?",
        options: [
            "Each carbon contributes two MOs, giving eight, of which four are occupied",
            "The number of MOs equals the number of AOs combined, and four carbon 2p orbitals combine",
            "Each double bond gives four MOs",
            "Only bonding combinations are counted as MOs"
        ],
        answer: 1
    },

    {
        q: "Why does an antibonding π MO have more nodes than the bonding orbital from the same set of p orbitals, and how does this relate to its energy?",
        options: [
            "More nodes mean better overlap, so lower energy",
            "Node count has no relation to energy",
            "Antibonding MOs have no nodes",
            "More nodes mean more out-of-phase overlap between neighbouring p orbitals, so less stability and higher energy"
        ],
        answer: 3
    },

    {
        q: "Why does benzene end up with more π MOs than butadiene?",
        options: [
            "Benzene has a higher maximum node count than butadiene",
            "Benzene is cyclic, which doubles the number of MOs",
            "Benzene has 6 p orbitals versus 4, and the number of MOs equals the number of AOs combined",
            "Benzene has more hydrogen atoms"
        ],
        answer: 2
    },

    {
        q: "Why can MO theory describe both localized bonding (like H₂) and delocalized bonding (like benzene) within one framework?",
        options: [
            "H₂ and benzene use completely different theories",
            "Delocalization only occurs when bond order is zero",
            "Localized bonding never involves LCAO",
            "LCAO is applied identically, but conjugated systems extend the combination across many centers instead of two"
        ],
        answer: 3
    },

    {
        q: "How many carbon 2p orbitals contribute to the π system of 1,3-butadiene?",
        options: ["2", "4", "6", "8"],
        answer: 1
    },

    {
        q: "How many π electrons does benzene have?",
        options: ["2", "4", "6", "12"],
        answer: 2
    },

    {
        q: "How many of benzene's π MOs are bonding?",
        options: ["1", "2", "3", "6"],
        answer: 2
    }

];


let currentQuestion = 0;
let score = 0;
let timeLeft = 150;
let timerInterval;
let studentName = "";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbziBnRQnKK7Pp86TIE85lUb_I1dbQTVvl0-_IvolzUQDaptUMtKk8gOCfpyXUzUCvOp8w/exec";


/* Elements */

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const timer = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");

const optionsContainer = document.getElementById("options");

const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");

const scoreText = document.getElementById("score");


/* Timer */

function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = String(timeLeft % 60).padStart(2, "0");

    timer.textContent = `${minutes}:${seconds}`;
}


function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 150;

    updateTimer();

    timerInterval = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            // No answer = 0 marks
            nextQuestion(null);
        }

    }, 1000);
}


/* Show question */

function showQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.q;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    submitBtn.disabled = true;


    question.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "option";


        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;


        radio.addEventListener("change", () => {

            document
                .querySelectorAll(".option")
                .forEach(element => {
                    element.classList.remove("selected");
                });

            label.classList.add("selected");

            submitBtn.disabled = false;
        });


        const text = document.createTextNode(
            `${String.fromCharCode(65 + index)}) ${option}`
        );


        label.appendChild(radio);
        label.appendChild(text);

        optionsContainer.appendChild(label);

    });


    startTimer();
}


/* Next question */

function nextQuestion(selectedAnswer) {

    clearInterval(timerInterval);


    // Score only when the student actually submits an answer.
    if (
        selectedAnswer !== null &&
        Number(selectedAnswer) === questions[currentQuestion].answer
    ) {
        score++;
    }


    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }


    showQuestion();
}


/* Submit */

quizForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const selected =
        document.querySelector('input[name="answer"]:checked');


    if (selected) {

        nextQuestion(selected.value);

    }

});


/* Start quiz */

startBtn.addEventListener("click", function() {

    const name = prompt("Enter your name:");

    if (!name || name.trim() === "") {
        alert("Please enter your name to start the quiz.");
        return;
    }

    studentName = name.trim();

    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    showQuestion();

});
/* Result */

function showResult() {

    clearInterval(timerInterval);

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    progressBar.style.width = "100%";

    scoreText.textContent =
        `${score} / ${questions.length}`;

    // Send result to Google Sheets
    const now = new Date();

    const resultData = {
        name: studentName,
        score: score,
        total: questions.length,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(resultData)
    })
    .then(() => {
        console.log("Result sent to Google Sheets");
    })
    .catch((error) => {
        console.error("Could not send result:", error);
    });

}

/* Restart */

restartBtn.addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

});


/* Basic copy protection */

document.addEventListener("contextmenu", function(event) {

    if (event.target.closest("#quizScreen")) {
        event.preventDefault();
    }

});


document.addEventListener("copy", function(event) {

    if (event.target.closest("#quizScreen")) {
        event.preventDefault();
    }

});


document.addEventListener("cut", function(event) {

    if (event.target.closest("#quizScreen")) {
        event.preventDefault();
    }

});


/* Disable common keyboard shortcuts while taking quiz */

document.addEventListener("keydown", function(event) {

    if (!event.target.closest("#quizScreen")) {
        return;
    }


    if (
        (event.ctrlKey || event.metaKey) &&
        ["c", "x", "u", "s"].includes(event.key.toLowerCase())
    ) {

        event.preventDefault();

    }

});