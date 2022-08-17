document.getElementById("btn-deposite").addEventListener('click', function(){
  const newDepositeAmount = getInputFieldById('deposite-input')
  const previousDepositeAmount = getElementValueById('deposite-total')

  const depositeTotal = previousDepositeAmount + newDepositeAmount 
  setNewElement('deposite-total', depositeTotal)

  const previousBalanceTotal = getElementValueById('balance-total')
  const totalBalance = previousBalanceTotal + newDepositeAmount ;
  setNewElement('balance-total',totalBalance)

})