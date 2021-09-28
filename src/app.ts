const app = document.getElementById('#app');


const addButton = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

addButton.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});


// const data: {
//   id: number;
//   price: number;
//   permission: string[],
//   details: {
//     title: string;
//     description?: string;
//   }
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!'
//   }
// }

// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["USER"] = 1] = "USER";
// })(Role || (Role = {}));
// ;
// var person = {
//     role: Role.ADMIN
// };
// if (person.role === Role.ADMIN) {
//     console.log('Role: ', Role.ADMIN);
// }

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// function print (): void {
//   console.log('Print some text');
// }

// function generateError (message: string, status: number): never {
//   throw {message, status};
// }

// generateError('An error', 500);

// function calc (param1: number, param2: number, callback: (num1: number, num2: number) => number):void {
//   console.log('Result:', callback(param1, param2));
// }

// calc(1,1, (num1, num2) => num1 + num2);

// calc(10,5, (num1, num2) => num1 - num2);


// // Описание типа
// type DatabaseDate =  {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   }
// }

// // Назначение типа для объекта
// const data: DatabaseDate = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!'
//   }
// }

// export type {
//   DatabaseDate,
// };