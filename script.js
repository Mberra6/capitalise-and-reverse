const body = document.querySelector("body"),
        modeSwitch = document.querySelector(".mode-switch");
        
var selectedOption = document.querySelector(".options").value;

const optionSelected = (sel) => {
  selectedOption = sel.value;
}

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const checkFunctionToCall = () => {
  if (selectedOption === "capitaliseAndReverse") {
    return callLambdaFunctionCapitaliseAndReverse();
  }
  else if (selectedOption === "capitalise") {
    return callLambdaFunctionCapitalise();
  }
  else if (selectedOption === "reverse") {
    return callLambdaFunctionReverse();
  }
}

function callLambdaFunctionCapitalise() {
  try {
    var inputTextValue = document.getElementById("inputText").value;
    var apigClient = apigClientFactory.newClient();
    var params = {};
    var body = {
        inputText: inputTextValue
    };

    apigClient
        .capitalisePost(params, body)
        .then(function (result) {
            document.getElementById("outputText").value = result.data.inputText;
        })
        .catch(function (result) {
            console.log(result);
        });

} catch (error) {
  console.log(error);
}

return false;
}

function callLambdaFunctionReverse() {
  try {
    var inputTextValue = document.getElementById("inputText").value;
    var apigClient = apigClientFactory.newClient();
    var params = {};
    var body = {
        inputText: inputTextValue
    };

    apigClient
        .reversePost(params, body)
        .then(function (result) {
            document.getElementById("outputText").value = result.data.inputText;
        })
        .catch(function (result) {
            console.log(result);
        });

} catch (error) {
  console.log(error);
}

return false;
}

function callLambdaFunctionCapitaliseAndReverse() {

  try {
      var inputTextValue = document.getElementById("inputText").value;
      var apigClient = apigClientFactory.newClient();
      var params = {};
      var body = {
          inputText: inputTextValue
      };

      apigClient
          .capitaliseandreversePost(params, body)
          .then(function (result) {
              document.getElementById("outputText").value = JSON.parse(result.data.output).inputText;
          })
          .catch(function (result) {
              console.log(result);
          });

  } catch (error) {
    console.log(error);
  }

  return false;

}