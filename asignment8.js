function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = double(numbers); 
console.log(doubled);


function objVlue(obj){
    for (let key in obj) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
}

const person ={
name :"Nadia",
age: 25,

};

objVlue(person);

function stringsPrints(){
let 


}
function printWithDelay(arr) {
    arr.forEach((str, index) => {
        setTimeout(() => {
            console.log(str);
        }, index * 1000);
    });
}

const strings = ["Hello", "World", "my", "name", "is", "Nadia"];
printWithDelay(strings);
