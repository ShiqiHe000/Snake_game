import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let gameOver = false;
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if(gameOver) {
        if(confirm('You lost! Press OK to restart.')){
            window.location = '/';  // refresh the page
        }
        return 
    }
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if(secondSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

// update the snake and food positions
function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

// draw the snake and food
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}