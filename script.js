// Write your JavaScript code here!
const {
  myFetch,
  addDestinationInfo,
  formSubmission,
  pickPlanet,
} = require('./scriptHelper');

window.addEventListener('load', function (event) {
  document
    .getElementById('formSubmit')
    .addEventListener(
      'click',
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    );
});

window.addEventListener('load', function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      addDestinationInfo(pickPlanet(listedPlanets));
    });
});
