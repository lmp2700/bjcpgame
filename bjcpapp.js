// have a question box that will rotate questions in and out
// create a timer for each turn
// create 2 categories for each answer
// have a points board for 1 player and 2 player
// utilize bootstrap
// utilize velocity for the categories. different velocity options if the answer is right vs wrong
// utilize velocity for the question box
// game reset button 

// ===========================
// OBJECTS HERE
// used Cicerone beers & categorization
// IDEAL: add BJCP beers and origins, consider the varying colors, ABV and IBUs for all beers
// ===========================
console.log('so much beer')
$('#answer').hide();
$('#gamerules').hide();
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
// TIMERS & GAME LOGIC HERE  
// 1 CONTINUOUSLY RUNNING GAME TIMER COUNTING UP
// TIMER RESETS WITH EACH NEW LEVEL - 2 MIN PER LEVEL
// Level 1 is which beer has the higher ABV
// Level 2 is to pick the correct color of beer
// Level 3 is to pick the correct fermentation 
// IDEAL: HAVE 2 QUESTIONS FOR LEVEL 1 - HIGHER AND LOWER ABV
// IDEAL: 10 SECOND TIMER PER TURN - IF TIMER REACHES 0 (COUNTING DOWN), THE GAME IS OVER
// IDEAL: EASY, INTERMEDIATE AND ADVANCED. 90 SEC PER LEVEL OF INTERMEDIATE. 45 SEC FOR ADVANCED
// ============================
const game = {
    timer: 0,
    levelTimer: 0,
    start() {
        const gameTimer = setInterval (() => {
            this.timer++
            this.levelTimer++
            $('#game-timer').text('Timer: ' + this.levelTimer);
            // console.log(this.levelTimer) // returning NaN with -=
                if(this.levelTimer === 120) {
                alert('You\'re cut off')
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

let beer1 = '';
let beer2 = '';
points = 0;
level = 1;
$('#start').on('click', function() {
    game.start();
    $('#start').off()
    $('#gamerules').hide();
    $('.question_box').text('Which ABV is higher?');
    $('#options').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option1">'));
    $('#options').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option2">'));
    beer1 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
    beer2 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
    $('#option1').val(beer1.name)
    $('#option2').val(beer2.name)

    $('#option1, #option2').on('click', function(e) {
      let userChoice = $(e.target).attr('id')
      let otherChoice = {}
      if(userChoice === "option1"){
        userChoice = beer1
        otherChoice = beer2
        console.log(userChoice.name)
      } else {
        userChoice = beer2
        otherChoice = beer1
        console.log(userChoice.name)
      }
      if(userChoice.abv > otherChoice.abv){
            points++
            $('#score').text(points)
            $('#option1, #option2').off()
            $('#answer').show()
      $('.option_response').text(`You chose ${userChoice.name}. You are correct!`); // New beers populate in
        } else {
            $('.option_response').text('Try again') // New beers populate in and you get to try again 
        }
    })
    
})
// when resetting use options.empty()
$('#beerme').on('click', function () {
  $('#answer').hide()

})

$('#cutoff').on('click', function () {
  $('#answer').hide()

})

$('#rulesbutton').on('click', function () {
    $('#gamerules').show()
    // need to add in a hide function when the div or outside the div is clicked
})

$('#cutoff').on('click', function() {
    $('#answer').hide()
    document.location.reload()
  })

$('#reset').on('click', function() {
  document.location.reload()
})

console.log('the end')

// append the choices to the index.html buttons and add a function for the beers and the selection (beer 1, beer 2, selection)
// reset the beer array at the end of level 1

// ===========================
// ADDITIONAL LEVELS HERE
// ===========================
// 3. Allow user to either click Reset, A or B button -> reset could refresh page (easiest) or stop timer, hide timer, hide question, 
//    and answer buttons and show start button (harder)
// abvQuestions = ["Which beer has a higher ABV?"]; // keep this for use when things get really random
// colorQuestions = [{question: "What color is most commonly associated with this beer?",
//                   choices: ["straw", "light gold", "gold", "light amber", "amber", "dark amber", "brown", "dark brown", "black", "varies"],
//                   }]; // loop through the beer object and pick 1 beer. loop through the colorQuestions array and pick 2 random different 
                // choices. One of the choices will match the beer given

// fermentationQuestions = [{question: "What style of fermentation does this beer use?",
//                          choices: ["top", "bottom", "wild", "any"],
                        // }]; // loop through the beer object and pick 1 beer. Loop through the fermentationQuestions array and pick 2
                        // random different choices. One of the choices will match the beer given