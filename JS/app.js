// Get Total Expenses
function getTotalExpenses() {

    const foodCost = parseInt(document.getElementById('food-cost').value);
    const rentCost = parseInt(document.getElementById('rent-cost').value);
    const clothesCost = parseInt(document.getElementById('clothes-cost').value);
    const errorMassage2 = document.getElementById('error-2');
    const costList = [foodCost, rentCost, clothesCost];
    for (const items of costList) {
        if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {
            errorMassage2.style.display = 'block';
        }
        else {
            errorMassage2.style.display = 'none';
            const totalExpense = foodCost + rentCost + clothesCost;
            document.getElementById('total-expense').innerText = totalExpense;
            return totalExpense;
        }
    }

    // calculating balance 
}
document.getElementById('calculation').addEventListener('click', function () {
    const totalIncome = parseInt(document.getElementById('total-income').value);
    const totalExpense = getTotalExpenses();
    let totalBalance = totalIncome - totalExpense;
    document.getElementById('total-balance').innerText = totalBalance;
    const errorMassage = document.getElementById('error-1');
    if (isNaN(totalBalance) || totalBalance < 0) {
        errorMassage.style.display = 'block';
    }
    else {
        errorMassage.style.display = 'none';
    }


})
// Calculating saving amount 
document.getElementById('save-btn').addEventListener('click', function () {
    let savingPercent = parseInt(document.getElementById('save-input').value) / 100;
    let totalIncome = parseInt(document.getElementById('total-income').value)
    const savingMoney = (savingPercent) * (totalIncome);
    document.getElementById('saved-money').innerText = parseFloat(savingMoney);
    const totalBalance = document.getElementById('total-balance').innerText;
    let remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = totalBalance - savingMoney;
    if (savingMoney > totalBalance) {
        document.getElementById('remaining-balance').innerText = '';
        let errorMassage3 = document.getElementById('error-3');
        errorMassage3.style.display = 'block'
    }
    else {
        let errorMassage3 = document.getElementById('error-3');
        errorMassage3.style.display = 'none'
    }

})

