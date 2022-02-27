const removeFromArray = function(myArray, ...x) {
    for (let i = 0; i < myArray.length; i++){

        for (let j = 0; j < x.length; j++){

            if (myArray[i] === x[j]){
                delete myArray[i];
            }
        }
    }
    let filteredArray = myArray.filter((y) => y !== undefined);
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
