import { getTicker, getQuests, getAcceptedAndNotDepartedQuests } from '../../redux/selectors';
import { createEvent, rescheduleEvent } from '../event';
import { getTimeInFuture, getCurrentTime, isAfter } from '../ticker/tickerUtils';
import { EVENT_TYPES, MEMBERS_ARRIVAL_TIME } from '../consts';
import { getRandomInt } from '../random';
import { createMember } from './index';

export function createMembersEvent(ticker) {
  const startTime = getTimeInFuture(getCurrentTime(ticker), 24);
  startTime[3] = MEMBERS_ARRIVAL_TIME;

  return createEvent(
    startTime,
    getTimeInFuture(startTime, 1),
    'Checking for new recruits',
    "Let's see how many join! :D",
    EVENT_TYPES.EVENT,
    (dispatch, state, event) => {
      const newMembers = getRandomInt(0, 2);

      for (let i = 0; i < newMembers; ++i) {
        dispatch({
          type: 'addMember',
          payload: createMember()
        });
      }
    }, (dispatch, state, event) => {
      const ticker = getTicker(state);
      const startTime = getTimeInFuture(getCurrentTime(ticker), 24);

      startTime[3] = MEMBERS_ARRIVAL_TIME;

      ticker.events.push(rescheduleEvent(event, startTime, getTimeInFuture(startTime, 1)));
    });
}