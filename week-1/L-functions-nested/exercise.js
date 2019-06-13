var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
var mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];
function toUpperCase(value) {
  return value.toUpperCase();
}

function shoutyGreeting(value) {
  return "HELLO " + toUpperCase(value);
}

for (var i = 0; i < mentors.length; i++) {
  console.log(shoutyGreeting(mentors[i]));
}
