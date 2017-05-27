 var config = {
    apiKey: "AIzaSyAsD6ycnMn2Lty5vR3XmDKvbs6WDRPphRw",
    authDomain: "bonsai-academy.firebaseapp.com",
    databaseURL: "https://bonsai-academy.firebaseio.com",
    projectId: "bonsai-academy",
    storageBucket: "bonsai-academy.appspot.com",
    messagingSenderId: "197790531380"
  };

firebase.initializeApp(config);
  var database = firebase.database();

var CurrentTime = moment().format('HH mm');



	console.log("local time is "+CurrentTime)  

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();



  var trainName = $("#train-name-input").val().trim();
  console.log("train name is "+trainName)
  var trainDestination = $("#destination-input").val().trim();
  console.log("destination is "+trainDestination);
  var startTime = moment($("#time-input").val().trim(), "HH:mm").format('HH mm')
  console.log("start time is "+startTime);
  var frequencyTime = $("#frequency-input").val().trim();
  console.log("frequency is "+frequencyTime);

var difference = CurrentTime.diff(startTime).format('HH mm');
console.log('the difference is'+difference)




  var newTrain = {
    train: trainName,
    destination: trainDestination,
    arrival: startTime,
    frequency: frequencyTime,
  };

 database.ref().push(newTrain);


  console.log(newTrain.train);
  console.log(newTrain.destination);
  console.log(newTrain.arrival);
  console.log(newTrain.frequency);


  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");


});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());


  var trainName = childSnapshot.val().train;
  var trainDestination = childSnapshot.val().destination;
  var startTime = childSnapshot.val().arrival;
  var frequencyTime = childSnapshot.val().frequency;


  console.log(trainName);
  console.log(trainDestination);
  console.log(startTime);
  console.log(frequencyTime);

});