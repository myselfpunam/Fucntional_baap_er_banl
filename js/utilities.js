function getInputFieldById(inputField){
  const inputFieldCollection = document.getElementById(inputField)
  const inputFieldCollectionString = inputFieldCollection.value
  const input = parseFloat(inputFieldCollectionString)
  inputFieldCollection.value = ''
  if(isNaN(input)){
    alert('Please provide  valid number')
    return
  }
  return input;
  
}
function getElementValueById(textField){
  const elementValueCollection = document.getElementById(textField)
  const elementValueCollectionString = elementValueCollection.innerText
  const element = parseFloat(elementValueCollectionString)
  elementValueCollection.value=''
  return element
}
function setNewElement(textField , newValue){
  const elementValueCollection = document.getElementById(textField)
  elementValueCollection.innerText = newValue
}