var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimate(buttonInnerHtml);
        
    });
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimate(event.key);
}) 


function makeSound(key){
    switch (key){
        case "t":
            var crash = new Audio('first.mp4');
            crash.play();
            break;
        
        case "m":
            var tom4 = new Audio('second.mp4');
            tom4.play();
            break;
        
        case "k":
            var tom3 = new Audio('third.mp4');
            tom3.play();
            break;

        case "b":
            var tom2 = new Audio('fourth.mp4');
            tom2.play();
            break;

        case "p":
            var tom1 = new Audio('fifth.mp4');
            tom1.play();
            break;

        case "j":
            var snare = new Audio('sixth.mp4');
            snare.play();
            break;

        case "g":
            var kick = new Audio('seventh.mp4');
            kick.play();
            break;
        

        default: console.log(key);
    }
}

function buttonAnimate(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}