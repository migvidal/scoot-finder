class AnswersState {
  riderWeight: number | null = null;
  hillyArea: Boolean | null = null;
  bumpyRoads: Boolean | null = null;
  wantedSpeedLimit: number | null = null;
  wantedRange: number | null = null;
}

export let currentAnswers = new AnswersState();
