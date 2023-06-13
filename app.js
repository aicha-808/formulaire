// selectioner le formulaire
const form = document.querySelector('#formulaire');
// console.log(form.email); 

//Ecouter la modification de l'Email
form.email.addEventListener('change', function(){
    validemail(this);
})

//Ecouter la modification du password
form.password.addEventListener('change', function(){
    validpassword(this);
})

// ----------------Validation email-------------------------
const validemail = function (inputsaisie) {
    const inputregexp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    const span = inputsaisie.nextElementSibling;

    //tester l'expression reguliere

    if (inputregexp.test(inputsaisie.value)) {
        span.innerHTML = 'Adresse valide'
        span.classList.remove('text-danger')
        span.classList.add('text-success')
    }else{
        span.innerHTML = 'Adresse non valide'
        span.classList.remove('text-success')
        span.classList.add('text-danger')
    }
}

// ----------------Validation email-------------------------
const validpassword = function (inputpassword) {
    let mgs;
    let valid = false;

   // Au moins 3 caractères 
   if (inputpassword.value.length < 3) {
        mgs = 'Le mot de passe doit contenir au moins 3 caractères'
   }
    // Au moins 1 lettre majuscule
   else if (!/[A-Z]/.test(inputpassword.value)) {
        mgs = "Le mot de passe doit contenir au moins une lettre majuscule"
   }
    // Au moins 1 lettre muniscule
    else if (!/[a-z]/.test(inputpassword.value)) {
        mgs = 'Le mot de passe doit contenir au moins une lettre muniscule'
    }
    // Au moins 1 chiffre
    else if (!/[0-9]/.test(inputpassword.value)) {
        mgs = 'Le mot de passe doit contenir au moins 1 chiffre' 
    }
    else{
        mgs = 'Le mot de passe est valide'
        valid = true;
    }
    //
    const span = inputpassword.nextElementSibling;

    if (valid) {
        span.innerHTML = 'Mot de passe valide'
        span.classList.remove('text-danger')
        span.classList.add('text-success')
    }
    else{
        span.innerHTML = mgs
        span.classList.remove('text-success')
        span.classList.add('text-danger')
    }
 

  
}

