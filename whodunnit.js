// Episode 1

        // const scenario = {
        //     murderer: 'Miss Scarlet',
        //     room: 'Library',
        //     weapon: 'Rope'
        //   };
        
        //   const declareMurderer = function() {
        //     return `The murderer is ${scenario.murderer}.`;
        //   }
        
        //   const verdict = declareMurderer();
        //   console.log(verdict);

//  Prediction: indentation of the function and what follows is wrong
//  Actual situation: it works anyway


// Episode 2

        // const murderer = 'Professor Plum';

        // const changeMurderer = function() {
        //   murderer = 'Mrs. Peacock';
        // }

        // const declareMurderer = function() {
        //   return `The murderer is ${murderer}.`;
        // }

        // changeMurderer();
        // const verdict = declareMurderer();
        // console.log(verdict);

// Prediction: We would expect the variable on the first function not to be re-declared (and it's global too)
// Actual issue: The second function causes an error because it's been already declared above


// Episode 3

        // let murderer = 'Professor Plum';

        // const declareMurderer = function() {
        //   let murderer = 'Mrs. Peacock';
        //   return `The murderer is ${murderer}.`;
        // }

        // const firstVerdict = declareMurderer();
        // console.log('First Verdict: ', firstVerdict);

        // const secondVerdict = `The murderer is ${murderer}.`;
        // console.log('Second Verdict: ', secondVerdict);

// Prediction: The second log does not use the function so it will access the value declare before the function
// Actual situation: That one indeed.


// Episode 4

        // let suspectOne = 'Miss Scarlet';
        // let suspectTwo = 'Professor Plum';
        // let suspectThree = 'Mrs. Peacock';

        // const declareAllSuspects = function() {
        //   let suspectThree = 'Colonel Mustard';
        //   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
        // }

        // const suspects = declareAllSuspects();
        // console.log(suspects);
        // console.log(`Suspect three is ${suspectThree}.`);

// Prediction: 'Colonel Mustard' is only accessible in the context of the first function. 2nd log should return 'Mrs Peacock'
// Actual situation: As per prediction


// Episode 5

        // const scenario = {
        //     murderer: 'Miss Scarlet',
        //     room: 'Kitchen',
        //     weapon: 'Candle Stick'
        //   };
        
        //   const changeWeapon = function(newWeapon) {
        //     scenario.weapon = newWeapon;
        //   }
        
        //   const declareWeapon = function() {
        //     return `The weapon is the ${scenario.weapon}.`;
        //   }
        
        //   changeWeapon('Revolver');
        //   const verdict = declareWeapon();
        //   console.log(verdict);

// Prediction: the change applied by the first function will remain so we expect the verdict to mention 'Revolver'
// Actual situation: As per prediction


// Episode 6

        // let murderer = 'Colonel Mustard';

        // const changeMurderer = function() {
        //   murderer = 'Mr. Green';

        //   const plotTwist = function() {
        //     murderer = 'Mrs. White';
        //   }

        //   plotTwist();
        // }

        // const declareMurderer = function () {
        //   return `The murderer is ${murderer}.`;
        // }

        // changeMurderer();
        // const verdict = declareMurderer();
        // console.log(verdict);

// Prediction: Using the changeMurderer function will always return 'Mrs White' as the nested function is called into it
// Actual situation: As per prediction


// Episode 7

        // let murderer = 'Professor Plum';

        // const changeMurderer = function() {
        //   murderer = 'Mr. Green';

        //   const plotTwist = function() {
        //     // let murderer = 'Colonel Mustard';

        //     const unexpectedOutcome = function() {
        //       murderer = 'Miss Scarlet';
        //     }

        //     unexpectedOutcome();
        //   }

        //   plotTwist();
        // }

        // const declareMurderer = function() {
        //   return `The murderer is ${murderer}.`;
        // }

        // changeMurderer();
        // const verdict = declareMurderer();
        // console.log(verdict);

// Prediction: The changeMurdered function calls plotTwist eventually, that will return 'Miss Scarlet' anyway (for nested func. unexpectedOutcome) 
// Actual situation: result is Mr Green (I missed the fact that plotTwist assigns variable with 'let')
// Not clear why Miss Scarlet is not the result
// Does 'let' in the funct. plotTwist prevents from  re-assigning the variable in its nested funct.? Apparently yes.



// Episode 8

        // const scenario = {
        //     murderer: 'Mrs. Peacock',
        //     room: 'Conservatory',
        //     weapon: 'Lead Pipe'
        // };
        
        // const changeScenario = function() {
        //     scenario.murderer = 'Mrs. Peacock';
        //     scenario.room = 'Dining Room';
        
        //     const plotTwist = function(room) {
        //     if (scenario.room === room) {
        //         scenario.murderer = 'Colonel Mustard';
        //     }
        
        //     const unexpectedOutcome = function(murderer) {
        //         if (scenario.murderer === murderer) {
        //         scenario.weapon = 'Candle Stick';
        //         }
        //     }
        
        //     unexpectedOutcome('Colonel Mustard');
        //     }
        
        //     plotTwist('Dining Room');
        // }
        
        // const declareWeapon = function() {
        //     return `The weapon is ${scenario.weapon}.`
        // }
        
        // changeScenario();
        // const verdict = declareWeapon();
        // console.log(verdict);


// Prediction: The function should return 'candle stick' basing on the logic of the parent function changeScenario: it seems like a loopt though
// Actual situation: It returns candle stick


// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: Mrs Peacock is only assigned as value into the conditional block but the condition is satisfied so we would expect her to be the murderer
// Actual situation: Using let seems still to prevent the value to be reassigned outside the block (causing cntraddiction?)

