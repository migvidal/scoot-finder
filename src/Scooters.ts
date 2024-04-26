import { Extra } from "./AnswersState";

class Scooter {
  brand: string;
  model: string;
  maxSupportedWeight: number;
  performantUphill: Boolean;
  suspension: Boolean;
  maxSpeed: number;
  range: number;
  smallWhenFolded: Boolean;
  extras: Set<Extra>;
  constructor(
    brand: string,
    model: string,
    maxSupportedWeight: number,
    performantUphill: Boolean,
    suspension: Boolean,
    maxSpeed: number,
    range: number,
    smallWhenFolded: Boolean,
    extras: Set<Extra> = new Set()
  ) {
    this.brand = brand;
    this.model = model;
    this.maxSupportedWeight = maxSupportedWeight;
    this.performantUphill = performantUphill;
    this.suspension = suspension;
    this.maxSpeed = maxSpeed;
    this.range = range;
    this.smallWhenFolded = smallWhenFolded;
    this.extras = extras;
  }
}

const scooters = [
  new Scooter(
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
  new Scooter("Xiaomi", "Electric Scooter 4", 90, false, false, 25, 30, true),
  new Scooter("Xiaomi", "Electric Scooter 3", 90, false, false, 25, 30, true),
  new Scooter(
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
];
