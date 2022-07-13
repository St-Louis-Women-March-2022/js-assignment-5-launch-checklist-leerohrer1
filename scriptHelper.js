// Write your helper functions here!
import fetch from "node-fetch";

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.getElementById('missionTarget').innerHTML = `
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

function validateInput(testInput) {
  if (typeof testInput === 'string') return 'Is a String';
  if (testInput === '') return 'Empty';
  if (isNaN(testInput)) return 'Not a Number';
  if (!isNaN(testInput)) return 'Is a Number';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const form = document.getElementById('form');

  const pilotInput = document.querySelector('input[name=pilotName]');
  const validatedPilot = validateInput(pilotInput.value);
  const copilotInput = document.querySelector('input[name=copilotName]');
  const validatedCopilot = validateInput(copilotInput.value);
  const fuelLevelInput = document.querySelector('input[name=fuelLevel]');
  const validatedFuelLevel = validateInput(fuelLevelInput.value);
  const cargoLevelInput = document.querySelector('input[name=cargoLevel]');
  const validatedCargoLevel = validateInput(cargoLevelInput.value);

  const pilotStatus = document.getElementById('pilotStatus');
  const copilotStatus = document.getElementById('copilotStatus');
  const fuelStatus = document.getElementById('fuelStatus');
  const cargoStatus = document.getElementById('cargoStatus');
  const launchStatus = document.getElementById('launchStatus');
  const faultyItems = document.getElementById('faultyItems');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validatedPilot === 'Empty' || validatedPilot === 'Is a Number') {
      window.alert('That is not a valid pilot name!');
      faultyItems.style.visibility = 'visible';
      pilotStatus.innerHTML = 'Pilot is not ready!';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedCopilot === 'Empty' ||
      validatedCopilot === 'Is a Number'
    ) {
      window.alert('That is not a valid copilot name!');
      faultyItems.style.visibility = 'visible';
      copilotStatus.innerHTML = 'Co-Pilot is not ready!';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedFuelLevel === 'Empty' ||
      validatedFuelLevel === 'Not a Number'
    ) {
      window.alert('That is not a valid fuel level!');
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = 'No fuel status!';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedFuelLevel === 'Is a Number' &&
      Number(fuelLevelInput.value) < 10000
    ) {
      window.alert('Fuel level too low for launch!');
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = 'Fuel level too low for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedFuelLevel === 'Is a Number' &&
      Number(fuelLevelInput.value) >= 10000
    ) {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
    } else if (
      validatedCargoLevel === 'Empty' ||
      validatedCargoLevel === 'Not a Number'
    ) {
      window.alert('That is not a valid cargo level!');
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerHTML = 'No cargo status!';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedCargoLevel === 'Is a Number' &&
      Number(cargoLevelInput.value) > 10000
    ) {
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (
      validatedCargoLevel === 'Is a Number' &&
      Number(fuelLevelInput.value) <= 10000
    ) {
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }

    if (launchStatus.innerHTML !== 'Shuttle Not Ready for Launch') {
      faultyItems.style.visibility = 'visible';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(65, 159, 106)';
      pilotStatus.innerHTML = `Pilot ${pilotInput.value} ready for launch!`;
      copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value} ready for launch!`;
    }
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
module.exports.formSubmission = formSubmission;