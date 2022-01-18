// Write your JavaScript code here!

/**
 * WE CALL THE FUNCTION: 
 * function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 * 
 * WE NEED TO CREATE VARIABLES TO PASS USER INPUT VALUES FROM EACH FIELD.
 * WE CAN STORE THE VALUE OF THE <input/> RESPECTIVELY USING THE DOM
 * METHOD querySelector.
 * 
 * 		const pilot = document.querySelector("input[name=pilotName]").value;
 *  	const copilot = document.querySelector("input[name=copilotName]").value;
 *  	const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
 *  	const cargoLevel = document.querySelector("input[name=cargoMass]").value;
 * 
 * WE ALSO NEED TO PASS A DOM METHOD GETING THE ELEMENT WITH ID "faultyItems" 
 * INTO PARAMETER list.
 * 
 * 		let list = document.getElementById("faultyItems");
 * 
 * EVENTHOUGH styles.css HAS <div id="faultyItems"> VISIBLITY SET TO 'hidden'
 * WE CAN WRITE list.style.visibility = "hidden"; 
 * 
 * THIS FUNCTION WILL BE CALLED IN A "submit" HANDLER IN FORM.
 * WITH A HTML DOM querySelector() METHOD, WE CAN SELECT THE FIRST 
 * HTML TAG "form".
 * 
 * 		let form = document.querySelector("form");
 * 
 * THEN WE WRITE A "submit" EVENT LISTENER CONNECTING TO THE DOM METHOD.
 * 
 * 		form.addEventListener("submit", function(event) {
 * 			function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 * 		});
 * 
 * THE DOM METHOD addEventListener IS LISTENING FOR THE EVENT TO OCCUR.
 * WHEN THE listener HEARS DOM ELEMENT "submit" (FORM IS SUBMITTED) IT PASSES
 * THE EVENT TO THE ANONYMOUS FUNCTION PARAMETER. 
 * 
 * TO PREVENT THE BROWSER'S DEFAULT ACTION OF SUBMITTING A FORM:
 * 			
 * 			event.preventDefault();
 * 
 * THE LAST FUNCTIONS WE HAVE TO USE INCLUDE:
 * 		myFetch()
 *  	pickPlanet(planets)
 * 		addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
 * 
 * IN IS LAST SECTION, WE WANT USE myFetch() TO RETURN THE JSON DATA AT URL AND 
 * STORE THE LISTED PLANETS IN A VARIABLE. THEN PASS THE DATA INTO AN 
 * ANONYMOUS FUNCTION HANDLER. THE SETUP SHOULD LOOK LIKE THIS:
 * 
 * 		let listedPlanetsResponse = myFetch();
 * 		listedPlanetsResponse.then(function(feedbackJSON) {
 * 
 * 		});
 * 
 * TO STORE JSON REPONSE DATA, WE CAN USE A GLOBAL VARIABLE TO SHADOW IN THE 
 * CODE BLOCK.
 * 
 * 		let planetList;
 * 		listedPlanetsResponse.then(function(feedbackJSON) {
 * 				planetList = feedbackJSON;
 * 		});
 * 
 * THEN CHAIN OF HANDLERS CAN CONTINUE WITH ANOTHER .then() METHOD.
 * 
 * 		let planetList;
 * 		listedPlanetsResponse.then(function(feedbackJSON) {
 * 				planetList = feedbackJSON;
 * 		}).then(function() {
 * 				
 * 		});
 * 
 * THIS LAST CODE BLOCK WILL INCLUDE THE FUNCTIONS pickPlanet and 
 * addDestinationInfo. BECAUSE THE FUNCTION pickPlanet RETURNS A RANDOM 
 * SELECTED INDEX OF THE planetList ARRAY, WE CAN PASS IT INTO THE FUNCTIONS
 * PARAMETER. THEN STORE THE RETURNED VALUE IN A VARIABLE.
 * 
 * 		let planetSelected = pickPlanet(planetList);
 * 
 * THEN WE CAN CALL THE FUNCTION addDestinationInfo. THEN WE CAN PASS THE 
 * VALUES OF THE PROPERTIES OF THE OBJECT planetSelected RESPECTFULLY.
 * 
 * 		addDestinationInfo(document, name, planetSelected.diameter, planetSelected.star, planetSelected.distance, planetSelected.moons, planetSelected.imageUrl)
 * 
 */

window.addEventListener("load", function() {
	let planetList;
	let listedPlanetsResponse = myFetch();


	listedPlanetsResponse.then(function (feedbackJSON) {
		planetList = feedbackJSON;
	}).then(function () {
		let planetSelected = pickPlanet(planetList);
		addDestinationInfo(document, planetSelected.name, planetSelected.diameter, planetSelected.star, planetSelected.distance, planetSelected.moons, planetSelected.image);
	});


	
	let list = document.getElementById("faultyItems");
	let form = document.querySelector("form");
	list.style.visibility = "hidden"; 
	
	form.addEventListener("submit", function(event) {
		event.preventDefault();

 		let pilot = document.querySelector("input[name=pilotName]").value;
   	let copilot = document.querySelector("input[name=copilotName]").value;
   	let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   	let cargoLevel = document.querySelector("input[name=cargoMass]").value;
 
		formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
	});
});