const sumAll = function(a, b) {
    let sum = 0;
    let smallSum = 0;

    if (!((a || b) > 0) ){
        return "ERROR";
    } else if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }
    

    if (a < b){
        for (let i = 0; i < (b+1); i++){
            sum += i;
        }

        for (let i = 0; i < a; i++){
            smallSum += i;
        }
    } else {
        for (let i = 0; i < (a+1); i++){
            sum += i;
        }

        for (let i = 0; i < b; i++){
            smallSum += i;
        }
    }


    if (smallSum < sum){
        return (sum - smallSum);
    } else {
        return (smallSum - sum);
    }
    
};

// Do not edit below this line
module.exports = sumAll;
