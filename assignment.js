// feetToMile
function feetToMile(feet) {
  var mile = feet * 0.000189394;
  return mile;
}
var mileValue = feetToMile(50000);
console.log(mileValue);

// woodCalculator
function woodCalculator(chair, table, bed) {
  var chairCubicFeet = chair * 1;
  var tableCubicFeet = table * 3;
  var bedCubicFeet = bed * 5;
  var totalCubicFeet = chairCubicFeet + tableCubicFeet + bedCubicFeet;
  return totalCubicFeet;
}
var result = woodCalculator(14, 5, 12);
console.log(result);

// brickCalculator
function brickCalculator(tenFloor, twentyFloor, thirtyFloor) {
  var brickOfTenFloor = tenFloor * 15000;
  var brickOfTwentyFloor = twentyFloor * 12000;
  var brickOfThirtyFloorOrMore = thirtyFloor * 10000;
  var totalBrick = brickOfTenFloor + brickOfTwentyFloor + brickOfThirtyFloorOrMore;
  return totalBrick;
}
var result = brickCalculator(10, 20, 30);
console.log(result);

// tinyFriend
function tinyFriend(names) {
  var smallestLength = Infinity;
  var smallestName = '';
  if (names.length > 0) {
    for (var i = 0; i < names.length; i++) {
      if (typeof names[i] === 'string' && names[i].length < smallestLength) {
        smallestName = names[i];
        smallestLength = names[i].length;
      }
    }
  }
  return smallestName;
}
var result = tinyFriend(['Rahman', 'Kamal', 'Abir', 'Sofiqur']);
console.log(result);