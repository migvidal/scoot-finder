import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import RoundedButton from "./RoundedButton";
import HomeScreen from "./screens/HomeScreen";
import WeightScreen from "./screens/WeightScreen";

const WEIGHT_SEGMENT = "/weight";
const HILLS_SEGMENT = "/hills";

function App() {
  const navigator = useNavigate();
  function submitWeightAndNavigate(weight: number) {
    navigator(HILLS_SEGMENT);
  }
  return (
    <BrowserRouter>
      <div>
        <Link to="/">ScootFinder</Link>
      </div>
      <Routes>
        <Route
          path="/"
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
          element={<WeightScreen onSubmit={submitWeightAndNavigate} />}
        ></Route>
        <Route
          path={HILLS_SEGMENT}
          element={<WeightScreen onSubmit={submitWeightAndNavigate} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
