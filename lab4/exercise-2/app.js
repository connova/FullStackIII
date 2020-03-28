const comparer = require('./comparer');
const calculator = require('./calculator');

function calculate(x,y){
    if(comparer.AreNumbersEqual(x,y)){
        console.log(`comparing two numbers: ${x},${y} adding two numbers ` +calculator.add(x,y));
    } else console.log(`comparing two numbers: ${x},${y} subtracting two numbers `+calculator.subtract(x,y));
}

calculate(10,10);
calculate(10,13);

