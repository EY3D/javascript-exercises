const findTheOldest = function(arr) {
    let index = 0;
    let born;
    let die;
    let ages = [];
    for (let i = 0; i < arr.length; i++){
        born = arr[i]["yearOfBirth"];
        if ("yearOfDeath" in arr[i]){
            die = arr[i]["yearOfDeath"];
        }
        else{
            die = 2022;
        }
        ages.push(die-born);
        }
        console.log(ages);
    
    for (let i = 0; i < ages.length; i++){
        let tempAgeIndex = ages.length-1;
        if (ages[tempAgeIndex] > ages[i]){
            index++;
        }
        else{
            tempAgeIndex--;
        }
    }
    
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
