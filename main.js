function confirmInput() {
    fname = document.forms[0].inputText.value.toLowerCase();
    if(fname=="google"){
        alert("Yandex круче. Но это не точно. " + "\nЕще ми виведем значение из списка array: " + peopleList[0][0] + " \nА ето результат SuperSum function: " + superSum() + "\n" + findMinMax());
    }
    else if(fname==""){
        alert("You haven't entered entered anything. " + "\nНо ми виведем значение из списка array: " + peopleList[1][0] + " \nА ето результат SuperSum function: " + superSum() + "\n" + findMinMax());
    }
    else{
        alert('You have entered: ' + fname + '\nНо ми также виведем значение из списка array: ' +  peopleList[2][1] + ' \nА ето результат SuperSum function: ' + superSum() + '\n' + findMinMax());

    }
}


function superSum(a=7, b=5){
    c  = a + b;
    return c;
}

var peopleList = [ 
    [   name = "Alen Delon",
        age = "23"
    ],
    [   name = "Julia Roberts",
         age = "56"
    ],
    [   name = "Carl Lagerfeld",
        age = "98"
    ],
    [   name = "Benny Bennassy",
        age = "46"
    ]
]

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
    return "The minimum value equals: " + minValue + " and the maximum value equals: " + maxValue;
}


let a = "Banana"; 
let b = "Orange";

b = [a, a = b][0];

console.log("a variable equals: " + a); // то что было изначально в b
console.log("b variable equals: " + b); // то что было изначально в a

function findMax(numberList = ["2", "3", "1", "23"]){
    var maxValue = Math.max.apply(null, numberList) // 4
    
    return maxValue;
}
console.log("The max value equals: " + findMax());

