const caesar = function(myStr, myInt) {
    let arr = [];
    let arr2 = [];
    let myStrFinal = "";
    
    for (let i = 0; i < myStr.length; i++){
        arr.push(myStr.charCodeAt(i));
    }

    for (let i = 0; i < arr.length; i++){
        let keycode = 0;
        let newInt;
        if (arr[i] > 64 && arr[i] < 91){
            keycode = arr[i] + myInt;
            while (keycode < 65){
                keycode += 26;
            }
            while (keycode > 90){
                keycode -= 26;
            }
        }

        else if (arr[i] > 96 && arr[i] < 123){
            keycode = arr[i] + myInt
            while (keycode < 97){
                keycode += 26;
            }
            while (keycode > 122){
                keycode -= 26;
            }
        }

        else{
            keycode = arr[i];
        }

        arr2.push(keycode);
    }

    for (let i = 0; i < arr2.length; i++){
        myStrFinal += String.fromCharCode(arr2[i]);
    }
    return myStrFinal;
};

// Do not edit below this line
module.exports = caesar;
