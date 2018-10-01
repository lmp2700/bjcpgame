// ===========================
// CLASSES HERE
// used Cicerone beers
// IDEAL: add BJCP beers and origins, consider the varying colors, ABV and IBUs for all beers
// ===========================

class Beer {
    constructor(color, abv, fermentation) {
    this.color = color;
    this.abv = abv;
    this.fermintation = fermentation;
    // this.origin = origin
    }
}
const bestBitter = new Beer('gold', 3.8, 'top');
const englishIPA = new Beer('gold', 5, 'top');
const britishBrownAle = new Beer('amber', 4.2, 'top');
const sweetStout = new Beer('dark brown', 4, 'top');
const oatmealStout = new Beer('brown', 4.2, 'top');
const weeHeavy = new Beer('amber', 6.5, 'top');
const irishStout = new Beer('brown', 4, 'top');
const germanPils = new Beer('straw', 4.4, 'bottom');
const munichHelles = new Beer('straw', 4.7, 'bottom');
const czechPremiumPaleLager = new Beer('straw', 4.2, 'bottom');
const marzen = new Beer('gold', 5.8, 'bottom');
const hellesBock = new Beer('gold', 6.3,'bottom');
const doppelbock = new Beer('gold', 7, 'bottom');
const weissbier = new Beer('straw', 4.3, 'top');
const berlinerWeisse = new Beer('straw', 2.8, 'top');
const gose = new Beer('straw', 4.2, 'top');
const kolsch = new Beer('straw', 4.4, 'top');
const americanLightLager = new Beer('straw', 2.8, 'bottom');
const americanWheatBeer = new Beer('straw', 4, 'any');
const americanBlondeAle = new Beer('straw', 3.8, 'any');
const americanPaleAle = new Beer('light gold', 4.5, 'top');
const americanAmberAle = new Beer('light amber', 4.5, 'top'); 
const americanIPA = new Beer('gold', 5.5, 'top');
const doubleIPA = new Beer('gold', 7.5, 'top');
const americanBrownAle = new Beer('dark amber', 4.3, 'top');
const americanPorter = new Beer('brown', 4.8, 'top');
const americanStout = new Beer('dark brown', 5, 'top');
const imperialStout = new Beer('dark brown', 8, 'top');
const americanBarleywine = new Beer('light amber', 8, 'top');
const californiaCommon = new Beer('light amber', 4.5, 'bottom');
const gueuze = new Beer('straw', 5, 'wild');
const fruitLambic = new Beer('varies', 5, 'wild');
const flandersRedAle = new Beer('red', 4.6, 'top');
const belgianDubbel = new Beer('light amber', 6, 'top');
const belgianTripel = new Beer('light gold', 7.5, 'top');
const belgianBlondAle = new Beer('light gold', 6, 'top');
const belgianGoldenStrongAle = new Beer('straw', 7.5, 'top');
const saison = new Beer('light gold', 5, 'top');
const witbier = new Beer('straw', 4.5, 'top');
const internationalPaleLager = new Beer('straw', 4.6, 'bottom');

// ===========================
// TIMERS HERE  
// 1 CONTINUOUSLY RUNNING GAME TIMER
// IDEAL: 10 SECOND TIMER PER TURN - IF TIMER REACHES 0, THE GAME IS OVER
// ===========================

const game = {
    level: 1,
    score: 0,
    timer: 0,
    turnTimer: 0,
    start() {
        const gameTimer = setInterval (() => {
            this.timer++
            this.turnTimer++
                if(this.turnTimer === 10) {
                alert('game over')
                clearInterval(turnTimer)
                clearInterval(timer)
                // page is timing out with turn timer only
            }
        }, 1000);
    }
}
game.start();

// ===========================
// GAME LOGIC HERE
// LOOP THROUGH AN ARRAY OF QUESTIONS
// Level 1 is which beer has the higher ABV
// Level 2 is to pick the correct color of beer
// Level 3 is to pick the correct fermentation 
// ===========================

abvQuestions = ["Which beer has a higher ABV?", "Which beer has a lower ABV?"] // for/if loop. loop through the beer object and pick a beer
// pick just one question for now???
for(i = 0; i <= this.abv.length; i++) {
    if(this.abv > this.abv) {
        console.log('higher')
    }
    if(this.abv < this.abv) {
        console.log('lower')
    }
    if(this.abv === this.abv) {
        console.log('equal')
    }
}
colorQuestions = ["What color is most commonly associated with this beer?"] // loop through the beer object and pick a beer with options of
// straw, light gold, gold, light amber, amber, dark amber, brown, dark brown, black and varies
fermentationQuestions = ["What style of fermentation does this beer use?"] // loop through the beer object and pick a beer with options of
// top, bottom, wild or any