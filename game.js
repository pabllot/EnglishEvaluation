const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true 
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Eu bebo água de manhã.",
        choice1: 'I to drink water in the morning',
        choice2: 'I drink water in the morning',
        choice3: 'I drink water to the morning',
        choice4: 'I drink water to morning',
        answer: 2,
    },
    {
        question: "Ela vai para a escola a pé.",
        choice1: 'She go to school by foot',
        choice2: 'She goes to the school by foot',
        choice3: 'She goes to school by foot',
        choice4: 'She goes to school on foot',
        answer: 4,
    },
    
    {
        question: "Ele precisa trabalhar hoje?",
        choice1: 'Does he need work today?',
        choice2: 'Does he need the work today?',
        choice3: 'Does he need to work today?',
        choice4: 'Does he needs to work today?',
        answer: 3,
    },
    {
        question: " Ela acorda as 8h da manhã todos os dias.",
        choice1: 'She wakes up at 8am every day',
        choice2: 'She wake ups at 8am every day',
        choice3: 'She wakes up at the 8am every days',
        choice4: 'Shes wake up at 8am every day',
        answer: 1,
    },
    {
        question: " Ela tem que estudar nos sábados.",
        choice1: 'She has to study on Saturdays.',
        choice2: 'She haves to study on Saturdays.',
        choice3: 'She have to study on Saturdays.',
        choice4: 'She has study on Saturdays.',
        answer: 1,
    },
    {
        question: "Eles são meus pais.",
        choice1: "They're may parents",
        choice2: "They're my parents",
        choice3: "They are my fathers",
        choice4: "They is my parents",
        answer: 2, 
        },
        
        {
        question: "Nós sabemos tocar piano muito bem.",
        choice1: "We know to play piano very well",
        choice2: "We know play the piano very well",
        choice3: "We know how to play the piano very well",
        choice4: "We know to play the piano very well",
        answer: 3, 
        },
        
        {
        question: "Ele está jogando futebol com a irmãzinha dele",
        choice1: "He playing soccer with his little sister.",
        choice2: "He's play soccer with his little sister.",
        choice3: "He's playing soccer with your little sister.",
        choice4: "He's playing soccer with his little sister.",
        answer: 4, 
        },
        
        {
            question: "Eu ainda não sei tocar violino.",
            choice1: "I still don't know to play the violin.",
            choice2: "I still don't know how to play the violin.",
            choice3: "I still doesn't know how to play the violin.",
            choice4: "I still didn't know how to play the violin.",
            answer: 2, 
            },
            
            {
            question: "Eles conversaram muito na reunião.",
            choice1: "They talk a lot in the meeting",
            choice2: "They did talked a lot in the meeting",
            choice3: "They talked a lot to the meeting",
            choice4: "They talked a lot in the meeting",
            answer: 4, 
            },
            
            {
            question: "Quem quer estudar com a gente?",
            choice1: "Do who wants to study with us?",
            choice2: "Who want study with us?",
            choice3: "Does who want to study with us?",
            choice4: "Who wants to study with us?",
            answer: 4, 
            },
            
            {
            question: "Ela quer que eu malhe com ela todos os dias.",
            choice1: "She want me to work out with her every day.",
            choice2: "She wants me to work out with her every day.",
            choice3: "She want me to working out with her every day.",
            choice4: "She wants me to working out with her every day.",
            answer: 2, 
            },
            
            {
            question: "Eu aprendi espanhol com minha avó (ela ensinou)",
            choice1: "I learned Spanish from my grandmother.",
            choice2: "I learned Spanish with my grandmother.",
            choice3: "I learns Spanish with my grandmother.",
            choice4: "I learns Spanish from my grandmother.",
            answer: 1, 
            },
            
            {
            question: "Eu tive que falar com o diretor sobre meus filhos",
            choice1: "I haved to speak with the principal about my kids",
            choice2: "I had to speak with the principal about my kids",
            choice3: "I had speak with the principal about my kids",
            choice4: "I had to speak with the principal with my kids",
            answer: 2, 
            },
            
            {
            question: "Há um carro grande estacionado em frente à minha casa.",
            choice1: "Have a big car parked in front of my house",
            choice2: "There's an big car parked in front of my house",
            choice3: "Has a big car parked in front of my house",
            choice4: "There's a big car parked in front of my house",
            answer: 4, 
            },
            
            {
            question: "Eu estava assistindo o filme quando ela chegou em casa.",
            choice1: "I am watching the movie when she came home.",
            choice2: "I was watching the movie when she come home.",
            choice3: "I was watching the movie when she cames home.",
            choice4: "I was watching the movie when she came home.",
            answer: 4, 
            },
            
            {
            question: "Eles eram meus colegas de quarto quando estávamos na faculdade.",
            choice1: "They were my roomates when we were in college.",
            choice2: "They was my roomates when we was in college.",
            choice3: "They are my roomates when we are in college.",
            choice4: "They be my roomates when we be in college.",
            answer: 1, 
            },
            
            {
            question: "Nós não vamos comprar mais roupas nesse inverno.",
            choice1: "We are going to buy more clothes this winter",
            choice2: "We aren't going to buy more clothes this winter",
            choice3: "We isn't going to buy more clothes this winter",
            choice4: "We aren't going to buying more clothes this winter",
            answer: 2, 
            },
           
            {
            question: "Eu gostaria de estudar francês com você essa semana.",
            choice1: "I wanted like to study French with you this week",
            choice2: "I liked to study French with you this week",
            choice3: "I would like to study French with you this week",
            choice4: "I would to like to study French with you this week",
            answer: 3, 
            },
            
            {
            question: "Ela não pode ir ao shopping sozinha.",
            choice1: "She can't to go to the mall by herself",
            choice2: "She can't go the mall by herself",
            choice3: "She is can't go to the mall by herself",
            choice4: "She can't go to the mall by herself",
            answer: 4, 
            },
              
            {
            question: "Eles não deveriam ir ao shopping sozinhos.",
            choice1: "They don't should go to the mall by themselves",
            choice2: "They should go not to mall by themselves",
            choice3: "They shouldn't go the mall by themselves",
            choice4: "They shouldn't go to the mall by themselves",
            answer: 4, 
            },
            
            {
            question: "Ela pode estar errada, mas temos que confiar nela.",
            choice1: "She might be wrong, but we have to trust her.",
            choice2: "She might is wrong, but we have to trust her.",
            choice3: "She mights be wrong, but we have to trust her.",
            choice4: "She might being wrong, but we have to trust her.",
            answer: 1, 
            },
            
            {
            question: "Ela é mais forte que seu irmão",
            choice1: "She's stronger than her brother",
            choice2: "She's more stronger than her brother",
            choice3: "She's most stronger than her brother",
            choice4: "She's most strong than her brother",
            answer: 1, 
            },
            
            {
            question: "Eu demoro uma hora para ir ao trabalho a pé.",
            choice1: "It take me an hour to go to work on foot",
            choice2: "It takes me an hour to go to work on foot",
            choice3: "It takes me an hour to go to work by foot",
            choice4: "Its take me an hour to go to work on foot",
            answer: 2, 
            },
            
            {
            question: "Ela estudou muito para passar no exame (present perfect)",
            choice1: "She did studied a lot to pass the exam.",
            choice2: "She's studied a lot to pass the exam.",
            choice3: "She's studies a lot to pass the exam.",
            choice4: "She's studying a lot to pass the exam.",
            answer: 2, 
            },
            
            {
            question: "Você deve estudar mais se quer ser um advogado.",
            choice1: "You must study most if you want to be a lawyer.",
            choice2: "You must studied more if you want to be a lawyer.",
            choice3: "You must study more if you want to be a lawyer.",
            choice4: "You must to study more if you want to be a lawyer.",
            answer: 3, 
            },
            
            {
            question: "Eu fui ao parque sozinho (present perfect)",
            choice1: "I have to gone to the park by myself",
            choice2: "I have went to the park by myself",
            choice3: "I have to go to the park by myself",
            choice4: "I have gone to the park by myself",
            answer: 4, 
            },
            
            {
            question: "Ela comeu o bolo inteiro (present perfect)",
            choice1: "She's ate the whole cake",
            choice2: "She's eaten the whole cake",
            choice3: "She's eatens the whole cake",
            choice4: "She's to eaten the whole cake",
            answer: 2, 
            },
            
            {
            question: "Eu gostaria de ir lá com ele.",
            choice1: "I'd to like to go there with him",
            choice2: "I'd like go there with him",
            choice3: "I'd like to go there with him",
            choice4: "I'd liked to go there with him",
            answer: 3, 
            },
            
            {
            question: "Quando foi a última vez que nós fomos lá?",
            choice1: "When were the last time we went there?",
            choice2: "When were the last time we go there?",
            choice3: "When was the last time we go there?",
            choice4: "When was the last time we went there?",
            answer: 4, 
            },
            
            {
            question: "Você falou com ele recentemente? (presente perfect)",
            choice1: "Have you talked to him recently?",
            choice2: "Have you talking to him recently?",
            choice3: "Have you to talked to him recently?",
            choice4: "Has you talked to him recently?",
            answer: 1, 
            },
        ]
            
            


const SCORE_POINTS = 100
const MAX_QUESTIONS = 31

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        scoreText.classList.add('hideum')
        question.classList.add('hidedois')
        progressText.classList.add('lele')
        
        
                
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${questionCounter/MAX_QUESTIONS * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number] 
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()