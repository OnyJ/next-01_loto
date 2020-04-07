let form  = document.getElementsByTagName('form')[0]
let winningNumbers = [1,2,3,4,5,6]
let errorMessages = []
const message = document.getElementById("message")


let validateEmail = resource => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(resource).toLowerCase())
}

let validate = () => {
  let firstName = document.getElementById('first-name').value
  let lastName = document.getElementById('last-name').value
  let email = document.getElementById('email').value
  if(firstName == "") {
    errorMessages.push("Veuillez fournir un prénom")
    return false
    }
  if(lastName == "") {
    errorMessages.push("Veuillez fournir un nom")
    return false
  }
  if(email == "") {
    errorMessages.push("Veuillez fournir un email")
    return false
  }
  if(!validateEmail(email)) {
    errorMessages.push("Votre email n'est pas valide")
    return false
  }
  return true
}

let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
  
let getArrayOfSixRandomNumbers = () => {
  winningNumbers = [];
  for (var i = 0; i < 6; i++){
    winningNumbers.push(getRandomIntInclusive(1, 49));
  }
}

let checkVictory = winningNums => {
  let num1 = document.getElementById('number1').value
  let num2 = document.getElementById('number2').value
  let num3 = document.getElementById('number3').value
  let num4 = document.getElementById('number4').value
  let num5 = document.getElementById('number5').value
  let num6 = document.getElementById('number6').value
  let numbers = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5), Number(num6)].sort()
  console.log("Input : " + numbers)
  for (var i = 0 ; i < 6 ; i++){
    if (numbers[i] == 0){
      errorMessages.push("Vous devez choisir 6 numéros")
      return false
    } else {
      for (var j = 0 ; j < numbers.length ; j++) {
        if (numbers[j] != winningNums[j]){
          message.innerHTML = "Désolé vous avez perdu"
          return false
        }
      }
      message.innerHTML = "Félicitations vous avez gagné 1 million !!!!!"
      return true
    }
  }
}

let errors = errorMsgs => {
  errorMsgs.forEach(errorMessage => {
    message.innerHTML = errorMessage
  })
}

let checkLoto = () => {
  window.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      message.innerHTML = ""
      getArrayOfSixRandomNumbers()
      console.log("Jackpot is : " + winningNumbers)    
      if (validate() == true) {
        message.innerHTML = ""
        checkVictory(winningNumbers)  
      }
      errors(errorMessages)
    })
  })
}

checkLoto()