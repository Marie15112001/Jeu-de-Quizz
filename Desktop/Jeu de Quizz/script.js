const questions = [
    {
        question: "Quelle est la branche de la science qui s'intéresse à l'étude des reins",
        answers : [
            { text: "Neurologie", correct: false},
            { text: "Néphrologie", correct: true},
            { text: "Ophtalmologie", correct: false},
        ]
    },
    {
        question: "De quelle origine étaient la majorité des esclaves 17e 18e siécle?",
        answers: [
            {text: "Afrique Occidentale", correct: true},
            {text: "Afrique Centrale", correct: false},
            {text: "Afrique du Sud", correct: false},
        ]
    },
    { 
       question: " Quelle est la branche de la science qui s'intéresse à l'étude des oreilles?",
       answers: [
           {text: "Dentiste", correct: false},
           {text: "Néphroloqie", correct: false},
           {text: "Otologie", correct: true},
    ]
},
{ 
    question: "Qui est l'auteur de La Fable, Le Corbeau et Le Renard?",
    answers: [
        {text: "Jean de la Fontaine", correct: true},
        {text: "Victor Hugo", correct: false},
        {text: "Pierre Hermé", correct: false},
 ]
},
{ 
    question: "De quel type de conjonctions sont les mots mais, ou, et, donc,or,ni,car?",
    answers: [
        {text: "Subordination", correct: false},
        {text: "Coordination", correct: true},
        {text: "Subjectivité", correct: false},
 ]
},
{ 
    question: " Comment appelle t-on l'ensemble des membres d'un peuple dispersé à travers le monde?",
    answers: [
        {text: "Citadin", correct: false},
        {text: "Villageois", correct: false},
        {text: "Diaspora", correct: true},
 ]
},
{ 
    question: "Quel région du monde surnomme t-on le poumon de la planéte?",
    answers: [
        {text: "Amazonie", correct: true},
        {text: "Corse", correct: false},
        {text: "Québec", correct: false},
 ]
},
{ 
    question: "Qui est l'auteur de cette illustration: En littérature, l'amour commence à se faire facile: tout le monde couche avec tout le monde ?",
    answers: [
        {text: "Victor Hugo", correct: false},
        {text: "Léopold Sédar Senghor", correct: false},
        {text: "Jean Paul Sartre", correct: true},
 ]
},
{ 
    question: "Que codifie le chiffre du premier numéro de la carte d'identité?",
    answers: [
        {text: "La Taille", correct: false},
        {text: "Le sexe", correct: true},
        {text: "La date de naissance", correct: false},
 ]
},
{ 
    question: "Par quel mois débute le calendier musulman?",
    answers: [
        {text: "Rajab", correct: false},
        {text: "Mouharram", correct: true},
        {text: "Ramadan", correct: false},
 ]
},
{ 
    question: "En quelle année est apparue le premier téléphone doté de Bluetooth?",
    answers: [
        {text: "1999", correct: true},
        {text: "1949", correct: false},
        {text: "1929", correct: false},
 ]
},
{ 
    question: "Quel terme désigne un mot, une phrase, ou un texte qui se lit des deux sens?",
    answers: [
        {text: "Velodrome", correct: false},
        {text: "Syndrome", correct: false},
        {text: "Palindrome", correct: true},
 ]
},

{ 
    question: "Qui est le pére fondateur du Mouvement International de la Croix-Rouge, du Croissant Rouge et du Cristale Rouge?",
    answers: [
        {text: "Louis Appia", correct: false},
        {text: "Jean Henry Dunant", correct: true},
        {text: "Napoléon III", correct: false},
 ]
},
{ 
    question: "Combien de prisonniers ont été gracié par le Président Macky Sall en 2021?",
    answers: [
        {text: "543", correct: false},
        {text: "1200", correct: false},
        {text: "908", correct: true},
 ]
},
{ 
    question: "Quel nom donne t-on aux populations noires de L'inde du Sud?",
    answers: [
        {text: "Les Indiens Noires", correct: false},
        {text: "Les Dravidiens", correct: true},
        {text: "The Black India", correct: false},
 ]
},
{ 
    question: "Qui est l'actuel président de la Croix-Rouge Sénégalaise?",
    answers: [
        {text: "Mme Bafou Ba", correct: true},
        {text: "Baye Moussé Diop", correct: false},
        {text: "Ismaila Rashid Ba", correct: false},
 ]
},
{ 
    question: "Comment s'appelle la partie du tube digestif qui va du pharynx à l'estomac?",
    answers: [
        {text: "Moelle épiniére", correct: false},
        {text: "Verseaux Sanguins", correct: false},
        {text: "OEsophage", correct: true},
 ]
},
{ 
    question: "En quelle année a eu lieu le premier lancement de navette spaciale?",
    answers: [
        {text: "1971", correct: false},
        {text: "1981", correct: true},
        {text: "1988", correct: false},
 ]
},
{ 
    question: "Quelle est la plus grosse planéte du systéme solaire?",
    answers: [
        {text: "Jupiter", correct: true},
        {text: "Terre", correct: false},
        {text: "Uranus", correct: false},
 ]
},
];

const questionElement = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const nextButton = document.getElementsByClassName("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answerButton.appendChild(button);
    });
    
}