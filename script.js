
//Timer Section
// var totalSeconds=0;
// var secondElapsed=0;
// var interval;

// this function runs once a second
// function runClockCb(){
//     console.log("something");
//     secondElapsed++;
//     console.log(secondElapsed);

//     //change the display
//     minutesDisplay.textContent = Math.floor((totalSeconds - secondElapsed)/60);
//     secondsDisplay.textContent = (totalSeconds - secondElapsed) % 60;
//     //have to stop at 0
// }
// //
// function startTimer(){
//     //set time using totalSeconds
//     var mins = parseInt(workMinutesInput.value);
//     totalSeconds = mins * 60;
//     //initialize seconds on the play button
//     secondElapsed=0;

//     if(typeof interval !== 'undefined'){
//         //if we have a interval, need to clear it
//         clearInterval(interval);
//     }
//     //keep track of our interval
//     interval = setInterval(runClockCb, 1000);
// }
//-----------
function startTimer(minutes) {
    var seconds = 60;
    var mins = minutes;
​
    function tick() {
​
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
       //checks seconds and mintues 
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                startTimer(mins - 1);
            }else{
                //checks if timers is at 0.01 to tell user that they failed
                if (seconds === 0){
                
                    alert("Sorry, time is up! Press OK to reset");
                    
                } 
            }
        }
        
    }
    tick();
}


//-----------------------------------------------------
// Quesiton section
var questionList =[
        {question: "1. Humans and chimpanzees share roughly how much DNA?",
        choices: ["80%","75%","98%","95%"],
        correctAnser: 2},
        {question: "2. Roughly how long does it take for the sun’s light to reach Earth?",
        choices: ["8 minutes","8 hours","8 days","80 mins"],
        correctAnser: 0},
        {question: "3. At what temperature are Celsius and Fahrenheit equal?",
        choices: ["-38","-40","-60","-45"],
        correctAnser: 1},
        {question: "4. What modern-day country was Marie Curie born in?",
        choices: ["Poland","UK","Russia","USA"],
        correctAnser: 0},
        {question: "5. What is the biggest planet in our solar system?",
        choices: ["the Sun","Mercury","Neptune","Jupiter"],
        correctAnser: 3},
        {question: "6. How many teeth does an adult human have?",
        choices: ["36","30","32","34"],
        correctAnser: 2},
        {question: "7. How many hearts do octopuses have?",
        choices: ["three","two","one","four"],
        correctAnser: 0},
        {question: "8. How many vertebrae does the average human possess?",
        choices: ["32","33","30","36"],
        correctAnser: 1},
        {question: "9. On the periodic table, what symbol stands for silver?",
        choices: ["Ca","Li","Na","Ag"],
        correctAnser: 3},
        {question: "10. Which two planets lack moons?",
        choices: ["Mercury and Neptune","Jupiter and Mars","Mercury and Venus","Saturn and Uranus"],
        correctAnser: 2},
];