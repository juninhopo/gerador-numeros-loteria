function generateNumber(min, max) {

    number = 6;
    arrayNumber = [];

        for (var i = 0; i < number; i++) {

            //gerador de numeros
            min = Math.ceil(min);
            max = Math.floor(max);

            let randomNumber = Math.floor(Math.random() * (max - min)) + min;
                        
            arrayNumber.push(randomNumber);   
            
        }
    
    console.log(arrayNumber)
    
}

generateNumber(1, 10)