let inputNom = document.getElementById('nom')
inputNom.type = 'text';
inputNom.required = true;
let inputPrenom = document.getElementById('prenom')
inputPrenom.required = true;
let inputMail = document.getElementById('mail')
let inputAge = document.getElementById('age')
let inputMdp = document.getElementById('mdp')
let inputConfirmeMdp = document.getElementById('confirmemdp')

button.addEventListener('click', function(evenement){
    evenement.preventDefault();
    let nom = inputNom.value
    const h4 = document.querySelector('h4') 
    // Regex // !/^[A-Za-z]+$/; maj ou min // /[\wÀ-ÿ ] accepte é et espace
    if(nom==''){
        h4.textContent = '* Veuillez saisir votre nom.'
        console.log('* Veuillez saisir votre nom.');
    }
    else if(!/^[A-Z]+$/.test(nom)){
        h4.textContent = '* Veuillez saisir un nom en majuscule et sans epsace.'
        console.log('* Veuillez saisir un nom en majuscule et sans epsace.');
    }
    else{
        console.log('Votre nom est: ' +nom);
    }
    let prenom = inputPrenom.value
    const blockquote = document.querySelector('blockquote') 
    if(prenom==''){
        blockquote.textContent = '* Veuillez saisir votre prenom.'
        console.log('* Veuillez saisir votre prenom.');
    }
    else if((!/^[A-Za-z]+$/.test(prenom)) && (!/[\wÀ-ÿ ]+/g.test(prenom))){
        blockquote.textContent = '* Veuillez saisir un texte.'
        console.log('* Veuillez saisir un texte.');
    }
    // else if(/[\wÀ-ÿ ]+/g.test(prenom)){
    //     blockquote.textContent = '* Veuillez saisir un texte.'
    //     console.log('* Veuillez saisir un texte.');
    // }
    else{
        console.log('Votre prenom est: ' +prenom);
    }
    let mail = inputMail.value
    // ou var mail = document.getElementById('emailInput').value;
    const article = document.querySelector('article') 
    var mailValid = /\S+@\S+\.\S+/.test(mail);
    if(mail==''){
        article.textContent = '* Veuillez saisir votre email.'
        console.log('* Veuillez saisir votre email.');
    }
    else if (mailValid) {
       // console.log('Adresse e-mail valide');
        console.log('Votre email est: ' +mail);
    } 
    else {
        article.textContent = '* Adresse e-mail invalide.'
        console.log('Adresse e-mail invalide');
    }
    let age = inputAge.value
    let mdp = inputMdp.value
    let confirmemdp = inputConfirmeMdp.value
    const b = document.querySelector('b') 
    if(age==''){
        b.textContent = '* Veuillez saisir votre age.'
        console.log('* Veuillez saisir votre age.');
    }
    else if(age>=18){
        b.textContent += '- - - - - - - '+ ' AGE : ' +age +' ans'+' - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - -'
        console.log('Votre age est: ' +age);
    }
    else{
        b.textContent = '* L\'accès est interdit aux personnes de moins de 18 ans.'
        console.log('* L\'accès est interdit aux personnes de moins de 18 ans.')
    } 
    const p = document.querySelector('p') 
    if(nom!='' && prenom!=''&& age!=''&& mail!=''&& 
    mdp!=''&& confirmemdp!='' && (mdp == confirmemdp) && (age>=18)){
        alert("Parfait ! Les conditions sont bien remplies. Vous pouvez continuer votre inscription en toute sécurité.")
        console.log('Votre mot de passe actuel est: '  +mdp);
    }
    else  if(nom=='' || prenom==''|| age==''|| mail==''|| 
    mdp==''|| confirmemdp==''  && (mdp != confirmemdp)){
        p.textContent = '* Veuillez remplir tous les champs du formulaire.'
        console.log('Veuillez remplir tous les champs du formulaire.')
    }
    else  if(nom=='' || prenom==''|| age==''|| mail==''|| 
    mdp==''|| confirmemdp==''  && (mdp != confirmemdp) && (age<18)){
        p.textContent = '* Veuillez remplir tous les champs du formulaire et vérifier bien votre age (Interdit aux personnes de moins de 18 ans).'
        console.log('Veuillez remplir tous les champs du formulaire et vérifier bien votre age (Interdit aux personnes de moins de 18 ans).')
    }  
    const span = document.querySelector('span')
    if((mdp == '') && (confirmemdp == '')){
        console.log('Désolé, mais vous avez laissé le champ "Mot de passe" vident. Veuillez entrer des mots de passe correspondant pour continuer.')
        span.textContent = '* Désolé, mais vous avez laissé les champs "Mots de passe" vident. Veuillez entrer des mots de passe correspondant pour continuer.'
    }
    else if((mdp == '') && (confirmemdp != '')){
        console.log('Désolé, mais vous avez laissé le champ "Mot de passe" vide. Veuillez entrer un mot de passe pour continuer.')
        span.textContent = '* Désolé, mais vous avez laissé le champ "Mot de passe" vide. Veuillez entrer un mot de passe pour continuer.'
    }
    else if((mdp != '') && (confirmemdp == '')){
        console.log('Désolé, mais vous avez laissé le champ "Confirmation de mot de passe" vide. Veuillez entrer un mot de passe pour continuer.')
        span.textContent = '* Désolé, mais vous avez laissé le champ "Confirmation de mot de passe" vide. Veuillez entrer un mot de passe pour continuer.'
    }
    else if((mdp != confirmemdp) && (mdp != '') &&  (confirmemdp != '')){
        console.log("* La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.")
        // alert("La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.")
        span.textContent = 'La confirmation du mot de passe ne correspond pas. Veuillez réessayer en vous assurant de saisir le même mot de passe dans les deux champs.'
    }
    else {
        console.log("Parfait ^_^ ! Les mots de passe correspondent. Vous pouvez continuer votre inscription en toute sécurité.")
        // alert("Parfait ! Les mots de passe correspondent. Vous pouvez continuer votre inscription en toute sécurité.")
    }
    const strong = document.querySelector('strong')
    if(nom!='' && prenom!=''&& age!=''&& mail!=''&& 
    mdp!=''&& confirmemdp!='' && (mdp == confirmemdp) && (age>=18)){
        strong.textContent = 'NOM : ' + nom +' - - - - - - - - - - - - - - - - ';
        strong.textContent += ' - - - - - - - - - - - - '+' PRENOM : ' + prenom +' - - - - - - - - - - - ';
        strong.textContent += ' - - - - - - - - - - - - '+ 'E-MAIL : ' + mail +' - - - - - - - - - - - ';
        strong.textContent += ' - - - - - - - - - '+ 'MOT DE PASSE : ' + mdp +' - - - - - - - - - - - - - - - - -';
        strong.textContent += ' - - - - - - - - - - - - '+ 'CONFIRMATION DE MOT DE PASSE : ' + confirmemdp +' - - - - - - - -';
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

