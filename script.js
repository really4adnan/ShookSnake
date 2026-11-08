// Define HTML elements 
const board = document.getElementById('game-board')

// Define game variables 
const gridSize = 20;
let snake = [{ x: 10, y: 10}];
let food = generateFood();
let direction = 'right';

// Draw game map, snake, food 
function draw() {
    board.innerHTML = '';
    drawSnake();   
    drawFood();
}

// Draw Snake 
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = creatGameElement('div','snake')
        setPosition(snakeElement, segment)
        board.appendChild(snakeElement);
    });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Set the position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Testing draw function
// draw {};

// Draw food function
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

// Genarate food
function generateFood() {
    const x = Math.floor(Math.random * gridSize) + 1;
    const y = Math.floor(Math.random * gridSize) + 1;
    return{ x, y };
}

// Moving the State
function move() {
    const head = { ...snake[0]}
    switch (direction) {
        case 'up':
            head.y--;         
            break;
        case 'down':
            head.y++;         
            break;
        case 'left':
            head.x--;         
            break;
        case 'right':
            head.x++;         
            break;
    }

    snake.unshift(head)

    snake.pop();
}