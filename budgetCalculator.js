// Gabriel Cardenas
// 3/31/2025

// (reminder to myself) Use the .toFixed(2) method to round the calculated values to two decimal places.

button = document.getElementById('calculateBudget');
monthlyIncome = document.getElementById('monthlyIncome');
monthlyExpenses = document.getElementById('estimatedExpenses');
monthsProjected = document.getElementById('monthsProjected');
savings = document.getElementById('savingsResult');

button.addEventListener('click', function() {
    let income = monthlyIncome.value;
    let expenses = monthlyExpenses.value;
    let money_saved = calculateBudget(income, expenses);
    console.log(money_saved);
    if (money_saved <= 0) {
        alert("You are spending more than you are earning, or earning nothing. Please review your budget.");
    } else {
        savings.textContent = "Monthly Savings: $"+ money_saved;

        for (let i = 1; i <= monthsProjected.value; i++) { // loops through projected months.
            
            let newSavings = money_saved * i; // multiplies the savings by # of months
            let newElement = document.createElement('li');
            newElement.innerHTML = `In ${i} months, you will have saved $${newSavings}`;
            savings.appendChild(newElement);
        }
    }
});

function calculateBudget(income, expenses) {
    let Savings = income - expenses; 
    return Savings.toFixed(2); // returns the value of savings
}