abstract class Animal {
  constructor(protected name: string) {}

  abstract sleep(): void;

  giveVoice() {
    console.log(`${this.name} is giving voice!`);
  }
}

class Dog extends Animal {
  constructor(protected name: string) {
    super(name);
  }

  giveVoice() {
    console.log(`${this.name} dog is giving voice!`);
  }

  sleep() {
    console.log(`${this.name} dog is sleeping`);
  }
}

class Beagle extends Dog {
  constructor(protected name: string) {
    super(name);
  }

  sleep() {
    console.log(`${this.name} Beagle is sleeping`);
  }
}

const doge = new Dog("Husky");
const beagle = new Beagle("Bidzel");
const dogs = [doge, beagle];

dogs.forEach((dog) => dog.sleep());
