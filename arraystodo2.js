function reverseMyArray(arr){
    let temp = [];
    for( let i = 0; i < arr.length; i++){
        temp[i] = arr[arr.length - i - 1];
    }
    arr = temp;
    return arr;
}

console.log(reverseMyArray([1,2,3,4,5]))


function rotateArray(){
    return null;
}

function filterArray(){
    return null;
}

function concatArray(arr1, arr2){
    let theArray = [];
    // theArray.length = arr1.length + arr2.length;
    for (let i = 0; i < arr1.length + arr2.length; i++){
        theArray[i] = arr1[i],arr2[i]; // this doesn't work. it returns undefined for arr2...
    }

    return theArray;
}
console.log(concatArray([1,2,3],[8,9,10]))