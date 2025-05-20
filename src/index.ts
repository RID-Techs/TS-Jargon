const hello : string = "heloo"
console.log(hello);

const getNumber : number = 34;
console.log(getNumber);

const getSum = (a: number, b: number) : number => {
    return a + b;
}

console.log(getSum(4, 8));

const names: string[] = ["Marc", "Alex", "John"];
for(let x of names) {
    console.log(x);
}

const nbs: number[] = [32, 10, 5];

let res: number = 0
for(let x of nbs) {
  res += x
    console.log(x);
    console.log("Res : " + res);
}

const total : number = nbs.reduce((acc, curr) => acc + curr, 0);
console.log("Total : " + total);


const tupling : [number, boolean, string] = [12, true, "hellow World"];

tupling.push("kola")

tupling.forEach((x, index) => {
  console.log(`Index : ${index} and value : ${x}`);
})

const obj : {name: string, color: string, model: string, year: number} = {
  name: "Toyota",
  color: "Black",
  model: "Yaris",
  year: 2021
}
console.log(`I bought the model ${obj.model} of ${obj.name} manufactured in ${obj.year}`);

const obj2 : {[key: string] : number} = {};

console.log(obj2.Alex = 13);
console.log(obj2);

type Grade = number;
type Subject = string;

type School = {
  subject: Subject,
  grade: Grade
}

const schoolTestimony : School = {
  subject: "Math",
  grade: 12
}

console.log(`I scored ${schoolTestimony.grade} in the ${schoolTestimony.subject} subject`);

interface PersonInterface {
  name: string,
  age: number,
  isStudent: boolean
}

const card : PersonInterface = {
  name: "Alex",
  age: 12,
  isStudent: true
}

console.log(`My name is ${card.name} and I am ${card.age} years old. My student status is : ${card.isStudent}`);

interface newDetails extends PersonInterface {
  languageSpoken: string[]
}

const newCard : newDetails = {
  name: "Nico",
  age: 22,
  isStudent: true,
  languageSpoken: ["English", "French"]
}

console.log(`My name is ${newCard.name} and I am ${newCard.age} years old. My student status is : ${newCard.isStudent}. I speak ${newCard.languageSpoken.join(" and ")}`);

const myFunc = (code: string | number) => {
  console.log(code);
}

myFunc("404");
myFunc(201);

function LogHi() : void {
  console.log("Hi");
}
LogHi();

function MakeCalculation(x: number, y: number, z?: number) : number {
  return x * y  + (z || 0)
}
console.log(MakeCalculation(1, 3));

type Naming = (value: string) => string;
const namingFunction : Naming = (value) => {
  return `Hello, ${value}!`;
}

console.log(namingFunction("Boss"));

