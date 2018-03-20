$(document).ready(function(){

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
        let buttonToAdd = '<button class="btn waves-effect animalButton '+buttonTerm+' '+buttonColor+'" id="'+buttonTerm+'" animal-data="'+buttonTerm+'">'+buttonTerm+'</button>';
        console.log(buttonToAdd)
        $("#buttonZone").append(buttonToAdd);
        
        let buttonTermClass = '.'+buttonTerm

        $(buttonTermClass).on("click", function(){
            console.log(this);
            
            makeCall($(this).attr("animal-data"))
        });
        
    }

    function makeCall(animalName){
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animalName + "&api_key=B5ugNY4UZnO3BUDlugHUmw2Z6eO6NPtM&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            for (let i=0;i<response.data.length;i++){
                console.log(i);
                let gifDiv = $("<div class='col s4 animalGif'>");
                let animalGif = $("<img>");
                let animURL = (response.data[i].images.fixed_height.url);
                let stillURL = (response.data[i].images.fixed_height_still.url);
                let ratingTag = $("<p>Rated: "+response.data[i].rating+"</p>");

                animalGif.attr("src",response.data[i].images.fixed_height_still.url);
                animalGif.attr("animURL",animURL);
                animalGif.attr("stillURL",stillURL);
                animalGif.attr("animState","still")
                
                gifDiv.append(animalGif);
                gifDiv.append(ratingTag);
                $("#gifZone").prepend(gifDiv);
                
            }
            $("img").on("click",function(){
                console.log($(this).attr("animState"))
                if($(this).attr("animState")==="still"){
                    $(this).attr("animState","animated");
                    $(this).attr("src",$(this).attr("animURL"));
                } else {
                    $(this).attr("animState","still");
                    $(this).attr("src",$(this).attr("stillURL"));
                }
            })
        });
    }

    





    function getColor() {
    return availColors[Math.floor(Math.random() * availColors.length)];
    }





    animalArray.forEach(function(element){
        makeButton(element);

        
    });

    

    









});
