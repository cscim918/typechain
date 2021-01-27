interface Human {
  //js에선 동작 x ts에서만 한다
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'yunbo',
  age: 26,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
