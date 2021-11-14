const colors = require("colors/safe");
var x = process.argv[2];
var z = process.argv[3];

if (isNaN(x) || isNaN(z)) {
  console.log(colors.red("Введите число"));
  return;
}

// var x = +process.argv[2];
var counter = 1;
var color = colors.green;
while (+x <= +z) {
  var y = 2;
  while (+y <= +x) {
    if (+x % y == 0) {
      break;
    }
    y++;
  }

  if (y == x) {
    console.log(color(x + " простое число"));
    counter++;
    if (counter % 3 == 1) {
      color = colors.green;
    } else if (counter % 3 == 2) {
      color = colors.yellow;
    } else if (counter % 3 == 0) {
      color = colors.red;
    }
  } else {
    console.log(colors.red("В этом диапазоне нет простых чисел"));
  }
  x++;
}
