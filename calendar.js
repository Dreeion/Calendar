function setup() { 
    var m = month();
    var y = year();
    direction = 0;
  /* --- Calendrier ---*/
  GenererCalendrier(m,y,0);
  /* --- Formulaires ---*/
  
  var Pnom = createP('Nom*');
  Pnom.style('margin','0px');
  Pnom.style('margin-left','20px');
  Pnom.style('font-weight','bold');
  
  var inpNom = createInput('','required').size(AUTO, 35);
  inpNom.style('margin','2');
  inpNom.style('margin-left','10');
  inpNom.style('margin-bottom','24');
  inpNom.style('border-radius','10px');
  inpNom.style('border-color','#cce3ce');
  inpNom.style('border-width','2px');
  inpNom.style('border-style','solid');
  inpNom.input(myInputEvent);
  
  
  var PPrenom = createP('Prénom*');
  PPrenom.style('margin','0px');
  PPrenom.style('margin-left','20px');
  PPrenom.style('font-weight','bold');
  
  var inpPrenom = createInput('','required').size(AUTO, 35);
  inpPrenom.style('margin','2');
  inpPrenom.style('margin-left','10');
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
  
  var inpTel = createInput('','required').size(AUTO, 35);
  inpTel.style('margin','2');
  inpTel.style('margin-left','10');
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
  
  var inpEmail = createInput('','required').size(AUTO, 35);
  inpEmail.style('margin','2');
  inpEmail.style('margin-left','10');
  inpEmail.style('margin-bottom','24');
  inpEmail.style('border-radius','10px');
  inpEmail.style('border-color','#cce3ce');
  inpEmail.style('border-width','2px');
  inpEmail.style('border-style','solid');
  inpEmail.input(myInputEvent);
  
  button = createButton('Envoyer');
  button.position(255, 375);
  button.size(AUTO, 30);
  button.style('border-radius', '10px');
  button.style('border-color', '#cce3ce');
  button.style('border-width', '2px');
  button.style('border-style', 'solid');
  button.style('background-color', '#cce3ce');

  var dtDispo = createP('Dates disponible').position(400,AUTO);
  dtDispo.style('margin','0px');
  dtDispo.style('margin-left','20px');
  dtDispo.style('font-weight','bold');
  dtDispo.position(400, 55);
  dtDispo.style('z-index','3');
  
  var horairesDispo = createP('Horaires disponibles');
  horairesDispo.style('margin','0px');
  horairesDispo.style('margin-left','20px');
  horairesDispo.style('font-weight','bold');
  horairesDispo.position(745, 92);
  horairesDispo.style('z-index','3');
  
  
  button.mousePressed();
  
}

function enleverMois(){
  var m = month();
    var y = year(); effacerPage();
  GenererCalendrier(m,y,-1);

}

function ajouterMois(){
  var m = month();
    var y = year();
  effacerPage();
  GenererCalendrier(m,y,1);
}

function effacerPage() {
  PPage.remove();buttonG.remove();buttonD.remove();phrase.remove(); 
  day1.remove();day2.remove();day3.remove();day4.remove();day5.remove();day6.remove();
  day7.remove();day8.remove();day9.remove();day10.remove();day11.remove();day12.remove();
  day13.remove();day14.remove();day15.remove();day16.remove();day17.remove();day18.remove();
  day19.remove();day20.remove();day21.remove();day22.remove();day23.remove();day24.remove();
  day25.remove();day26.remove();day27.remove();day28.remove();
  if (typeof(day29) !== 'undefined' ){day29.remove();}
  if (typeof(day30) !== 'undefined' ){day30.remove();}
  if (typeof(day31) !== 'undefined' ){day31.remove();}
  
  
}

function selectionJour() {
}

function selectionHorraire(){
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}


function GenererCalendrier(m,y,c){
   
  var cnv = createCanvas(600, 500).position(400, 50);;
  fill(255,255,255,0);
  stroke("#cce3ce");strokeWeight(2);
  rect(20, 30, 300, 350, 20);
  rect(340, 30, 200, 350, 20);

  var Pselection = createP('chargement en cours');
  Pselection.style('margin','0px');
  Pselection.style('margin-left','20px');
  Pselection.style('font-weight','bold');
  Pselection.style('z-index','3');
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
  buttonD.mousePressed(ajouterMois);
  
    var mois = afficherMois(m);
    
  noStroke();fill(0,0,0,255);
    text( 'lun', 35, 80);
    text( 'mar', 77, 80);
    text( 'mer', 119, 80);
    text( 'jeu', 161, 80);
    text( 'ven', 203, 80);
    text( 'sam', 245, 80);
    text( 'dim', 287, 80);
    
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
   console.log(afficherMois(m) + "  " , annee ,nbJoursTotal);
    
    if ( yc===0 && xc<buttonExist(y,m)){exist = false;}
    
    
    var PPage = createP(afficherMois(m) + ' ' + annee );
    PPage.style('margin','0px');
    PPage.style('margin-left','20px');
    PPage.style('font-weight','bold');
    PPage.style('z-index','3');
    PPage.position(500, 90);
    PPage.id('PPage');
    
    
    for (var yc=0; yc<6;){
    	if ( yc==0 && xc<nbJoursTotal){exist=true;}
    	for (var xc=0; xc<7; xc=xc+1){
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
                button.id('day' + i);
                i=i+1;if (i>nb_Jours(m,y)){yc=10; xc=7;}  
                button.mousePressed(selectionJour);
                
            }
            exist=false;
        }
        yc=yc+1;
    }
    i = 1;
    for (var xh=0; xh<2;xh=xh+1){
        for (var yh=0; yh<6; yh=yh+1){
                button = createButton("00:00");
                button.position(xh*80+765, yh*47+150);
                button.style('z-index','3');
                button.size(70, 32);
                button.style('border-radius', '25px');
                button.style('border-color', '#cce3ce');
                button.style('border-width', '2px');
                button.style('border-style', 'solid');
                button.style('background-color', '#FFF');
                button.id('day' + i);
                i=i+1; 
                button.mousePressed(selectionHorraire);
        }
    }
    
    
    
   phrase.remove(); 
    var Pselection = createP('Prendre rendez-vous pour le Lundi 16' + ' ' + afficherMois(m) + ' ' + annee + ' ' + 'de 13h45 à 14h45.');
  Pselection.style('margin','0px');
  Pselection.style('margin-left','20px');
  Pselection.style('font-weight','bold');
  Pselection.style('z-index','3');
  Pselection.position(255, 460);
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

function afficherMois(m){
    if (m===1){return '  Janvier';}
    if (m===2){return '  Février';}
    if (m===3){return '     Mars';}
    if (m===4){return '    Avril';}
    if (m===5){return '      Mai';}
    if (m===6){return '     Juin';}
    if (m===7){return '  Juillet';}
    if (m===8){return '     Aout';}
    if (m===9){return 'Septembre';}
    if (m===10){return ' Octobre';}
    if (m===11){return 'Novembre';}
    if (m===12){return 'Décembre';}
}

function nb_Jours(m,y){
    if (m===1){return 31;}
    if (m===2 && y%4 == 0 && y%100 != 0 || m===2 && y%400 ==0){return 29;}
    if (m===2){return 28;}
    if (m===3){return 31;}
    if (m===4){return 30;}
    if (m===5){return 31;}
    if (m===6){return 30;}
    if (m===7){return 31;}
    if (m===8){return 31;}
    if (m===9){return 30;}
    if (m===10){return 31;}
    if (m===11){return 30;}
    if (m===12){return 31;}
  
}
