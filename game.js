var buttonColors=["red","green","blue","yellow"];
var gamePattern=[];
var level=0;
var gameStarted=0;
var sz=0;
function nextSequence()
{
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //var x=gamePattern[gamePattern.length-1];
    buttonAnimation(randomChosenColor);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level: "+level);
    
}
$(".btn").click(function(){
    var userChosenColor=this.id;
    //userClickedPattern.push(userChosenColor);
    switch(userChosenColor)
    {
        case "red":
            if(gamePattern[sz]==userChosenColor){
                playSound(userChosenColor);
                buttonAnimation(userChosenColor); 
            }
            else{
                gamePattern=[];
                sz=0;
                wrong();
                return;
            }
            break;
        case "blue":
                if(gamePattern[sz]==userChosenColor){
                    playSound(userChosenColor);
                    buttonAnimation(userChosenColor); 
                }
                else{
                    gamePattern=[];
                    sz=0;
                    wrong();
                    return;
                }
                break;
        case "green":
                    if(gamePattern[sz]==userChosenColor){
                        playSound(userChosenColor);
                        buttonAnimation(userChosenColor); 
                    }
                    else{
                        gamePattern=[];
                        sz=0;
                        wrong();
                        return;
                    }
                    break;
        case "yellow":
                        if(gamePattern[sz]==userChosenColor){
                            playSound(userChosenColor);
                            buttonAnimation(userChosenColor); 
                        }
                        else{
                            gamePattern=[];
                            sz=0;
                            wrong();
                            return;
                        }
                        break;
    }
        if(sz==gamePattern.length-1)
        {
            setTimeout(function(){
                nextSequence()
            },500);
            sz=0;
        }
        else{
            sz++;
        }
});

function playSound(currentButtonColor)
{
    switch(currentButtonColor)
    {
        case "blue":var audio1=new Audio("sounds/blue.mp3");
                    audio1.play();
                    break;
        case "green":var audio1=new Audio("sounds/green.mp3");
                    audio1.play();
                    break;
        case "red":var audio1=new Audio("sounds/red.mp3");
                    audio1.play();
                    break;
        case "yellow":var audio1=new Audio("sounds/yellow.mp3");
                    audio1.play();
                    break;
    } 
}

function buttonAnimation(currentButton){
    var idd=$("#"+currentButton).addClass("pressed");
    setTimeout(function(){
        $(idd).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
    if(gameStarted==0){
        nextSequence();
        gameStarted=1;
    }
});

function wrong(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },500);
    gameStarted=0;
    $("#level-title").text("Press A Key to Start");
    level=0;
    var aud=new Audio("sounds/wrong.mp3");
    aud.play();
    
}
