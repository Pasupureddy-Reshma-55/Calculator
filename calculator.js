
const display = document.getElementById("display");

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const AC = document.getElementById("ac");
const ps = document.getElementById("plus-mins");
const Modulo = document.getElementById("modulo");
const Division = document.getElementById("division");

const Seven = document.getElementById("seven");
const Eight = document.getElementById("eight");
const Nine = document.getElementById("nine");
const Mul = document.getElementById("mul");

const Four = document.getElementById("four");
const Five = document.getElementById("five");
const Six = document.getElementById("six");
const Mins = document.getElementById("mins");

const One = document.getElementById("one");
const Two = document.getElementById("two");
const Three = document.getElementById("three");
const Plus = document.getElementById("plus");

const Zero = document.getElementById("zero");
const Dot = document.getElementById("dot");
const Equall = document.getElementById("equall");


Seven.addEventListener("click", function () {
    display.value += "7";
});

Eight.addEventListener("click", function () {
    display.value += "8";
});

Nine.addEventListener("click", function () {
    display.value += "9";
});

Four.addEventListener("click", function () {
    display.value += "4";
});

Five.addEventListener("click", function () {
    display.value += "5";
});

Six.addEventListener("click", function () {
    display.value += "6";
});

One.addEventListener("click", function () {
    display.value += "1";
});

Two.addEventListener("click", function () {
    display.value += "2";
});

Three.addEventListener("click", function () {
    display.value += "3";
});

Zero.addEventListener("click", function () {
    display.value += "0";
});


Dot.addEventListener("click", function () {
    display.value += ".";
});

Plus.addEventListener("click", function () {
    display.value += "+";
});

Mins.addEventListener("click", function () {
    display.value += "-";
});

Mul.addEventListener("click", function () {
    display.value += "*";
});

Division.addEventListener("click", function () {
    display.value += "/";
});

Modulo.addEventListener("click", function () {
    display.value += "%";
});


AC.addEventListener("click", function () {
    display.value = "";
});


ps.addEventListener("click", function () {

    if (display.value === "") {
        return;
    }

    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }

});

Equall.addEventListener("click", function () {

    if (display.value === "") {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }

});


sun.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});

moon.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});