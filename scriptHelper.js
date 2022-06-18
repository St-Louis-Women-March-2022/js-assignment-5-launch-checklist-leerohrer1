// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
  if (typeof testInput === 'string') return 'Is a String';
  if (testInput === '') return 'Empty';
  if (isNaN(testInput)) return 'Not a Number';
  if (!isNaN(testInput)) return 'Is a Number';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  window.addEventListener('load', function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      if (
        validateInput(pilot) === 'Is a String' &&
        validateInput(copilot) === 'Is a String' &&
        validateInput(fuelLevel) === 'Is a Number' &&
        validateInput(cargoLevel) === 'Is a Number' &&
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
        validateInput(pilot) === 'Empty' ||
        validateInput(copilot) === 'Empty' ||
        validateInput(fuelLevel) === 'Not a Number' ||
        validateInput(cargoLevel) === 'Not a Number'
      ) {
        document.alert('You must complete all fields of the checklist form!');
        event.preventDefault();
      }
    });
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
