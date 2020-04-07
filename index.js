const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  checkFillingWhenSubmit(firstname, lastname, email, lotoNumbers)
  checkEmailWhenSubmit(email)
}

let checkFillingWhenSubmit = (firstname, lastname, email, lotoNumbers) => {
  let form             = document.getElementsByTagName('form')[0]
  let firstname_error  = document.getElementById('firstname_error')
  let lastname_error   = document.getElementById('lastname_error')
  let email_error      = document.getElementById('email_error')

  form.addEventListener("submit", function (event) {
    if (firstname === "") { firstname_error.innerHTML = "Veuillez fournir un prénom" } 
    if (lastname === "")  { lastname_error.innerHTML = "Veuillez fournir un nom" } 
    if (email === "")     { email_error.innerHTML = "Veuillez fournir un email" } 
  })
}

let checkEmailWhenSubmit = (email) => {

}

checkLoto(
  document.getElementById("firstname").value,
  document.getElementById("lastname").value,
  document.getElementById("email").value,
  document.getElementById("lotoNumbers").value
)


// ([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$


// let form  = document.getElementsByTagName('form')[0];
// let email = document.getElementById('email');
// let error = document.querySelector('.error');

// Each time we have input, check validity
// email.addEventListener("input", function (event) {
//   if (email.validity.valid) {
//     error.innerHTML = ""
//     error.className = "error"
//   }
// }, false);

// Each submit we check email validity
// form.addEventListener("submit", function (event) {
//   if (!email.validity.valid) {
//     error.innerHTML = "J'attends une adresse e-mail correcte, mon cher !";
//     error.className = "error active";
//     event.preventDefault();
//   }
// }, false);
