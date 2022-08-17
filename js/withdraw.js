document.getElementById('btn-withdraw').addEventListener('click', function(){
  const newWithdrawAmount = getInputFieldById('withdraw-input')
  const previousWithdrawTotal = getElementValueById('withdraw-total')
  const previousBalanceTotal = getElementValueById('balance-total')
  if( newWithdrawAmount > previousBalanceTotal){
    alert('Taka ki gache dhore?')
    return
  }

  const withdrawTotal= previousWithdrawTotal + newWithdrawAmount
  setNewElement('withdraw-total', withdrawTotal)

  
  
  const totalBalance = previousBalanceTotal - newWithdrawAmount ;
  setNewElement('balance-total',totalBalance)
})