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

      setTimeout(() => {
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

  // submit expense form
  inputExpenseForm() {
    const amountValue = this.expenseInput.value
    const expenseDesc = this.expenseDes.value

    if (expenseDesc === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showAlert')
      this.expenseFeedback.innerHTML = `<p>Value can't be empty or negative</p>`
      
      const self = this

      setTimeout(() => {
        self.expenseFeedback.classList.remove('showAlert')
      }, 2000)
    } else {
      let amount = parseInt(amountValue)
      this.expenseInput.value = "" //clear form
      this.expenseDes.value = ""

      let expense = {
        id:this.expenseId,
        title:expenseDesc,
        amount //amount:amount
      }
      
      this.expenseId++
      this.expensesList.push(expense)
      this.addExpense(expense)
      
      // show balance
      this.showBalance()
    }
  }

  // add expense
  addExpense(expense) {
    const div = document.createElement('div')
    div.classList.add('expense-text')
    div.innerHTML = `
    <div class="expense-item">

     <h6 class="expense-title"><i class="fas fa-clipboard-list"></i> ${expense.title}</h6>
     <h5 class="expense-amount">$ ${expense.amount}</h5>

     <div class="expense-icons">

      <a href="#" class="edit-icon" data-id="${expense.id}">
       <i class="fas fa-edit"></i>
      </a>
      <a href="#" class="delete-icon" data-id="${expense.id}">
       <i class="fas fa-trash"></i>
      </a>
     </div>
    `

    this.details.appendChild(div)
  }

  //total expense
  totalExpense() {
    let total = 0
    if (this.expensesList.length > 0) {
      total = this.expensesList.reduce(function(counter, amountValue) {
        counter += amountValue.amount
        return counter
      },0)
    }
    this.expenseAmount.textContent = total
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
    cashflow.inputExpenseForm()
  })

  // expense click
  details.addEventListener('click', function() {

  })

}


document.addEventListener('DOMContentLoaded', function() {
  eventLoader()
})
