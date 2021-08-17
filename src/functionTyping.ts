const add = (a: number, b: number): number => a + b;

const addResult = add(2, 2);

interface Game {
  title: string;
  releaseDate: Date;
}

const displayGameInfo = (game: Game) => {
  const { title, releaseDate } = game;
  console.log(`Game: ${title} relased ${releaseDate.toDateString()}`);
};

const uncharted: Game = {
  title: "Uncharted",
  releaseDate: new Date("November 19, 2007")
};

displayGameInfo(uncharted);
