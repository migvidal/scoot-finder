class AnswersState {
  riderWeight: number | null = null;
  hillyArea: Boolean | null = null;
  bumpyRoads: Boolean | null = null;
  wantedSpeedLimit: number | null = null;
  wantedRange: number | null = null;
  mustBeSmall: Boolean | null = null;
  extras: Extras[] | null = null;
}

enum Extras {
    Blinkers, Horn, CruiseControl
}

export let currentAnswers = new AnswersState();
