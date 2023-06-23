const player = document.getElementById("player");
const spike = document.getElementById("spike");
const score = document.getElementById("score");
var scoreNumber = 0;

function jump()
{
    if(player.classList != "jump")
    {
        player.classList.remove("runAnim");
        player.classList.add("jump");

        setTimeout(function() 
        {
            player.classList.add("runAnim");
            player.classList.remove("jump"); 
        }, 650)
    }
}

let isAlive = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue("left"));

    if(spikeLeft < 32 && playerTop > 460)
    {
        GameEnded();
    }

    scoreNumber = scoreNumber + 1;
    score.innerHTML = scoreNumber;

}, 10);

function GameEnded()
{
    alert("Game Over! Your score was: " + scoreNumber + "!");
    scoreNumber = 0;
}

document.addEventListener("keydown", function (event) {jump();});