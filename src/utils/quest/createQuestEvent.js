import { getTicker, getQuests } from '../../redux/selectors';
import { createEvent, rescheduleEvent } from '../event';
import { getTimeInFuture, getCurrentTime, isAfter } from '../ticker/tickerUtils';
import { EVENT_TYPES, QUEST_ARRIVAL_TIME } from '../consts';
import { getRandomInt } from '../random';
import createQuest from './index';

export function createQuestEvent(ticker) {
  const startTime = getCurrentTime(ticker);
  startTime[3] = QUEST_ARRIVAL_TIME;

  return createEvent(
    startTime,
    getTimeInFuture(startTime, 1),
    'New quest just arrived!',
    'We may have got new quests from the capital',
    EVENT_TYPES.EVENT,
    (dispatch, state, event) => {
      const numberOfQuests = getRandomInt(0, 4);

      const questsToExpire = getQuests(state).filter(quest => {
        const isExpired = isAfter(getCurrentTime(ticker), quest.expiresAt);

        return isExpired && !quest.accepted;
      });
      
      questsToExpire.forEach(quest => {
        dispatch({type: 'removeQuest', payload: quest})
      });

      for (let i = 0; i < numberOfQuests; ++i) {
        dispatch({type: 'addQuest', payload: createQuest(state)});
      }
    }, (dispatch, state, event) => {
      const ticker = getTicker(state);
      const startTime = getTimeInFuture(getCurrentTime(ticker), 24);

      startTime[3] = QUEST_ARRIVAL_TIME;

      ticker.events.push(rescheduleEvent(event, startTime, getTimeInFuture(startTime, 1)));
    });
}