import { getTicker } from '../../redux/selectors';
import { createEvent }  from '../event';
import { getTimeInFuture, getCurrentTime } from '../ticker/tickerUtils';
import { EVENT_TYPES, QUEST_TYPES } from '../consts';
import { createStepTravelFor } from './questUtils';


function createStepQuestObjective(quest, questType) {
  const execute = (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const endTime = getTimeInFuture(currentTime, 3);

    return createEvent(currentTime, endTime, 'Executing Quest', 'None', EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        quest.log.push(`Started searching for the thing.`)
      }, (dispatch, state, event) => {
        quest.log.push(`Found the thing.`);

        dispatch({type: 'advanceQuest', payload: quest});
      })
  };
  
  return execute;
}

export default function generateStepsFetch(quest, questValue) {
  return [
    createStepTravelFor(quest, questValue),
    createStepQuestObjective(quest, QUEST_TYPES.GO_FETCH, questValue),
    createStepTravelFor(quest, questValue)
  ];
}