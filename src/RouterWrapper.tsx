import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HillyScreen from "./screens/HillyScreen";
import WeightScreen from "./screens/WeightScreen";

function RouterWrapper() {
  const navigate = useNavigate();

  const ROOT_SEGMENT = "/";
  const WEIGHT_SEGMENT = "/weight";
  const HILLY_SEGMENT = "/hilly";

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
            <WeightScreen onNavigate={(weight) => navigate(HILLY_SEGMENT)} />
          }
        ></Route>
        <Route
          path={HILLY_SEGMENT}
          element={
            <HillyScreen onNavigate={(isHilly) => navigate(ROOT_SEGMENT)} />
          }
        ></Route>
      </Routes>
    </>
  );
}
export default RouterWrapper;
