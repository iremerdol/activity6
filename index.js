document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("moving-button");
    let gameContainer = document.getElementById("game-container");
    let level = 1;
    let clicks = 0;
    let timeout = 500;

    function startGame() {
        button.addEventListener("click", function() { 
            let containerWidth = gameContainer.offsetWidth - button.offsetWidth;
            let containerHeight = gameContainer.offsetHeight - button.offsetHeight;
            let randomX = Math.random() * containerWidth;
            let randomY = Math.random() * containerHeight;
            button.style.left = randomX + "px";
            button.style.top = randomY + "px";

            clicks++;
            if (clicks === 3) {
                level++;
                if (level <= 6) {
                    timeout -= 100;
                    clicks = 0;
                    alert("Level " + level + " achieved!");
                    setTimeout(moveButton, timeout);
                } else {
                    alert("Congratulations! You've completed all levels!");
                    resetGame();
                }
            }
        });

        setTimeout(moveButton, timeout);
    }

    function moveButton() {
        let containerWidth = gameContainer.offsetWidth - button.offsetWidth;
        let containerHeight = gameContainer.offsetHeight - button.offsetHeight;
        let randomX = Math.random() * containerWidth;
        let randomY = Math.random() * containerHeight;
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";

        if (level <= 6) {
            setTimeout(moveButton, timeout);
        }
    }

    function resetGame() {
        level = 1;
        clicks = 0;
        timeout = 500;
        startGame();
    }
    startGame();
});