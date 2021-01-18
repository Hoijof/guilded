import { getTicker } from '../../redux/selectors';
import { createEvent }  from '../event';
import { getTimeInFuture, getCurrentTime } from '../ticker/tickerUtils';
import { EVENT_TYPES } from '../consts';

export function createStepTravelFor(quest, questValue) {
  const execute = (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const endTime = getTimeInFuture(currentTime, questValue);
    
    return createEvent(currentTime, endTime, 'Quest Traveling', 'None', EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        debugger;
        addLog(state, quest, `Going to travel for ${questValue} hours.`);
      }, (dispatch, state, event) => {
        debugger;
        addLog(state, quest, `We arrived at our destination`);

        dispatch({type: 'advanceQuest', payload: quest});
      })
  };
  
  return execute;
}

let logId = 0;

export function addLog(state, quest, log) {
  quest.logs.push({
    id: ++logId,
    createdAt: getCurrentTime(getTicker(state)),
    log
  });
}