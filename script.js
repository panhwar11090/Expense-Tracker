// Get DOM Elements

const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

// Temporary arrray of transactio 

const Transactions = [
    {id: 1, reason: 'Salary', amount: 5000},
    {id: 2, reason: 'Breakfast', amount: -20},
    {id: 3, reason: 'Lunch', amount: -30},
    {id: 4, reason: 'Diner', amount: -60},
    
];

// Get transactions from storage

let transactions = Transactions;

// Function to display transactions in DOM -  History Transactions
function displayTransaction(transaction){
    // Calculate if transaction is debit or credit
    const type = transaction.amount > 0 ? '+' : '-';
    // create the list for the transactions
    const transactionLI = document.createElement('li');
    // Determin the class based on transcation if positive than cedit otherwise debit
    transactionLI.classList.add(transaction.amount > 0 ? 'credit' : 'debit');
    //Assign the innerHtml for the transaction to li
    transactionLI.innerHTML = `
        ${transaction.amount} <span>${transaction.amount}</span>
        <button class="delete-btn">X</button>
    `;

    list.appendChild(transactionLI);
}

function init(){
    // clear all transactio history
    list.innerHTML = '';
    // display all transacntion in db
    transactions.forEach(displayTransaction);
}

init();