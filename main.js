function confirmInput() {
    enteredText = document.getElementById('inputText').value;

    if(enteredText=="google"){
        alert(yandex + additionalArrayData + peopleList["firstName"] + sumResult + superSum() + "\n" + findMinMax());
    }
    else if(enteredText==""){
        alert(noText + additionalArrayData + peopleList["secondAge"] + sumResult + superSum() + "\n" + findMinMax());
    }
    else{
        alert(addedText + enteredText + additionalArrayData +  peopleList["secondName"] + sumResult + superSum() + '\n' + findMinMax());
        var input = document.getElementById("inputText");
        input.value == "";
    }
}

function waitFunction() {
    setTimeout(confirmInput, 3000);
  }

function superSum(a=7, b=5){
    c  = a + b;
    return c;
}

let peopleList = {     
    firstName: "John",  
    firstAge: 30,
    secondName: "Bill",  
    secondAge: 42        
};
  
function findMinMax() { 
    numbers = ["5", "23", "46", "1", "33"];
    minValue = Infinity; 
    maxValue = -Infinity; 

    for (item of numbers) { 
        if (item < minValue) 
            minValue = item; 

        if (item > maxValue) 
            maxValue = item; 
    } 
    return minValueText + minValue + maxValueText + maxValue;
}

let a = "Banana"; 
let b = "Orange";

b = [a, a = b][0];

console.log("a variable equals: " + a); 
console.log("b variable equals: " + b); 

function findMax(numberList = ["2", "3", "1", "23"]){
    var maxValue = Math.max.apply(null, numberList)
    
    return maxValue;
}
console.log("The max value equals: " + findMax());

function clearThis(target) {
    target.value= "";
}