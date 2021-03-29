const GRID_SIZE = 21;

export function randomFoodPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(headPosition){
    return (headPosition.x > GRID_SIZE || headPosition.x < 1) || (headPosition.y > GRID_SIZE || headPosition.y < 1);
}