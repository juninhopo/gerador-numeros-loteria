export function generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;

    console.log(randomNumber)
}

generateNumber()