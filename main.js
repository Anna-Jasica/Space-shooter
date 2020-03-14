const btn = document.getElementById("startButton");

function buttonClick() {
    btn.style.display = "none";
    document.getElementById("main").style.cursor = "none";
}

btn.addEventListener("click", buttonClick);
function init() {
    window.addEventListener("click", fire);
}

function fire(event) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.top = `${event.y}px`;
    bullet.style.left = `${event.x}px`;
    document.getElementById("main").appendChild(bullet);
    console.log("pew pew pew");
}

function update() {
    handleEnemies();
    handleBullets();
    window.requestAnimationFrame(update);
}

function handleEnemies() {
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        enemy.style.left = `${+enemy.style.left.slice(0, -2) - 1}px`;
        // if (!isBulletWithinScreen(enemy)) {
        //     enemy.remove();
        // }
    }
}

function spawnEnemy() {
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.top = `${getRandomInteger(0, window.innerHeight - 25)}px`;
    enemy.style.left = `${window.innerWidth - 25}px`;
    document.getElementById("main").appendChild(enemy);
    console.log("am am am");
}

function handleBullets() {
    const bullets = document.getElementsByClassName("bullet");
    for (bullet of bullets) {
        bullet.style.left = `${+bullet.style.left.slice(0, -2) + 1}px`;
        if (!isBulletWithinScreen(bullet)) {
            bullet.remove();
        }
    }
}

function isBulletWithinScreen(bullet) {
    if (+bullet.style.left.slice(0, -2) > window.innerWidth) {
        return false;
    }
    return true;
}

function startGame() {
    init();
    update();
    setInterval(spawnEnemy, 1000);
}

startGame();

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        state.bullets.push;
    }

    draw() {}
}
