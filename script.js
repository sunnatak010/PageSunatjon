function task1() {
    let text = document.getElementById("t1").value;
    document.getElementById("o1").innerHTML = text.split(" ").reverse().join(" ");
}

function task2() {
    let s = document.getElementById("t2").value;
    document.getElementById("o2").innerHTML =
        "First: " + s[0] + ", Third: " + s[2] + ", Fourth: " + s[3] + ", Last: " + s[s.length - 1];
}

function task3() {
    let words = document.getElementById("t3").value.split(" ");
    let longest = words.reduce((a, b) => a.length >= b.length ? a : b);
    document.getElementById("o3").innerHTML = longest;
}

function task4() {
    let s = document.getElementById("t4").value;
    let result = "";
    for (let ch of s) {
        result += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
    }
    document.getElementById("o4").innerHTML = result;
}

function task5() {
    let s = document.getElementById("t5").value;
    let words = s.trim().split(/\s+/).filter(Boolean).length;
    let spaces = (s.match(/ /g) || []).length;
    document.getElementById("o5").innerHTML = "Words: " + words + ", Spaces: " + spaces;
}

function task6() {
    let s = document.getElementById("t6").value;
    document.getElementById("o6").innerHTML = s.trim().replace(/\s+/g, " ");
}

function task7() {
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    document.getElementById("o7").innerHTML = "Third fruit: " + fruits[2];
}

function task8() {
    let arr = document.getElementById("t8").value.split(",");
    let unique = [...new Set(arr)];
    document.getElementById("o8").innerHTML = unique.join(", ");
}

function task9() {
    let arr = ["Red", "Green", "Blue", "Yellow"];
    alert("Last element is: " + arr[arr.length - 1]);
    document.getElementById("o9").innerHTML = "Popup displayed last element.";
}

function task10() {
    let arr = ["apple", "banana", "mango", "orange"];
    let item = document.getElementById("t10").value;
    document.getElementById("o10").innerHTML = "Index: " + arr.indexOf(item);
}

function task11() {
    let arr = document.getElementById("t11").value.split(",").map(Number);
    let result = arr.map(n => n * 2);
    document.getElementById("o11").innerHTML = result.join(", ");
}

function task12() {
    let arr = document.getElementById("t12").value.split(",");
    let result = arr.map(x => x.toUpperCase());
    document.getElementById("o12").innerHTML = result.join(", ");
}

function task13() {
    let arr = ["A", "B", "C", "D"];
    arr.splice(0, 1, "X");
    arr.splice(1, 1, "Y");
    arr.splice(2, 1, "Z");
    document.getElementById("o13").innerHTML = arr.join(", ");
}

function task14() {
    let arr = ["A", "B", "C", "D"];
    arr.splice(0, 1);
    arr.splice(0, 1);
    document.getElementById("o14").innerHTML = arr.join(", ");
}

function task15() {
    let a = Number(document.getElementById("t15a").value);
    let b = Number(document.getElementById("t15b").value);
    let op = document.getElementById("t15op").value;
    let result;

    if (op === "+") result = a + b;
    else if (op === "-") result = a - b;
    else if (op === "*") result = a * b;
    else result = a / b;

    document.getElementById("o15").innerHTML = "Result: " + result;
}

function task16() {
    let a = document.getElementById("t16a").value;
    let b = document.getElementById("t16b").value;
    let temp = a;
    a = b;
    b = temp;
    document.getElementById("o16").innerHTML = "After swap: a = " + a + ", b = " + b;
}

function task17() {
    let n = document.getElementById("t17").value;
    let sum = 0;
    for (let digit of n) {
        sum += Number(digit);
    }
    document.getElementById("o17").innerHTML = "Sum of digits: " + sum;
}

function task18() {
    let n = document.getElementById("t18").value;
    document.getElementById("o18").innerHTML = n.split("").reverse().join("");
}

function task19() {
    let year = Number(document.getElementById("t19").value);
    let result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    document.getElementById("o19").innerHTML = result ? "Leap Year" : "Not Leap Year";
}

function task20() {
    let input = prompt("Enter 10 digit number:");
    if (/^\d{10}$/.test(input)) {
        document.getElementById("o20").innerHTML = "Valid 10-digit number";
    } else {
        document.getElementById("o20").innerHTML = "Invalid input";
    }
}

function task21() {
    let input = prompt("Enter numeric or string value:");
    if (!isNaN(input)) {
        document.getElementById("o21").innerHTML = "Numeric input. Double value: " + Number(input) * 2;
    } else {
        document.getElementById("o21").innerHTML = "String input. Length: " + input.length;
    }
}

function task22() {
    let value = document.getElementById("t22").value;
    document.getElementById("o22").innerHTML = value === "" ? "Field is required" : "Valid input";
}

function task23() {
    let age = Number(document.getElementById("t23").value);
    document.getElementById("o23").innerHTML = age >= 18 ? "Valid age" : "Age must be >= 18";
}

function task24() {
    let name = document.getElementById("name24").value;
    let email = document.getElementById("email24").value;
    document.getElementById("o24").innerHTML = "Submitted: " + name + " - " + email;
}

function reset24() {
    document.getElementById("name24").value = "";
    document.getElementById("email24").value = "";
    document.getElementById("o24").innerHTML = "";
}

function task25() {
    let name = document.getElementById("name25").value;
    let email = document.getElementById("email25").value;
    document.getElementById("o25").innerHTML =
        "Name: " + name + "<br>Email: " + email + "<br>Success! Data submitted.";
}

function task26() {
    document.getElementById("o26").innerHTML = document.getElementById("t26").value;
}

function reset26() {
    document.getElementById("t26").value = "";
    document.getElementById("o26").innerHTML = "";
}

function task27() {
    let person = {
        name: "Sunnat",
        age: 20,
        subject: "Web Technology"
    };
    document.getElementById("o27").innerHTML =
        "Name: " + person.name + ", Age: " + person.age + ", Subject: " + person.subject;
}

function task28() {
    let persons = [
        { name: "Ali", age: 20 },
        { name: "Sunnat", age: 21 },
        { name: "Akmal", age: 22 }
    ];

    let output = "";
    persons.forEach(p => {
        output += p.name + " - " + p.age + "<br>";
    });

    document.getElementById("o28").innerHTML = output;
}

let timer;
let timeLeft = 0;

function startTimer() {
    if (timeLeft === 0) {
        timeLeft = Number(document.getElementById("t29").value);
    }

    clearInterval(timer);

    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("o29").innerHTML = timeLeft;
        } else {
            clearInterval(timer);
            document.getElementById("o29").innerHTML = "Time finished";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 0;
    document.getElementById("o29").innerHTML = "0";
    document.getElementById("t29").value = "";
}

function show30() {
    document.getElementById("o30").innerHTML = document.getElementById("t30").value;
}

function task30() {
    document.getElementById("o30").innerHTML = "";
}
