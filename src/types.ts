// Why we should use TypeScript?
const person = {
  name: "Adam",
  age: 16
};

console.log(person.location);

// TYPES
// boolean, string, number, array, tuple, enum
// string literal type

let firstName = "Mateusz";
const lastName = "Szklarczyk";
let x = 5;
const y = 5;
const isTypeScriptNice = true;
const interns: string[] = ["Szklarz", "Jakub Gość", "Dj", "Michał J."];
const numbers: Array<number> = [1, 2, 3];

enum Sizes {
  small,
  medium,
  big = 10
}

console.log(Sizes.small, Sizes.medium, Sizes.big);

enum Suit {
  Spades = 123,
  Hearts,
  Diamonds,
  Clubs
}

console.log(Suit.Hearts);

type numberOrString = number | string;
let z: numberOrString = "napis";
z = 5;
z = {
  name: "Jacek",
  age: 25
};
