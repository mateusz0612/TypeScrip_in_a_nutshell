// INTERFACES

interface Car {
  brand: string;
  model: string | number;
  year: number;
}

const OpelAstra: Car = {
  brand: "Opel",
  model: "Astra",
  year: 2012
};

const VolkswagenGolf: Partial<Car> = {
  brand: "Volkswagen"
};

interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

const AdamMickiewisz: Required<Person> = {
  firstName: "Adam",
  lastName: "Mickiewicz",
  age: 56
};
