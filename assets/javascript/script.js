let animalArray = ["duck","moose","falcon","narwhal","dragon","dog","cat","corgi","parrot","eagle","unicorn","butterfly","seal","ocelot"];
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var availColors = ["lime darken-2","light-blue darken-3","pink darken-3","teal darken-3"," orange darken-3","deep-orange darken-3"];


$("#submitButton").on("click", function(){
    let animalInput = $("#formField").val();
    console.log(animalInput);
    makeButton(animalInput);
});

function makeButton(buttonTerm){
    console.log("it tried making a button with "+buttonTerm)
    animalArray.push(buttonTerm);
    let buttonColor = getColor();
    let buttonToAdd = '<button class="btn waves-effect animalButton '+buttonColor+'" id="animalB" animal='+buttonTerm+'>'+buttonTerm+'</button>';
    console.log(buttonToAdd)
    $("#buttonZone").append(buttonToAdd);
}



    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response);
    // });



function getColor() {
   return availColors[Math.floor(Math.random() * availColors.length)];
}




$(document).ready(function(){
    animalArray.forEach(function(element){
        makeButton(element);
    });

    $("#animalB").on("click", function(){
        console.log($(this).attr(animal));
    });
});
