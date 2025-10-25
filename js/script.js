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
            
            let answer = button.dataset.answer;
            UserAnswers.push(answer);
        });
    });
});

function ShowResult() {
    let UserTotal = 0;
    UserAnswers.forEach(function(answer) {
        UserTotal += values[answer]; 
});

    let resultText = "";
    if (UserTotal <= 3) {
        resultText = "d";
  } else if (UserTotal <= 6) {
        resultText = "c";
  } else if (UserTotal <= 9) {
        resultText = "b";
  } else {
        resultText = "a";
  }

};
let show_result = document.getElementById("show-result");
show_result.addEventListener("click", ShowResult);


