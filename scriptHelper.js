// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    // Pilot Name => name="pilotName"
    // Co-pilot Name => name="copilotName"
    // Fuel Level (L) => name="fuelLevel"
    // Cargo Mass (kg) => name="cargoMass"

	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		const pilotNameInput = document.querySelector("input[name=pilotName]");
		const copilotNameInput = document.querySelector("input[name=copilotName]");
		const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
		const cargoMassInput = document.querySelector("input[name=cargoMass]");
		console.log(pilotNameInput.value);

        let emptyField = "";
        let notAlphabet = "";
        let notNumber = "";

		if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
			emptyField = "All input fields must be filled.";
		} else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false) {
            notAlphabet = "Pilot Name and Co-Pilot Name must have non-numeric characters.";
        } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
            notNumber = "Fuel Level and Cargo Mass must only have numeric characters.";
        } else if (emptyField || notAlphabet || notNumber) {
            let errorMessage = `${emptyField}${notAlphabet}${notNumber}`
            alert(errorMessage);
        } else {
            formSubmission(event, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        }

        event.preventDefault();
	});          
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
