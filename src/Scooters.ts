import { AnswersState, Extra } from "./AnswersState";

class Scooter {
  constructor(
    public id: number,
    public price: number,
    public brand: string,
    public model: string,
    public maxSupportedWeight: number,
    public performantUphill: Boolean,
    public suspension: Boolean,
    public maxSpeed: number,
    public range: number,
    public smallWhenFolded: Boolean,
    public imgName: string,
    public extras: Set<Extra> = new Set()
  ) {}
  getFullName = () => this.brand + " " + this.model;
  getImgPath = () => "/src/assets/scooters/" + this.imgName;
}

const scooters = [
  new Scooter(
    1,
    700,
    "Segway-Ninebot",
    "MAX G2 E",
    120,
    true,
    true,
    35,
    70,
    false,
    "max-g2.png",
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(
    2,
    369,
    "Xiaomi",
    "Electric Scooter 4",
    90,
    false,
    false,
    25,
    30,
    true,
    "xiaomi-4.png"
  ),
  new Scooter(
    3,
    299,
    "Xiaomi",
    "Electric Scooter 3",
    90,
    false,
    false,
    25,
    30,
    true,
    "xiaomi-3.png"
  ),
  new Scooter(
    4,
    750,
    "Xiaomi",
    "Electric Scooter 4 Ultra",
    120,
    true,
    true,
    35,
    70,
    false,
    "xiaomi-4-ultra.png",
    new Set([Extra.CruiseControl])
  ),
  new Scooter(
    5,
    600,
    "Smartgyro",
    "Speedway 3.0",
    120,
    true,
    true,
    45,
    45,
    false,
    "speedway.png",
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(
    6,
    650,
    "Smartgyro",
    "Rockway",
    120,
    true,
    true,
    45,
    45,
    false,
    "rockway.png",
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(
    7,
    400,
    "Cecotec",
    "Bongo Serie A",
    100,
    false,
    false,
    25,
    25,
    true,
    "bongo-a.png",
    new Set([Extra.RemovableBattery])
  ),
  new Scooter(
    8,
    600,
    "Cecotec",
    "Bongo Serie Z Power Mountain",
    150,
    true,
    true,
    25,
    60,
    false,
    "bongo-z-power-mountain.png",
    new Set([Extra.Horn])
  ),
  new Scooter(
    9,
    1100,
    "Äike",
    "T",
    100,
    true,
    false,
    25,
    40,
    true,
    "aike-t.png",
    new Set([Extra.RemovableBattery])
  ),
  new Scooter(
    10,
    900,
    "Dualtron",
    "Popular Single",
    100,
    true,
    true,
    65,
    65,
    false,
    "popular-single.jpg",
    new Set([
      Extra.Blinkers,
      Extra.CruiseControl,
      Extra.Horn,
      Extra.RemovableBattery,
    ])
  ),
  new Scooter(
    11,
    815,
    "Pure",
    "Advance Flex",
    120,
    true,
    false,
    25,
    40,
    true,
    "pure-flex.jpg",
    new Set([Extra.Blinkers])
  ),
];

class Occcurrence {
  constructor(public scooter: Scooter, public count: number) {}
}

export function calculateResult(answersState: AnswersState): Scooter[] {
  const hasEnoughRange = scooters.filter((scooter) => {
    return scooter.range >= answersState.wantedRange!;
  });
  const canSupportRider = scooters.filter((scooter) => {
    return scooter.maxSupportedWeight >= answersState.riderWeight!;
  });
  const portable = scooters.filter((scooter) => {
    return scooter.portable === answersState.mustBePortable;
  });
  const powerful = scooters.filter((scooter) => {
    return scooter.canGoUphill === answersState.hillyArea;
  });
  const withSuspension = scooters.filter((scooter) => {
    return scooter.suspension === answersState.bumpyRoads!;
  });
  const fastEnough = scooters.filter((scooter) => {
    return scooter.maxSpeed >= answersState.wantedSpeedLimit!;
  });

  const groupedScooters = [
    hasEnoughRange,
    canSupportRider,
    portable,
    powerful,
    withSuspension,
    fastEnough,
  ].filter((group) => group.length > 0);

  const allScooters = new Set(groupedScooters.flat());

  // Count the occurrences
  let occurrences: Set<Occcurrence> = new Set();
  for (const scooter of allScooters) {
    let count = 0;
    for (const group of groupedScooters) {
      for (const scooterInGroup of group) {
        if (scooterInGroup.id === scooter.id) {
          count++;
        }
      }
    }
    if (count > 1) {
      const existingOccurrence = Array.from(occurrences).find(
        (o) => o.scooter.id == scooter.id
      );
      if (existingOccurrence !== undefined) {
        occurrences.delete(existingOccurrence);
      }
      occurrences.add(new Occcurrence(scooter, count));
    }
  }
  console.log(occurrences);
  let scootersOrderedByOccurences = Array.from(occurrences).sort(
    (o1, o2) => o2.count - o1.count
  );

  return scootersOrderedByOccurences.flatMap((o) => o.scooter);
}
