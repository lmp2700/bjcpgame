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
// ===========================
// TIMERS HERE  
// 1 CONTINUOUSLY RUNNING GAME TIMER COUNTING UP
// TIMER RESETS WITH EACH NEW LEVEL - 2 MIN PER LEVEL
// IDEAL: 10 SECOND TIMER PER TURN - IF TIMER REACHES 0 (COUNTING DOWN), THE GAME IS OVER
// ===========================

// 3. Allow user to either click Reset, A or B button -> reset could refresh page (easiest) or stop timer, hide timer, hide question, 
//    and answer buttons and show start button (harder)
// 4. Have a correct answer (A or B) lead to showing a text that says "You win" or "You lose,"
// ONCE THE START BUTTON IS CLICKED
// 5. when you click the button, the console logs which beer they chose
// 6. a function runs that compares the two beers
// 7. the result gets appended to the page
const game = {
    level: 1,
    score: 0,
    timer: 0,
    levelTimer: 0,
    start() {
        const gameTimer = setInterval (() => {
            this.timer++
            this.levelTimer-=
            $('.game-timer').text('Time Left: ' + ($('this.leveltimer'))); // timer not showing up on the page
                if(this.levelTimer === 200) {
                alert('game over')
                clearInterval(gameTimer)
            }
        }, 1000);
    }
}
// beers need to be put into an array so the function can loop through an array
const beersArray = []
for(key in beer) {
    let ciceroneList = beer[key]
    for(let i = 0; i < ciceroneList.length; i++) {
        beersArray.push(ciceroneList[i])
    }
}
console.log(beersArray)

$('#start').on('click', function() {
    //turn off the start button once the game has started
    game.start();
    $('#start').off().hide();
    $('.question_box').text('Which ABV is higher?');
    $('.row-2').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option1">'));
    $('.row-2').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option2">'));
    let abv1 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0] 
    let abv2 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0]
    let selection;
    $('#option1').val(abv1.name)
    $('#option2').val(abv2.name)
    for(let i = 0; i < beersArray.length; i++) {
    if(abv1 > abv2 && selection === abv1) {
        alert('beer me')
    } else {
        alert('keep drinking')
        break
        } 
    }
})
console.log('rando')

// ===========================
// GAME LOGIC HERE
// LOOP THROUGH AN ARRAY OF BEER
// Level 1 is which beer has the higher ABV
// IDEAL: HAVE 2 QUESTIONS FOR LEVEL 1
// Level 2 is to pick the correct color of beer
// Level 3 is to pick the correct fermentation 
// ===========================

// when a choice is clicked, compare the two beers. when the beer is selected correctly, push it into a used array
// currently picking which beer has a higher ABV. Beer names will show up, not the ABV

// append the choices to the index.html buttons and add a function for the beers and the selection (beer 1, beer 2, selection)
// reset the beer array at the end of level 1

// ===========================
// ADDITIONAL LEVELS HERE
// ===========================
// abvQuestions = ["Which beer has a higher ABV?"]; // keep this for use when things get really random
// colorQuestions = [{question: "What color is most commonly associated with this beer?",
//                   choices: ["straw", "light gold", "gold", "light amber", "amber", "dark amber", "brown", "dark brown", "black", "varies"],
//                   }]; // loop through the beer object and pick 1 beer. loop through the colorQuestions array and pick 2 random different 
                // choices. One of the choices will match the beer given

// fermentationQuestions = [{question: "What style of fermentation does this beer use?",
//                          choices: ["top", "bottom", "wild", "any"],
                        // }]; // loop through the beer object and pick 1 beer. Loop through the fermentationQuestions array and pick 2
                        // random different choices. One of the choices will match the beer given

// for(let i = 0; i < newArray.length; i++){
//     // print out all the abv beers
//     console.log(newArray[i].name);
// }

//     abvQuestion = (abv1, abv2, selection) => {
//     for(let i = 0; i < newArray.length; i++)
//     if(abv1 > abv2 && selection === abv1) {
//         return('beer me') // pop up within game
//     } else {
//         return('keep drinking') // pop up within game that resets the level
//     }
// }