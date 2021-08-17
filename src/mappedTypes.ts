interface FootballPlayer {
  name: string;
  position: string;
  age: string;
}

type MappedFootballPlayer = {
  [Property in keyof FootballPlayer]: boolean;
};
