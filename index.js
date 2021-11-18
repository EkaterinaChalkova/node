// формат даты "November 18 2021 16:47:34"
// node index.js "November 22 2021 16:47:34" "November 26 2021 16:47:34"
//количество оставшихся дней выводит,  не успеваю, полную версию пришлю позже.

var datestart = process.argv[2];
var datestart2 = process.argv[3];

function getTimeRemaining(end) {
  var t = Date.parse(end) - Date.parse(new Date());

  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
  };
}

amountdays = getTimeRemaining(datestart).days;
console.log(amountdays);

amountdays = getTimeRemaining(datestart2).days;
console.log(amountdays);
