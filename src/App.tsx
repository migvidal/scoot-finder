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

function App() {
  const navigator = useNavigate();
  function submitWeightAndNavigate(weight: number) {
    navigator("/hills");
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
                to="/weight"
                className="text-yellow-600 dark:text-yellow-300"
              >
                Begin
              </Link>
            </HomeScreen>
          }
        />
        <Route
          path="/weight"
          element={<WeightScreen onSubmit={submitWeightAndNavigate} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
