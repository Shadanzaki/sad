let arrayOpt = [];
for (let ind = 0; ind < 6; ind++) {
  arrayOpt[ind] = {
    value: `co${ind + 1}`,
    label: `Вариант выбора ${ind + 1}`,
  };
}
arrayOpt[6] = 4;
arrayOpt[7] = "haga";
arrayOpt[8] = { haaaa: 3 };
console.log(typeof arrayOpt[2]);
let filteredArr = filter(arrayOpt);
let valueNeed = 3;
let selectded = document.createElement("select");
let selectReady = initialisatorOpt(filteredArr, valueNeed);

document.body.append(selectReady);

function initialisatorOpt(arrayOpt, valueNeed = 0) {
  let optArr = [];
  for (let ind in arrayOpt) {
    optArr[ind] = document.createElement("option");
  }
  for (let ind in optArr) {
    optArr[ind].textContent = arrayOpt[ind].label;
    optArr[ind].value = arrayOpt[ind].value;
  }
  for (let ind in optArr) {
    selectded.append(optArr[ind]);
  }
  selectded.selectedInd = valueNeed;
  return selectded;
}
function filter(arrayOpt) {
  let filteredArr = [];
  for (let ind in arrayOpt) {
    if (typeof arrayOpt[ind] === "object") {
      if ("value" in arrayOpt[ind]) {
        filteredArr[ind] = {
          value: `${arrayOpt[ind].value}`,
          label: `${arrayOpt[ind].label}`,
        };
      } else {
      }
    } else if (typeof arrayOpt[ind] !== "object") {
      filteredArr[ind] = {
        value: `${arrayOpt[ind]}`,
        label: `${arrayOpt[ind]}`,
      };
    }
  }
  return filteredArr;
}