// create an object that has the following properties:
// name of the location
// geographic location
// time of year we visit
// notes
// landmarks
//
// create a constructor to create destination objects

function Destination(name, geo, time, notes, landmarks) {
  this.destinationName = name;
  this.destinationGeo = geo;
  this.destinationTime = time;
  this.destinationNotes = notes;
  this.destinationLandmarks = landmarks;
}

console.log("Japan" + "Los Angeles" + "Quebec");

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    // debugger;
    var location = $("#new-location-name").val();
    var geo = $("#new-location-geo").val();
    var time = $("#new-time-of-year").val();
    var landmark = $("#new-landmark").val();
    var notes = $("#new-notes").val();

    var myNewDestination = new Destination(location, geo, time, notes, landmark);
    $("ul#destinations").append("<li><span class='destination'>" + myNewDestination.destinationName + "</span></li>");

    $("input#new-location-name").val("");
    $("input#new-location-geo").val("");
    $("input#new-time-of-year").val("");
    $("input#new-notes").val("");
    $("input#new-landmark").val("");

    $(".destination").last().click(function() {
      console.log("string")
      $("#show-destinations").show();
      $("#show-destinations h2").text(myNewDestination.destinationName);
      $(".location").text(myNewDestination.destinationGeo);
      $(".landmark").text(myNewDestination.destinationLandmarks);
    });

  });
});
