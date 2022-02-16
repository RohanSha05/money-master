// Calculate Total Expenses
function totalExpenses() {
    const foodCost = parseInt(document.getElementById('food-cost').value);
    const rentCost = parseInt(document.getElementById('rent-cost').value);
    const clothesCost = parseInt(document.getElementById('clothes-cost').value);
    const totalExpense = foodCost + rentCost + clothesCost;
    document.getElementById('total-expense').innerText = totalExpense;
    return totalExpense;
}
document.getElementById('calculation').addEventListener('click', function () {
    const totalIncome = parseInt(document.getElementById('total-income').value);
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = totalIncome - totalExpenses();

})

