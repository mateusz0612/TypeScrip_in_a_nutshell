// Why TypeScript?

// Static, strong typing
// type inference

// TYPES
// boolean, string, number, array, tuple, enum

// let firstName = "Mateusz";
// const lastName = "Szklarczyk";
// let x = 5;
// const y = 5;
// const isTypeScriptNice = true;
// const interns: string[] = ["Szklarz", "Jakub Gość", "Dj", "Michał J."];
// const numbers: Array<number> = [1, 2, 3];

// enum Sizes {
//   small,
//   medium,
//   big = 10
// }

// console.log(Sizes.small, Sizes.medium, Sizes.big);

// enum Suit {
//   Spades = 123,
//   Hearts,
//   Diamonds,
//   Clubs
// };

// console.log(Suit.Hearts);

// type numberOrString = number | string;
// let z: numberOrString = "napis";
// z = 5;
// z = {
//   name: "Jacek",
//   age: 25
// };

// const person = {
//   name: "Adam",
//   age: 16
// };

// console.log(person.location);

// ENUMS

// INTERFACES

// interface Car {
//   brand: string;
//   model: numberOrString;
//   year: number;
// }

// const OpelAstra: Car = {
//   brand: "Opel",
//   model: "Astra",
//   year: 2012
// };

// const VolkswagenGolf: Partial<Car> = {
//   brand: "Volkswagen"
// };

// interface Person {
//   firstName?: string;
//   lastName?: string;
//   age?: number;
// }

// const AdamMickiewisz: Required<Person> = {
//   firstName: "Adam",
//   lastName: "Mickiewicz",
//   age: 56
// };
