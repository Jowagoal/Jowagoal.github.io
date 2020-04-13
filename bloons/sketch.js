let theShop = [];

let theBloons = [];

let theTrack = [];
let playAreaWidth;

let theTowers = [];
//variables
let theDartMonkeys = [];
let numDartMonkeys = 0;
let theDarts = [];
let addingDartMonkey = false;

let theTackShooters = [];
let numTackShooters = 0;
let addingTackShooter = false;

let theIceMonkeys = [];
let numIceMonkeys = 0;
let addingIceMonkey = false;

let money = 650;
let lives = 150;

let theRounds = [];
let roundStarted = false;
let roundCounter = -1;
let bloonCounter = 0;

let redBloonTypes = [];
let blueBloonTypes = [];
let greenBloonTypes = [];
let yellowBloonTypes = [];
let pinkBloonTypes = [];
let blackBloonTypes = [];
let whiteBloonTypes = [];
let purpleBloonTypes = [];
let zebraBloonTypes = [];
let rainbowBloonTypes = [];
let ceramicBloonTypes = [];
let leadBloonTypes = [];
let MOABBloonTypes = [];
let BFBBloonTypes = [];
let ZOMGBloonTypes = [];
let BADBloonTypes = [];
let DDTBloonTypes = [];

function preload(){
  redNormal = loadImage('assets/BTD6Red.png');
  redCamo = loadImage('assets/BTD6CamoRed.png');
  redRegrow = loadImage('assets/BTD6RegrowRed.png');
  redCamoRegrow = loadImage('assets/BTD6CamoRegrowRed.png');
  redBloonTypes.push(redNormal);
  redBloonTypes.push(redCamo);
  redBloonTypes.push(redRegrow);
  redBloonTypes.push(redCamoRegrow);
  blueNormal = loadImage('assets/BTD6Blue.png');
  blueCamo = loadImage('assets/BTD6CamoBlue.png');
  blueRegrow = loadImage('assets/BTD6RegrowBlue.png');
  blueCamoRegrow = loadImage('assets/BTD6CamoRegrowBlue.png');
  blueBloonTypes.push(blueNormal);
  blueBloonTypes.push(blueCamo);
  blueBloonTypes.push(blueRegrow);
  blueBloonTypes.push(blueCamoRegrow);
  greenNormal = loadImage('assets/BTD6Green.png');
  greenCamo = loadImage('assets/BTD6CamoGreen.png');
  greenRegrow = loadImage('assets/BTD6RegrowGreen.png');
  greenCamoRegrow = loadImage('assets/BTD6CamoRegrowGreen.png');
  greenBloonTypes.push(greenNormal);
  greenBloonTypes.push(greenCamo);
  greenBloonTypes.push(greenRegrow);
  greenBloonTypes.push(greenCamoRegrow);
  yellowNormal = loadImage('assets/BTD6Yellow.png');
  yellowCamo = loadImage('assets/BTD6CamoYellow.png');
  yellowRegrow = loadImage('assets/BTD6RegrowYellow.png');
  yellowCamoRegrow = loadImage('assets/BTD6CamoRegrowYellow.png');
  yellowBloonTypes.push(yellowNormal);
  yellowBloonTypes.push(yellowCamo);
  yellowBloonTypes.push(yellowRegrow);
  yellowBloonTypes.push(yellowCamoRegrow);
  pinkNormal = loadImage('assets/BTD6Pink.png');
  pinkCamo = loadImage('assets/BTD6CamoPink.png');
  pinkRegrow = loadImage('assets/BTD6RegrowPink.png');
  pinkCamoRegrow = loadImage('assets/BTD6CamoRegrowPink.png');
  pinkBloonTypes.push(pinkNormal);
  pinkBloonTypes.push(pinkCamo);
  pinkBloonTypes.push(pinkRegrow);
  pinkBloonTypes.push(pinkCamoRegrow);
  blackNormal = loadImage('assets/BTD6Black.png');
  blackCamo = loadImage('assets/BTD6CamoBlack.png');
  blackRegrow = loadImage('assets/BTD6RegrowBlack.png');
  blackCamoRegrow = loadImage('assets/BTD6CamoRegrowBlack.png');
  blackBloonTypes.push(blackNormal);
  blackBloonTypes.push(blackCamo);
  blackBloonTypes.push(blackRegrow);
  blackBloonTypes.push(blackCamoRegrow);
  whiteNormal = loadImage('assets/BTD6White.png');
  whiteCamo = loadImage('assets/BTD6CamoWhite.png');
  whiteRegrow = loadImage('assets/BTD6RegrowWhite.png');
  whiteCamoRegrow = loadImage('assets/BTD6CamoRegrowWhite.png');
  whiteBloonTypes.push(whiteNormal);
  whiteBloonTypes.push(whiteCamo);
  whiteBloonTypes.push(whiteRegrow);
  whiteBloonTypes.push(whiteCamoRegrow);
  purpleNormal = loadImage('assets/BTD6Purple.png');
  purpleCamo = loadImage('assets/BTD6CamoPurple.png');
  purpleRegrow = loadImage('assets/BTD6RegrowPurple.png');
  purpleCamoRegrow = loadImage('assets/BTD6CamoRegrowPurple.png');
  purpleBloonTypes.push(purpleNormal);
  purpleBloonTypes.push(purpleCamo);
  purpleBloonTypes.push(purpleRegrow);
  purpleBloonTypes.push(purpleCamoRegrow);
  zebraNormal = loadImage('assets/BTD6Zebra.png');
  zebraCamo = loadImage('assets/BTD6CamoZebra.png');
  zebraRegrow = loadImage('assets/BTD6RegrowZebra.png');
  zebraCamoRegrow = loadImage('assets/BTD6CamoRegrowZebra.png');
  zebraBloonTypes.push(zebraNormal);
  zebraBloonTypes.push(zebraCamo);
  zebraBloonTypes.push(zebraRegrow);
  zebraBloonTypes.push(zebraCamoRegrow);
  rainbowNormal = loadImage('assets/BTD6Rainbow.png');
  rainbowCamo = loadImage('assets/BTD6CamoRainbow.png');
  rainbowRegrow = loadImage('assets/BTD6RegrowRainbow.png');
  rainbowCamoRegrow = loadImage('assets/BTD6CamoRegrowRainbow.png');
  rainbowBloonTypes.push(rainbowNormal);
  rainbowBloonTypes.push(rainbowCamo);
  rainbowBloonTypes.push(rainbowRegrow);
  rainbowBloonTypes.push(rainbowCamoRegrow);
  ceramicNormal = loadImage('assets/BTD6Ceramic.png');
  ceramicCamo = loadImage('assets/BTD6CamoCeramic.png');
  ceramicRegrow = loadImage('assets/BTD6RegrowCeramic.png');
  ceramicCamoRegrow = loadImage('assets/BTD6CamoRegrowCeramic.png');
  ceramicFortified = loadImage('assets/FortifiedCeramic.png');
  ceramicFortifiedCamo = loadImage('assets/FortifiedCamoCeramic.png');
  ceramicFortifiedRegrow = loadImage('assets/FortifiedRegrowCeramic.png');
  ceramicFortifiedCamoRegrow = loadImage('assets/FortifiedCamoRegrowCeramic.png');
  ceramicBloonTypes.push(ceramicNormal);
  ceramicBloonTypes.push(ceramicCamo);
  ceramicBloonTypes.push(ceramicRegrow);
  ceramicBloonTypes.push(ceramicCamoRegrow);
  ceramicBloonTypes.push(ceramicFortified);
  ceramicBloonTypes.push(ceramicFortifiedCamo);
  ceramicBloonTypes.push(ceramicFortifiedRegrow);
  ceramicBloonTypes.push(ceramicFortifiedCamoRegrow);
  leadNormal = loadImage('assets/BTD6Lead.png');
  leadCamo = loadImage('assets/BTD6CamoLead.png');
  leadRegrow = loadImage('assets/BTD6RegrowLead.png');
  leadCamoRegrow = loadImage('assets/BTD6CamoRegrowLead.png');
  leadFortified = loadImage('assets/FortifiedLead.png');
  leadFortifiedCamo = loadImage('assets/FortifiedCamoLead.png');
  leadFortifiedRegrow = loadImage('assets/FortifiedRegrowLead.png');
  leadFortifiedCamoRegrow = loadImage('assets/FortifiedCamoRegrowLead.png');
  leadBloonTypes.push(leadNormal);
  leadBloonTypes.push(leadCamo);
  leadBloonTypes.push(leadRegrow);
  leadBloonTypes.push(leadCamoRegrow);
  leadBloonTypes.push(leadFortified);
  leadBloonTypes.push(leadFortifiedCamo);
  leadBloonTypes.push(leadFortifiedRegrow);
  leadBloonTypes.push(leadFortifiedCamoRegrow);
  MOABNormal = loadImage('assets/BTD6MOAB.png');
  MOABFortified = loadImage('assets/BTD6FortifiedMOAB.png');
  MOABBloonTypes.push(MOABNormal);
  MOABBloonTypes.push(MOABFortified);
  BFBNormal = loadImage('assets/BTD6BFB.png');
  BFBFortified = loadImage('assets/BTD6FortifiedBFB.png');
  BFBBloonTypes.push(BFBNormal);
  BFBBloonTypes.push(BFBFortified);
  ZOMGNormal = loadImage('assets/BTD6ZOMG.png');
  ZOMGFortified = loadImage('assets/BTD6FortifiedZOMG.png');
  ZOMGBloonTypes.push(ZOMGNormal);
  ZOMGBloonTypes.push(ZOMGFortified);
  BADNormal = loadImage('assets/BTD6BAD.png');
  BADFortified = loadImage('assets/BTD6FortifiedBAD.png');
  BADBloonTypes.push(BADNormal);
  BADBloonTypes.push(BADFortified);
  DDTNormal = loadImage('assets/BTD6DDT.png');
  DDTFortified = loadImage('assets/BTD6FortifiedDDT.png');
  DDTBloonTypes.push(DDTNormal);
  DDTBloonTypes.push(DDTFortified);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  playAreaWidth = width-300;
  strokeWeight(3);
  imageMode(CENTER);
  createTrack();

  let dm = {
    x:playAreaWidth+300*3/10,
    y:height*2/8,
    w:300*1/5,
    h:300*1/5,
    name:"Dart Monkey",
    cost:140
  };
  let ts = {
    x:playAreaWidth+300*7/10,
    y:height*2/8,
    w:300*1/5,
    h:300*1/5,
    name:"Tack Shooter",
    cost:300
  };
  let im = {
    x:playAreaWidth+300*3/10,
    y:height*4/8,
    w:300*1/5,
    h:300*1/5,
    name:"Ice Monkey",
    cost:205
  };
  theShop.push(dm);
  theShop.push(ts);
  theShop.push(im);

  let r1 = [];
  for(var i=0; i<20; i++){
    r1.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r1.push(60);
  }
  let r2 = [];
  for(var i=0; i<35; i++){
    r2.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r2.push(40);
  }
  let r3 = [];
  for(var i=0; i<12; i++){
    r3.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r3.push(40);
  }
  for(var i=0; i<5; i++){
    r3.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r3.push(40);
  }
  for(var i=0; i<13; i++){
    r3.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r3.push(40);
  }
  let r4 = [];
  for(var i=0; i<17; i++){
    r4.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r4.push(40);
  }
  for(var i=0; i<10; i++){
    r4.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r4.push(20);
  }
  for(var i=0; i<18; i++){
    r4.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r4.push(40);
  }
  let r5 = [];
  for(var i=0; i<9; i++){
    r5.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r5.push(20);
  }
  for(var i=0; i<5; i++){
    r5.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r5.push(5);
    r5.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r5.push(20);
  }
  for(var i=0; i<10; i++){
    r5.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r5.push(20);
  }
  let r6 = [];
  for(var i=0; i<4; i++){
    r6.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r6.push(30);
  }
  for(var i=0; i<15; i++){
    r6.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r6.push(10);
  }
  for(var i=0; i<15; i++){
    r6.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r6.push(20);
  }
  let r7 = [];
  for(var i=0; i<10; i++){
    r7.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r7.push(20);
  }
  for(var i=0; i<20; i++){
    r7.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r7.push(10);
  }
  for(var i=0; i<5; i++){
    r7.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r7.push(40);
  }
  for(var i=0; i<10; i++){
    r7.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r7.push(20);
  }
  let r8 = [];
  for(var i=0; i<20; i++){
    r8.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r8.push(20);
  }
  for(var i=0; i<2; i++){
    r8.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r8.push(10);
  }
  for(var i=0; i<10; i++){
    r8.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r8.push(10);
  }
  for(var i=0; i<12; i++){
    r8.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r8.push(20);
  }
  let r9 = [];
  for(var i=0; i<30; i++){
    r9.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r9.push(30);
  }
  let r10 = [];
  for(var i=0; i<80; i++){
    r10.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r10.push(25);
  }
  for(var i=0; i<22; i++){
    r10.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r10.push(5);
  }
  let r11 = [];
  for(var i=0; i<3; i++){
    r11.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r11.push(20);
  }
  for(var i=0; i<12; i++){
    r11.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r11.push(20);
  }
  for(var i=0; i<12; i++){
    r11.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r11.push(20);
  }
  for(var i=0; i<8; i++){
    r11.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r11.push(5);
  }
  let r12 = [];
  for(var i=0; i<10; i++){
    r12.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r12.push(20);
  }
  for(var i=0; i<15; i++){
    r12.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r12.push(20);
  }
  for(var i=0; i<5; i++){
    r12.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r12.push(20);
  }
  let r13 = [];
  for(var i=0; i<50; i++){
    r13.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r13.push(20);
    r13.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r13.push(5);
    if(i>=38){
      r13.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
      r13.push(5);
    }
  }
  let r14 = [];
  for(var i=0; i<7; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(20);
    r14.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(5);
  }
  for(var i=0; i<5; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(20);
    r14.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(5);
  }
  for(var i=0; i<4; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(20);
    r14.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(5);
  }
  for(var i=0; i<7; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(9);
    r14.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(1);
  }
  for(var i=0; i<5; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(9);
    r14.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(1);
  }
  for(var i=0; i<4; i++){
    r14.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(9);
    r14.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r14.push(1);
  }
  let r15 = [];
  for(var i=0; i<20; i++){
    r15.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r15.push(20);
    r15.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r15.push(5);
  }
  for(var i=0; i<10; i++){
    r15.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r15.push(20);
    r15.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r15.push(5);
  }
  for(var i=0; i<5; i++){
    r15.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r15.push(30);
  }
  let r16 = [];
  for(var i=0; i<20; i++){
    r16.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r16.push(30);
    r16.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r16.push(5);
  }
  for(var i=0; i<2; i++){
    r16.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r16.push(20);
  }
  let r17 = [];
  for(var i=0; i<12; i++){
    r17.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,4]));
    r17.push(40);
  }
  let r18 = [];
  for(var i=0; i<58; i++){
    r18.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r18.push(25);
  }
  for(var i=0; i<22; i++){
    r18.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r18.push(5);
  }
  let r19 = [];
  for(var i=0; i<10; i++){
    r19.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r19.push(20);
  }
  //regen setup
  for(var i=0; i<4; i++){
    r19.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,4]));
    r19.push(30);
  }
  for(var i=0; i<15; i++){
    r19.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r19.push(10);
  }
  for(var i=0; i<4; i++){
    r19.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r19.push(5);
  }
  let r20 = [];
  for(var i=0; i<6; i++){
    r20.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r20.push(40);
  }
  let r21 = [];
  for(var i=0; i<40; i++){
    r21.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r21.push(10);
  }
  for(var i=0; i<14; i++){
    r21.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r21.push(10);
  }
  let r22 = [];
  for(var i=0; i<16; i++){
    r22.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r22.push(40);
  }
  let r23 = [];
  for(var i=0; i<7; i++){
    r23.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r23.push(30);
  }
  for(var i=0; i<7; i++){
    r23.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r23.push(30);
  }
  let r24 = [];
  for(var i=0; i<1; i++){
    r24.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,undefined,true));
    r24.push(30);
  }
  for(var i=0; i<1; i++){
    r24.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r24.push(60*7);
  }
  for(var i=0; i<19; i++){
    r24.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r24.push(10);
  }
  let r25 = [];
  for(var i=0; i<25; i++){
    r25.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,4]));
    r25.push(10);
  }
  for(var i=0; i<10; i++){
    r25.push(new PurpleBloon(theTrack[0].x,theTrack[0].y,0));
    r25.push(40);
  }
  let r26 = [];
  for(var i=0; i<23; i++){
    r26.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r26.push(20);
  }
  for(var i=0; i<4; i++){
    r26.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
    r26.push(60);
  }
  let r27 = [];
  for(var i=0; i<100; i++){
    r27.push(new RedBloon(theTrack[0].x,theTrack[0].y,0));
    r27.push(1);
  }
  for(var i=0; i<60; i++){
    r27.push(new BlueBloon(theTrack[0].x,theTrack[0].y,0));
    r27.push(3);
  }
  for(var i=0; i<45; i++){
    r27.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0));
    r27.push(5);
  }
  for(var i=0; i<45; i++){
    r27.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r27.push(5);
  }
  let r28 = [];
  for(var i=0; i<6; i++){
    r28.push(new LeadBloon(theTrack[0].x,theTrack[0].y,0));
    r28.push(60);
  }
  let r29 = [];
  for(var i=0; i<50; i++){
    r29.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r29.push(10);
  }
  for(var i=0; i<15; i++){
    r29.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,4]));
    r29.push(10);
  }
  let r30 = [];
  for(var i=0; i<9; i++){
    r30.push(new LeadBloon(theTrack[0].x,theTrack[0].y,0));
    r30.push(30);
  }
  let r31 = [];
  for(var i=0; i<8; i++){
    r31.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r31.push(15);
    r31.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r31.push(5);
  }
  for(var i=0; i<8; i++){
    r31.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
    r31.push(20);
  }
  for(var i=0; i<2; i++){
    r31.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,10]));
    r31.push(10);
  }
  let r32 = [];
  for(var i=0; i<10; i++){
    r32.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r32.push(10);
  }
  for(var i=0; i<15; i++){
    r32.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r32.push(10);
  }
  for(var i=0; i<20; i++){
    r32.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r32.push(10);
  }
  for(var i=0; i<10; i++){
    r32.push(new PurpleBloon(theTrack[0].x,theTrack[0].y,0));
    r32.push(10);
  }
  let r33 = [];
  for(var i=0; i<20; i++){
    r33.push(new RedBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,undefined,true));
    r33.push(3);
  }
  for(var i=0; i<12; i++){
    r33.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,undefined,true));
    r33.push(40);
  }
  let r34 = [];
  for(var i=0; i<155; i++){
    r34.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r34.push(5);
    if(i%26===0){
      r34.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
      r34.push(1);
    }
  }
  for(var i=0; i<5; i++){
    r34.push(new YellowBloon(theTrack[0].x,theTrack[0].y,0));
    r34.push(5);
  }
  let r35 = [];
  for(var i=0; i<25; i++){
    r35.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r35.push(10);
  }
  for(var i=0; i<5; i++){
    r35.push(new RainbowBloon(theTrack[0].x,theTrack[0].y,0));
    r35.push(20);
  }
  for(var i=0; i<35; i++){
    r35.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r35.push(5);
  }
  for(var i=0; i<30; i++){
    r35.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r35.push(10);
  }
  let r36 = [];
  for(var i=0; i<30; i++){
    r36.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r36.push(5);
  }
  for(var i=0; i<5; i++){
    new GreenBloon(1,1,1,0,undefined,undefined)
    r36.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,3],true));
    r36.push(10);
  }
  for(var i=0; i<30; i++){
    r36.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r36.push(5);
  }
  for(var i=0; i<5; i++){
    r36.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,3],true));
    r36.push(10);
  }
  for(var i=0; i<40; i++){
    r36.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r36.push(5);
  }
  for(var i=0; i<10; i++){
    r36.push(new GreenBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,3],true));
    r36.push(10);
  }
  let r37 = [];
  for(var i=0; i<25; i++){
    r37.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r37.push(5);
  }
  for(var i=0; i<25; i++){
    r37.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r37.push(5);
  }
  for(var i=0; i<15; i++){
    r37.push(new LeadBloon(theTrack[0].x,theTrack[0].y,0));
    r37.push(15);
  }
  for(var i=0; i<10; i++){
    r37.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
    r37.push(15);
  }
  for(var i=0; i<7; i++){
    r37.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,undefined,true));
    r37.push(10);
  }
  let r38 = [];
  for(var i=0; i<17; i++){
    r38.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(5);
    r38.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(1);
  }
  for(var i=0; i<14; i++){
    r38.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(5);
    r38.push(new LeadBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(1);
  }
  for(var i=0; i<10; i++){
    r38.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(5);
    r38.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(1);
  }
  for(var i=0; i<1; i++){
    r38.push(new PinkBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(5);
    r38.push(new CeramicBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(30);
    r38.push(new CeramicBloon(theTrack[0].x,theTrack[0].y,0));
    r38.push(30);
  }
  let r39 = [];
  for(var i=0; i<10; i++){
    r39.push(new BlackBloon(theTrack[0].x,theTrack[0].y,0));
    r39.push(15);
  }
  for(var i=0; i<10; i++){
    r39.push(new WhiteBloon(theTrack[0].x,theTrack[0].y,0));
    r39.push(15);
  }
  for(var i=0; i<20; i++){
    r39.push(new ZebraBloon(theTrack[0].x,theTrack[0].y,0));
    r39.push(15);
  }
  for(var i=0; i<18; i++){
    r39.push(new RainbowBloon(theTrack[0].x,theTrack[0].y,0));
    r39.push(15);
  }
  //special setup
  for(var i=0; i<2; i++){
    r39.push(new RainbowBloon(theTrack[0].x,theTrack[0].y,0,undefined,undefined,undefined,[true,11]));
    r39.push(10);
  }
  let r40 = [];
  for(var i=0; i<1; i++){
    r40.push(new MOABBloon(theTrack[0].x,theTrack[0].y,0));
    r40.push(1);
  }
  /*
    for regen:
    1:red
    2:blue
    3:green
    4:yellow
    5:pink
    6:black
    7:white
    8:purple
    9:lead
    10:zebra
    11:rainbow
    12:ceramic
  */
  theRounds.push(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17
    ,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35
    ,r36,r37,r38,r39,r40);
}

function draw(){
  background(0,255,0);
  displayTrack();
  displayBloons();
  displaySideBar();
  displayTowers();
  displayProjectiles();
  displayMoney();
  displayRound();
}

function displayRound(){
  if(roundStarted){
    if(frameCount%(theRounds[roundCounter][bloonCounter*2+1])===0){
      theBloons.push(theRounds[roundCounter][bloonCounter*2]);
      bloonCounter++  
    }
    if(theBloons.length===0&&bloonCounter!==0){
      roundStarted = false;
      bloonCounter = 0;
      money+=(101+roundCounter);
    }
  }
}

function createTrack(){
  fill(165,42,42);
  let point1 = {
    x:playAreaWidth*0/50,
    y:height*0/50,
    angle:0
  };
  theTrack.push(point1);
  let point2 = {
    x:playAreaWidth*30/50,
    y:height*20/50,
    angle:0
  };
  theTrack.push(point2);

  let point3 = {
    x:playAreaWidth*45/50,
    y:height*5/50,
    angle:0
  };
  theTrack.push(point3);
  let point4 = {
    x:playAreaWidth*5/50,
    y:height*25/50,
    angle:0
  };
  theTrack.push(point4);
  let point5 = {
    x:playAreaWidth*40/50,
    y:height*40/50,
    angle:0
  };
  theTrack.push(point5);
  let point6 = {
    x:playAreaWidth*45/50,
    y:height*30/50,
    angle:0
  };
  theTrack.push(point6);
  let point7 = {
    x:playAreaWidth*30/50,
    y:height*45/50,
    angle:0
  };
  theTrack.push(point7);
  let point8 = {
    x:playAreaWidth*30/50,
    y:height*30/50,
    angle:0
  };
  theTrack.push(point8);
  let point9 = {
    x:playAreaWidth*35/50,
    y:height*20/50,
    angle:0
  };
  theTrack.push(point9);
  let point10 = {
    x:playAreaWidth*50/50,
    y:height*10/50,
  };
  theTrack.push(point10);
  for(var i=0; i<theTrack.length-1; i++){
    theTrack[i].angle = atan2(theTrack[i].y - theTrack[i+1].y, theTrack[i].x - theTrack[i+1].x);
  }
}

function displayTrack(){
  for(var i=0; i<theTrack.length; i++){
    if(i!==theTrack.length-1){
      line(theTrack[i].x,theTrack[i].y,theTrack[i+1].x,theTrack[i+1].y);
    }
  }
}

function displaySideBar(){
  let done = false;
  let i = 0;
  while(!done){
    if(i>=theTowers.length){
      break;
    }
    if(theTowers[i].showingUpgrades){
      done = true;
    }
    i++
  }
  if(!done){
    fill(210,190,100)
    rectMode(CORNER)
    rect(playAreaWidth,0,300,height);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(0);
    text("Towers",width-150,30);
    
    rectMode(CENTER)
    for(var j=0; j<theShop.length; j++){
      fill(150,75,0);
      rect(theShop[j].x,theShop[j].y,theShop[j].w,theShop[j].h);
      fill(0);
      textSize(20);
      text(theShop[j].name, theShop[j].x, theShop[j].y-theShop[j].h*2/3);
      text("Buy: " + theShop[j].cost, theShop[j].x, theShop[j].y+theShop[j].h*5/6);
      if(mouseX>theShop[j].x-theShop[j].w/2&&mouseX<theShop[j].x+theShop[j].w/2&&mouseY>theShop[j].y-theShop[j].h/2&&mouseY<theShop[j].y+theShop[j].h/2&&mouseIsPressed){
        if(theShop[j].name==='Dart Monkey'&&money>=theShop[j].cost&&!addingDartMonkey){
          addingDartMonkey = true;
          money-=theShop[j].cost;
        }
        if(theShop[j].name==='Tack Shooter'&&money>=theShop[j].cost&&!addingTackShooter){
          addingTackShooter = true;
          money-=theShop[j].cost;
        }
        if(theShop[j].name==='Ice Monkey'&&money>=theShop[j].cost&&!addingIceMonkey){
          addingIceMonkey = true;
          money-=theShop[j].cost;
        }
      }
      if(theShop[j].name==='Dart Monkey'){
        fill(150,75,0);
        circle(theShop[j].x,theShop[j].y,40);
        line(theShop[j].x,theShop[j].y,theShop[j].x+30,theShop[j].y);
      }
      if(theShop[j].name==='Tack Shooter'){
        fill(255,192,203);
        circle(theShop[j].x,theShop[j].y,40);
        push();
        translate(theShop[j].x,theShop[j].y);
        for(var k=0; k<8; k++){
          rotate(TWO_PI/8);
          line(0,0,30,0);
        }
        pop();
      }
      if(theShop[j].name==='Ice Monkey'){
        fill(180,210,230);
        circle(theShop[j].x,theShop[j].y,40);
      }
    }
  }else{
    for(var k=0; k<theTowers.length; k++){
      if(theTowers[k].showingUpgrades){
        rectMode(CORNER)
        if(theTowers[k].name==="Dart Monkey"){
          push();
          translate(theTowers[k].x,theTowers[k].y);
          fill(0,0,0,50);
          circle(0,0,theTowers[k].range*2);
          pop();
    
          fill(210,190,100)
          rect(width-300,0,300,height);
    
          textAlign(CENTER, TOP);
          textSize(50);
          fill(0);
          text("Dart Monkey", width-150,0);
    
          textSize(25);
          fill(150,75,0);
          rect(width-300,200,300,100);
          if(theTowers[k].upgradeTop===1){
            fill(0);
            text("Long Range Darts",width-150,210);
            text("Cost: 90",width-150,250);
          }else if(theTowers[k].upgradeTop===2){
            fill(0);
            text("Enhanced Eyesight",width-150,210);
            text("Cost: 120",width-150,250);
          }else if(theTowers[k].upgradeTop===3){
            fill(0);
            text("All Upgrades Bought",width-150,210);
          }
          
          fill(150,75,0);
          rect(width-300,350,300,100);
          if(theTowers[k].upgradeBottom===1){
            fill(0);
            text("Sharp Shots",width-150,360);
            text("Cost: 140",width-150,400);
          }else if(theTowers[k].upgradeBottom===2){
            fill(0);
            text("Razor Sharp Shots",width-150,360);
            text("Cost: 170",width-150,400);
          }else if(theTowers[k].upgradeBottom===3){
            fill(0);
            text("All Upgrades Bought",width-150,360);
          }
        }else if(theTowers[k].name==="Tack Shooter"){
          push();
          translate(theTowers[k].x,theTowers[k].y);
          fill(0,0,0,50);
          circle(0,0,theTowers[k].range*2);
          pop();
    
          fill(210,190,100)
          rect(width-300,0,300,height);
    
          textAlign(CENTER, TOP);
          textSize(50);
          fill(0);
          text("Tack Shooter", width-150,0);
    
          textSize(25);
          fill(150,75,0);
          rect(width-300,200,300,100);
          if(theTowers[k].upgradeTop===1){
            fill(0);
            text("Faster Shooting",width-150,210);
            text("Cost: 205",width-150,250);
          }else if(theTowers[k].upgradeTop===2){
            fill(0);
            text("Blade Shooter",width-150,210);
            text("Cost: 185",width-150,250);
          }else if(theTowers[k].upgradeTop===3){
            fill(0);
            text("All Upgrades Bought",width-150,210);
          }
          
          fill(150,75,0);
          rect(width-300,350,300,100);
          if(theTowers[k].upgradeBottom===1){
            fill(0);
            text("Longer Range",width-150,360);
            text("Cost: 100",width-150,400);
          }else if(theTowers[k].upgradeBottom===2){
            fill(0);
            text("Even Longer Range",width-150,360);
            text("Cost: 100",width-150,400);
          }else if(theTowers[k].upgradeBottom===3){
            fill(0);
            text("All Upgrades Bought",width-150,360);
          }
        }else if(theTowers[k].name==="Ice Monkey"){
          push();
          translate(theTowers[k].x,theTowers[k].y);
          fill(0,0,0,50);
          circle(0,0,theTowers[k].range*2);
          pop();
    
          //menu
          fill(210,190,100)
          rect(width-300,0,300,height);
    
          textAlign(CENTER, TOP);
          textSize(50);
          fill(0);
          text("Ice Monkey", width-150,0);
    
          textSize(25);
          fill(150,75,0);
          rect(width-300,200,300,100);
          if(theTowers[k].upgradeTop===1){
            fill(0);
            text("Longer Freeze",width-150,210);
            text("Cost: 255",width-150,250);
          }else if(theTowers[k].upgradeTop===2){
            fill(0);
            text("Perma Frost",width-150,210);
            text("Cost: 255",width-150,250);
          }else if(theTowers[k].upgradeTop===3){
            fill(0);
            text("All Upgrades Bought",width-150,210);
          }
          
          fill(150,75,0);
          rect(width-300,350,300,100);
          if(theTowers[k].upgradeBottom===1){
            fill(0);
            text("Wide Freeze Radius",width-150,360);
            text("Cost: 205",width-150,400);
          }else if(theTowers[k].upgradeBottom===2){
            fill(0);
            text("Snap Freeze",width-150,360);
            text("Cost: 295",width-150,400);
          }else if(theTowers[k].upgradeBottom===3){
            fill(0);
            text("All Upgrades Bought",width-150,360);
          }
        }
      }
    }
  }

  rectMode(CENTER);
  fill(0,150,0)
  rect(width-150,height*15/16,300,height/8);
  textSize(35)
  fill(0);
  if(roundStarted){
    text("Playing...", width-150,height*15/16);  
  }else{
    text("Start Round", width-150,height*15/16);
  }
  if(mouseX>width-300&&mouseX<width&&mouseY>height*7/8&&mouseY<height&&mouseIsPressed){
    if(!roundStarted){
      roundCounter++;
    }
    roundStarted = true;
  }
}

function displayBloons(){
  for(var i=theBloons.length-1; i>=0; i--){
    theBloons[i].move();
    theBloons[i].display(i);
    if(theBloons[i].x>playAreaWidth+theBloons[i].diameter/2||theBloons[i].x>playAreaWidth+theBloons[i].length/2){
      theBloons[i].through(i);
    }
  }
}

//display tower
function displayTowers(){
  displayDartMonkeys();
  displayTackShooters();
  displayIceMonkeys();
}

function displayDartMonkeys(){
  if(addingDartMonkey){
    let open = checkIfOpen("Dart Monkey");
    if(open){
      fill(0,0,0,50);
    }else{
      fill(255,0,0,150);
    }
    circle(mouseX,mouseY,150*2);
    fill(150,75,0);
    circle(mouseX,mouseY,40);
    line(mouseX,mouseY,mouseX+30,mouseY);
  }
  for(var i=theDartMonkeys.length-1; i>=0; i--){
    let bloonInRange = [];
    theDartMonkeys[i].display();
    for(var j=0; j<theBloons.length; j++){
      if(dist(theBloons[j].x,theBloons[j].y,theDartMonkeys[i].x,theDartMonkeys[i].y)<theDartMonkeys[i].range+theBloons[j].diameter/2||dist(theBloons[j].x,theBloons[j].y,theDartMonkeys[i].x,theDartMonkeys[i].y)<theDartMonkeys[i].range+theBloons[j].length/2){
        if(theBloons[j].camo){
          if(theDartMonkeys[i].canSeeCamo){
            bloonInRange.push(theBloons[j]);
          }
        }else{
          bloonInRange.push(theBloons[j]);
        }
      }
    }
    if(bloonInRange.length!==0){
      if(theDartMonkeys[i].startFrameCount===0||theDartMonkeys[i].timeNoShot>theDartMonkeys[i].attackSpeed){
        theDartMonkeys[i].startFrameCount = frameCount;
        theDartMonkeys[i].timeNoShot = 0;
      }
      let first = findFirst(bloonInRange);
      theDartMonkeys[i].faceBloon(first);
      if(Math.floor((frameCount-theDartMonkeys[i].startFrameCount)%(theDartMonkeys[i].attackSpeed))===0){
        theDartMonkeys[i].shoot();
      }
    }else{
      theDartMonkeys[i].timeNoShot++;
    }
  }
}

//if targeting tower
function findFirst(arr){
  let furthest = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i].checkpoint>furthest.checkpoint){
      furthest = arr[i];
    }else if(arr[i].checkpoint===furthest.checkpoint){
      if(dist(arr[i].x,arr[i].y,theTrack[furthest.checkpoint].x,theTrack[furthest.checkpoint].y)>dist(furthest.x,furthest.y,theTrack[furthest.checkpoint].x,theTrack[furthest.checkpoint].y)){
        furthest = arr[i];
      }
    }
  }
  return furthest;
}

function findLast(arr){
  let last = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i].checkpoint<last.checkpoint){
      last = arr[i];
    }else if(arr[i].checkpoint===last.checkpoint){
      if(dist(arr[i].x,arr[i].y,theTrack[last.checkpoint].x,theTrack[last.checkpoint].y)<dist(last.x,last.y,theTrack[last.checkpoint].x,theTrack[last.checkpoint].y)){
        last = arr[i];
      }
    }
  }
  return last;
}

function displayTackShooters(){
  if(addingTackShooter){
    let open = checkIfOpen("Tack Shooter");
    if(open){
      fill(0,0,0,50);
    }else{
      fill(255,0,0,150);
    }
    circle(mouseX,mouseY,50*2);
    fill(255,192,203);
    circle(mouseX,mouseY,40);
    push();
    translate(mouseX,mouseY);
    for(var i=0; i<8; i++){
      rotate(TWO_PI/8);
      line(0,0,30,0);
    }
    pop();
  }
  for(var i=theTackShooters.length-1; i>=0; i--){
    let bloonInRange = [];
    theTackShooters[i].display();
    for(var j=0; j<theBloons.length; j++){
      if(dist(theBloons[j].x,theBloons[j].y,theTackShooters[i].x,theTackShooters[i].y)<theTackShooters[i].range+theBloons[j].diameter/2||dist(theBloons[j].x,theBloons[j].y,theTackShooters[i].x,theTackShooters[i].y)<theTackShooters[i].range+theBloons[j].length/2){
        if(theBloons[j].camo){
          if(theTackShooters[i].canSeeCamo){
            bloonInRange.push(theBloons[j]);
          }
        }else{
          bloonInRange.push(theBloons[j]);
        }
      }
    }
    if(bloonInRange.length!==0){
      if(theTackShooters[i].startFrameCount===0||theTackShooters[i].timeNoShot>theTackShooters[i].attackSpeed){
        theTackShooters[i].startFrameCount = frameCount;
        theTackShooters[i].timeNoShot = 0;
      }
      if(Math.floor((frameCount-theTackShooters[i].startFrameCount)%(theTackShooters[i].attackSpeed))===0){
        theTackShooters[i].shoot();
      }
    }else{
      theTackShooters[i].timeNoShot++;
    }
  }
}

function displayIceMonkeys(){
  if(addingIceMonkey){
    let open = checkIfOpen("Ice Monkey");
    if(open){
      fill(0,0,0,50);
    }else{
      fill(255,0,0,150);
    }
    circle(mouseX,mouseY,50*2);
    fill(180,210,230);
    circle(mouseX,mouseY,40);
  }
  for(var i=theIceMonkeys.length-1; i>=0; i--){
    let bloonInRange = [];
    theIceMonkeys[i].display();
    for(var j=0; j<theBloons.length; j++){
      if(dist(theBloons[j].x,theBloons[j].y,theIceMonkeys[i].x,theIceMonkeys[i].y)<theIceMonkeys[i].range+theBloons[j].diameter/2||dist(theBloons[j].x,theBloons[j].y,theIceMonkeys[i].x,theIceMonkeys[i].y)<theIceMonkeys[i].range+theBloons[j].length/2){
        if(theBloons[j].camo){
          if(theIceMonkeys[i].canSeeCamo){
            bloonInRange.push(theBloons[j]);
          }
        }else{
          bloonInRange.push(theBloons[j]);
        }
      }
    }
    if(bloonInRange.length!==0){
      if(theIceMonkeys[i].startFrameCount===0||theIceMonkeys[i].timeNoShot>theIceMonkeys[i].attackSpeed){
        theIceMonkeys[i].startFrameCount = frameCount;
        theIceMonkeys[i].timeNoShot = 0;
      }
      if(Math.floor((frameCount-theIceMonkeys[i].startFrameCount)%(theIceMonkeys[i].attackSpeed))===0){
        theIceMonkeys[i].shoot(bloonInRange);
      }
    }else{
      theIceMonkeys[i].timeNoShot++;
    }
  }
}

function displayProjectiles(){
  for(var i=theDarts.length-1; i>=0; i--){
    theDarts[i].move();
    let done = theDarts[i].isDone(i);
    if(done){
      theDarts.splice(i,1);
    }
  }
}

function displayMoney(){
  textAlign(LEFT, TOP);
  textSize(25);
  fill(0);
  text("Money: " + money, 15, 15);
  text("Lives: " + lives, 15, 50);
  textAlign(RIGHT, TOP);
  text("Wave: " + (roundCounter+1), width-315, 15);
}

function mousePressed(){
  //if adding a tower
  if(addingDartMonkey){
    if(mouseX>width-300){
      addingDartMonkey = false;
      money+=140;
    }else{
      checkIfOpen('Dart Monkey',true);
    }
  }else if(addingTackShooter){
    if(mouseX>width-300){
      addingTackShooter = false;
      money+=300;
    }else{
      checkIfOpen('Tack Shooter',true);
    }
  }else if(addingIceMonkey){
    if(mouseX>width-300){
      addingIceMonkey = false;
      money+=205;
    }else{
      checkIfOpen('Ice Monkey',true);
    }
  }else{
    //check if tower is clicked
    for(var i=0; i<theDartMonkeys.length; i++){
      if(dist(mouseX,mouseY,theDartMonkeys[i].x,theDartMonkeys[i].y)<20){
        theDartMonkeys[i].showingUpgrades = true;
      }else if(!(mouseX>width-300&&mouseX<width&&mouseY>0&&mouseY<height&&theDartMonkeys[i].showingUpgrades)){
        theDartMonkeys[i].showingUpgrades = false;
      }
    }
    for(var i=0; i<theTackShooters.length; i++){
      if(dist(mouseX,mouseY,theTackShooters[i].x,theTackShooters[i].y)<20){
        theTackShooters[i].showingUpgrades = true;
      }else if(!(mouseX>width-300&&mouseX<width&&mouseY>0&&mouseY<height&&theTackShooters[i].showingUpgrades)){
        theTackShooters[i].showingUpgrades = false;
      }
    }
    for(var i=0; i<theIceMonkeys.length; i++){
      if(dist(mouseX,mouseY,theIceMonkeys[i].x,theIceMonkeys[i].y)<20){
        theIceMonkeys[i].showingUpgrades = true;
      }else if(!(mouseX>width-300&&mouseX<width&&mouseY>0&&mouseY<height&&theIceMonkeys[i].showingUpgrades)){
        theIceMonkeys[i].showingUpgrades = false;
      }
    }
  }
}

function sqr(x) { 
  return x * x 
}

function dist2(v, w) { 
  return sqr(v.x - w.x) + sqr(v.y - w.y) 
}

function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
    
  if (l2 == 0) return dist2(p, v);
    
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    
  if (t < 0) return dist2(p, v);
  if (t > 1) return dist2(p, w);
    
  return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
}

function distToSegment(p, v, w) { 
  return Math.sqrt(distToSegmentSquared(p, v, w));
}


function checkIfOpen(tower,q){
  let open = true;
  //check if tower is over track
  for(var i=0; i<theTrack.length-1; i++){
    let point = {
      x: mouseX,
      y: mouseY
    }
    let lineStart = {
      x: theTrack[i+1].x, 
      y: theTrack[i+1].y 
    }
    let lineEnd = {
      x: theTrack[i].x, 
      y: theTrack[i].y 
    };
    let d = distToSegment(point, lineStart, lineEnd);
    if(d<=20){
      open = false;
    }
  }

  //check if tower is over another tower
  for(var i=0; i<theDartMonkeys.length; i++){
    if(dist(theDartMonkeys[i].x,theDartMonkeys[i].y,mouseX,mouseY)<40){
      open = false;
    }
  }
  for(var i=0; i<theTackShooters.length; i++){
    if(dist(theTackShooters[i].x,theTackShooters[i].y,mouseX,mouseY)<40){
      open = false;
    }
  }
  for(var i=0; i<theIceMonkeys.length; i++){
    if(dist(theIceMonkeys[i].x,theIceMonkeys[i].y,mouseX,mouseY)<40){
      open = false;
    }
  }
  if(mouseX>playAreaWidth-20){
    open = false;
  }

  //add tower
  if(open){
    if(tower==='Dart Monkey'){
      if(q){
        addingDartMonkey = false;
        numDartMonkeys++;
        theDartMonkeys.push(new DartMonkey(mouseX,mouseY,numDartMonkeys));
        theTowers.push(theDartMonkeys[theDartMonkeys.length-1]);
      }else{
        return true;
      }
    }
    if(tower==='Tack Shooter'){
      if(q){
        addingTackShooter = false;
        numTackShooters++;
        theTackShooters.push(new TackShooter(mouseX,mouseY,numTackShooters));
        theTowers.push(theTackShooters[theTackShooters.length-1]);
      }else{
        return true;
      }
    }
    if(tower==='Ice Monkey'){
      if(q){
        addingIceMonkey = false;
        numIceMonkeys++;
        theIceMonkeys.push(new IceMonkey(mouseX,mouseY,numIceMonkeys));
        theTowers.push(theIceMonkeys[theIceMonkeys.length-1]);
      }else{
        return true;
      }
    }
  }
}

function keyPressed(){
  if(keyIsDown(13)){
    money+=10000;
  }
}

//upgrades of tower
function mouseClicked(){
  //Dart Monkey
  for(var i=0; i<theDartMonkeys.length; i++){
    if(theDartMonkeys[i].showingUpgrades){
      //top upgrades
      if(mouseX>width-300&&mouseX<width&&mouseY>200&&mouseY<300){
        //first
        if(theDartMonkeys[i].upgradeTop===1&&money>=90){
          money-=90;
          theDartMonkeys[i].upgradeTop++;
          theDartMonkeys[i].range = 175;
          //second
        }else if(theDartMonkeys[i].upgradeTop===2&&money>=120){
          money-=120;
          theDartMonkeys[i].upgradeTop++;
          theDartMonkeys[i].range = 200;
          theDartMonkeys[i].canSeeCamo = true;
        }
      //bottom upgrades
      }else if(mouseX>width-300&&mouseX<width&&mouseY>350&&mouseY<450){
        //first
        if(theDartMonkeys[i].upgradeBottom===1&&money>=140){
          money-=140;
          theDartMonkeys[i].upgradeBottom++;
          theDartMonkeys[i].pierce+=1;
          //second
        }else if(theDartMonkeys[i].upgradeBottom===2&&money>=170){
          money-=170;
          theDartMonkeys[i].upgradeBottom++;
          theDartMonkeys[i].pierce+=2;
        }
      }
    }
  }
  //Tack Shooter
  for(var i=0; i<theTackShooters.length; i++){
    if(theTackShooters[i].showingUpgrades){
      //top upgrades
      if(mouseX>width-300&&mouseX<width&&mouseY>200&&mouseY<300){
        //first
        if(theTackShooters[i].upgradeTop===1&&money>=205){
          money-=205;
          theTackShooters[i].upgradeTop++;
          theTackShooters[i].attackSpeed/=1.5;
          //second
        }else if(theTackShooters[i].upgradeTop===2&&money>=185){
          money-=185;
          theTackShooters[i].upgradeTop++;
          theTackShooters[i].attackSpeed/=2;
          theTackShooters[i].pierce = 3;
          theTackShooters[i].dartSize = 10;
        }
      //bottom upgrades
      }else if(mouseX>width-300&&mouseX<width&&mouseY>350&&mouseY<450){
        //first
        if(theTackShooters[i].upgradeBottom===1&&money>=100){
          money-=100;
          theTackShooters[i].upgradeBottom++;
          theTackShooters[i].range = 60;
          //second
        }else if(theTackShooters[i].upgradeBottom===2&&money>=100){
          money-=100;
          theTackShooters[i].upgradeBottom++;
          theTackShooters[i].range = 70;
        }
      }
    }
  }
  //Ice Monkey
  for(var i=0; i<theIceMonkeys.length; i++){
    if(theIceMonkeys[i].showingUpgrades){
      //top upgrades
      if(mouseX>width-300&&mouseX<width&&mouseY>200&&mouseY<300){
        //first
        if(theIceMonkeys[i].upgradeTop===1&&money>=255){
          money-=255;
          theIceMonkeys[i].upgradeTop++;
          theIceMonkeys[i].freezeTime = 45;
          //second
        }else if(theIceMonkeys[i].upgradeTop===2&&money>=255){
          money-=255;
          theIceMonkeys[i].upgradeTop++;
          theIceMonkeys[i].permaFreeze = 40;
        }
      //bottom upgrades
      }else if(mouseX>width-300&&mouseX<width&&mouseY>350&&mouseY<450){
        //first
        if(theIceMonkeys[i].upgradeBottom===1&&money>=205){
          money-=205;
          theIceMonkeys[i].upgradeBottom++;
          theIceMonkeys[i].range = 65;
          //second
        }else if(theIceMonkeys[i].upgradeBottom===2&&money>=295){
          money-=295;
          theIceMonkeys[i].upgradeBottom++;
          theIceMonkeys[i].pierce = 1;
          theIceMonkeys[i].canPopLead = true;
        }
      }
    }
  }
}

//class for tower
class DartMonkey{
  constructor(x,y,id){
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.showingUpgrades = false;
    this.startFrameCount = 0;
    this.timeNoShot = 0;
    this.attackSpeed = 60;
    this.pierce = 1;
    this.range = 150;
    this.canSeeCamo = false;
    this.canPopLead = false;
    this.canPopPurple = true;
    this.canPopIce = false;
    this.canPopBlack = true;
    this.upgradeTop = 1;
    this.upgradeBottom = 1;
    this.id = id;
    this.numShots = 0;
    this.name = "Dart Monkey"
  }

  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    fill(150,75,0);
    circle(0,0,40);
    line(0,0,30,0);
    pop();
  }

  faceBloon(bloon){
    push();
    translate(this.x,this.y)
    this.angle = atan2(bloon.y - this.y, bloon.x - this.x);
    pop();
  }

  shoot(){
    this.numShots++;
    if(this.numShots%10===0){
      this.numShots++;
    }
    let dartId = this.numShots;
    while(dartId>=1){
      dartId/=10;
    }
    dartId+=this.id;
    theDarts.push(new Dart(this.x,this.y,this.angle,this.pierce,this.range,dartId,3,this.canPopIce,this.canSeeCamo,this.canPopLead,this.canPopPurple,this.canPopBlack));
  }
}

class TackShooter{
  constructor(x,y,id){
    this.x = x;
    this.y = y;
    this.showingUpgrades = false;
    this.startFrameCount = 0;
    this.timeNoShot = 0;
    this.attackSpeed = 120;
    this.pierce = 1;
    this.range = 50;
    this.canSeeCamo = false;
    this.canPopLead = false;
    this.canPopPurple = true;
    this.canPopIce = false;
    this.canPopBlack = true;
    this.upgradeTop = 1;
    this.upgradeBottom = 1;
    this.id = id;
    this.numShots = 0;
    this.dartSize = 5;
    this.name = "Tack Shooter"
  }

  display(){
    fill(255,192,203);
    circle(this.x,this.y,40);
    push();
    translate(this.x,this.y);
    for(var i=0; i<8; i++){
      rotate(TWO_PI/8);
      line(0,0,30,0);
    }
    pop();
  }

  shoot(){
    for(var i=0; i<8; i++){
      this.numShots++;
      if(this.numShots%10===0){
        this.numShots++;
      }
      let dartId = this.numShots;
      while(dartId>=1){
        dartId/=10;
      }
      let angle = i*TWO_PI/8;
      dartId+=this.id;
      theDarts.push(new Dart(this.x,this.y,angle,this.pierce,this.range,dartId,this.dartSize,this.canPopIce,this.canSeeCamo,this.canPopLead,this.canPopPurple,this.canPopBlack));
    }
  }
}

class IceMonkey{
  constructor(x,y,id){
    this.x = x;
    this.y = y;
    this.showingUpgrades = false;
    this.startFrameCount = 0;
    this.timeNoShot = 0;
    this.attackSpeed = 100;
    this.pierce = 0;
    this.range = 50;
    this.canSeeCamo = false;
    this.canPopLead = false;
    this.canPopPurple = true;
    this.canPopIce = false;
    this.canPopBlack = true;
    this.upgradeTop = 1;
    this.upgradeBottom = 1;
    this.id = id;
    this.numShots = 0;
    this.freezeTime = 30;
    this.permaFreeze = 0;
    this.name = "Ice Monkey"
  }

  display(){
    fill(180,210,230);
    circle(this.x,this.y,40);
  }

  shoot(){
    for(var i=theBloons.length-1; i>=0; i--){
      if(dist(this.x,this.y,theBloons[i].x,theBloons[i].y)<=this.range){
        if(theBloons[i]!==undefined&&theBloons[i].frozen!==undefined){
          theBloons[i].frozen[0] = true;
          theBloons[i].frozen[1] = this.freezeTime;
          theBloons[i].frozen[2] = this.permaFreeze;
        }
        if(this.pierce===1){
          theBloons[i].pop(i,-1,frameCount,false,true,this.canPopIce,this.canSeeCamo,this.canPopLead,this.canPopPurple,this.canPopBlack);
        }
      }
    }
    fill(180,210,230,100);
    circle(this.x,this.y,this.range*2);
  }
}

//creates a new projectile
class Dart{
  constructor(x,y,angle,pierce,range,id,size,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.pierce = pierce;
    this.range = range;
    this.bloonsHit = 0;
    this.hostTowerX = x;
    this.hostTowerY = y;
    this.done = false;
    this.id = id;
    this.size = size;
    this.canSeeCamo = canSeeCamo;
    this.canPopLead = canPopLead;
    this.canPopPurple = canPopPurple;
    this.canPopIce = canPopIce;
    this.canPopBlack = canPopBlack;
  }

  move(){
    this.y+=15*sin(this.angle);
    this.x+=15*cos(this.angle);
    fill(0);
    circle(this.x,this.y,this.size);
  }
  
  isDone(j){
    this.done = false;
    for(var i=theBloons.length-1; i>=0; i--){
      if(dist(this.x,this.y,theBloons[i].x,theBloons[i].y)<theBloons[i].length/2+1.5&&theBloons[i].hitsToPop>100||dist(this.x,this.y,theBloons[i].x,theBloons[i].y)<theBloons[i].diameter/2+1.5){       
        theBloons[i].pop(i,j,this.id,true,false,this.canPopIce,this.canSeeCamo,this.canPopLead,this.canPopPurple,this.canPopBlack);
      }
    }
    if(dist(this.x,this.y,this.hostTowerX,this.hostTowerY)>this.range*1.2){
      this.done = true;
    }
    return this.done;
  }
}

class RedBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 30;
    this.speed = 70/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(redBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(redBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(redBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(redBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++;
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==1){
      theBloons.splice(i,1,new BlueBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1);
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=1;
    theBloons.splice(i,1);
  }
}

class BlueBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 35;
    this.speed = 98/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(blueBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(blueBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(blueBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(blueBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==2){
      theBloons.splice(i,1,new GreenBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo))
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new RedBloon(this.x,this.y,this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=2;
    theBloons.splice(i,1);
  }
}

class GreenBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 126/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(greenBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(greenBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(greenBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(greenBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==3){
      theBloons.splice(i,1,new YellowBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo))
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new BlueBloon(this.x,this.y,this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=3;
    theBloons.splice(i,1);
  }
}

class YellowBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 45;
    this.speed = 224/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(yellowBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(yellowBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(yellowBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(yellowBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==4){
      theBloons.splice(i,1,new PinkBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo))
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new GreenBloon(this.x,this.y,this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=4;
    theBloons.splice(i,1);
  }
}

class PinkBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.speed = 245/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(pinkBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(pinkBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(pinkBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(pinkBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==5){
      if(this.regrow[1]===6){
        theBloons.splice(i,1,new BlackBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }else if(this.regrow[1]===7){
        theBloons.splice(i,1,new WhiteBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }else if(this.regrow[1]===8){
        theBloons.splice(i,1,new PurpleBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }else if(this.regrow[1]>8){
        theBloons.splice(i,1,new BlackBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new YellowBloon(this.x,this.y,this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=5;
    theBloons.splice(i,1);
  }
}

class BlackBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.speed = 126/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(blackBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(blackBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(blackBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(blackBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==6){
      if(this.regrow[1]===9){
        theBloons.splice(i,1,new LeadBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }else if(this.regrow[1]>=10){
        theBloons.splice(i,1,new ZebraBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo||!canPopBlack){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new PinkBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      this.frozen = [...this.frozen];
      theBloons.push(new PinkBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=11;
    theBloons.splice(i,1);
  }
}

class WhiteBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.speed = 140/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(whiteBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(whiteBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(whiteBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(whiteBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==7){
      theBloons.splice(i,1,new ZebraBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
  }

  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo||ice){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new PinkBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      this.frozen = [...this.frozen];
      theBloons.push(new PinkBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }else if(ice){
      theBloons[i].frozen[0] = false;
      theBloons[i].frozen[1] = 0;
      theBloons[i].frozen[2] = 0;
    }
  }

  through(i){
    lives-=11;
    theBloons.splice(i,1);
  }
}

class PurpleBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 230/60
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(purpleBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(purpleBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(purpleBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(purpleBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo||!canPopPurple){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new PinkBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      this.frozen = [...this.frozen];
      theBloons.push(new PinkBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=11;
    theBloons.splice(i,1);
  }
}

class ZebraBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 126/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(zebraBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(zebraBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(zebraBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(zebraBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++;
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==10){
      theBloons.splice(i,1,new RainbowBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo||!canPopBlack||ice){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new BlackBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      this.frozen = [...this.frozen];
      theBloons.push(new WhiteBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }else if(ice){
      theBloons[i].frozen[0] = false;
      theBloons[i].frozen[1] = 0;
      theBloons[i].frozen[2] = 0;
    }
  }

  through(i){
    lives-=23;
    theBloons.splice(i,1);
  }
}

class RainbowBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 154/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.camo&&this.regrow[0]){
      image(rainbowBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
    }else if(this.regrow[0]){
      image(rainbowBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
    }else if(this.camo){
      image(rainbowBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
    }else{
      image(rainbowBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
    this.regrowTimeCounter++;
    if(this.regrow[0]&&this.regrowTimeCounter>=90&&this.regrow[1]!==11){
      theBloons.splice(i,1,new CeramicBloon(this.x,this.y,this.checkpoint,undefined,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      money++;
      theBloons.splice(i,1,new ZebraBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      this.frozen = [...this.frozen];
      theBloons.push(new ZebraBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
    }
    if(dart&&canPop){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }else if(dart&&this.frozen[0]){
      theDarts[j].done = true;
    }
  }

  through(i){
    lives-=47;
    theBloons.splice(i,1);
  }
}

class LeadBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo,fortified){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 70/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 4;
    }else{
      this.hitsToPop = 1;
    }
    this.hits = 0;
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.fortified){
      if(this.camo&&this.regrow[0]){
        image(leadBloonTypes[7],this.x,this.y,this.diameter,this.diameter);
      }else if(this.regrow[0]){
        image(leadBloonTypes[6],this.x,this.y,this.diameter,this.diameter);
      }else if(this.camo){
        image(leadBloonTypes[5],this.x,this.y,this.diameter*3/4,this.diameter);
      }else{
        image(leadBloonTypes[4],this.x,this.y,this.diameter*3/4,this.diameter);
      }
    }else{
      if(this.camo&&this.regrow[0]){
        image(leadBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
      }else if(this.regrow[0]){
        image(leadBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
      }else if(this.camo){
        image(leadBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
      }else{
        image(leadBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
      }
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo||!canPopLead){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        theBloons.splice(i,1,new BlackBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
        this.frozen = [...this.frozen];
        theBloons.push(new BlackBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }
    }
    if(dart){
      theDarts[j].done = true;
    }
  }

  through(i){
    if(this.fortified){
      lives-=26;
    }else{
      lives-=23;
    }
    theBloons.splice(i,1);
  }
}

class CeramicBloon{
  constructor(x,y,checkpoint,id,f,ftc,regrow,camo,fortified){
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.speed = 175/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(f&&ftc!==undefined){
      this.frozen = f;
      this.freezeTimeCounter = ftc;
    }else{
      this.frozen = [false,0,0];
      this.freezeTimeCounter = 0;
    }
    if(regrow!==undefined){
      this.regrow = regrow;
      this.regrowTimeCounter = 0;
    }else{
      this.regrow = [false];
      this.regrowTimeCounter = 0;
    }
    if(camo!==undefined){
      this.camo = camo;
    }else{
      this.camo = false;
    }
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 20;
    }else{
      this.hitsToPop = 10;
    }
    this.hits = 0;
  }

  move(){
    if(this.frozen[0]===false){
      if(this.frozen[2]!==0){
        if(this.freezeTimeCounter>=this.frozen[2]){
          this.speed*=2;
          this.freezeTimeCounter = 0;
          this.frozen[2] = 0;
        }else{
          this.speed = this.halfSpeed;
          this.freezeTimeCounter++;
        }
      }
      for(var i=0; i<theTrack.length-1; i++){
        if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
          this.x = theTrack[i].x
          this.y = theTrack[i].y
          this.checkpoint = i;
        }
      }
      this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
      this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
    }else{
      if(this.freezeTimeCounter>=this.frozen[1]){
        this.frozen[1] = 0;
        this.frozen[0] = false;
        this.freezeTimeCounter = 0;
      }else{
        this.freezeTimeCounter++;
      }
    }
  }
  
  display(i){
    if(this.fortified){
      if(this.camo&&this.regrow[0]){
        image(ceramicBloonTypes[7],this.x,this.y,this.diameter,this.diameter);
      }else if(this.regrow[0]){
        image(ceramicBloonTypes[6],this.x,this.y,this.diameter,this.diameter);
      }else if(this.camo){
        image(ceramicBloonTypes[5],this.x,this.y,this.diameter*3/4,this.diameter);
      }else{
        image(ceramicBloonTypes[4],this.x,this.y,this.diameter*3/4,this.diameter);
      }
    }else{
      if(this.camo&&this.regrow[0]){
        image(ceramicBloonTypes[3],this.x,this.y,this.diameter,this.diameter);
      }else if(this.regrow[0]){
        image(ceramicBloonTypes[2],this.x,this.y,this.diameter,this.diameter);
      }else if(this.camo){
        image(ceramicBloonTypes[1],this.x,this.y,this.diameter*3/4,this.diameter);
      }else{
        image(ceramicBloonTypes[0],this.x,this.y,this.diameter*3/4,this.diameter);
      }
    }
    if(this.frozen[0]){
      fill(180,210,230,100);
      push();
      noStroke();
      circle(this.x,this.y,this.diameter);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canPopIce&&this.frozen[0]&&!ice||!canSeeCamo&&this.camo){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        theBloons.splice(i,1,new RainbowBloon(this.x-5*cos(theTrack[this.checkpoint].angle),this.y-5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
        this.frozen = [...this.frozen];
        theBloons.push(new RainbowBloon(this.x+5*cos(theTrack[this.checkpoint].angle),this.y+5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,this.frozen,this.freezeTimeCounter,this.regrow,this.camo));
      }
    }
    if(dart){
      theDarts[j].done = true;
    }
  }

  through(i){
    if(this.fortified){
      lives-=114;
    }else{
      lives-=104;
    }
    theBloons.splice(i,1);
  }
}

class MOABBloon{
  constructor(x,y,checkpoint,id,fortified){
    this.x = x;
    this.y = y;
    this.width = 75;
    this.length = 125;
    this.speed = 70/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 400;
    }else{
      this.hitsToPop = 200;
    }
    this.hits = 0;
  }

  move(){
    for(var i=0; i<theTrack.length-1; i++){
      if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
        this.x = theTrack[i].x
        this.y = theTrack[i].y
        this.checkpoint = i;
      }
    }
    this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
    this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
  }
  
  display(i){
    if(this.fortified){
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(MOABBloonTypes[1],0,0,this.length,this.width);
      pop();
    }else{
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(MOABBloonTypes[0],0,0,this.length,this.width);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        if(this.fortified){
          theBloons.splice(i,1,new CeramicBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new CeramicBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new CeramicBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new CeramicBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
        }else{
          theBloons.splice(i,1,new CeramicBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new CeramicBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new CeramicBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new CeramicBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
        }
      }
    }
    if(dart){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }
  }

  through(i){
    if(this.fortified){
      lives-=856;
    }else{
      lives-=616;
    }
    theBloons.splice(i,1);
  }
}

class BFBBloon{
  constructor(x,y,checkpoint,id,fortified){
    this.x = x;
    this.y = y;
    this.width = 150;
    this.length = 210;
    this.speed = 17.5/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 1400;
    }else{
      this.hitsToPop = 700;
    }
    this.hits = 0;
  }

  move(){
    for(var i=0; i<theTrack.length-1; i++){
      if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
        this.x = theTrack[i].x
        this.y = theTrack[i].y
        this.checkpoint = i;
      }
    }
    this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
    this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
  }
  
  display(i){
    if(this.fortified){
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(BFBBloonTypes[1],0,0,this.length,this.width);
      pop();
    }else{
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(BFBBloonTypes[0],0,0,this.length,this.width);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        if(this.fortified){
          theBloons.splice(i,1,new MOABBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new MOABBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new MOABBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new MOABBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
        }else{
          theBloons.splice(i,1,new MOABBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new MOABBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new MOABBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new MOABBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
        }
      }
    }
    if(dart){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }
  }

  through(i){
    if(this.fortified){
      lives-=4824;
    }else{
      lives-=3164;
    }
    theBloons.splice(i,1);
  }
}

class ZOMGBloon{
  constructor(x,y,checkpoint,id,fortified){
    this.x = x;
    this.y = y;
    this.width = 175;
    this.length = 270;
    this.speed = 12.6/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 8000;
    }else{
      this.hitsToPop = 4000;
    }
    this.hits = 0;
  }

  move(){
    for(var i=0; i<theTrack.length-1; i++){
      if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
        this.x = theTrack[i].x
        this.y = theTrack[i].y
        this.checkpoint = i;
      }
    }
    this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
    this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
  }
  
  display(i){
    if(this.fortified){
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(ZOMGBloonTypes[1],0,0,this.length,this.width);
      pop();
    }else{
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(ZOMGBloonTypes[0],0,0,this.length,this.width);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        if(this.fortified){
          theBloons.splice(i,1,new BFBBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new BFBBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new BFBBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new BFBBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
        }else{
          theBloons.splice(i,1,new BFBBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new BFBBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new BFBBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new BFBBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
        }
      }
    }
    if(dart){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }
  }

  through(i){
    if(this.fortified){
      lives-=27296;
    }else{
      lives-=16656;
    }
    theBloons.splice(i,1);
  }
}

class DDTBloon{
  constructor(x,y,checkpoint,id,fortified){
    this.x = x;
    this.y = y;
    this.width = 90;
    this.length = 150;
    this.speed = 192.5/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    this.camo = true;
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 800;
    }else{
      this.hitsToPop = 400;
    }
    this.hits = 0;
  }

  move(){
    for(var i=0; i<theTrack.length-1; i++){
      if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
        this.x = theTrack[i].x
        this.y = theTrack[i].y
        this.checkpoint = i;
      }
    }
    this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
    this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
  }
  
  display(i){
    if(this.fortified){
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(DDTBloonTypes[1],0,0,this.length,this.width);
      pop();
    }else{
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(DDTBloonTypes[0],0,0,this.length,this.width);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id||!canSeeCamo||!canPopLead||ice||!canPopBlack){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        if(this.fortified){
          theBloons.splice(i,1,new CeramicBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true,true));
          theBloons.push(new CeramicBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true,true));
          theBloons.push(new CeramicBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true,true));
          theBloons.push(new CeramicBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true,true));
        }else{
          theBloons.splice(i,1,new CeramicBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true));
          theBloons.push(new CeramicBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true));
          theBloons.push(new CeramicBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true));
          theBloons.push(new CeramicBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,[true,12],true));
        }
      }
    }
    if(dart){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }
  }

  through(i){
    if(this.fortified){
      lives-=1256;
    }else{
      lives-=816;
    }
    theBloons.splice(i,1);
  }
}

class BADBloon{
  constructor(x,y,checkpoint,id,fortified){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.length = 325;
    this.speed = 12.6/60;
    this.halfSpeed = this.speed/2;
    this.checkpoint = checkpoint;
    this.immune = id;
    if(fortified!==undefined){
      this.fortified = fortified;
    }else{
      this.fortified = false;
    }
    if(fortified){
      this.hitsToPop = 40000;
    }else{
      this.hitsToPop = 20000;
    }
    this.hits = 0;
  }

  move(){
    for(var i=0; i<theTrack.length-1; i++){
      if(dist(this.x,this.y,theTrack[i].x,theTrack[i].y)<this.speed*0.9){
        this.x = theTrack[i].x
        this.y = theTrack[i].y
        this.checkpoint = i;
      }
    }
    this.y-=this.speed*sin(theTrack[this.checkpoint].angle);
    this.x-=this.speed*cos(theTrack[this.checkpoint].angle);
  }
  
  display(i){
    if(this.fortified){
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(BADBloonTypes[1],0,0,this.length,this.width);
      pop();
    }else{
      push();
      translate(this.x,this.y);
      rotate(theTrack[this.checkpoint].angle+PI);
      image(BADBloonTypes[0],0,0,this.length,this.width);
      pop();
    }
  }

  
  pop(i,j,id,dart,ice,canPopIce,canSeeCamo,canPopLead,canPopPurple,canPopBlack){
    let canPop = true;
    if(this.immune===id){
      canPop = false;
    }
    if(canPop){
      this.hits++;
      if(this.hits>=this.hitsToPop){
        money++;
        if(this.fortified){
          theBloons.splice(i,1,new ZOMGBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new ZOMGBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new ZOMGBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new DDTBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
          theBloons.push(new DDTBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id,undefined,undefined,undefined,undefined,true));
        }else{
          theBloons.splice(i,1,new ZOMGBloon(this.x-7.5*cos(theTrack[this.checkpoint].angle),this.y-7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new ZOMGBloon(this.x-2.5*cos(theTrack[this.checkpoint].angle),this.y-2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new ZOMGBloon(this.x+2.5*cos(theTrack[this.checkpoint].angle),this.y+2.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new DDTBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
          theBloons.push(new DDTBloon(this.x+7.5*cos(theTrack[this.checkpoint].angle),this.y+7.5*sin(theTrack[this.checkpoint].angle),this.checkpoint,id));
        }
      }
    }
    if(dart){
      theDarts[j].bloonsHit++;
      if(theDarts[j].bloonsHit>=theDarts[j].pierce){
        theDarts[j].done = true;
      }
    }
  }

  through(i){
    if(this.fortified){
      lives-=149184;
    }else{
      lives-=86624;
    }
    theBloons.splice(i,1);
  }
}