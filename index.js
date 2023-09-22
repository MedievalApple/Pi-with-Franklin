// ask user how many digits they want to calculate pi to
const digits = Number(prompt("How many digits of pi do you want to calculate?").trim());
alert("You have 5 seconds to memorize the number of digits of pi you want to calculate.");
alert("You have 5 seconds to memorize the number of digits of pi you want to calculate..");
alert("You have 5 seconds to memorize the number of digits of pi you want to calculate...");

const increaseConstant =
    document.getElementsByClassName("increase-constant")[0];
const decreaseConstant =
    document.getElementsByClassName("decrease-constant")[0];
const increasePrecision =
    document.getElementsByClassName("increase-precision")[0];
const decreasePrecision =
    document.getElementsByClassName("decrease-precision")[0];
const piOutput = document.getElementsByClassName("pi-output")[0];
const constOutput = document.getElementsByClassName("const-output")[0];
const precisionOutput = document.getElementsByClassName("precision-output")[0];

var value;
var counter = 3;
var precision = 1; // 1 = whole number, 2 = 1 decimal place, 3 = 2 decimal places, etc.
var perc = 0;

constOutput.innerHTML = "constant: " + counter.toFixed(perc);

const numbers = {};

const width = 15;
const height = 15;

for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
        x = Math.random() + 0.1;
        y = Math.random();

        if (!numbers[i]) {
            numbers[i] = {};
        }

        if (!numbers[i][j]) {
            numbers[i][j] = {
                x: x,
                y: y,
            };
        }
    }
}

const franklin = (n) => {
    // CALCULATE PI WITH FRANKLIN
    let x = 0;
    let y = 0;
    let inside = 0;
    let total = 0;
    let pi = 0;
    let r = 1;
    let d = 2 * r;
    let a = Math.PI * r * r;
    let s = 0;
    let c = 0;
    let i = 0;
    let j = 0;

    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            x = numbers[i][j].x;
            y = numbers[i][j].y;
            s = Math.sqrt(x * x + y * y);
            if (s <= r) {
                inside++;
            }
            total++;
            c = (n * inside) / total;
            pi = (c * a) / d;
        }
    }

    console.log(pi);

    value = pi;
    return pi;
};

// function to check if they have the same value to nth decimal place
// 5 decimal places
const checkWin = () => {
    const hasWon = value.toFixed(digits) === Math.PI.toFixed(digits);
    
    if (hasWon) {
        setTimeout(() => alert("You win!"), 100);
    }
};   

increaseConstant.addEventListener("click", () => {
    counter += precision;
    piOutput.innerHTML = franklin(counter);
    constOutput.innerHTML = "constant: " + counter.toFixed(perc);
    precisionOutput.innerHTML = "precision: " + precision.toFixed(perc);

    checkWin();
});

decreaseConstant.addEventListener("click", () => {
    counter -= precision;
    piOutput.innerHTML = franklin(counter);
    constOutput.innerHTML = "constant: " + counter.toFixed(perc);
    // do not allow number to go to scientific notation
    precisionOutput.innerHTML = "precision: " + precision.toFixed(perc);

    checkWin();
});

increasePrecision.addEventListener("click", () => {
    precision = precision / 10;
    perc += 1;

    precisionOutput.innerHTML = "precision: " + precision.toFixed(perc);

    checkWin();
});

decreasePrecision.addEventListener("click", () => {
    precision = precision * 10;
    perc -= 1;

    precisionOutput.innerHTML = "precision: " + precision.toFixed(perc);

    checkWin();
});
