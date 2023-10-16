let welcomeScreen = document.querySelector(".welcome-screen"),
    accueilScreen = document.querySelector(".accueil-screen"),
    gestionJoueursBtn = document.querySelector("#gestion-des-joueurs-btn"),
    gestionJoueursScreen = document.querySelector(".gestion-joueurs-screen"),
    ajouterJoueurScreen = document.querySelector(".ajouter-joueur-screen"),
    formAjouterJoueur = document.querySelector("#form-ajouter-joueur"),
   notificationScreen = document.querySelector(".notification-screen"),
   listerJoueursScreen = document.querySelector(".lister-joueurs-screen"),
   modifierJoueurScreen = document.querySelector(".modifier-joueur-screen"),
   parametresScreen = document.querySelector(".parametres-screen"),
   parametresPartieScreen = document.querySelector(".parametres-partie-screen"),
   jouerPartieScreen = document.querySelector(".jouer-partie-screen"),
   nouvellePartieScreen = document.querySelector(".nouvelle-partie-screen "),
   lesPartiesScreen = document.querySelector(".les-parties-screen"),
   partieEncoursScreen = document.querySelector(".partie-encours-screen"),
   partieTerminerScreen =document.querySelector(".partie-terminer-screen"),
   marquagePartieScreen = document.querySelector(".marquage-partie-screen"),
   statistiquesScreen = document.querySelector(".statistiques-screen"),
   top1erScreen = document.querySelector(".top-1er-screen"),
   top2eScreen = document.querySelector(".top-2e-screen"),
   top3eScreen = document.querySelector(".top-3e-screen"),
   topChienScreen = document.querySelector(".top-chien-screen"),
   iconSuccess ="fa-solid fa-circle-check",
   afficherPartieJouerButton = document.querySelector(".choice-popup #afficher-partie-btn"),
   modifierPartieJouerButton = document.querySelector(".choice-popup #modifier-partie-btn"),
   notificationModifierPartie = document.querySelector("#notification-modifier-partie"), 
   iconError= "fa-solid fa-circle-xmark";

let helpScreen = document.querySelector("#help-screen");
let proposDomaScreen = document.querySelector("#propos-doma-screen");
let importantScreen = document.querySelector("#important-screen");

function switchContainer(container) {
    container == "welcome"?removeClass(welcomeScreen):addClass(welcomeScreen);
    container == "accueil"?removeClass(accueilScreen):addClass(accueilScreen);
    container == "gestion-joueurs"?removeClass(gestionJoueursScreen):addClass(gestionJoueursScreen);
    container == "ajouter-joueur"?removeClass(ajouterJoueurScreen):addClass(ajouterJoueurScreen);
    container == "lister-joueurs"?removeClass(listerJoueursScreen,listerTouslesJoueurs()):addClass(listerJoueursScreen);
    container == "modifier-joueur"?removeClass(modifierJoueurScreen):addClass(modifierJoueurScreen);
    container == "parametres"?removeClass(parametresScreen):addClass(parametresScreen);
    container == "parametres-partie"?removeClass(parametresPartieScreen):addClass(parametresPartieScreen);
    container == "jouer-partie"?removeClass(jouerPartieScreen):addClass(jouerPartieScreen);
    container == "nouvelle-partie"?removeClass(nouvellePartieScreen, remplirFormulaireNouvellePartie()):addClass(nouvellePartieScreen);
    container == "les-parties"?removeClass(lesPartiesScreen):addClass(lesPartiesScreen);
    container == "marquage-partie"?removeClass(marquagePartieScreen):addClass(marquagePartieScreen);
    container == "propos-doma"?removeClass(proposDomaScreen):addClass(proposDomaScreen);
    container == "help"?removeClass(helpScreen):addClass(helpScreen);
    container == "statistiques"?removeClass(statistiquesScreen):addClass(statistiquesScreen);
    container == "partie-encours"?removeClass(partieEncoursScreen,afficherListePartiesEncours()):addClass(partieEncoursScreen);
    container == "partie-terminer"?removeClass(partieTerminerScreen, afficherListePartiesTerminer()):addClass(partieTerminerScreen);
    container == "top-1er"?removeClass(top1erScreen,listerTousles1ers()):addClass(top1erScreen);
    container == "top-2e"?removeClass(top2eScreen,listerTousles2es()):addClass(top2eScreen);
    container == "top-3e"?removeClass(top3eScreen,listerTousles3es()):addClass(top3eScreen);
    container == "top-chien"?removeClass(topChienScreen,listerTouslesChiens()):addClass(topChienScreen);
    container == "important"?removeClass(importantScreen):addClass(importantScreen);
}

function removeClass(container,callback){
    container.classList.remove("hidden");
    if(callback!=null)
        callback();
}

function addClass(container){
    container.classList.add("hidden");
}


   
setTimeout(()=>{
    welcomeScreen.classList.add("disparition");
},5000);


setTimeout(()=>{
    welcomeScreen.classList.add("hidden");
    accueilScreen.classList.remove("hidden");
},7000);

gestionJoueursBtn.addEventListener("click",()=>{
    accueilScreen.classList.add("hidden");
    gestionJoueursScreen.classList.remove("hidden");
});






function ajouterJoueurToGestionJoueurs(){
    ajouterJoueurScreen.classList.add("hidden");
    gestionJoueursScreen.classList.remove("hidden");
}

function listerJoueursToGestionJoueurs(){
    listerJoueursScreen.classList.add("hidden");
    gestionJoueursScreen.classList.remove("hidden");
}

function gestionDeSJoueursToAjouterJoueur(){
    gestionJoueursScreen.classList.add("hidden");
    ajouterJoueurScreen.classList.remove("hidden");
}

function gestionDeSJoueursToListerJoueurs(){
    gestionJoueursScreen.classList.add("hidden");
    listerJoueursScreen.classList.remove("hidden");
    listerTouslesJoueurs();
}

function modifierJoueurToListerJoueurs(){
    modifierJoueurScreen.classList.add("hidden");
    listerJoueursScreen.classList.remove("hidden");
    listerTouslesJoueurs();
}

function listerJoueursToModifierJoueur(){
    
    listerJoueursScreen.classList.add("hidden");
    modifierJoueurScreen.classList.remove("hidden");
}

function accueilToParametresScreen(){
    accueilScreen.classList.add("hidden");
    parametresScreen.classList.remove("hidden");
}

function parametresScreenToAccueil(){
    accueilScreen.classList.remove("hidden");
    parametresScreen.classList.add("hidden");
}


function parametresScreenToPartie(id){
        let partie = getPartie(id);

        parametresScreen.classList.add("hidden");
        parametresPartieScreen.classList.remove("hidden");
        afficherContenuPartie(partie);
}

function partieToParametresScreen(){
    parametresScreen.classList.remove("hidden");
    parametresPartieScreen.classList.add("hidden");
}

function accueilToJouerPartieScreen(){
    accueilScreen.classList.add("hidden");
    jouerPartieScreen.classList.remove("hidden");
}

function accueilToStatistiquesScreen(){
    accueilScreen.classList.add("hidden");
    statistiquesScreen.classList.remove("hidden");
}

function statistiquesScreenToAccueil(){
    accueilScreen.classList.remove("hidden");
    statistiquesScreen.classList.add("hidden");
}

function statistiquesToTop1er(){
    statistiquesScreen.classList.add("hidden");
    top1erScreen.classList.remove("hidden");
    listerTousles1ers();
}

function statistiquesToTop2e(){
    statistiquesScreen.classList.add("hidden");
    top2eScreen.classList.remove("hidden");
    listerTousles2es();
}

function statistiquesToTop3e(){
    statistiquesScreen.classList.add("hidden");
    top3eScreen.classList.remove("hidden");
    listerTousles3es();
}

function statistiquesToTopChien(){
    statistiquesScreen.classList.add("hidden");
    topChienScreen.classList.remove("hidden");
    listerTouslesChiens();
}

function top1erToStatistiques(){
    statistiquesScreen.classList.remove("hidden");
    top1erScreen.classList.add("hidden");
}

function top2eToStatistiques(){
    statistiquesScreen.classList.remove("hidden");
    top2eScreen.classList.add("hidden");
}

function top3eToStatistiques(){
    statistiquesScreen.classList.remove("hidden");
    top3eScreen.classList.add("hidden");
}

function topChienToStatistiques(){
    statistiquesScreen.classList.remove("hidden");
    topChienScreen.classList.add("hidden");
}

function jouerPartieScreenToAccueil(){
    accueilScreen.classList.remove("hidden");
    jouerPartieScreen.classList.add("hidden");
}

function jouerPartieScreenToNouvellePartie(){
    jouerPartieScreen.classList.add("hidden");
    nouvellePartieScreen.classList.remove("hidden");
    remplirFormulaireNouvellePartie();
}

function jouerPartieScreenToLesParties(){
    jouerPartieScreen.classList.add("hidden");
    lesPartiesScreen.classList.remove("hidden");
}

function lesPartiesToJouerPartieScreen(){
    jouerPartieScreen.classList.remove("hidden");
    lesPartiesScreen.classList.add("hidden");
}

function lesPartiesToPartieEncours(){
    partieEncoursScreen.classList.remove("hidden");
    lesPartiesScreen.classList.add("hidden");
    afficherListePartiesEncours();
}


function partieEncoursToLesParties(){
    partieEncoursScreen.classList.add("hidden");
    lesPartiesScreen.classList.remove("hidden");
}

function partieTerminerToLesParties(){
    partieTerminerScreen.classList.add("hidden");
    lesPartiesScreen.classList.remove("hidden");
}

function lesPartiesToPartieTerminer(){
    partieTerminerScreen.classList.remove("hidden");
    lesPartiesScreen.classList.add("hidden");
    afficherListePartiesTerminer();
}

function partieEncoursToMarquagePartie(){
    partieEncoursScreen.classList.add("hidden");
    marquagePartieScreen.classList.remove("hidden");
}

function marquagePartieToPartieEncours(){
    partieEncoursScreen.classList.remove("hidden");
    marquagePartieScreen.classList.add("hidden");
    afficherListePartiesEncours();
}

function nouvellePartieToJouerPartieScreen(){
    jouerPartieScreen.classList.remove("hidden");
    nouvellePartieScreen.classList.add("hidden");
}

function afficherContenuPartie(p){
   parametresPartieScreen.querySelector("header span").textContent=`Parametres ${p.nomPartie}`;
   let inputModifierTotalPoint = parametresPartieScreen.querySelector("main form #input-modifier-total-point");
   inputModifierTotalPoint.value=p.totalPoint;
   inputModifierTotalPoint.setAttribute("data-id",p.idPartie);
}

function closePopupNotification(){
    notificationScreen.classList.add("hidden");
}

function openPopupNotification(pseudo,text,icon){
    notificationScreen.classList.remove("hidden");
    notificationScreen.querySelector("span").textContent=`${pseudo} ${text}`;
   let i = notificationScreen.querySelector("i")
   i.setAttribute("class",icon);
    if(icon == iconError)
        i.style="color:#f00";
    else
        i.style="color:#0f0";
}

function listerTouslesJoueurs(){
    let players = getPlayers(),
    main = listerJoueursScreen.querySelector("main");
    main.innerHTML="";
    players.forEach(player =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",player.idPlayer);
        button.innerHTML=`
            <i class="fa-solid fa-user"></i>
            <div>
                <span>${player.pseudo}</span>
            </div>
        `;
        button.addEventListener("click",function(){
            listerJoueursToModifierJoueur();
            formModifierJoueur(button.dataset.id);
        })
        main.appendChild(button);
    })
}

function listerTousles1ers(){
    let players = getPlayers1er(),
    main = top1erScreen.querySelector("main");
    main.innerHTML="";
    players.forEach(player =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",player.idPlayer);
        button.innerHTML=`
            <i class="fa-solid fa-user"></i>
            <div>
                <span>${player.pseudo}</span>
                <div class="counter">${player.nombre1er}</div>
            </div>
        `;
        button.addEventListener("click",function(){
            // listerJoueursToModifierJoueur();
            // formModifierJoueur(button.dataset.id);
        })
        main.appendChild(button);
    })
}

function listerTousles2es(){
    let players = getPlayers2e(),
    main = top2eScreen.querySelector("main");
    main.innerHTML="";
    players.forEach(player =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",player.idPlayer);
        button.innerHTML=`
            <i class="fa-solid fa-user"></i>
            <div>
                <span>${player.pseudo}</span>
                <div class="counter">${player.nombre2e}</div>
            </div>
        `;
        button.addEventListener("click",function(){
            // listerJoueursToModifierJoueur();
            // formModifierJoueur(button.dataset.id);
        })
        main.appendChild(button);
    })
}

function listerTousles3es(){
    let players = getPlayers3e(),
    main = top3eScreen.querySelector("main");
    main.innerHTML="";
    players.forEach(player =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",player.idPlayer);
        button.innerHTML=`
            <i class="fa-solid fa-user"></i>
            <div>
                <span>${player.pseudo}</span>
                <div class="counter">${player.nombre3e}</div>
            </div>
        `;
        button.addEventListener("click",function(){
            // listerJoueursToModifierJoueur();
            // formModifierJoueur(button.dataset.id);
        })
        main.appendChild(button);
    })
}

function listerTouslesChiens(){
    let players = getPlayersChien(),
    main = topChienScreen.querySelector("main");
    main.innerHTML="";
    players.forEach(player =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",player.idPlayer);
        button.innerHTML=`
            <i class="fa-solid fa-user"></i>
            <div>
                <span>${player.pseudo} </span>
                <div class="counter">${player.nombreChien}</div>
            </div>
            
        `;
        button.addEventListener("click",function(){
            // listerJoueursToModifierJoueur();
            // formModifierJoueur(button.dataset.id);
        })
        main.appendChild(button);
    })
}








formAjouterJoueur.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputPseudo = formAjouterJoueur.querySelector("#input-pseudo");
    let pseudo = inputPseudo.value
    addPlayer(pseudo);
    openPopupNotification(pseudo," a ete ajouter avec succes !",iconSuccess);
    inputPseudo.value="";

    // alert("Joueur ajouter avec succes !");
});

let formulaireModifierJoueur = document.querySelector("#form-modifier-joueur"),
    formModifierPartie = document.querySelector("#form-modifier-partie") ;
   
formulaireModifierJoueur.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputPseudo = document.querySelector("#input-modifier-pseudo"),
        input1er = document.querySelector("#input-modifier-1er"),
        input2e = document.querySelector("#input-modifier-2e"),
        input3e = document.querySelector("#input-modifier-3e"),
        inputChien = document.querySelector("#input-modifier-chien");

    let p ={
        idPlayer: inputPseudo.dataset.id*1,
        pseudo: inputPseudo.value,
        nombre1er: input1er.value*1,
        nombre2e: input2e.value*1,
        nombre3e: input3e.value*1,
        nombreChien: inputChien.value*1
    }

    updatePlayer(p);
    openPopupNotification("Modification","effectuer!",iconSuccess);
    inputPseudo.value="";
    input1er.value="";
    input2e.value="";
    input3e.value="";
    inputChien.value="";
    modifierJoueurToListerJoueurs();
  
});

formModifierPartie.addEventListener("submit",(e)=>{
    e.preventDefault();

    let inputModifierTotalPoint = formModifierPartie.querySelector("#input-modifier-total-point");
    let p = getPartie(inputModifierTotalPoint.dataset.id);

    p.totalPoint=inputModifierTotalPoint.value*1;
    updatePartie(p);
    openPopupNotification("Modification","effectuer!",iconSuccess);
    inputModifierTotalPoint.value="";

});




function formModifierJoueur(id){
    let main = modifierJoueurScreen.querySelector("main"),
        player = getPlayer(id);
       

       let modifierInputJoueur = main.querySelector("#form-modifier-joueur #input-modifier-pseudo"),
           modifierInput1er = main.querySelector("#form-modifier-joueur #input-modifier-1er"),
           modifierInput2e = main.querySelector("#form-modifier-joueur #input-modifier-2e"),
           modifierInput3e = main.querySelector("#form-modifier-joueur #input-modifier-3e"),
           modifierInputChien = main.querySelector("#form-modifier-joueur #input-modifier-chien");
          
           modifierInputJoueur.value=player.pseudo;
           modifierInput1er.value=player.nombre1er;
           modifierInput2e.value=player.nombre2e;
           modifierInput3e.value=player.nombre3e;
           modifierInputChien.value=player.nombreChien;

           modifierInputJoueur.setAttribute("data-id",player.idPlayer);
}


let formNouvellePartie = nouvellePartieScreen.querySelector("#form-nouvelle-partie");

function remplirFormulaireNouvellePartie(){
   let partieSelect= formNouvellePartie.querySelector("#partie");

   let  p1 = formNouvellePartie.querySelector("#p1"),
        p2 = formNouvellePartie.querySelector("#p2"), 
        p3 = formNouvellePartie.querySelector("#p3"),
        p4 = formNouvellePartie.querySelector("#p4");

        let parties = getParties(),
            players = getPlayers();


        partieSelect.innerHTML=`
            <option value="${parties[0].idPartie}">${parties[0].totalPoint} pts</option>
            <option value="${parties[1].idPartie}">${parties[1].totalPoint} pts</option>
        `

        let playerOptions ="";

        players.forEach(player =>{
            playerOptions += `<option value="${player.idPlayer}">${player.pseudo}</option>`
        })


        p1.innerHTML= playerOptions;
        p2.innerHTML= playerOptions;
        p3.innerHTML= playerOptions;
        p4.innerHTML= playerOptions;
}

formNouvellePartie.addEventListener("submit",(e)=>{
    e.preventDefault();

    
    let partieSelect= formNouvellePartie.querySelector("#partie");

    let  p1 = formNouvellePartie.querySelector("#p1"),
         p2 = formNouvellePartie.querySelector("#p2"), 
         p3 = formNouvellePartie.querySelector("#p3"),
         p4 = formNouvellePartie.querySelector("#p4");

   let player1 = getPlayer(p1.options[p1.selectedIndex].value),
       player2 = getPlayer(p2.options[p2.selectedIndex].value),
       player3 = getPlayer(p3.options[p3.selectedIndex].value),
       player4 = getPlayer(p4.options[p4.selectedIndex].value);

       player1.points=0;
       player1.placeDebut="1er";
       player1.placeFin="";

       player2.points=0;
       player2.placeDebut="2e";
       player2.placeFin="";

       player3.points=0;
       player3.placeDebut="3e";
       player3.placeFin="";

       player4.points=0;
       player4.placeDebut="4e";
       player4.placeFin="";


       let tab = [
            player1.idPlayer,
            player2.idPlayer,
            player3.idPlayer,
            player4.idPlayer
        ];

        if(pasDeDoublons(tab)){
                let partiesJouer = getPartiesJouer();

                const optionChoisie = partieSelect.options[partieSelect.selectedIndex];
            
            
               
                let partieJouer = {
                partie: getPartie(optionChoisie.value),
                players:[
                    player1,player2,player3,player4
                ],
                etat:"en cours"
                }
            
                let id= addPartieJouer(partieJouer);
                openPopupNotification("Partie"," creer avec succes !",iconSuccess);
                setTimeout(()=>{
                    notificationScreen.classList.add("hidden");
                    nouvellePartieScreen.classList.add("hidden");
                    marquagePartieScreen.classList.remove("hidden");
                    remplirMarquagePartie(id);
                },1500);

        }else
            openPopupNotification("erreur:","liste de joueur incorrecte !",iconError);


})


function afficherListePartiesEncours(){
    let partiesJouer = getPartiesJouerEncours();
    main = partieEncoursScreen.querySelector("main");
    main.innerHTML="";
    partiesJouer.forEach(partieJouer =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",partieJouer.idPartieJouer);
        button.innerHTML=`
            <i class="fa-solid fa-rotate"></i>
            <div>
                <span>Partie ${partieJouer.idPartieJouer+1} | Date ${partieJouer.datePartie}</span>
                <i class="fa-solid fa-trash" onclick="supprimerPartieJouer(event,${partieJouer.idPartieJouer},'encours')"></i>
            </div>
        `;
        button.addEventListener("click",function(){
            partieEncoursToMarquagePartie()
            remplirMarquagePartie(button.dataset.id);
            
        })
        main.appendChild(button);
    })
} 
// <i class="fa-solid fa-trash"></i>

function afficherListePartiesTerminer(){
    let partiesJouer = getPartiesJouerTerminer();
    main = partieTerminerScreen.querySelector("main");
    main.innerHTML="";
    partiesJouer.forEach(partieJouer =>{
        let button = document.createElement("button");
        button.setAttribute("data-id",partieJouer.idPartieJouer);
        button.innerHTML=`
            <i class="fa-solid fa-circle-check"></i>
            <div>
                <span>Partie ${partieJouer.idPartieJouer+1} | Date ${partieJouer.datePartie}</span>
                <i class="fa-solid fa-trash" onclick="supprimerPartieJouer(event,${partieJouer.idPartieJouer},'terminer')"></i>
            </div>
        `;
        button.addEventListener("click",function(){
         

           notificationModifierPartie.classList.remove("hidden");
            
          
          
           afficherPartieJouerButton.setAttribute("data-id",button.dataset.id)
           modifierPartieJouerButton.setAttribute("data-id",button.dataset.id)
            
           
           
        })
        main.appendChild(button);
})
}



afficherPartieJouerButton.addEventListener("click",afficherPartieFunc)

modifierPartieJouerButton.addEventListener("click",()=>{
    let partieJouer = getPartieJouer(modifierPartieJouerButton.dataset.id*1);
        partieJouer.etat="en cours";
        partieJouer.players[0].placeFin="";
       
       
        let p1 =  getPlayer(partieJouer.players[0].idPlayer);
        let p2 =  getPlayer(partieJouer.players[1].idPlayer);
        let p3 =  getPlayer(partieJouer.players[2].idPlayer);
        let p4 =  getPlayer(partieJouer.players[3].idPlayer);
       
        if(p1.nombre1er>0){
          p1.nombre1er--;
          updatePlayer(p1);
        }
          
        if(p2.nombre2e>0){
          p2.nombre2e--;
          updatePlayer(p2);
        }
           
        if(p3.nombre3e>0){
            p3.nombre3e--;
          updatePlayer(p3);
        }
           
        if(p4.nombreChien>0){
            p4.nombreChien--;
            updatePlayer(p4);
        }
          
        updatePartieJouer(partieJouer);
        afficherListePartiesTerminer();
        notificationModifierPartie.classList.add("hidden");
});


function afficherPartieFunc(){
    let partieJouer = getPartieJouer(afficherPartieJouerButton.dataset.id*1);
    let notificationPresentation2 = document.querySelector("#notification-presentation2");
    notificationModifierPartie.classList.add("hidden");
           notificationPresentation2.classList.remove("hidden");
           notificationPresentation2.innerHTML=`
           <div class="presentation-popup">
           <header>
               <span>Partie Terminer</span>
           </header>
           <main>
             <div id="first-player">
               <span>
                   <span>${partieJouer.players[0].pseudo}:</span> ${partieJouer.players[0].placeFin}
               </span>
               <span>
                   <span>Points:</span> ${partieJouer.players[0].points}/${partieJouer.partie.totalPoint}pts
               </span>
             </div>
       
             <div>
               <span>
                   <span>${partieJouer.players[1].pseudo}:</span> ${partieJouer.players[1].placeFin}
               </span>
               <span>
                   <span>Points:</span> ${partieJouer.players[1].points}/${partieJouer.partie.totalPoint}pts
               </span>
             </div>
       
             <div>
               <span>
                   <span>${partieJouer.players[2].pseudo}:</span> ${partieJouer.players[2].placeFin}
               </span>
               <span>
                   <span>Points:</span> ${partieJouer.players[2].points}/${partieJouer.partie.totalPoint}pts
               </span>
             </div>
       
       
             <div id="last-player">
               <span>
                   <span>${partieJouer.players[3].pseudo}:</span> ${partieJouer.players[3].placeFin}
               </span>
               <span>
                   <span>Points:</span> ${partieJouer.players[3].points}/${partieJouer.partie.totalPoint}pts
               </span>
             </div>
             <div class="button-fermer">
                   <button onclick="fermerPresentation2()">Fermer</button>
             </div>
       
           </main>
       </div>`
}

function fermerPresentation2(){
    let notificationPresentation2 = document.querySelector("#notification-presentation2");
    notificationPresentation2.classList.add("hidden");
}


function remplirMarquagePartie(id){
    let partieJouer = getPartieJouer(id);

    let main = marquagePartieScreen.querySelector("main");

    main.setAttribute("data-id",partieJouer.idPartieJouer);

    main.querySelector(".date-box").innerHTML = `
                                <span>Date</span>
                               ${partieJouer.datePartie}`;

            let {players} = partieJouer,
                {partie} = partieJouer;

    let boxPlayer1 = main.querySelector("#box-player1"),
        boxPlayer2 = main.querySelector("#box-player2"),
        boxPlayer3 = main.querySelector("#box-player3"),
        boxPlayer4 = main.querySelector("#box-player4");

        boxPlayer1.style=`--width: ${((players[0].points/partie.totalPoint)*100).toFixed(2)}`;

        boxPlayer1.innerHTML=`
            <div class="entete">
                    <span>${players[0].pseudo}: ${players[0].placeDebut}</span>
                <div>
                    <div class="point">
                    ${players[0].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                    <div class="point-restant">
                            ${partie.totalPoint-players[0].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                </div>
                
            </div>
            <div class="progress-bar">
            </div>
        `
        boxPlayer2.style=`--width: ${((players[1].points/partie.totalPoint)*100).toFixed(2)}`;

        boxPlayer2.innerHTML=`
            <div class="entete">
                    <span>${players[1].pseudo}: ${players[1].placeDebut}</span>
                <div>
                    <div class="point">
                    ${players[1].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                    <div class="point-restant">
                            ${partie.totalPoint-players[1].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                </div>
                
            </div>
            <div class="progress-bar">
            </div>
        `

        boxPlayer3.style=`--width: ${((players[2].points/partie.totalPoint)*100).toFixed(2)}`;

        boxPlayer3.innerHTML=`
            <div class="entete">
                    <span>${players[2].pseudo}: ${players[2].placeDebut}</span>
                <div>
                    <div class="point">
                    ${players[2].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                    <div class="point-restant">
                            ${partie.totalPoint-players[2].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                </div>
                
            </div>
            <div class="progress-bar">
            </div>
        `

        boxPlayer4.style=`--width: ${((players[3].points/partie.totalPoint)*100).toFixed(2)}`;

        boxPlayer4.innerHTML=`
            <div class="entete">
                    <span>${players[3].pseudo}: ${players[3].placeDebut}</span>
                <div>
                    <div class="point">
                    ${players[3].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                    <div class="point-restant">
                            ${partie.totalPoint-players[3].points}/${partie.totalPoint} <span>pts</span>
                    </div>
                </div>
                
            </div>
            <div class="progress-bar">
            </div>
        `


         let spanPlayer1 = marquagePartieScreen.querySelector("#span-player1");
            spanPlayer1.setAttribute("data-id",players[0].idPlayer);
            spanPlayer1.setAttribute("data-cocher","non");
            spanPlayer1.id="span-player1";
            spanPlayer1.textContent=players[0].pseudo;

        let spanPlayer2 = marquagePartieScreen.querySelector("#span-player2");
            spanPlayer2.setAttribute("data-id",players[1].idPlayer);
            spanPlayer2.setAttribute("data-cocher","non");
            spanPlayer2.id="span-player2";
            spanPlayer2.textContent=players[1].pseudo;

        let spanPlayer3 = marquagePartieScreen.querySelector("#span-player3");
            spanPlayer3.setAttribute("data-id",players[2].idPlayer);
            spanPlayer3.setAttribute("data-cocher","non");
            spanPlayer3.id="span-player3";
            spanPlayer3.textContent=players[2].pseudo;

        let spanPlayer4 = marquagePartieScreen.querySelector("#span-player4");
            spanPlayer4.setAttribute("data-id",players[3].idPlayer);
            spanPlayer4.setAttribute("data-cocher","non");
            spanPlayer4.id="span-player4";
            spanPlayer4.textContent=players[3].pseudo;
      
         let  b10 = marquagePartieScreen.querySelector("#b10"),
              b15 = marquagePartieScreen.querySelector("#b15"),
              b50 = marquagePartieScreen.querySelector("#b50"),
              b100 = marquagePartieScreen.querySelector("#b100");

        let moinsCheck = document.querySelector("#moinsCheck");

        moinsCheck.addEventListener("change",()=>{
           if(moinsCheck.checked){
            //  <button id="b10" data-points="10">10</button>
             b10.dataset.points="-5";
             b10.textContent="-5";
             b15.dataset.points="-10";
             b15.textContent="-10";
             b50.dataset.points="-50";
             b50.textContent="-50";
             b100.dataset.points="-100";
             b100.textContent="-100";
           }else{
            b10.dataset.points="5";
            b10.textContent="5";
            b15.dataset.points="10";
            b15.textContent="10";
            b50.dataset.points="50";
            b50.textContent="50";
            b100.dataset.points="100";
            b100.textContent="100";
           }
        })

    initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4)
   
    spanPlayer1.addEventListener("click",()=>{
        initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
        spanPlayer1.dataset.cocher="oui";
        spanPlayer1.classList.add("player-cocher");
        
    })



    spanPlayer2.addEventListener("click",()=>{
        initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
        spanPlayer2.dataset.cocher="oui";
        spanPlayer2.classList.add("player-cocher");
    })

    spanPlayer3.addEventListener("click",()=>{
        initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
        spanPlayer3.dataset.cocher="oui";
        spanPlayer3.classList.add("player-cocher");
    })

    spanPlayer4.addEventListener("click",()=>{
        initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
        spanPlayer4.dataset.cocher="oui";
        spanPlayer4.classList.add("player-cocher");
    })


    b10.onclick=()=>{
        
        let main = marquagePartieScreen.querySelector("main");
        let points = b10.dataset.points*1;
        console.log(points)
        let partieJouer = getPartieJouer(main.dataset.id);
        let {players} = partieJouer;
        let idPlayer = getIdSpanPlayerCocher(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
        players.forEach(player=>{
            if(player.idPlayer == idPlayer){
                if((player.points + points) < partie.totalPoint)
                    player.points += points;
                else{
                        player.points = partie.totalPoint;
                        player.placeFin = "1er"
                        let playerUpdate = getPlayer(player.idPlayer);
                        playerUpdate.nombre1er++;
                        updatePlayer(playerUpdate);
                }
            }
                  
        })

        let premierExiste = false;

    players.forEach(player=>{
        if(player.placeFin == "1er"){
            premierExiste = true;
        }
    })

    if(premierExiste){
        players.sort((a,b)=> b.points - a.points);

        players[1].placeFin="2e";
        let playerUpdate1 = getPlayer(players[1].idPlayer);
        playerUpdate1.nombre2e++;
        updatePlayer(playerUpdate1);

        players[2].placeFin="3e";
        let playerUpdate2 = getPlayer(players[2].idPlayer);
        playerUpdate2.nombre3e++;
        updatePlayer(playerUpdate2);

        players[3].placeFin="Chien";
        let playerUpdate3 = getPlayer(players[3].idPlayer);
        playerUpdate3.nombreChien++;
        updatePlayer(playerUpdate3);
        
        let specialeListePlayers = getSpecialeListePlayers(players);

        let select3eJoueur = document.querySelector("#select3eJoueur");

        select3eJoueur.innerHTML="";

        specialeListePlayers.forEach(player=>{
                    let option = document.createElement("option");
                    option.value = player.idPlayer;
                    option.textContent=player.pseudo;

                    select3eJoueur.appendChild(option);
        })
    }

    partieJouer.players = players;

  let partieTerminer =  updatePartieJouer(partieJouer);

  if(partieTerminer){
    let notificationPresentation = document.querySelector("#notification-presentation");
    notificationPresentation.classList.remove("hidden");
    notificationPresentation.innerHTML=`
    <div class="presentation-popup">
    <header>
        <span>Partie Terminer</span>
    </header>
    <main>
      <div id="first-player">
        <span>
            <span>${partieJouer.players[0].pseudo}:</span> ${partieJouer.players[0].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[0].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[1].pseudo}:</span> ${partieJouer.players[1].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[1].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[2].pseudo}:</span> ${partieJouer.players[2].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[2].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>


      <div id="last-player">
        <span>
            <span>${partieJouer.players[3].pseudo}:</span> ${partieJouer.players[3].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[3].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>
      <div class="button-choice">
            <button onclick="foncSuitePartie()">Jouer la suite de la Partie</button>
            <button onclick="pasMaintenant()">non,pas maintenant</button>
      </div>

    </main>
</div>
    `
  }else{
    updateBoxPlayer1(main.dataset.id);
    updateBoxPlayer2(main.dataset.id);
    updateBoxPlayer3(main.dataset.id);
    updateBoxPlayer4(main.dataset.id);
  }


  
       

}

b15.onclick=()=>{
    let main = marquagePartieScreen.querySelector("main");
    let points = b15.dataset.points*1;
    let partieJouer = getPartieJouer(main.dataset.id);
    let {players} = partieJouer;
    let idPlayer = getIdSpanPlayerCocher(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
    players.forEach(player=>{
        if(player.idPlayer == idPlayer){
            if((player.points + points) < partie.totalPoint)
                player.points += points;
            else{
                    player.points = partie.totalPoint;
                    player.placeFin = "1er"
                    let playerUpdate = getPlayer(player.idPlayer);
                    playerUpdate.nombre1er++;
                    updatePlayer(playerUpdate);
            }
        }
    })

    let premierExiste = false;

    players.forEach(player=>{
        if(player.placeFin == "1er"){
            premierExiste = true;
        }
    })

    if(premierExiste){
        players.sort((a,b)=> b.points - a.points);

        players[1].placeFin="2e";
        let playerUpdate1 = getPlayer(players[1].idPlayer);
        playerUpdate1.nombre2e++;
        updatePlayer(playerUpdate1);

        players[2].placeFin="3e";
        let playerUpdate2 = getPlayer(players[2].idPlayer);
        playerUpdate2.nombre3e++;
        updatePlayer(playerUpdate2);

        players[3].placeFin="Chien";
        let playerUpdate3 = getPlayer(players[3].idPlayer);
        playerUpdate3.nombreChien++;
        updatePlayer(playerUpdate3);
        
        let specialeListePlayers = getSpecialeListePlayers(players);

        let select3eJoueur = document.querySelector("#select3eJoueur");

        select3eJoueur.innerHTML="";

        specialeListePlayers.forEach(player=>{
                    let option = document.createElement("option");
                    option.value = player.idPlayer;
                    option.textContent=player.pseudo;

                    select3eJoueur.appendChild(option);
        })
    }

    partieJouer.players = players;

  let partieTerminer =  updatePartieJouer(partieJouer);

  if(partieTerminer){
    let notificationPresentation = document.querySelector("#notification-presentation");
    notificationPresentation.classList.remove("hidden");
    notificationPresentation.innerHTML=`
    <div class="presentation-popup">
    <header>
        <span>Partie Terminer</span>
    </header>
    <main>
      <div id="first-player">
        <span >
            <span>${partieJouer.players[0].pseudo}:</span> ${partieJouer.players[0].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[0].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[1].pseudo}:</span> ${partieJouer.players[1].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[1].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[2].pseudo}:</span> ${partieJouer.players[2].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[2].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>


      <div id="last-player">
        <span>
            <span>${partieJouer.players[3].pseudo}:</span> ${partieJouer.players[3].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[3].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>
      <div class="button-choice">
            <button onclick="foncSuitePartie()">Jouer la suite de la Partie</button>
            <button onclick="pasMaintenant()">non,pas maintenant</button>
      </div>

    </main>
</div>
    `
  }else{
    updateBoxPlayer1(main.dataset.id);
    updateBoxPlayer2(main.dataset.id);
    updateBoxPlayer3(main.dataset.id);
    updateBoxPlayer4(main.dataset.id);
  }
}

b50.onclick=()=>{
    let main = marquagePartieScreen.querySelector("main");
    let points = b50.dataset.points*1;
    let partieJouer = getPartieJouer(main.dataset.id);
    let {players} = partieJouer;
    let idPlayer = getIdSpanPlayerCocher(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
    players.forEach(player=>{
        if(player.idPlayer == idPlayer){
         if((player.points + points) < partie.totalPoint)
                player.points += points;
            else{
                    player.points = partie.totalPoint;
                    player.placeFin = "1er"
                    let playerUpdate = getPlayer(player.idPlayer);
                    playerUpdate.nombre1er++;
                    updatePlayer(playerUpdate);
            }
         }
    })

   
     
    let premierExiste = false;

    players.forEach(player=>{
        if(player.placeFin == "1er"){
            premierExiste = true;
        }
    })

    if(premierExiste){
        players.sort((a,b)=> b.points - a.points);

        players[1].placeFin="2e";
        let playerUpdate1 = getPlayer(players[1].idPlayer);
        playerUpdate1.nombre2e++;
        updatePlayer(playerUpdate1);

        players[2].placeFin="3e";
        let playerUpdate2 = getPlayer(players[2].idPlayer);
        playerUpdate2.nombre3e++;
        updatePlayer(playerUpdate2);


        players[3].placeFin="Chien";
        let playerUpdate3 = getPlayer(players[3].idPlayer);
        playerUpdate3.nombreChien++;
        updatePlayer(playerUpdate3);
        
        
        let specialeListePlayers = getSpecialeListePlayers(players);

        let select3eJoueur = document.querySelector("#select3eJoueur");

        select3eJoueur.innerHTML="";

        specialeListePlayers.forEach(player=>{
                    let option = document.createElement("option");
                    option.value = player.idPlayer;
                    option.textContent=player.pseudo;

                    select3eJoueur.appendChild(option);
        })
    }

    partieJouer.players = players;

  let partieTerminer =  updatePartieJouer(partieJouer);

  if(partieTerminer){
    let notificationPresentation = document.querySelector("#notification-presentation");
    notificationPresentation.classList.remove("hidden");
    notificationPresentation.innerHTML=`
    <div class="presentation-popup">
    <header>
        <span>Partie Terminer</span>
    </header>
    <main>
      <div id="first-player">
        <span >
            <span>${partieJouer.players[0].pseudo}:</span> ${partieJouer.players[0].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[0].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[1].pseudo}:</span> ${partieJouer.players[1].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[1].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[2].pseudo}:</span> ${partieJouer.players[2].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[2].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>


      <div id="last-player">
        <span>
            <span>${partieJouer.players[3].pseudo}:</span> ${partieJouer.players[3].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[3].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>
      <div class="button-choice">
            <button onclick="foncSuitePartie()">Jouer la suite de la Partie</button>
            <button onclick="pasMaintenant()">non,pas maintenant</button>
      </div>

    </main>
</div>
    `
  }else{
    updateBoxPlayer1(main.dataset.id);
    updateBoxPlayer2(main.dataset.id);
    updateBoxPlayer3(main.dataset.id);
    updateBoxPlayer4(main.dataset.id);
  }
}

b100.onclick=()=>{
    let main = marquagePartieScreen.querySelector("main");
    let points = b100.dataset.points*1;
    let partieJouer = getPartieJouer(main.dataset.id);
    let {players} = partieJouer;
    let {partie} = partieJouer;
    let idPlayer = getIdSpanPlayerCocher(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4);
    players.forEach(player=>{
        if(player.idPlayer == idPlayer){
            if((player.points + points) < partie.totalPoint)
                player.points += points;
            else{
                player.points = partie.totalPoint;
                player.placeFin = "1er"
                let playerUpdate = getPlayer(player.idPlayer);
                playerUpdate.nombre1er++;
                updatePlayer(playerUpdate);
            }
        }
           
    })

    let premierExiste = false;

    players.forEach(player=>{
        if(player.placeFin == "1er"){
            premierExiste = true;
        }
    })

    if(premierExiste){
        players.sort((a,b)=> b.points - a.points);

        players[1].placeFin="2e";
        let playerUpdate1 = getPlayer(players[1].idPlayer);
        playerUpdate1.nombre2e++;
        updatePlayer(playerUpdate1);


        players[2].placeFin="3e";
        let playerUpdate2 = getPlayer(players[2].idPlayer);
        playerUpdate2.nombre3e++;
        updatePlayer(playerUpdate2);


        players[3].placeFin="Chien";
        let playerUpdate3 = getPlayer(players[3].idPlayer);
        playerUpdate3.nombreChien++;
        updatePlayer(playerUpdate3);

       
        let specialeListePlayers = getSpecialeListePlayers(players);

        let select3eJoueur = document.querySelector("#select3eJoueur");

        select3eJoueur.innerHTML="";

        specialeListePlayers.forEach(player=>{
                    let option = document.createElement("option");
                    option.value = player.idPlayer;
                    option.textContent=player.pseudo;

                    select3eJoueur.appendChild(option);
        })
        

    }

    partieJouer.players = players;

  let partieTerminer =  updatePartieJouer(partieJouer);

  if(partieTerminer){
    let notificationPresentation = document.querySelector("#notification-presentation");
    notificationPresentation.classList.remove("hidden");
    notificationPresentation.innerHTML=`
    <div class="presentation-popup">
    <header>
        <span>Partie Terminer</span>
    </header>
    <main>
      <div id="first-player">
        <span >
            <span>${partieJouer.players[0].pseudo}:</span> ${partieJouer.players[0].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[0].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[1].pseudo}:</span> ${partieJouer.players[1].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[1].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>

      <div>
        <span>
            <span>${partieJouer.players[2].pseudo}:</span> ${partieJouer.players[2].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[2].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>


      <div id="last-player">
        <span>
            <span>${partieJouer.players[3].pseudo}:</span> ${partieJouer.players[3].placeFin}
        </span>
        <span>
            <span>Points:</span> ${partieJouer.players[3].points}/${partieJouer.partie.totalPoint}pts
        </span>
      </div>
      <div class="button-choice">
            <button onclick="foncSuitePartie()">Jouer la suite de la Partie</button>
            <button onclick="pasMaintenant()">non,pas maintenant</button>
      </div>

    </main>
</div>
    `
  }else{
    updateBoxPlayer1(main.dataset.id);
    updateBoxPlayer2(main.dataset.id);
    updateBoxPlayer3(main.dataset.id);
    updateBoxPlayer4(main.dataset.id);
  }
}


    
}

/**
 * 
 *  <span class="player-cocher" id="span-player1">TG</span>
                        <span id="span-player2">Kayton</span>
                        <span id="span-player3">Kiki</span>
                        <span id="span-player4">Giben</span>
                
 */




    function initialiserSpanPlayer(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4){
        spanPlayer1.dataset.cocher="non";
        spanPlayer1.classList.remove("player-cocher");

        spanPlayer2.dataset.cocher="non";
        spanPlayer2.classList.remove("player-cocher");

        spanPlayer3.dataset.cocher="non";
        spanPlayer3.classList.remove("player-cocher");

        spanPlayer4.dataset.cocher="non";
        spanPlayer4.classList.remove("player-cocher");

    }

   


        function getIdSpanPlayerCocher(spanPlayer1,spanPlayer2,spanPlayer3,spanPlayer4){
            let id ;

            if(spanPlayer1.dataset.cocher == "oui")
                    id= spanPlayer1.dataset.id;
            if(spanPlayer2.dataset.cocher == "oui")
                    id= spanPlayer2.dataset.id;
            if(spanPlayer3.dataset.cocher == "oui")
                    id= spanPlayer3.dataset.id;
            if(spanPlayer4.dataset.cocher == "oui")
                    id= spanPlayer4.dataset.id;

            return id;
        }

function updateBoxPlayer1(id){
    let partieJouer = getPartieJouer(id);

    let {players} = partieJouer;

    let {partie} = partieJouer;

    let point = document.querySelector("#box-player1 .point");

    let pointRestant = document.querySelector("#box-player1 .point-restant");

    let progressBar = document.querySelector("#box-player1 .progress-bar");

    point.innerHTML=`${players[0].points}/${partie.totalPoint} <span>pts</span>`;

    pointRestant.innerHTML=`${partie.totalPoint - players[0].points}/${partie.totalPoint} <span>pts</span>`;

    progressBar.style=`--width:${((players[0].points/partie.totalPoint)*100).toFixed(2)}`;

}


function updateBoxPlayer2(id){
    let partieJouer = getPartieJouer(id);

    let {players} = partieJouer;

    let {partie} = partieJouer;

    let point = document.querySelector("#box-player2 .point");

    let pointRestant = document.querySelector("#box-player2 .point-restant");

    let progressBar = document.querySelector("#box-player2 .progress-bar");

    point.innerHTML=`${players[1].points}/${partie.totalPoint} <span>pts</span>`;

    pointRestant.innerHTML=`${partie.totalPoint - players[1].points}/${partie.totalPoint} <span>pts</span>`;

    progressBar.style=`--width:${((players[1].points/partie.totalPoint)*100).toFixed(2)}`;
}


function updateBoxPlayer3(id){
    let partieJouer = getPartieJouer(id);

    let {players} = partieJouer;

    let {partie} = partieJouer;

    let point = document.querySelector("#box-player3 .point");

    let pointRestant = document.querySelector("#box-player3 .point-restant");

    let progressBar = document.querySelector("#box-player3 .progress-bar");

    point.innerHTML=`${players[2].points}/${partie.totalPoint} <span>pts</span>`;

    pointRestant.innerHTML=`${partie.totalPoint - players[2].points}/${partie.totalPoint} <span>pts</span>`;

    progressBar.style=`--width:${((players[2].points/partie.totalPoint)*100).toFixed(2)}`;
}


function updateBoxPlayer4(id){
    let partieJouer = getPartieJouer(id);

    let {players} = partieJouer;

    let {partie} = partieJouer;

    let point = document.querySelector("#box-player4 .point");

    let pointRestant = document.querySelector("#box-player4 .point-restant");

    let progressBar = document.querySelector("#box-player4 .progress-bar");

    point.innerHTML=`${players[3].points}/${partie.totalPoint} <span>pts</span>`;

    pointRestant.innerHTML=`${partie.totalPoint - players[3].points}/${partie.totalPoint} <span>pts</span>`;

    progressBar.style=`--width:${((players[3].points/partie.totalPoint)*100).toFixed(2)}`;
}

let suitePartieButton = document.querySelector("#suitePartieButton");

function pasMaintenant(){
    let notificationPresentation = document.querySelector("#notification-presentation");
    notificationPresentation.classList.add("hidden");
    marquagePartieScreen.classList.add("hidden");
    jouerPartieScreen.classList.remove("hidden");

}

function foncSuitePartie(){
   
     let notification3eJoueur = document.querySelector("#notification-3eJoueur");
     let notificationPresentation = document.querySelector("#notification-presentation");
     notificationPresentation.classList.add("hidden")
     notification3eJoueur.classList.remove("hidden")

     notification3eJoueur.querySelector("form").onsubmit=(e)=>{
        e.preventDefault();
       let select = notification3eJoueur.querySelector("form select");

       let option = select.options[select.selectedIndex];

       let main = marquagePartieScreen.querySelector("main");

       console.log("L'ID du Main : "+main.dataset.id*1);

       let partieJouer = getPartieJouer(main.dataset.id*1);

       let player3e = getPlayer(option.value*1);
       player3e.points=0;
       player3e.placeDebut="3e";
       player3e.placeFin="";

       let newPartieJouer = {
            partie: partieJouer.partie,
            players:[
                partieJouer.players[0],
                partieJouer.players[1],
                player3e,
                partieJouer.players[3]
            ],
            etat:"en cours"
       }

       newPartieJouer.players[0].placeDebut = newPartieJouer.players[0].placeFin;
       newPartieJouer.players[0].placeFin = "";
       newPartieJouer.players[0].points = 50;
       newPartieJouer.players[1].placeDebut = newPartieJouer.players[1].placeFin;
       newPartieJouer.players[1].placeFin = "";
       newPartieJouer.players[1].points = 0;
       newPartieJouer.players[3].placeDebut = newPartieJouer.players[3].placeFin;
       newPartieJouer.players[3].placeFin = "";
       newPartieJouer.players[3].points = -50;

      let idPartieJouer = addPartieJouer(newPartieJouer);
      notification3eJoueur.classList.add("hidden")
      marquagePartieScreen.classList.remove("hidden");
 
      remplirMarquagePartie(idPartieJouer);
       
     }
}

function supprimerPartieJouer(event,id,option){
    event.stopPropagation();
   let main = {};
   
    if(option == "terminer")
        main = partieTerminerScreen.querySelector("main");
    else
        main = partieEncoursScreen.querySelector("main");
    let buttons = main.querySelectorAll("button");
    
   deletePartieJouer(getPartieJouer(id));

   buttons.forEach(button=>{
        if(button.dataset.id==id)
            button.remove();
   })
   
}

