// number 1

// const firstName: string = "Max";
// const age: number = 26;

// console.log("name", firstName, "age", age);

// number 2

// let number1: number = 2;

// if (true) {
//   let number1: number = 4;
// }

// console.log(number1);

// const string1: string = "string";

// string1 = "another string"

// function exampleFunc() {
//   var boolean1: boolean = true;
//   if (boolean1) {
//     var boolean1: boolean = false;
//   }
//   console.log(boolean1);
// }

// exampleFunc();

// number 3

// let num: number = 5;
// let str: string = "string";
// let bool: boolean = true;
// let und: undefined = undefined;

// let result = num + 2;
// console.log(result);

// let strResult = "This is a " + str;
// console.log(strResult);

// let isTrue = bool && true;
// console.log(isTrue);

// if (und == undefined) {
//   console.log("is undefind");
// } else {
//   console.log("is defind");
// }

// number 4

// let num : number;
// num = "num is number type";

// number 5

// let infereType = true;

// number 6

// let strNum: string = "100";
// let numberFromAssertion: number = parseInt(strNum);
// console.log(numberFromAssertion);

type Student = {
  id: number;
  name: string;
  age: number;
};

let student1: Student = {
  id: 1,
  name: "Max",
  age: 18,
};

function printInfo(student: Student) {
  console.log(student.id, student.name, student.age);
}

printInfo(student1);
