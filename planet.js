var  planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};
for(var planet in planetMoons){
  if(planetMoons.hasOwnProperty(planet)){
    console.log(planet + "->" + planetMoons[planet]);
  }
}
//   var numberOfMoons=planetMoons[planet];
//   console.log("planet:" + planet + ",# of Moons: "+numberOfMoons);
// }