let inputNom = document.getElementById('nom')
let inputPrenom = document.getElementById('prenom')
let inputMail = document.getElementById('mail')
let inputAge = document.getElementById('age')
let inputMdp = document.getElementById('mdp')
let inputConfirmeMdp = document.getElementById('confirmemdp')

button.addEventListener('click', function(evenement){
    
    evenement.preventDefault();
   
    let nom = inputNom.value
    let prenom = inputPrenom.value
    let mail = inputMail.value
    let age = inputAge.value
    let mdp = inputMdp.value
    let confirmemdp = inputConfirmeMdp.value
    const p = document.querySelector('p')
    p.textContent = 'NOM : ' + nom +' - - - - - - - - - - - - - - -';
    p.textContent += ' - - - - - - - - - - - - '+' PRENOM : ' + prenom +' - - - - - - - - - - - - ';
    p.textContent += ' - - - - - - - - - - - - '+ 'E-MAIL : ' + mail +' - - - - - - - - - - - - - ';
    p.textContent += ' - - - - - - - - - - - - '+ 'MOT DE PASSE : ' + mdp +' - - - - - - - - - - - - - - - - -';
    p.textContent += ' - - - - - - - - - - - - '+ 'CONFIRMATION DE MOT DE PASSE : ' + confirmemdp +' - - - - - - - - - -';

    if(age>=18){
        p.textContent += '- - - - - - - '+ ' AGE : ' +age +' ans'+' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - -'
    }
    else{
        p.textContent = 'L\'accès est interdit aux personnes de moins de 18 ans.'
    }  
    
    if(nom=='' || prenom==''|| age==''|| mail==''|| 
    mdp==''|| confirmemdp==''){
        p.textContent = 'Veuillez remplir tous les champs du formulaire.'
    }
    
    if(mdp != confirmemdp){
        console.log("La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.")
    }
    else {
        console.log("Parfait ! Les mots de passe correspondent. Vous pouvez continuer votre inscription en toute sécurité.")
    }
})

// if(inputMdp != inputConfirmeMdp){
//     inputConfirmeMdp.addEventListener('change', function(){
//         console.log('MDP NON VALIDE')
//     })
// }
// else if(inputMdp == inputConfirmeMdp){
//     inputConfirmeMdp.addEventListener('change', function(){
//         console.log('MDP VALIDE')
//     })
// }

