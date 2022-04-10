function reverseMyArray(arr){
    let temp = [];
    for( let i = 0; i < arr.length; i++){
        temp[i] = arr[arr.length - i - 1];
    }
    arr = temp;
    return arr;
}

console.log(reverseMyArray([1,2,3,4,5]))


function rotateArray(arr, shiftByL, shiftByR){ // make array wrap from end to front of array, no built in funcs. allow negative shift. 
    for (let i = 0; i< arr.length * shiftByR || i < arr.length * shiftByL; i++){
        if(shiftByL){
            arr[i] = arr[i + 1]; // take each element and set it to be whatever was ahead of itself (this shifts to the left.)
            arr[arr.length] = arr[0]; // this is a left shift wrap of above value setter.
        }
        if(shiftByR){
            arr[i] = arr[i - 1]; // take each element and set it to the value behind itself (this shifts to the right.)
            arr[0] = arr[arr.length]; // take the end of the array and set index 0 to that value (this wraps end value back to start. this is a right shift operation)
        }
        // arr[arr.length] = arr[arr.length - 1]; // take the end of the arr and set it to be whatever was just behind it. likely not needed.
    }
    return arr;
}

console.log(rotateArray([1,2,3,4,5],2))

function filterArray(arr, min, max){ // given min and max range, retain only whats within range. no built in funcs.
    let temp = [];
    for(let i = 0; i< arr.length; i++){
        if(i !== min || i !== max){ // if index is not min or max, set arr to itself.
            temp[i] = arr[i];
        }
    }
    arr = temp;
    return arr;
}
console.log(filterArray([1,2,3,4,5,6,7,8,9,10],2,8))

function concatArray(arr1, arr2){
    let theArray = [];
    // theArray.length = arr1.length + arr2.length;
    for (let i = 0; i < arr1.length + arr2.length; i++){
        theArray[i] = arr1[i],arr2[i]; // this doesn't work. it returns undefined for arr2...
    }

    return theArray;
}
console.log(concatArray([1,2,3],[8,9,10]))