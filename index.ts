const name = 'Yunbo',
  age = 26,
  gender = 'Male';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
