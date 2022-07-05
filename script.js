// Some Variables 
const gameData = [
    {
        "character": ["A","K","J","H","O","T","N","M","E","D","P","U"],
        "Clue": "This is the capital city of nepal .",
        "requiresSpace": 9,
        "correctAnswer": "KATHMANDU"
    },
    {
        "character": ["A","P",'L',"K","M","N","F", "E"],
        "Clue": "Name of the beautiful country .",
        "requiresSpace": 5,
        "correctAnswer": "NEPAL"
    },
    {
        "character": ["A","E",'K',"L","M","N","P", "B", "H", "T"],
        "Clue": "The Biggest Animal .",
        "requiresSpace": 8,
        "correctAnswer": "ELEPHANT"
    },
    {
        "character": ["U","P",'I',"Y","N","L","K", "O", "H", "T"],
        "Clue": "Programming Language .",
        "requiresSpace": 6,
        "correctAnswer": "PYTHON"
    },
    {
        "character": ["M","O",'N',"R","Z","X","W", "C", "Y", "A"],
        "Clue": "Higher ranking in HDI .",
        "requiresSpace": 6,
        "correctAnswer": "NORWAY"
    },
    {
        "character": ["A","M",'F',"N","O","R","Y", "R", "A", "T"],
        "Clue": "First Programming Language .",
        "requiresSpace": 7,
        "correctAnswer": "FORTRAN"
    }
]
let totalTime = 30;
let totalQuestion = gameData.length - 1;
let flag = 0;
const inputNumbers = document.querySelector(".inputNumbers");
const ansBlank = document.querySelector(".ansBlank");
let currentData = 0;
const result = document.querySelector(".result");
let correctAns = 0;
let incorrectAns = 0;
let playerAns = "";
let leaveQns = 0;

// Set Interval for more fun
let interval = setInterval(() => {

    totalTime--;
    time.innerHTML = totalTime;
    if(totalTime <= 0){
        timeUp();
        clearInterval(interval)
    }
}, 1000)

function createReuireElement(){
// Creating The Character 
for(let i of gameData[currentData].character){
    // Creating Button
    let createButton = document.createElement("button");
    createButton.innerHTML = i;
    inputNumbers.appendChild(createButton);
    clue.innerHTML = gameData[currentData].Clue;
}

// Creating The Blank space
for(let i = 1; i <= gameData[currentData].requiresSpace;i++){
    let blankSpace = document.createElement("p");
    ansBlank.appendChild(blankSpace)
}
}
createReuireElement();

// Next and previous the questions
function changeData(val){
    flag = 0;
    ansBlank.innerHTML = "";
    inputNumbers.innerHTML = ""
    if(val == "n"){
        checkAnswer();
        if(currentData < gameData.length - 1){
            currentData++;
            totalQuestion--;
            qLeft.innerHTML = `${totalQuestion} questions Left`;
        };

        if(currentData >= gameData.length - 1){
            clearInterval(interval);
            timeUp();
            playAgain.style.display = 'block';
            time.innerText = 0;
        }
       playerAns = ""
    }

    if(val == "p"){
        if(currentData > 0){
            currentData -= 1;
        }
    }
    createReuireElement();
let inputButtons = inputNumbers.querySelectorAll("button");
let blankField = ansBlank.querySelectorAll("p");
userResponse(inputButtons,blankField);
}


// Fill the blanks by buttons

let inputButtons = inputNumbers.querySelectorAll("button");
let blankField = ansBlank.querySelectorAll("p");
function userResponse(inputButtons,blankField){
for(let i of inputButtons){
    i.addEventListener("click", () => {
        playerAns += i.innerHTML;
        if(flag <= blankField.length - 1){
            flag++;
        }
       
       blankField[flag - 1].innerHTML = i.innerHTML;
    })
}
}
userResponse(inputButtons,blankField)

// If Time Is over

function timeUp(){
    playAgain.style.display = 'block';
    nextBtn.style.display = 'none';
    result.style.display = 'flex';
    clue.innerHTML = "Time Up !!";
    let button = inputNumbers.querySelectorAll("button");
    for(let i of button){
        i.style.background = "gray";
        i.style.cursor = "not-allowed"
        i.setAttribute("disabled","true")
    }
   correct.innerText = `Total Correct ${correctAns}`;
   incorrect.innerText = `Total incorrect ${incorrectAns}`;
   leftQuestion.innerText = `Total Leave questions ${totalQuestion}`
}


// Checking Answer

function checkAnswer(){
    if(playerAns == gameData[currentData].correctAnswer){
        correctAns += 1;
    }    
    else{
        incorrectAns += 1;
    }
    
}

// Play Again
playAgain.addEventListener("click", () => {
    location.reload()
})