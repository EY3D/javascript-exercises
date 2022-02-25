const repeatString = function(string = "", num = 0) {
    if (num < 0){
        return "ERROR";
    }
    let z = "";
    for (let i = 0; i < num; i++){
        z += string;
    }
    return z;

};

// Do not edit below this line
module.exports = repeatString;
