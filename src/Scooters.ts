import { AnswersState, Extra } from "./AnswersState";

class Scooter {
  id: Number;
  price: number;
  brand: string;
  model: string;
  maxSupportedWeight: number;
  canGoUphill: Boolean;
  suspension: Boolean;
  maxSpeed: number;
  range: number;
  portable: Boolean;
  imgName: string;
  extras: Set<Extra>;
  constructor(
    id: number,
    price: number,
    brand: string,
    model: string,
    maxSupportedWeight: number,
    performantUphill: Boolean,
    suspension: Boolean,
    maxSpeed: number,
    range: number,
    smallWhenFolded: Boolean,
    imgName: string,
    extras: Set<Extra> = new Set()
  ) {
    this.id = id;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.maxSupportedWeight = maxSupportedWeight;
    this.canGoUphill = performantUphill;
    this.suspension = suspension;
    this.maxSpeed = maxSpeed;
    this.range = range;
    this.portable = smallWhenFolded;
    this.imgName = imgName;
    this.extras = extras;
  }
  getFullName = () => this.brand + " " + this.model
  getImgPath = () => "/src/assets/scooters/" + this.imgName
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

export function calculateResult(answersState: AnswersState) {
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

  const filteredScooters = [
    hasEnoughRange,
    canSupportRider,
    portable,
    powerful,
    withSuspension,
    fastEnough,
  ].filter((group) => group.length > 0);

  return filteredScooters;
}
