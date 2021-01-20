import { getTicker } from "../../redux/selectors";
import { createEvent } from "../event";
import { getTimeInFuture, getCurrentTime } from "../ticker/tickerUtils";
import { EVENT_TYPES, QUEST_TYPES } from "../consts";
import { createStepTravelFor, addLog } from "./questUtils";
import { isHappening } from "../random";

function createStepQuestObjective(quest, firstTime = true) {
  const execute = (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const endTime = getTimeInFuture(currentTime, 3);

    return createEvent(
      currentTime,
      endTime,
      "Executing Quest",
      "None",
      EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        if (firstTime) {
          addLog(store, quest, "Started searching for the thing.");
        }
      },
      (dispatch, state, event) => {
        if (!isHappening(50)) {
          addLog(store, quest, "Couldn't find the thing. We'll try again.");

          quest.steps.splice(1, 0, createStepQuestObjective(quest, false));
        } else {
          addLog(store, quest, "Found the thing.");
        }

        dispatch({ type: "advanceQuest", payload: quest });
      }
    );
  };

  return execute;
}

export default function generateStepsFetch(quest, questValue) {
  return [
    createStepTravelFor(quest, questValue),
    createStepQuestObjective(quest, QUEST_TYPES.GO_FETCH, questValue),
    createStepTravelFor(quest, questValue),
  ];
}
