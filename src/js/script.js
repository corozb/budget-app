class Cashflow {
  constructor() {
    this.incomeFeedback = document.querySelector('.income-feedback')
    this.expenseFeedback = document.querySelector('.expense-feedback')
    
    this.budgetForm = document.querySelector('.budgetForm')
    this.budgetInput = document.querySelector('.budget-input')
    
    this.expenseForm = document.querySelector('.expensesForm')
    this.expenseInput = document.querySelector('.expense-input')
    this.expenseDes = document.querySelector('.description')
    
    this.incomeAmount = document.querySelector('.income-amount')
    this.expenseAmount = document.querySelector('.expenses-amount')
    this.balance = document.querySelector('.balance-amount')

    this.details = document.querySelector('.details')
    this.expensesList = []
    this.expenseId = 0
  }
  // submit budget method
  sendBudgetForm(){
    const value = this.budgetInput.value
    if (value ==='' || value <=0) {
      this.incomeFeedback.classList.add('showAlert')
      this.incomeFeedback.innerHTML = `<p>Value can't be empty or negative</p>`

      const self = this

      setTimeout(function(){
        self.incomeFeedback.classList.remove('showAlert')
          
      }, 2000)
    } else {
      this.incomeAmount.textContent = value
      this.budgetInput.value =''
      this.showBalance()
    }
  }
  // show balance
  showBalance() {
    const expense = this.totalExpense()
    const total = parseInt(this.incomeAmount.textContent) - expense
    this.balance.textContent = total

    if (total < 0) {
      this.balance.classList.remove('showGood', 'showBalance')
      this.balance.classList.add('showWarning')
    }
    else if (total > 0) {
      this.balance.classList.remove('showWarning', 'showGood')
      this.balance.classList.add('showBalance')
    } 
    else {
      this.balance.classList.remove('showWarning', 'showBalance')
      this.balance.classList.add('showGood')
    }
  }

  //total expense
  totalExpense(){
    let total = 1000
    return total
  }
}

function eventLoader() {
  const budgetForm = document.querySelector('.budgetForm')
  const expenseForm = document.querySelector('.expensesForm')
  const details = document.querySelector('.details')

  // new instance for Cashhflow class
  const cashflow = new Cashflow()

  // budget form submit
  budgetForm.addEventListener('submit', function(e) {
    e.preventDefault()
    cashflow.sendBudgetForm()
  })

  // expense form submit
  expenseForm.addEventListener('submit', function(e) {
    e.preventDefault()

  })

  // expense click
  details.addEventListener('click', function() {

  })

}


document.addEventListener('DOMContentLoaded', function() {
  eventLoader()
})
