// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
// Zomato = 3e2640fc9c2ecf3e452dfc86b352db7f

var cityArray = [
  {
    state: "NC",
    city: "Raleigh"
  },

  {
    state: "NC",
    city: "Chapel Hill"
  },

  {
    state: "NC",
    city: "Greensboro"
  },

  {
    state: "NC",
    city: "Wilmington"
  },

  {
    state: "NC",
    city: "Asheville"
  }
]

$("submitButton").on("click", function() {
  event.preventDefault();

//declaring working variables
console.log("hello")
var cityName = $("#inputCity").val().trim();
var stateName = $("#inputState").val().trim();
var countryName = "USA"

});

