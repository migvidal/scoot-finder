import { Extra } from "./AnswersState";

class Scooter {
  price: number;
  brand: string;
  model: string;
  maxSupportedWeight: number;
  performantUphill: Boolean;
  suspension: Boolean;
  maxSpeed: number;
  range: number;
  smallWhenFolded: Boolean;
  imgName: string,
  extras: Set<Extra>;
  constructor(
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
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.maxSupportedWeight = maxSupportedWeight;
    this.performantUphill = performantUphill;
    this.suspension = suspension;
    this.maxSpeed = maxSpeed;
    this.range = range;
    this.smallWhenFolded = smallWhenFolded;
    this.imgName = imgName;
    this.extras = extras;
  }
}

const scooters = [
  new Scooter(
    700,
    "Segway-Ninebot",
    "MAX G2 E",
    120,
    true,
    true,
    35,
    70,
    false,
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(369, "Xiaomi", "Electric Scooter 4", 90, false, false, 25, 30, true),
  new Scooter(299, "Xiaomi", "Electric Scooter 3", 90, false, false, 25, 30, true),
  new Scooter(
    750,
    "Xiaomi",
    "Electric Scooter 4 Ultra",
    120,
    true,
    true,
    35,
    70,
    false,
    new Set([Extra.CruiseControl])
  ),
  new Scooter(
    600,
    "Smartgyro",
    "Speedway 3.0",
    120,
    true,
    true,
    45,
    45,
    false,
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(
    650,
    "Smartgyro",
    "Rockway",
    120,
    true,
    true,
    45,
    45,
    false,
    new Set([Extra.Blinkers, Extra.CruiseControl, Extra.Horn])
  ),
  new Scooter(
    400,
    "Cecotec",
    "Bongo Serie A",
    100,
    false,
    false,
    25,
    25,
    true,
    new Set([Extra.RemovableBattery])
  ),
  new Scooter(
    600,
    "Cecotec",
    "Bongo Serie Z Power Mountain",
    150,
    true,
    true,
    25,
    60,
    false,
    new Set([Extra.Horn])
  ),
  new Scooter(
    1100,
    "Äike",
    "T",
    100,
    true,
    false,
    25,
    40,
    true,
    new Set([Extra.RemovableBattery])
  ),
  new Scooter(
    900,
    "Dualtron",
    "Popular Single",
    100,
    true,
    true,
    65,
    65,
    false,
    new Set([
      Extra.Blinkers,
      Extra.CruiseControl,
      Extra.Horn,
      Extra.RemovableBattery,
    ])
  ),
];
