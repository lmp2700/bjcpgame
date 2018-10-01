// ===========================
// CLASSES HERE
// used Cicerone categories/beers as they are easier to break down into classes
// IDEAL: break classes down into the BJCP categories and add their beers as well
// ===========================

class Beer {
    constructor(color, abv, fermentation) {
    this.color = color;
    this.abv = abv;
    this.fermintation = fermintation;
    // this.origin = origin
    }
}
const drink = new Beer();

class UKAle extends Beer {
    constructor(color, abv, fermintation) { 
    }
}
const bestBitter = new UKAle('gold', 3.8, 'top');
const englishIPA = new UKAle('gold', 5, 'top');
const britishBrownAle = new UKAle('amber', 4.2, 'top');
const sweetStout = new UKAle('dark brown', 4, 'top');
const oatmealStout = new UKAle('brown', 4.2, 'top');
const weeHeavy = new UKAle('amber', 6.5, 'top');
const irishStout = new UKAle('brown', 4, 'top');


class GermanCzech extends Beer {
    constructor(color, abv, fermintation) { 
    }
}
const germanPils = new GermanCzech('straw', 4.4, 'bottom');
const munichHelles = new GermanCzech('straw', 4.7, 'bottom');
const czechPremiumPaleLager = new GermanCzech('straw', 4.2, 'bottom');
const marzen = new GermanCzech('gold', 5.8, 'bottom');
const hellesBock = new GermanCzech('gold', 6.3,'bottom');
const doppelbock = new GermanCzech('gold', 7, 'bottom');
const weissbier = new GermanCzech('straw', 4.3, 'top');
const berlinerWeisse = new GermanCzech('straw', 2.8, 'top');
const gose = new GermanCzech('straw', 4.2, 'top');
const kolsch = new GermanCzech('straw', 4.4, 'top');

class american extends Beer {
    constructor(color, abv, fermintation) { 
    }
}
const americanLightLager = new American('straw', 2.8, 'bottom');
const americanWheatBeer = new American('straw', 4, 'any');
const americanBlondeAle = new American('straw', 3.8, 'any');
const americanPaleAle = new American('light gold', 4.5, 'top');
const americanAmberAle = new American('light amber', 4.5, 'top'); 
const americanIPA = new American('gold', 5.5, 'top');
const doubleIPA = new American('gold', 7.5, 'top');
const americanBrownAle = new American('dark amber', 4.3, 'top');
const americanPorter = new American('brown', 4.8, 'top');
const americanStout = new American('dark brown', 5, 'top');
const imperialStout = new American('dark brown', 8, 'top');
const americanBarleywine = new American('light amber', 8, 'top');
const californiaCommon = new American('light amber', 4.5, 'bottom');

class Belgian extends Beer {
    constructor(color, abv, fermintation) { 
    }
}
const gueuze = new Belgian('straw', 5, 'wild');
const fruitLambic = new Belgian('varies', 5, 'wild');
const flandersRedAle = new Belgian('red', 4.6, 'top');
const belgianDubbel = new Belgian('light amber', 6, 'top');
const belgianTripel = new Belgian('light gold', 7.5, 'top');
const belgianBlondAle = new Belgian('light gold', 6, 'top');
const belgianGoldenStrongAle = new Belgian('straw', 7.5, 'top');
const saison = new Belgian('light gold', 5, 'top');
const witbier = new Belgian('straw', 4.5, 'top');

class Other extends Beer {
    constructor(color, abv, fermintation) { 
    }
}
const internationalPaleLager = new Other('straw', 4.6, 'bottom');

// ===========================
// TIMERS HERE
// ===========================



