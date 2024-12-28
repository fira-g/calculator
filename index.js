const disp = document.getElementById("disp");
var ans = 0;
var dd = document.querySelectorAll("button");
var checker = [];
var braces = [")"];
for (i = 0; i < dd.length; i++) {
  if (dd[i].classList.value == "op") {
    checker.push(dd[i].innerHTML);
  }
}
function take(inp) {
  if (inp == "()" && braces[braces.length - 1] == "(") {
    disp.value += ")";
    braces.push(")");
    inp = "";
  } else if (inp == "()" && braces[braces.length - 1] == ")") {
    if (!checker.includes(disp.value[disp.value.length - 1])) {
      disp.value += "*(";
      braces.push("(");
      inp = "";
    } else {
      disp.value += "(";
      braces.push("(");
      inp = "";
    }
  }
  if (disp.value.length == 1 && disp.value[0] == 0) {
    if (inp == 0) {
      inp = "";
    } else if (!checker.includes(inp)) {
      disp.value = inp;
      inp = "";
    }
  }
  if (disp.value == "ERROR") {
    disp.value = inp;
  } else if (
    !(
      checker.includes(disp.value[disp.value.length - 1]) &&
      checker.includes(inp)
    )
  ) {
    disp.value += inp;
  }
  if (
    checker.includes(disp.value[disp.value.length - 1]) &&
    checker.includes(inp) &&
    inp != disp.value[disp.value.length - 1]
  ) {
    disp.value = disp.value.slice(0, disp.value.length - 1) + inp;
  }
}
function excute() {
  if (braces[braces.length - 1] == "(") {
    disp.value += ")";
  } else {
  }
  try {
    disp.value = eval(disp.value);
  } catch (error) {
    disp.value = "ERROR";
  }
}
function clearr() {
  disp.value = "";
}
function back() {
  disp.value = disp.value.slice(0, disp.value.length - 1);
}
