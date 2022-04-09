let myPushedArray = [];
let poppedArray = [];
let insertedArray = [];


function pushThisValue(arr,myVal){
    arr.length += 1;
    for( let i = arr.length -1; i>= 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = myVal;
    myPushedArray = arr;
    return myPushedArray;
}

console.log(pushThisValue([1,2,3,4,5,6,7], 22));
console.log(typeof myPushedArray);


function popFront(arr){
    for(let i = 0 ; i < arr.length; i++)
    {
        arr[i] = arr[i+1]; // arr[i] == index of 0, = arr[i + 1] == change index of 0 to index of 1, loop to increment.
    }
    arr.length -=1; // this will remove undefined from end of array
    poppedArray = arr;
    return  poppedArray;
}
console.log(popFront([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));
console.log(typeof poppedArray);


function insertThisValue(arr, index, someVal){
    arr.length += 1;
    for( let i = arr.length -1; i> index; i--){
        arr[i] = arr[i - 1];
    }
    arr[index] = someVal;
    insertedArray = arr;
    return insertedArray;
}
console.log(insertThisValue([1,2,3,4,5,6,7,8], 7, 50))