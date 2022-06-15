const getTheTitles = function(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++){
        a.push(arr[i]["title"]);
    }
    return a;
}
// Do not edit below this line
module.exports = getTheTitles;
