"use strict"
const sentences = ["This is the simple exercise of doing typing test","Typing speed should be max for the professional to do work in short time","There is many technique to increase typing speed we are here to guide you"];
const displayArea = document.querySelector("#text");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const result=document.getElementById("result");
var startTime, finishTime, totalTimeTaken, speed, count = 0, accuracy,question,answer;
const displayQuestin=()=>{
    var rand = Math.floor(Math.random() * sentences.length);
    displayArea.innerText = sentences[rand];
}
const speedCalculation=()=>{
    console.log(question);
    console.log(answer);
    totalTimeTaken = ((finishTime - startTime) / 60000);
    if(answer[0]==""){
         answer.length=0;
    }
    speed = Math.floor(answer.length / totalTimeTaken);
        console.log(speed+" words/min");

}
const accuracyCalculation=()=>{
    question.forEach((element, index) => {
        if (element == answer[index]) {
            count++;
        }
        // console.log(element);
        // console.log(index);
        // console.log(count);
        // console.log(answer[index]);
    });
    accuracy=Math.floor((count*100)/answer.length);
    console.log(`accuracy is ${accuracy}%`);
    count=0;
}
button.addEventListener("click", () => {
    if (button.innerText == "Start") {
        displayQuestin();
        button.innerText = "Done";
        textarea.disabled = false;
        startTime = new Date().getTime();  
        console.log(startTime);

    }
    else {
        button.innerText = "Start";
        textarea.disabled = true;
        finishTime = new Date().getTime();
        console.log(totalTimeTaken);
        //split
         question = displayArea.innerText.split(" ");
         answer = textarea.value.split(" ");
         speedCalculation();
        //accuracy
        accuracyCalculation();
        textarea.value = "";
        result.innerText=`\n your speed is ${speed} words/min and your accuracy is ${accuracy}%`;
    }
})