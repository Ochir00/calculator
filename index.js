const cout = document.getElementById("cout");
let a = "";





function writenumber(input) {
  if (cout.innerHTML == "error") {
    cout.innerHTML = input;
  } else if (cout.innerHTML == "undefined") {
    cout.innerHTML = input;
//   } else if (a == "+" || a == "-" || a == "*" || a == "/") {
//     if (input ==! "+" || input ==! "-" || input ==! "*" || input ==! "/") {
//         break;
//     } else {
//         cout.innerHTML = cout.innerHTML;
//   }
  } else {
    cout.innerHTML = cout.innerHTML + input;
    a = input;
  }
  a = input;
}




function clearcode() {
  cout.innerHTML = "";
}
function bodoh() {
  try {
    cout.innerHTML = eval(cout.innerHTML);
  } catch (error) {
    cout.innerHTML = "error";
  }
}