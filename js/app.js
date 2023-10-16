
if(localStorage.getItem("parties") == null){
    let parties = [
        {
            idPartie: 0,
            nomPartie: "Partie 1",
            totalPoint: 1000
        },{
            idPartie: 1,
            nomPartie: "Partie 2",
            totalPoint: 1500
        }
    ]
   
   updateParties(parties);
    

}

if(localStorage.getItem("partiesJouer") == null)
    localStorage.setItem("partiesJouer",JSON.stringify([]));

if(localStorage.getItem("players")==null)
    localStorage.setItem("players",JSON.stringify([]));





//    fonction sur les joueurs

function addPlayer(surnom){
    let players = getPlayers();
    let player = {
            idPlayer: players.length,
            pseudo:surnom,
            nombre1er: 0,
            nombre2e:0,
            nombre3e:0,
            nombreChien:0

        }
   
    players.push(player);
    localStorage.setItem("players",JSON.stringify(players));
}

function getPlayers(){
   return JSON.parse(localStorage.getItem("players"));
}

function getPlayers1er(){
    let players = getPlayers();

    let finalPlayers = [];

    players.forEach(player=>{
        if(player.nombre1er > 0)
            finalPlayers.push(player);
    })

    finalPlayers.sort((a,b) => b.nombre1er - a.nombre1er);

    return finalPlayers;
}

function getPlayers2e(){
    let players = getPlayers();

    let finalPlayers = [];

    players.forEach(player=>{
        if(player.nombre2e > 0)
            finalPlayers.push(player);
    })

    finalPlayers.sort((a,b) => b.nombre2e - a.nombre2e);

    return finalPlayers;
}

function getPlayers3e(){
    let players = getPlayers();

    let finalPlayers = [];

    players.forEach(player=>{
        if(player.nombre3e > 0)
            finalPlayers.push(player);
    })

    finalPlayers.sort((a,b) => b.nombre3e - a.nombre3e);

    return finalPlayers;
}

function getPlayersChien(){
    let players = getPlayers();

    let finalPlayers = [];

    players.forEach(player=>{
        if(player.nombreChien > 0)
            finalPlayers.push(player);
    })

    finalPlayers.sort((a,b) => b.nombreChien - a.nombreChien);

    return finalPlayers;
}

function getSpecialeListePlayers(players){
    let fullPlayers = getPlayers();

    let finalListePlayers=[];

    fullPlayers.forEach(player=>{
        if(players[0].idPlayer != player.idPlayer &&
             players[1].idPlayer != player.idPlayer && 
             players[3].idPlayer != player.idPlayer){

                finalListePlayers.push(player);
        }
    })

    return finalListePlayers;
}

function getPlayer(id){
  let players = getPlayers(),
    playerFinal;

  players.forEach(player =>{
    if(id == player.idPlayer)
        playerFinal = player;
  })

  return playerFinal;

}



function updatePlayer(p){
    let players = getPlayers();
    // i=0;

    players.forEach(player=>{
        if(player.idPlayer == p.idPlayer){
            player.pseudo=p.pseudo;
            player.nombre1er = p.nombre1er;
            player.nombre2e = p.nombre2e;
            player.nombre3e = p.nombre3e;
            player.nombreChien = p.nombreChien; 
        }
            
        // i++;
    })

    updatePlayerNameInPartieJouer(p.idPlayer,p.pseudo);

    updatePlayers(players);
}

function deleteAllPlayers(){
    localStorage.setItem("players",JSON.stringify([]));
}

function updatePlayers(p){
    localStorage.setItem("players",JSON.stringify(p));
}

// fonction sur les parties

function addPartie(p){
    let parties = getParties();
    p.idPartie = parties.length;
    parties.push(p);
    updateParties(players);

}

function getPartie(id){
    let parties = getParties(),
      partieFinal;
  
    parties.forEach(partie =>{
      if(id == partie.idPartie)
          partieFinal = partie;
    })
  
    return partieFinal;
  
  }


function updatePartie(p){
    let parties = getParties();
    // i=0;

    parties.forEach(partie=>{
        if(partie.idPartie == p.idPartie){
            partie.totalPoint=p.totalPoint;
        }
            
        // i++;
    })

    updateParties(parties);
}

function getParties(){
    return JSON.parse(localStorage.getItem("parties"));
}

function updateParties(p){
    localStorage.setItem("parties",JSON.stringify(p));
}

// Fonction partie jouer

function addPartieJouer(p){
    let partiesJouer = getPartiesJouer();
    if(partiesJouer.length == 0)
         p.idPartieJouer = partiesJouer.length;
    else
        p.idPartieJouer = partiesJouer[partiesJouer.length-1].idPartieJouer+1;

    
       

    const dateActuelle  = new Date();

    p.datePartie = `${dateActuelle.getDate()}/${dateActuelle.getMonth()+1}/${dateActuelle.getFullYear()}`;
    partiesJouer.push(p);

    updatePartiesJouer(partiesJouer);
    return p.idPartieJouer;
}

function deletePartieJouer(p){
    let partiesJouer = getPartiesJouer();

    for(let i=partiesJouer.length - 1;i >= 0;i--){
        if(partiesJouer[i].idPartieJouer == p.idPartieJouer)
            partiesJouer.splice(i,1);
    }

    updatePartiesJouer(partiesJouer);
}

function getPartiesJouer(){
    return JSON.parse(localStorage.getItem("partiesJouer"));
}

function getPartiesJouerEncours(){
    let partiesJouer = getPartiesJouer();
    let partiesJouerEncours =[];

    partiesJouer.forEach(partieJouer =>{
        if(partieJouer.etat == "en cours"){
            partiesJouerEncours.push(partieJouer);
        }
    })

    return partiesJouerEncours;
}

function getPartiesJouerTerminer(){
    let partiesJouer = getPartiesJouer();
    let partieJouerTerminer =[];

    partiesJouer.forEach(partieJouer =>{
        if(partieJouer.etat == "terminer"){
            partieJouerTerminer.push(partieJouer);
        }
    })

    return partieJouerTerminer;
}


function getPartieJouer(id){
    let partiesJouer = getPartiesJouer(),
      partieJouerFinal;
  
      partiesJouer.forEach(partieJouer =>{
      if(id == partieJouer.idPartieJouer)
        partieJouerFinal  = partieJouer;
    })
  
   
    return partieJouerFinal;
}

function updatePartieJouer(p){
    let partiesJouer = getPartiesJouer()
    let partieTerminer = false;
   
    partiesJouer.forEach(partieJouer=>{
        if(partieJouer.idPartieJouer == p.idPartieJouer){
            // partieJouer.idPartieJouer = p.idPartieJouer
            partieJouer.datePartie = p.datePartie
            partieJouer.etat = p.etat
            partieJouer.partie = p.partie
            partieJouer.players = p.players
            if(p.players[0].placeFin == "1er"){
                partieTerminer = true;
                partieJouer.etat="terminer";
            }
                
        }  
        
       
    })


//    console.log(partiesJouer[0].players[0])
    updatePartiesJouer(partiesJouer);
    return partieTerminer;
}

function updatePlayerNameInPartieJouer(idPlayer,name){
    let partiesJouer = getPartiesJouer();

    partiesJouer.forEach(partieJouer =>{
        partieJouer.players.forEach(player=>{
            if(player.idPlayer == idPlayer)
                player.pseudo = name;
                
        })
    })
   
    updatePartiesJouer(partiesJouer);

}

function updatePartiesJouer(p){
    localStorage.setItem("partiesJouer",JSON.stringify(p));
}

function pasDeDoublons(tableau){
    const ensemble = new Set(tableau);
    return ensemble.size === tableau.length;
}