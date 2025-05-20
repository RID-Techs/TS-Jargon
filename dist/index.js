"use strict";
const hello = "heloo";
console.log(hello);
const getNumber = 34;
console.log(getNumber);
const getSum = (a, b) => {
    return a + b;
};
console.log(getSum(4, 8));
const names = ["Marc", "Alex", "John"];
for (let x of names) {
    console.log(x);
}
const nbs = [32, 10, 5];
let res = 0;
for (let x of nbs) {
    res += x;
    console.log(x);
    console.log("Res : " + res);
}
const total = nbs.reduce((acc, curr) => acc + curr, 0);
console.log("Total : " + total);
const tupling = [12, true, "hellow World"];
tupling.push("kola");
tupling.forEach((x, index) => {
    console.log(`Index : ${index} and value : ${x}`);
});
const obj = {
    name: "Toyota",
    color: "Black",
    model: "Yaris",
    year: 2021
};
console.log(`I bought the model ${obj.model} of ${obj.name} manufactured in ${obj.year}`);
const obj2 = {};
console.log(obj2.Alex = 13);
console.log(obj2);
const schoolTestimony = {
    subject: "Math",
    grade: 12
};
console.log(`I scored ${schoolTestimony.grade} in the ${schoolTestimony.subject} subject`);
const card = {
    name: "Alex",
    age: 12,
    isStudent: true
};
console.log(`My name is ${card.name} and I am ${card.age} years old. My student status is : ${card.isStudent}`);
const newCard = {
    name: "Nico",
    age: 22,
    isStudent: true,
    languageSpoken: ["English", "French"]
};
console.log(`My name is ${newCard.name} and I am ${newCard.age} years old. My student status is : ${newCard.isStudent}. I speak ${newCard.languageSpoken.join(" and ")}`);
const myFunc = (code) => {
    console.log(code);
};
myFunc("404");
myFunc(201);
function LogHi() {
    console.log("Hi");
}
LogHi();
function MakeCalculation(x, y, z) {
    return x * y + (z || 0);
}
console.log(MakeCalculation(1, 3));
const namingFunction = (value) => {
    return `Hello, ${value}!`;
};
console.log(namingFunction("Boss"));
