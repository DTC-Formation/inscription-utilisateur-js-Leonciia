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
    const strong = document.querySelector('strong')
    strong.textContent = 'NOM : ' + nom +' - - - - - - - - - - - - - - - - ';
    strong.textContent += ' - - - - - - - - - - - - '+' PRENOM : ' + prenom +' - - - - - - - - - - - ';
    strong.textContent += ' - - - - - - - - - - - - '+ 'E-MAIL : ' + mail +' - - - - - - - - - - - ';
    strong.textContent += ' - - - - - - - - - '+ 'MOT DE PASSE : ' + mdp +' - - - - - - - - - - - - - - - - -';
    strong.textContent += ' - - - - - - - - - - - - '+ 'CONFIRMATION DE MOT DE PASSE : ' + confirmemdp +' - - - - - - - -';

    const b = document.querySelector('b') 
    if(age>=18){
        strong.textContent += '- - - - - - - '+ ' AGE : ' +age +' ans'+' - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - -'
    }
    else{
        b.textContent = '* L\'accès est interdit aux personnes de moins de 18 ans.'
    } 
    
    const p = document.querySelector('p') 
    if(nom!='' && prenom!=''&& age!=''&& mail!=''&& 
    mdp!=''&& confirmemdp!='' && (mdp == confirmemdp) && (age>=18)){
        alert("Parfait ! Les conditions sont bien remplies. Vous pouvez continuer votre inscription en toute sécurité.")
    }
    else  if(nom=='' || prenom==''|| age==''|| mail==''|| 
    mdp==''|| confirmemdp==''  && (mdp != confirmemdp)){
        p.textContent = '* Veuillez remplir tous les champs du formulaire.'
    }
    
    const span = document.querySelector('span')
    if(mdp != confirmemdp){
        console.log("La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.")
        // alert("La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.")
        span.textContent = 'La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.'
    }
    else {
        console.log("Parfait ! Les mots de passe correspondent. Vous pouvez continuer votre inscription en toute sécurité.")
        // alert("Parfait ! Les mots de passe correspondent. Vous pouvez continuer votre inscription en toute sécurité.")
    }
})

// change???
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

