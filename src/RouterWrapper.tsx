import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HillyScreen from "./screens/HillyScreen";
import WeightScreen from "./screens/WeightScreen";
import { currentAnswers } from "./AnswersState";
import RoadStateScreen from "./screens/RoadStateScreen";
import SpeedLimitScreen from "./screens/SpeedLimitScreen";
import { URLBuilder } from "./Utils";

function RouterWrapper() {
  const navigate = useNavigate();

  const ROOT_SEGMENT = "/";

  const WEIGHT_SEGMENT = "/weight";
  const WEIGHT_PARAM_KEY = "weight";

  const HILLY_SEGMENT = "/hilly";
  const IS_HILLY_PARAM_KEY = "isHilly";

  const ROAD_STATE_SEGMENT = "/road-state";
  const ROAD_STATE_PARAM_KEY = "roadBumpy";

  const SPEED_LIMIT_SEGMENT = "/speed-limit";
  const SPEED_LIMIT_PARAM_KEY = "speedLimit";

  const RANGE_SEGMENT = "/range";
  const RANGE_PARAM_KEY = "wantedRange";

  const SIZE_SEGMENT = "/size";
  const SIZE_PARAM_KEY = "mustBeSmall";

  const EXTRAS_SEGMENT = "/extras";
  const EXTRAS_PARAM_KEY = "extras";

  return (
    <>
      <div>
        <Link to={ROOT_SEGMENT}>ScootFinder</Link>
      </div>
      <Routes>
        <Route
          path={ROOT_SEGMENT}
          element={
            <HomeScreen>
              <Link
                to={WEIGHT_SEGMENT}
                className="text-yellow-600 dark:text-yellow-300"
              >
                Begin
              </Link>
            </HomeScreen>
          }
        />
        <Route
          path={WEIGHT_SEGMENT}
          element={
            <WeightScreen
              onNavigate={(weight) => {
                currentAnswers.riderWeight = weight;
                console.log(currentAnswers);
                const url = new URLBuilder(HILLY_SEGMENT)
                  .addQueryParameter(WEIGHT_PARAM_KEY, weight.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={HILLY_SEGMENT}
          element={
            <HillyScreen
              onNavigate={(isHilly) => {
                currentAnswers.hillyArea = isHilly;
                console.log(currentAnswers);
                const url = new URLBuilder(ROAD_STATE_SEGMENT)
                  .addQueryParameter(IS_HILLY_PARAM_KEY, isHilly.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={ROAD_STATE_SEGMENT}
          element={
            <RoadStateScreen
              onNavigate={(bumpyRoads) => {
                currentAnswers.bumpyRoads = bumpyRoads;
                console.log(currentAnswers);
                const url = new URLBuilder(SPEED_LIMIT_SEGMENT)
                  .addQueryParameter(ROAD_STATE_PARAM_KEY, bumpyRoads.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={SPEED_LIMIT_SEGMENT}
          element={
            <SpeedLimitScreen
              onNavigate={(wantedSpeedLimit) => {
                currentAnswers.wantedSpeedLimit = wantedSpeedLimit;
                console.log(currentAnswers);
                const url = new URLBuilder(RANGE_SEGMENT)
                  .addQueryParameter(SPEED_LIMIT_PARAM_KEY, wantedSpeedLimit.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
export default RouterWrapper;
