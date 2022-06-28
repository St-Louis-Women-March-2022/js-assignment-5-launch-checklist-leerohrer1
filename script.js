// Write your JavaScript code here!
const myFetch = require('./scriptHelper');
const addDestinationInfo = require('./scriptHelper');
const formSubmission = require('./scriptHelper');
const pickPlanet = require('./scriptHelper');

window.addEventListener('load', function () {
  document
    .getElementById('formSubmit')
    .addEventListener(
      'click',
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    );

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      addDestinationInfo(pickPlanet(listedPlanets));
    });
});
