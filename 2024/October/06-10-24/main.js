console.log('06-10-24/main.js');

const formElement = document.querySelector('form');
const validationParagraph = document.querySelector('#validation')
const storedPIN = '1234';

// Select and hold all buttons

const withdrawButton = document.querySelector('#withdraw');
const depositButton = document.querySelector('#deposit');
const balanceButton = document.querySelector('#balance');
const lastTransactionButton = document.querySelector('#lastTransaction');

const navElement = document.querySelector('nav');

const btnNodeList = navElement.querySelectorAll('button');

const divContainer = document.querySelector('.container');

console.log(btnNodeList);

let userBalance = 1000;
const userBalanceEl = document.querySelector('#userBalance');

const renderBalance = () => {
    userBalanceEl.textContent = `Your balance is: ${userBalance}$`;
}

const userTransactions = [{
    type: 'deposit',
    amount: 1000
}]
let userInput;
formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        userInput = document.querySelector('input').value;
        console.log(userInput);

        // reset the validation text
        validationParagraph.textContent = '';
        validationParagraph.classList.remove('valid', 'invalid');

        if (userInput === storedPIN) {
            console.log('PIN correct');

            validationParagraph.textContent = 'PIN correct';

            // Add Class to the validation text
            validationParagraph.classList.add('valid');
        } else {
            console.log('PIN incorrect');

            validationParagraph.textContent = 'PIN incorrect';

            // Add Class to the validation text
            validationParagraph.classList.add('invalid');
        }
    }
);

console.log(btnNodeList);
const containers = divContainer.querySelectorAll('div');
// Add Event Listener to the btns
btnNodeList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        containers.forEach((container) => {
            container.classList.add('hidden');
        });

        const currenEl  = document.querySelector(`#${e.target.id}El`)

        currenEl.classList.toggle('hidden');
    });
});




renderBalance();