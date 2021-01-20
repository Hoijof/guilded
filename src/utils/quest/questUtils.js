import { getTicker } from "../../redux/selectors";
import { createEvent } from "../event";
import { getTimeInFuture, getCurrentTime } from "../ticker/tickerUtils";
import { EVENT_TYPES, LOCATIONS } from "../consts";
import {
  restMemberFor,
  getMemberRestTime,
  getMemberTravelCapacity,
  consumeTravelCapacity,
} from "../members";

export function createStepTravelFor(quest, questValue) {
  return (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const memberTravelCapacity = getMemberTravelCapacity(quest.assignee);
    const timeTraveling =
      memberTravelCapacity >= questValue ? questValue : memberTravelCapacity;
    const endTime = getTimeInFuture(currentTime, timeTraveling);

    // Travel event needs to be first in case we have this scenario [travel, rest]
    return createEvent(
      currentTime,
      endTime,
      "Quest Traveling",
      "None",
      EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        addLog(
          state,
          quest,
          `Going to travel for ${timeTraveling} of ${questValue} hours.`
        );

        quest.assignee.location = LOCATIONS.TRAVELING;
      },
      (dispatch, state, event) => {
        let message = "We arrived at our destination";

        consumeTravelCapacity(quest.assignee, timeTraveling);

        if (timeTraveling < questValue) {
          quest.steps.splice(
            1,
            0,
            createRestEvent(quest, questValue - memberTravelCapacity)
          );

          message = "We have to stop due to lack of energy.";
        }

        quest.assignee.location = LOCATIONS.CITY;

        addLog(state, quest, message);

        dispatch({ type: "advanceQuest", payload: quest });
      }
    );
  };
}

export function createRestEvent(quest, remainingQuestValue) {
  return (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const memberRestTime = getMemberRestTime(quest.assignee);
    const endTime = getTimeInFuture(currentTime, memberRestTime);

    // Travel event needs to be first in case we have this scenario [travel, rest]
    return createEvent(
      currentTime,
      endTime,
      "Quest Resting",
      "None",
      EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        addLog(state, quest, `Going to rest for ${memberRestTime} hours.`);

        quest.assignee.location = LOCATIONS.CAMP;
      },
      (dispatch, state, event) => {
        addLog(state, quest, `We are rested!`);

        restMemberFor(quest.assignee, memberRestTime);

        quest.steps.splice(
          1,
          0,
          createStepTravelFor(quest, remainingQuestValue)
        );

        quest.assignee.location = LOCATIONS.TRAVELING;

        dispatch({ type: "advanceQuest", payload: quest });
      }
    );
  };
}

let logId = 0;

export function addLog(state, quest, log) {
  quest.logs.push({
    id: ++logId,
    createdAt: getCurrentTime(getTicker(state)),
    log,
  });
}
