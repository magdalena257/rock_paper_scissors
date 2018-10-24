const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const imgComp = document.querySelector('.computer');
const imgUser = document.querySelector('.player');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');

const options = [rock, paper, scissors];

let userScore = 0, compScore = 0;
let compChoice;

h1.textContent = `${userScore} - ${compScore}`;

options.forEach(chooseOption);




function chooseOption(item) {
    item.addEventListener('click', showResult)
};

function showResult() {

    //USER CHOICE
    let userChoice = this.className;
    imgUser.style.backgroundImage = `url('images/${userChoice}.jpg')`;
    // console.log(`url('images/${userChoice}.jpg');`);
    if (input.checked == false) {

        //COMP CHOICE

        compChoice = options[Math.floor(Math.random() * 3)].className;
        // console.log(compChoice);
        imgComp.style.backgroundImage = `url('images/${compChoice}.jpg')`;
        checkScore(userChoice, compChoice);

    } else {
        winning(userChoice);
    }

};

function checkScore(choice, comp) {
    console.log('uncheked');
    switch (choice) {

        case 'rock':

            (comp === 'scissors') ? userScore++ : (comp === 'paper') ? compScore++ : console.log();

            // ((comp == 'scissors') ? userScore++ : ((comp == 'rock') ? userScore++ : ((comp == 'paper') ? userScore++)));


            break;

        case 'paper':
            (comp === 'scissors') ? compScore++ : (comp === 'rock') ? userScore++ : console.log();

            break;

        case 'scissors':
            (comp === 'rock') ? compScore++ : (comp === 'paper') ? userScore++ : console.log();
            break;
    };
    // console.log(choice, comp, userScore + ' - ' + compScore);
    h1.textContent = `${compScore} - ${userScore}`;
};

function winning(choice) {
    console.log('cheked');
    switch (choice) {

        case 'rock':
            userScore++;

            imgComp.style.backgroundImage = `url('images/scissors.jpg`;

            // ((comp == 'scissors') ? userScore++ : ((comp == 'rock') ? userScore++ : ((comp == 'paper') ? userScore++)));


            break;

        case 'paper':
            userScore++;
            imgComp.style.backgroundImage = `url('images/rock.jpg`;

            break;

        case 'scissors':
            userScore++;
            imgComp.style.backgroundImage = `url('images/paper.jpg`;
            break;
    };

    // console.log(choice, comp, userScore + ' - ' + compScore);
    h1.textContent = `${compScore} - ${userScore}`;
};