// Write your JavaScript code here!
const myFetch = require('./scriptHelper');
const addDestinationInfo = require('./scriptHelper');
const formSubmission = require('./scriptHelper');
const pickPlanet = require('./scriptHelper');

window.addEventListener('load', function () {
  formSubmission(document);

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.imageUrl
      );
    });
});
