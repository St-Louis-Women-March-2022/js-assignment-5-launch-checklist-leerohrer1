// Write your helper functions here!

const { format } = require("path");

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
  let form = document.querySelector('form');
  let pilotInput = document.querySelector('input[name=pilotName]');
  let copilotInput = document.querySelector('input[name=copilotName]');
  let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
  let cargoLevelInput = document.querySelector('input[name=cargoLevel]');

  form.addEventListener('submit', function (event) {
    if (
      validateInput(pilotInput.value) === 'Is a String' &&
      validateInput(copilotInput.value) === 'Is a String' &&
      validateInput(fuelLevelInput.value) === 'Is a Number' &&
      validateInput(cargoLevelInput.value) === 'Is a Number' &&
      fuelLevel >= 10000 &&
      cargoLevel <= 10000
    ) {
      list.style.visibility = 'visible';
      h2.style.color = 'rgb(65, 159, 106)';
      list.innerHTML = `
        <div id="launchStatusCheck">
            <h2 id="launchStatus" data-testid="launchStatus">Shuttle is Ready for Launch</h2>
            <div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>
        </div>
        `;
    } else if (
      validateInput(pilot) === 'Is a String' &&
      validateInput(copilot) === 'Is a String' &&
      validateInput(fuelLevel) === 'Is a Number' &&
      validateInput(cargoLevel) === 'Is a Number' &&
      fuelLevel < 10000 &&
      cargoLevel <= 10000
    ) {
      list.style.visibility = 'visible';
      h2.style.color = 'rgb(199, 37, 78)';
      list.innerHTML = `
        <div id="launchStatusCheck">
            <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
            <div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>
        </div>
        `;
    } else if (
      validateInput(pilot) === 'Is a String' &&
      validateInput(copilot) === 'Is a String' &&
      validateInput(fuelLevel) === 'Is a Number' &&
      validateInput(cargoLevel) === 'Is a Number' &&
      fuelLevel < 10000 &&
      cargoLevel > 10000
    ) {
      list.style.visibility = 'visible';
      h2.style.color = 'rgb(199, 37, 78)';
      list.innerHTML = `
        <div id="launchStatusCheck">
            <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
            <div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
                </ol>
            </div>
        </div>
        `;
    } else if (
      validateInput(pilot) === 'Is a String' &&
      validateInput(copilot) === 'Is a String' &&
      validateInput(fuelLevel) === 'Is a Number' &&
      validateInput(cargoLevel) === 'Is a Number' &&
      fuelLevel >= 10000 &&
      cargoLevel > 10000
    ) {
      list.style.visibility = 'visible';
      h2.style.color = 'rgb(199, 37, 78)';
      list.innerHTML = `
        <div id="launchStatusCheck">
            <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
            <div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
                </ol>
            </div>
        </div>
        `;
    } else if (
      validateInput(pilotInput.value) === 'Empty' ||
      validateInput(copilotInput.value) === 'Empty' ||
      validateInput(fuelLevelInput.value) === 'Not a Number' ||
      validateInput(cargoLevelInput.value) === 'Not a Number'
    ) {
      document.alert('You must complete all fields of the checklist form!');
      event.preventDefault();
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

module.exports.addDestinationInfo() = addDestinationInfo;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
module.exports.formSubmission = formSubmission;