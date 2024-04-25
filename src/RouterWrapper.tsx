import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HillyScreen from "./screens/HillyScreen";
import WeightScreen from "./screens/WeightScreen";

function RouterWrapper() {
  const navigate = useNavigate();

  const ROOT_SEGMENT = "/";

  const WEIGHT_SEGMENT = "/weight";
  const WEIGHT_PARAM_KEY = "weight";

  const HILLY_SEGMENT = "/hilly";
  const IS_HILLY_PARAM_KEY = "isHilly";
  
  const ROAD_STATE_SEGMENT = "/road-state";

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
                // save to common state object
                navigate(HILLY_SEGMENT + "?" + WEIGHT_PARAM_KEY + "=" + weight);
              }}
            />
          }
        ></Route>
        <Route
          path={HILLY_SEGMENT}
          element={
            <HillyScreen
              onNavigate={(isHilly) => navigate(ROAD_STATE_SEGMENT)}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
export default RouterWrapper;
