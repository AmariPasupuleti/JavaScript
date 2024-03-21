const questions=[
    {
        question:'Which of the Hokage sealed the nine-tailed fox in Naruto?',
        answers:[
            {text:'Third Hokage', correct:false},
            {text:'Fifth Hokage', correct:false},
            {text:'Fourth Hokage', correct:true},
            {text:'Fisrt Hokage', correct:false},
        ]
    },
    {
        question:'Naruto is a member of which clan?',
        answers:[
            {text:'Uzumaki Clan', correct:true},
            {text:'Uchiha Clan', correct:false},
            {text:'Hyuga Clan', correct:false},
            {text:'Hatake Clan', correct:false},
        ]
    },
    {
        question:'Who secretly liked Naruto?',
        answers:[
            {text:'Sakura', correct:false},
            {text:'Ino', correct:false},
            {text:'Sasuke', correct:false},
            {text:'Hinata', correct:true},
        ]
    },
    {
        question:'Who was planned to be killed by Sasuke?',
        answers:[
            {text:'Naruto', correct:false},
            {text:'Itachi', correct:true},
            {text:'Kakshi', correct:false},
            {text:'Sakura', correct:false},
        ]
    },
    {
        question:' Which character has the ability to control lightning?',
        answers:[
            {text:'Naruto', correct:false},
            {text:'Itachi', correct:false},
            {text:'Kakshi', correct:true},
            {text:'Sasuke', correct:false},
        ]
    },
    {
        question:' Name the group of three legendary ninja, also known as the "Three Legendary Sannin."',
        answers:[
            {text:'Naruto,Sasuke,Sakura', correct:false},
            {text:'Itachi,Yahiko,Pain', correct:false},
            {text:'Kakshi,Obito,Rin', correct:false},
            {text:'Jiraiya,Oorchimaru,Tsunade', correct:true},
        ]
    },
    {
        question:'Name the master of Taijutsu',
        answers:[
            {text:'Gai', correct:true},
            {text:'Itachi', correct:false},
            {text:'Obito', correct:false},
            {text:'Tsunade', correct:false},
        ]
    },
];

const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let current=0;
let score=0;

function startquiz(){
    current=0
    score=0
    nextButton.innerHTML='Next'
    showQuestions()
}

function showQuestions(){
    resetState()
    let currentQuestion=questions[current];
    let questionNo=current+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
    nextButton.style.display='block';

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play agian';
    nextButton.style.display='block';
}

function handleNextButton(){
    current++;
    if(current<questions.length){
        showQuestions();
    
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if (current<questions.length){
        handleNextButton();
    }
    else{
        startquiz()
    }
})
startquiz()