function neatBlastoffTimer() {
    console.log("runTimer() started");
    //variable to keep time
    var currTime = 50;
    //replaces runTimer, loops the timer until Blastoff!
    for (var i = 0; i < 11; i = i + 1) {
        //this loops i number of times where i is less than 10 and increases at increments of 1
        setTimeout(function () {
            console.log("currTime = " + currTime);
            //once the timer gets to zero it changes the text to Blastoff!
            if (currTime == 0) {
                document.getElementById("blastoffDis").innerHTML = "Blastoff!!";
                //if the timer has less than 25 seconds left, this warning appears
            } else if (currTime < 25) {
                document.getElementById("blastoffDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " sec left"
            } else {
                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
}
function startButtonClick() {
    console.log("startButtonClick() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stopButtonClick() {
    console.log("stopButtonClick() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}