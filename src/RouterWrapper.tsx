import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HillyScreen from "./screens/HillyScreen";
import WeightScreen from "./screens/WeightScreen";
import { currentAnswers } from "./AnswersState";
import RoadStateScreen from "./screens/RoadStateScreen";
import SpeedLimitScreen from "./screens/SpeedLimitScreen";
import { URLBuilder } from "./Utils";
import RangeScreen from "./screens/RangeScreen";
import SizeScreen from "./screens/PortableScreen";
import ExtrasScreen from "./screens/ExtrasScreen";
import ResultsScreen from "./screens/ResultsScreen";
import { tr, useT } from "talkr";
import { useState } from "react";

function RouterWrapper() {
  const navigate = useNavigate();
  const { T, setLocale, locale } = useT();

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

  const RESULTS_SEGMENT = "results";

  return (
    <div className="max-w-2xl">
      <div className="m-4 flex justify-between items-center">
        <Link
          to={ROOT_SEGMENT}
          className="text-yellow-600 rounded-full border border-yellow-600 p-2 pt-3"
        >
          <span className="text-2xl font-black">S</span>
          <span className="font-thin">COOT</span>
          <span className="text-2xl font-black">F</span>
          <span className="font-thin">INDER</span>
        </Link>
        <div>
          {locale}
        </div>
        <div>
          <button
            onClick={() => setLocale("en")}
            className={locale === "es" ? "" : "underline"}
          >
            EN
          </button>
          <span className="p-2"></span>
          <button
            onClick={() => setLocale("es")}
            className={locale === "es" ? "underline" : ""}
          >
            ES
          </button>
        </div>
      </div>
      <Routes>
        <Route
          path={ROOT_SEGMENT}
          element={
            <HomeScreen>
              <Link
                to={WEIGHT_SEGMENT}
                className="rounded-lg bg-yellow-300 dark:bg-yellow-600 px-4 py-2"
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
                  .addQueryParameter(
                    ROAD_STATE_PARAM_KEY,
                    bumpyRoads.toString()
                  )
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
                  .addQueryParameter(
                    SPEED_LIMIT_PARAM_KEY,
                    wantedSpeedLimit.toString()
                  )
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={RANGE_SEGMENT}
          element={
            <RangeScreen
              onNavigate={(range) => {
                currentAnswers.wantedRange = range;
                console.log(currentAnswers);
                const url = new URLBuilder(SIZE_SEGMENT)
                  .addQueryParameter(RANGE_PARAM_KEY, range.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={SIZE_SEGMENT}
          element={
            <SizeScreen
              onNavigate={(small) => {
                currentAnswers.mustBePortable = small;
                console.log(currentAnswers);
                const url = new URLBuilder(EXTRAS_SEGMENT)
                  .addQueryParameter(SIZE_PARAM_KEY, small.toString())
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={EXTRAS_SEGMENT}
          element={
            <ExtrasScreen
              onNavigate={(extras) => {
                currentAnswers.extras = extras;
                console.log(currentAnswers);
                const extrasAsString = Array.from(extras).join(",");
                const url = new URLBuilder(RESULTS_SEGMENT)
                  .addQueryParameter(EXTRAS_PARAM_KEY, extrasAsString)
                  .build();
                navigate(url);
              }}
            />
          }
        ></Route>
        <Route
          path={RESULTS_SEGMENT}
          element={<ResultsScreen onNavigate={() => navigate(ROOT_SEGMENT)} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default RouterWrapper;
