// ===========================
// OBJECTS HERE
// used Cicerone beers & categorization
// IDEAL: add BJCP beers and origins, consider the varying colors, ABV and IBUs for all beers
// ===========================
const beer = {
    belgian: [{
        name: 'Gueuze',
        color: 'straw',
        abv: 5,
        fermentation: 'wild',
      },
      {
        name: 'Fruit Lambic',
        color: 'varies',
        abv: 5,
        fermentation: 'wild',
      },
      {
        name: 'Flanders Red Ale',
        color: 'red',
        abv: 4.6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Dubbel',
        color: 'light amber',
        abv: 6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Tripel',
        color: 'light gold',
        abv: 6.5,
        fermentation: 'top',
      },
      {
        name: 'Belgian Blond Ale',
        color: 'light gold',
        abv: 6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Golden Strong Ale',
        color: 'straw',
        abv: 7.5,
        fermentation: 'top',
      },
      {
        name: 'Saison',
        color: 'light gold',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Witbier',
        color: 'straw',
        abv: 4.5,
        fermentation: 'top',
      }],
unitedKingdom: [{
      name: 'Best Bitter',
      color: 'gold',
      abv: 3.8,
      fermentation: 'top',
    },
    {
        name: 'English IPA',
        color: 'gold',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Brittish Brown Ale',
        color: 'amber',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Sweet Stout',
        color: 'dark brown',
        abv: 4,
        fermentation: 'top',
      },
      {
        name: 'Oatmeal Stout',
        color: 'brown',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Wee Heavy',
        color: 'amber',
        abv: 6.5,
        fermentation: 'top',
      },
      {
        name: 'Irish Stout',
        color: 'brown',
        abv: 4,
        fermentation: 'top',
      }],
germanCzech: [{
        name: 'German Pils',
        color: 'straw',
        abv: 4.4,
        fermentation: 'bottom',
      },
      {
        name: 'Munich Helles',
        color: 'straw',
        abv: 4.7,
        fermentation: 'bottom',
      },
      {
        name: 'Czech Premium Pale Lager',
        color: 'straw',
        abv: 4.2,
        fermentation: 'bottom',
      },
      {
        name: 'Marzen',
        color: 'gold',
        abv: 5.8,
        fermentation: 'bottom',
      },
      {
        name: 'Helles Bock',
        color: 'gold',
        abv: 6.3,
        fermentation: 'bottom',
      },
      {
        name: 'Doppelbock',
        color: 'gold',
        abv: 7,
        fermentation: 'bottom',
      },
      {
        name: 'Weissbier',
        color: 'straw',
        abv: 4.3,
        fermentation: 'top',
      },
      {
        name: 'Berliner Weisse',
        color: 'straw',
        abv: 2.8,
        fermentation: 'top',
      },
      {
        name: 'Gose',
        color: 'straw',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Kolsch',
        color: 'straw',
        abv: 4.4,
        fermentation: 'top',
      }],
american: [{
        name: 'American Light Lager',
        color: 'straw',
        abv: 2.8,
        fermentation: 'bottom',
      },
      {
        name: 'American Wheat Beer',
        color: 'straw',
        abv: 4,
        fermentation: 'any',
      },
      {
        name: 'American Blonde Ale',
        color: 'straw',
        abv: 3.8,
        fermentation: 'any',
      },
      {
        name: 'American Pale Ale',
        color: 'light gold',
        abv: 4.5,
        fermentation: 'top',
      },
      {
        name: 'American Amber Ale',
        color: 'light amber',
        abv: 4.5,
        fermentation: 'top',
      },
      {
        name: 'American IPA',
        color: 'gold',
        abv: 5.5,
        fermentation: 'top',
      },
      {
        name: 'Double IPA',
        color: 'gold',
        abv: 7.5,
        fermentation: 'top',
      },
      {
        name: 'American Brown Ale',
        color: 'dark amber',
        abv: 4.3,
        fermentation: 'top',
      },
      {
        name: 'American Porter',
        color: 'brown',
        abv: 4.8,
        fermentation: 'top',
      },
      {
        name: 'American Stout',
        color: 'dark brown',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Imperial Stout',
        color: 'dark brown',
        abv: 8,
        fermentation: 'top',
      },
      {
        name: 'American Barleywine',
        color: 'light amber',
        abv: 8,
        fermentation: 'top',
      },
      {
        name: 'California Common',
        color: 'light amber',
        abv: 4.5,
        fermentation: 'bottom',
      }],
other: [{
        name: 'International Pale Lager',
        color: 'straw',
        abv: 4.6,
        fermentation: 'bottom',
}],
}
const newArray = Object.entries(beer);

// ===========================
// TIMERS HERE  
// 1 CONTINUOUSLY RUNNING GAME TIMER
// IDEAL: 10 SECOND TIMER PER TURN - IF TIMER REACHES 0, THE GAME IS OVER
// ===========================

// const game = {
//     level: 1,
//     score: 0,
//     timer: 0,
//     turnTimer: 0,
//     start() {
//         const gameTimer = setInterval (() => {
//             this.timer++
//             this.turnTimer++
//                 if(this.turnTimer === 10) {
//                 alert('game over')
//                 clearInterval(turnTimer)
//                 clearInterval(timer)
//                 // page is timing out with turn timer only
//             }
//         }, 1000);
//     }
// }
// game.start();

// ===========================
// GAME LOGIC HERE
// LOOP THROUGH AN ARRAY OF QUESTIONS
// Level 1 is which beer has the higher ABV
// IDEAL: HAVE 2 QUESTIONS FOR LEVEL 1
// Level 2 is to pick the correct color of beer
// Level 3 is to pick the correct fermentation 
// ===========================

// have a question show up on index.html with 2 buttons for random beer options
// $(".question_box")​.text("Which beer has a higher ABV?")​; - CODE IS RETURNING A SYNTAX ERROR. REMOVING CODE AROUND IT DID NOT FIX
// JUST UPDATED HTML - UPDATE DIV QUESTION_BOX WITH SUBSEQUENT LEVELS

// beers need to be put into an array so the function of  can loop through an array


// myArray = new Array();
// $.each(Beer, function(key, value) { 
//   myArray.push(value);
// });
// console.log(myArray)

// when a choice is clicked, compare the two beers. when the beer is selected correctly, push it into a used array?
// append the choices to the index.html buttons and add a function for the beers and the selection (beer 1, beer 2, selection)
// reset the beer array at the end of level 1

// abvQuestions = ["Which beer has a higher ABV?"]; // append this question to the page for the whole of level 1
            // for/if loop. loop through the array and pick a random question. Loop through the beer object and pick 2 random 
            // different beers. The user has to pick which beer has a higher ABV (option 1 or option 2)


// abvQuestion = (beer1, beer2, selection) => {
//     if(beer1 > beer2 || selection === beer1) {
//         return('beer me')
//     } else {
//         return('keep drinking')
//     }
// }




// ===========================
// ADDITIONAL LEVELS HERE
// ===========================
// colorQuestions = [{question: "What color is most commonly associated with this beer?",
//                   choices: ["straw", "light gold", "gold", "light amber", "amber", "dark amber", "brown", "dark brown", "black", "varies"],
//                   }]; // loop through the beer object and pick 1 beer. loop through the colorQuestions array and pick 2 random different 
                // choices. One of the choices will match the beer given

// fermentationQuestions = [{question: "What style of fermentation does this beer use?",
//                          choices: ["top", "bottom", "wild", "any"],
                        // }]; // loop through the beer object and pick 1 beer. Loop through the fermentationQuestions array and pick 2
                        // random different choices. One of the choices will match the beer given