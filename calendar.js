function setup() { 
	m = month();
    y = year();
    d = day();
    da = day();
    he = 1;
    direction = 0;
    nomJour = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
    nomMois = [' ','Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    HorairesExistant = ['9h00 à 9h45','9h45 à 10h30','10h45 à 11h30','11h30 à 12h30','13h30 à 14h45','14h45 à 15h30','15h45 à 16h30','16h30 à 17h15','17h15 à 18h00','18h00 à 18h45','18h45 à 19h30','19h30 à 20h15'];
    Phrase = [];
    Phrase[1]= ' ';
    nomJourAfficher = [];
    DateSelectionner = [];
    loadPhrase = true;
    
    
  /* --- Calendrier ---*/
  GenererCalendrier(m,y,0,d,he);
  /* --- Formulaires ---*/
  
  var Pnom = createP('Nom*');
  Pnom.style('margin','0px');
  Pnom.style('margin-left','20px');
  Pnom.style('font-weight','bold');
  Pnom.style('font-family','Cooper Hewitt');
  
  var inpNom = createInput('','required').size(AUTO, 35);
  inpNom.style('margin','2');
  inpNom.style('margin-left','10');
  inpNom.style('margin-bottom','24');
  inpNom.style('padding-left','5');
  inpNom.style('border-radius','10px');
  inpNom.style('border-color','#cce3ce');
  inpNom.style('border-width','2px');
  inpNom.style('border-style','solid');
  inpNom.input(myInputEvent);
  
  
  var PPrenom = createP('Prénom*');
  PPrenom.style('margin','0px');
  PPrenom.style('margin-left','20px');
  PPrenom.style('font-weight','bold');
  PPrenom.style('font-family','Cooper Hewitt');
  
  var inpPrenom = createInput('','required').size(AUTO, 35);
  inpPrenom.style('margin','2');
  inpPrenom.style('margin-left','10');
  inpPrenom.style('padding-left','5');
  inpPrenom.style('margin-bottom','24');
  inpPrenom.style('border-radius','10px');
  inpPrenom.style('border-color','#cce3ce');
  inpPrenom.style('border-width','2px');
  inpPrenom.style('border-style','solid');
  inpPrenom.input(myInputEvent);
  
  var PTel = createP('Numéro de téléphone*');
  PTel.style('margin','0px');
  PTel.style('margin-left','20px');
  PTel.style('font-weight','bold');
  PTel.style('font-family','Cooper Hewitt');
  
  var inpTel = createInput('','required').size(AUTO, 35);
  inpTel.style('margin','2');
  inpTel.style('margin-left','10');
  inpTel.style('padding-left','5');
  inpTel.style('margin-bottom','24');
  inpTel.style('border-radius','10px');
  inpTel.style('border-color','#cce3ce');
  inpTel.style('border-width','2px');
  inpTel.style('border-style','solid');
  inpTel.input(myInputEvent);
  
  var PEmail = createP('Email*');
  PEmail.style('margin','0px');
  PEmail.style('margin-left','20px');
  PEmail.style('font-weight','bold');
  PEmail.style('font-family','Cooper Hewitt');
  
  var inpEmail = createInput('','required').size(AUTO, 35);
  inpEmail.style('margin','2');
  inpEmail.style('margin-left','10');
  inpEmail.style('margin-bottom','24');
  inpEmail.style('padding-left','5');
  inpEmail.style('border-radius','10px');
  inpEmail.style('border-color','#cce3ce');
  inpEmail.style('border-width','2px');
  inpEmail.style('border-style','solid');
  inpEmail.input(myInputEvent);
  
  button = createButton('Envoyer');
  button.position(150, 440);
  button.size(AUTO, 30);
  button.style('border-radius', '10px');
  button.style('border-color', '#cce3ce');
  button.style('border-width', '2px');
  button.style('border-style', 'solid');
  button.style('background-color', '#cce3ce');
  button.style('cursor','pointer');
  button.style('font-family','Cooper Hewitt');

  var dtDispo = createP('Dates disponibles').position(400,AUTO);
  dtDispo.style('margin','0px');
  dtDispo.style('margin-left','20px');
  dtDispo.style('font-weight','bold');
  dtDispo.position(400, 55);
  dtDispo.style('z-index','3');
  dtDispo.style('font-family','Cooper Hewitt');
  
  var horairesDispo = createP('Horaires disponibles');
  horairesDispo.style('margin','0px');
  horairesDispo.style('margin-left','20px');
  horairesDispo.style('font-weight','bold');
  horairesDispo.position(775, 92);
  horairesDispo.style('z-index','3');
  horairesDispo.style('font-family','Cooper Hewitt');

  var Psemaine = createP('lun mar mer jeu ven sam dim').size(280, 20);
  Psemaine.style('margin','0px');
  Psemaine.style('margin-left','20px');
  Psemaine.style('word-spacing','14px');
  Psemaine.style('z-index','2');
  Psemaine.position(415, 125);
  Psemaine.style('font-family','Cooper Hewitt');

  var Pchamp = createP('Champs Obligatoires *').size(200, 20);
  Pchamp.style('margin','0px');
  Pchamp.style('margin-left','20px');
  Pchamp.style('font-size','15');
  Pchamp.style('opacity', '0.5');
  Pchamp.style('z-index','3');
  Pchamp.position(45, 350);
  Pchamp.style('font-family','Cooper Hewitt');
  
  var PRDV = createP('Prendre rendez-vous pour le');
  PRDV.style('margin','0px');
  PRDV.style('margin-left','20px');
  PRDV.style('font-weight','bold');
  PRDV.style('font-family','Cooper Hewitt');
  PRDV.style('z-index','3');
  PRDV.style('text-align', 'center');
  PRDV.position(30, 380);
  PRDV.size(300, AUTO);
  
  
  ronbleu = createButton(' ');
  ronbleu.position(735, 440);
  ronbleu.size(15, 15);
  ronbleu.style('border-radius', '50%');
  ronbleu.style('border-color', 'rgb(179, 225, 247)');
  ronbleu.style('border-width', '1px');
  ronbleu.style('border-style', 'solid');
  ronbleu.style('background-color', 'rgb(179, 225, 247)')

  var Pdateheureselec = createP('Date et heure sélectionnée').size(150, 25);
  Pdateheureselec.style('margin','0px');
  Pdateheureselec.style('margin-left','20px');
  Pdateheureselec.style('font-size','15');
  Pdateheureselec.style('opacity', '0.5');
  Pdateheureselec.style('z-index','3');
  Pdateheureselec.position(740, 440);
  Pdateheureselec.style('font-family','Cooper Hewitt');

  ronvert = createButton(' ');
  ronvert.position(860, 440);
  ronvert.size(15, 15);
  ronvert.style('border-radius', '50%');
  ronvert.style('border-color', '#cce3ce');
  ronvert.style('border-width', '1px');
  ronvert.style('border-style', 'solid');
  ronvert.style('background-color', '#cce3ce');

  var Pdateheuredispo = createP('Dates et heures disponibles').size(150, 25);
  Pdateheuredispo.style('margin','0px');
  Pdateheuredispo.style('margin-left','20px');
  Pdateheuredispo.style('font-size','15');
  Pdateheuredispo.style('opacity', '0.5');
  Pdateheuredispo.style('z-index','3');
  Pdateheuredispo.position(865, 440);
  Pdateheuredispo.style('fon-faily','Cooper Hewitt');
  
  button.mousePressed();
  
}

function enleverMois(){
	effacerPage();
	GenererCalendrier(m,y,-1,da,he);

}

function ajouterMois(){
  effacerPage();
  GenererCalendrier(m,y,1,da,he);
}

function effacerPage() {
  PPage.remove();buttonG.remove();buttonD.remove();phrase.remove(); 
  for(var i=1;i<=28;i++){
	  var d = document.querySelector("#day"+i);
	  d.remove();
  }
  
  if (typeof(day29) !== 'undefined' ){day29.remove();}
  if (typeof(day30) !== 'undefined' ){day30.remove();}
  if (typeof(day31) !== 'undefined' ){day31.remove();}
  
  for(var i=1;i<=12;i++){
	  var h = document.querySelector("#heure"+i);
	  h.remove();
  }

  
}

function selectionJour() {
	 da="";
	 var char = "";
	 char = this.id().split('');
	 if (char[4]==null){da=char[3];}
	 else {da=(char[3]+char[4]);}
	 effacerPage();
	 loadPhrase = true;
	 GenererCalendrier(m,y,0,da,he);

}

function selectionHoraire() {
	 var char = "";
	 char = this.id().split('');
	 if (char[6]==null){he=char[5];}
	 else {he=(char[5]+char[6]);}
	 loadPhrase = true;
	 effacerPage();
	 GenererCalendrier(m,y,0,da,he);

}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

// --------------------------------------------------GenererCalendrier--------------------------------------- \\

function GenererCalendrier(m,y,c,d,he){
   
  var cnv = createCanvas(600, 500).position(400,50);;
  fill(255,255,255,0);
  stroke("#cce3ce");strokeWeight(2);
  rect(20, 30, 300, 350, 20);
  rect(340, 30, 250, 350, 20);

  var Pselection = createP('chargement en cours');
  Pselection.style('margin','0px');
  Pselection.style('margin-left','20px');
  Pselection.style('font-weight','bold');
  Pselection.style('z-index','3');
  Pselection.style('font-family','Cooper Hewitt');
  Pselection.position(255, 460);
  Pselection.id('phrase');
  
  
  buttonG = createButton('<--');
  buttonG.position(425, 90);
  buttonG.size(50, 25);
  buttonG.style('border-radius', '10px');
  buttonG.style('border-color', '#cce3ce');
  buttonG.style('border-width', '2px');
  buttonG.style('border-style', 'solid');
  buttonG.style('background-color', '#FFF');
  buttonG.style('z-index','3');
  buttonG.style('cursor','pointer');
  buttonG.mousePressed(enleverMois);
  
  
  
  buttonD = createButton('-->');
  buttonD.position(665, 90);
  buttonD.size(50, 25);
  buttonD.style('border-radius', '10px');
  buttonD.style('border-color', '#cce3ce');
  buttonD.style('border-width', '2px');
  buttonD.style('border-style', 'solid');
  buttonD.style('background-color', '#FFF');
  buttonD.style('z-index','3');
  buttonD.style('cursor','pointer');
  buttonD.mousePressed(ajouterMois);
  
    var mois = nomMois[m];
    
     
    stroke("#cce3ce");strokeWeight(2);
    
    exist = true;
    var nbJoursMois = 31;
    
    direction = direction + c;
    
    m = m + direction;
    for (m;m > 12 || m <1;) {
      if (m>12){m=m-12;y=y+1;
      }
      if (m<1){m=m+12;y=y-1;
      }
    }

    i = 1;
    
    if (y==2018 && m==01){buttonG.remove();}
    
    nbJoursMois = nb_Jours(m,y);
    joursRestant = nbJoursMois%7; 
    
   nbJoursTotal = buttonExist(y+1,m);
   
    
    if ( yc===0 && xc<buttonExist(y,m)){exist = false;}
    
    
    var PPage = createP(nomMois[m] + ' ' + annee );
    console.log(m);
    PPage.style('margin','0px');
    PPage.style('margin-left','20px');
    PPage.style('font-weight','bold');
    PPage.style('z-index','3');
    PPage.style('font-family','Cooper Hewitt');
    PPage.position(500, 90);
    PPage.id('PPage');

    if (loadPhrase){
      Phrase[1] = nomJourAfficher[d];
     if (Phrase[1] == null) {Phrase[1] = ' ' ;}
     Phrase[2] = d;
     Phrase[3] = nomMois[m];
     Phrase[4] = annee;
     Phrase[5] = HorairesExistant[he-1];
     loadPhrase=false
     }

    for (var yc=0; yc<6;){
    	for (var xc=0; xc<7; xc=xc+1){
    	if ( yc==0 && xc<nbJoursTotal){exist=true;}
          if (!exist){
                button = createButton(i);
                if (yc==0 && nbJoursTotal==0 && i==1){xc=0;}
                button.position(xc*42+430, yc*47+150);
                button.style('z-index','3');
                button.size(32, 32);
                button.style('border-radius', '25px');
                button.style('border-color', '#cce3ce');
                button.style('border-width', '2px');
                button.style('border-style', 'solid');
                button.style('background-color', '#FFF');
                if (i==da && nomMois[m]== Phrase[3] && annee== Phrase[4]){button.style('background-color', ' rgb(179, 225, 247)');}
                button.style('cursor','pointer');
                button.id('day' + i);
                nomJourAfficher[i]=nomJour[xc];
                i=i+1;if (i>nb_Jours(m,y)){yc=10; xc=7;}  
                button.mousePressed(selectionJour);
            }
            exist=false;
        }
        yc=yc+1;
    }
    i = 1;
   for (var xh=0; xh<2;xh++){
        for (var yh=0; yh<6; yh++){
                button = createButton(HorairesExistant[i-1]);
                button.position(xh*112+757, yh*47+150);
                button.style('z-index','3');
                button.style('font-family','Cooper Hewitt');
                button.size(102, 32);
                button.style('border-radius', '25px');
                button.style('border-color', '#cce3ce');
                button.style('border-width', '2px');
                button.style('border-style', 'solid');
                button.style('background-color', '#FFF');
                if (i==he ){button.style('background-color', ' rgb(179, 225, 247)');}
                button.style('cursor','pointer');
                button.id('heure' + i);
                i=i+1; 
                button.mousePressed(selectionHoraire);
        }
    }

   phrase.remove(); 
  /*var Pselection = createP('Prendre rendez-vous pour le '+ nomJourAfficher[d] + ' ' + d + ' ' + nomMois[m] + ' ' + annee + ' de ' + HorairesExistant[he-1] +' ?');*/
  
  var Pselection = createP(Phrase[1] + ' ' + Phrase[2] + ' ' + Phrase[3] + ' ' + Phrase[4] + ' de ' + Phrase[5] +' ?');
  
  Pselection.style('margin','0px');
  Pselection.style('margin-left','20px');
  Pselection.style('font-weight','bold');
  Pselection.style('font-family','Cooper Hewitt');
  Pselection.style('z-index','3');
  Pselection.style('text-align', 'center');
  Pselection.position(27, 402);
  Pselection.size(330, AUTO);
  Pselection.id('phrase');
  
  
  
}

function buttonExist(y,m){
  mois=0;
  annee=2018;
  nbJoursTotal=0;
  nbDecal = 0;
  nbMois =  m + (y - 2019)*12;
  
  for (var i = 0;i<nbMois;i++){
    mois=mois+1;
    
    if(mois>12){
      mois=1;
      annee=annee+1;
      }
    
    if (i===nbMois-1){nbDecal = nbJoursTotal}
    nbJoursTotal = nbJoursTotal + nb_Jours(mois,annee);
    
    if (nbJoursTotal>6){nbJoursTotal=nbJoursTotal%7;}
     
    
  }
  
  return nbDecal;
}

function nb_Jours(m,y){
    if (m===1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){return 31;}
    if (m===2 && y%4 == 0 && y%100 != 0 || m===2 && y%400 ==0){return 29;}
    if (m===2){return 28;}
    if (m===4 || m==6 || m==9 || m==11){return 30;}
  
}
