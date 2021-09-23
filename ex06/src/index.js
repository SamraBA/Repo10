// Create lion object here
var school = {
    "name": "Arena",
    "location": "Sarajevo",
    "established": 2020
};

lion["roar"] = "roar-roar";

// End of lion object

function myFunction (propName, propValue) {

// Only change code below this line

lion[propName] = propValue;
return lion;
}





// Only change code above this line


myFunction("roar", "roar-roar");


module.exports = myFunction;
