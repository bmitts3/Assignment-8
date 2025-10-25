console.log("script.js connected!");
UserAnswers=[];
let values = {
    "A": 1,
    "B": 2, 
    "C": 3,
    "D": 4
};

let questionBlocks = document.querySelectorAll(".question-block");
questionBlocks.forEach(function(block){
    let buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            
            buttons.forEach(btn => btn.classList.remove("selected"));
            
            button.classList.add("selected");
            
            UserAnswers[i] = button.dataset.answer;
        });
    });
});

function ShowResult() {
    let UserTotal = 0;
    UserAnswers.forEach(function(answer) {
        UserTotal += values[answer]; 
});

    let resultText = "";
    if (UserTotal <= 4) {
        resultText = "Unicorn";
  } else if (UserTotal <= 6) {
        resultText = "Dragon";
  } else if (UserTotal <= 9) {
        resultText = "Fairy";
  } else {
        resultText = "Wizard";
  }

    document.getElementById("result-text").textContent = resultText;
    document.getElementById("result-container").style.display = "block";
};
let show_result = document.getElementById("show-result");
show_result.addEventListener("click", ShowResult);


