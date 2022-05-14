function generateNumber(min, max) {

    number = 6;

    for (var i = 0; i < number; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    
        console.log(randomNumber)
    }
}

generateNumber(1, 100)