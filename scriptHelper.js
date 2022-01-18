// Write your helper functions here!
try {
    require('isomorphic-fetch');
} catch(e) {
    // do nothing
}

/////////////////////////////////////////////////////////////////////
// ADDING VALIDATION ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * THE FUNCTION validateInput SHOULD RETURN THE FOLLOWING VALUES IF:
 *      
 *      validateInput(testInput) === OUTPUT ===> "Empty" 
 *      validateInput(testInput) === OUTPUT ===> "Not a Number"
 *      validateInput(testInput) === OUTPUT ===> "Is a Number"
 * 
 * WE CAN USE THE BUILT IN METHOD isNaN() - is not a number - TO RETURN 
 * A BOOLEAN VALUE.
 * 
 *      isNaN("text") ==> true
 *      isNaN(123456) ==> false 
 * 
 *      isNaN(Number(testInput)) ===> true if NaN
 *                               ===> false if NUMBER
 * 
 * WE CREATE A CONDITIONAL STATEMENT:
 *      IF testInput = "", return "Empty"
 *      IF isNaN(Number("no numbers")), return "Not a Number"
 *      IF testInput = numbers, return "Is a Number"
 */

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }           
}


/////////////////////////////////////////////////////////////////////
// FORM SUBMISSION //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//
//  WRITING THE VALIDATION SCREENER FOR EACH INPUT FIELD
//

/**
 * WE WANT TO USE THE FUNCTION validateInput IN THE FUNCTION formSubmission.
 * THE PARAMETERS THAT WE WANT TO TEST ARE:
 *      ==> pilot, copilot, fuelLevel, and cargoLevel
 * 
 * 1. THE FIRST TEST WE WANT TO VERIFY IS IF THE VALUE OF EACH INPUT IS EMPTY.
 * 
 * THE FUNCTION validateInput ONLY HAS ONE PARAMETER. TO TEST THE SELECTED 
 * PARAMETERS IN THE FUNCTION formSubmission, WE WRITE THE FOLLOWING CONDITION:
 * 
    if(pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All input fields must be filled");
        return;
    }

 * THEN WE WRITE A CONDITIONAL IF STATEMENT IN THE LOOP USING THE FUNCTION 
 * validateInput(inputValues[i]) TO CYCLE EACH INDEX THAT HAS AN EMPTY ELEMENT.
 * ONCE THE CONDITIONAL STATEMENT DETECTS AN EMPTY VALUE, PROMPT THE USER 
 * AN ALERT alert(""); AND STOP THE FUNCTION FROM EXECUTING WITH A RETURN 
 * STATEMENT. THE CONDITION EXECUTES STRICTLY EQUAL TO "EMPTY".
 * 
 *      for (let i = 0; i < inputValues.length; i++) {    
 *          if (validateInput(inputValues[i]) === "Empty") {
 *              alert("some text message about the alert");
 *              return;
 *          }
 *      } 
 * 
 * WE ALSO MUST WRITE CONDITIONAL IF STATEMENTS WHERE EACH INPUT FIELD IS 
 * THE RIGHT DATA TYPE. THE CONDITION SHOULD BE WRITTEN AS:
 * 
 *      validateInput(pilot)        !== "Not a Number"
 *      validateInput(copilot)      !== "Not a Number"
 *      validateInput(fuelLevel)    === "Is a Number"
 *      validateInput(cargoLevel)   === "Is a Number"
 * 
 * IF THE RETURNED VALUE OF validateInput(testInput) MATCHES TO THE CORRESPONDING
 * STRING VALUE, PROMPT THE USER AN ALERT STATEMENT AND STOP THE FUNCTION WITH 
 * A RETURN STATEMENT.
 * 
 *      if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" ||validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Is a Number") {
 *          alert("Each field must have a valid input.");
 *          return;
 *      }
 */

//
//  WRITING CONDITIONS FOR fuelLevel AND cargoLevel
//

/**
 * WE MUST WRITE CONDITIONS FOR fuelLevel AND cargoMass.
 * 
 *      => to validate conditions for the input fields fuelLevel and cargoMass
 *          
 *          => After passing the validation screening, change the div container
 *             with id="faultyItems" visibility to 'visible'
 * 
 *                  faultyItems.style.visibility = 'visible';
 *          
 *          => Insert pilot and co-pilot names
 *                  <li id="pilotStatus"...> Pilot ${pilot} Ready </li>
 *                  <li id="copilotStatus"...> Co-pilot ${copilot} Ready </li>
 * 
 *             The innerHTML contents should be replaced with 
 *                  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
 *                  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`; 
 * 
 *          1. if fuelLevel < 10,000 Liters
 *              => Change text of <h2 id="launchStatus"...> ... </h2>
 *                  launchStatus.innerHTML = "Shuttle not ready for launch";
 *              
 *              => h2 Text Color: Red
 *                  launchStatus.style.color = "red";
 * 
 *              => Change text of <li id="fuelStatus"...> ... </li>
 *                  fuelStatus.innerHTML = "Fuel level too low for launch";
 * 
 *          2. if cargoLevel > 10,000 kilograms
 *              => Change text of <h2 id="launchStatus"...> ... </h2>
 *                  launchStatus.innerHTML = "Shuttle not ready for launch";
 * 
 *              => h2 Text Color: Red
 *                  launchStatus.style.color ="red";
 *              
 *              => Change text of <li id="cargoStatus"...> ... </li>    
 *                  cargoStatus.innerHTML = "Cargo mass too heavy for launch";
 * 
 *          3. if fuelLevel >= 10,000 Liters
 *              => Change text of <li id="fuelStatus"...> ... </li>
 *                  fuelStatus.innerHTML = "Fuel level high enough for launch";
 * 
 *          4. if cargoLevel <= 10,000 kilograms
 *              => Change text of <li id="cargoStatus"...> ... </li>
 *                  cargoStatus.innerHTML = "Cargo mass low enough for launch";
 * 
 *          5. if fuelLevel >= 10,000 Liters AND cargoLevel <= 10,000 kilograms
 *              => Change text of <h2 id="launchStatus"...> ... </h2>
 *                  launchStatus.innerHTML = "Shuttle is Ready for Launch";
 * 
 *              => h2 Text Color: Green
 *                  launchStatus.style.color = "green";
 */


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    // INSERT VALIDATION FUNCTION
    if(pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        window.alert("All input fields must be filled");
        return;
    } 
    
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(Number(fuelLevel)) === "Is a Number" || validateInput(Number(cargoLevel)) === "Is a Number") {
        window.alert("Each field must have a valid input.");
        return;
    }

    // if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    //     alert("All fields are required!");
    //     return;
    // }  else if (validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== 'Not a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
    //     alert("Make sure to enter valid information for each field!");
    //     return;
    // }  

    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        // h2 id="launchStatus"
        launchStatus.innerHTML = "Shuttle Not ready for launch";
        launchStatus.style.color = "red";
        // li id="fuelStatus"
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    if (cargoLevel > 10000) {
        // h2 id="launchStatus"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        // li id="cargoStatus"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    }

    if (fuelLevel >= 10000) {
        // li id="fuelStatus"
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel <= 10000) {
        // li id="cargoStatus"
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        // h2 id="launchStatus"
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

    list.style.visibility = "visible";
}

/////////////////////////////////////////////////////////////////////
// ADDING HTML TO div id="missionTarget" ////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * THE PURPOSE OF FUNCTION addDestinationInfo IS TO ADD HTML ELEMENTS USING
 * THE FOLLOWING FORMAT BELOW.
 * 
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
 * 
 *      1. Know where you want to add HTML:
 *              document.getElementById("missionTarget") = ``;
 * 
 *      2. Each <li> and <img> must have the appropriate parameter. 
 */

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;   
}

//////////////////////////////////////////////////////////////////////
// RANDOMLY SELECTING A PLANET ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * THE PURPOSE OF THIS FUNCTION IS TO PICK ONE PLANET RANDOMLY USING A MATH
 * METHOD AND RETURN IT'S VALUE. THE PARAMETER planets IS AN ARRAY OF PLANETS.
 * TO STORE A RANDOMLY SELECTED PLANET:
 * 
 *      let randomSelect = Math.floor(Math.random() * planets.length);
 * 
 * THE STATEMENT Math.random() * planets.length WILL PICK A DECIMAL NUMBER FROM
 * 0 UP TO, BUT NOT EQUAL TO, ARRAY LENGTH.
 * 
 * THE FLOOR METHOD Math.floor() WILL ROUND THE NUMBER DOWN TO THE NEAREST 
 * INTEGER.
 */

function pickPlanet(planets) {
    let randomSelect = Math.floor(Math.random() * planets.length);
    return planets[randomSelect];
}

//////////////////////////////////////////////////////////////////////
// FETCHING DATA /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * URL = "https://handlers.education.launchcode.org/static/planets.json"
 * 
 * THE PURPOSE OF THIS FUNCTION IS TO REQUEST DATA AT THE URL AND THEN 
 * RETURN THE RESPONSE DATA response.json(). 
 *
 *      1. A URL GETS PASSED INTO fetch() AS A PARAMETER.
 *      2. THIS CAUSES AN HTTP GET REQUEST TO BE SENT FROM BROWSER TO API.
 *      3. API PROCESSES REQUEST AND RESPONSE DATA.
 *      4. then() WILL EXECUTE AFTER RECEIVING THE RESPONSE.
 *      5. THE ANONYMOUS RESPONSE HANDLER FUNCTION IS CALLED BY
 *         .then(function(response) {...}); 
 *         THIS FUNCTION HANDLES THE RESPONSE DATA.
 *      6. WEB PAGE GETS UPDATED USING DOM METHODS.
 * 
 * THE RESPONDING DATA IS A RESPONSE OBJECT AND THAT HAS THE json() FUNCTION.
 * WE CAN ACCESS THE JSON DATA IN THE RESPONSE OBJECT BY WRTING response.json()
 * THE json() FUNCTION RETURNS A PROMISE.
 * 
 *      PROMISE => future result of turning the response data into JSON.
 * 
 * LASTLY, WE STORE THE PROMISE IN planetsReturned AND RETURN THAT VARIABLE.
 */

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}

try {
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
} catch (e) {
    // do nothing
}