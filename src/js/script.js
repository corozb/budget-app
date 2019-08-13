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
    console.log('its working')
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
