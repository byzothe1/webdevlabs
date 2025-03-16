let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let A = "Hello";
let B = " world!";
let C = A + B;
console.log(C);


function SumNPrint(x1, x2) {
    let x3 = x1 + x2
    console.log(x3)
};

function print(n) {
    console.log(n)
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    print(C)
}
else if (C.length < z) {
    print(z)
}
else if (C.length == z) {
    print("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "Banana") {
            alert("found the Banana in " + String(i))
        }
    }
};

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(array) {
    array.forEach(element => {
        if (element == "Banana") {
            if (array == L1) {alert("We found the banana in the first array")}
            else if (array == L2) {alert("We found the banana in the second array")}
        }
    });
};

findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greet = ""

    if (h<12) {
        greet = "good morning,";
    }
    else if (12<h && h<18) {
        greet = "good afternoon,";
    }
    else if (18<h && h<20) {
        greet = "good evening,";
    }
    else if ((20<h && h<24) || (0<h && h<5)) {
        greet = "good night,";
    }

    let h2 = document.getElementById("greeting");
    h2.innerHTML = greet + " my name is isaiah engle";
}

window.onload = greetingFunc;
