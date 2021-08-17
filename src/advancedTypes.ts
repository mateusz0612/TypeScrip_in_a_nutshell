// INTERSECTION TYPES

interface Driveable {
  drive: () => void;
}

interface Breakable {
  break: () => void;
}

type Carable = Driveable & Breakable;

const SkodaFabia: Carable = {
  drive: () => console.log("Im driving"),
  break: () => console.log("Im breaking")
};

SkodaFabia.drive();
SkodaFabia.break();

// UNION TYPES AND TYPE ALIASES

type stringOrNumber = string | number;
