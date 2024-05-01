class AnswersState {
  riderWeight: number | null = null;
  hillyArea: Boolean | null = null;
  bumpyRoads: Boolean | null = null;
  wantedSpeedLimit: number | null = null;
  wantedRange: number | null = null;
  mustBeSmall: Boolean | null = null;
  extras: Set<Extra> | null = null;
}

export enum Extra {
    Blinkers, Horn, CruiseControl, RemovableBattery
}

export let currentAnswers = new AnswersState();
