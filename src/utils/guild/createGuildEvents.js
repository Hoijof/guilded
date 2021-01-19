import { getTicker, getQuests, getAcceptedAndNotDepartedQuests } from '../../redux/selectors';
import { createEvent, rescheduleEvent } from '../event';
import { getTimeInFuture, getCurrentTime, isAfter } from '../ticker/tickerUtils';
import { EVENT_TYPES, GUILD_QUEST_DEPARTURE_TIME } from '../consts';
import { startQuest } from '../quest';
import Members from '../../components/guild/members';

export function createGuildCheckupEvent(ticker) {
  const startTime = getTimeInFuture(getCurrentTime(ticker), 24);
  startTime[3] = GUILD_QUEST_DEPARTURE_TIME;

  return createEvent(
    startTime,
    getTimeInFuture(startTime, 1),
    'Performing daily guild checkup',
    'May they have luck!',
    EVENT_TYPES.EVENT,
    (dispatch, state, event) => {
      checkupQuests(state);
    }, (dispatch, state, event) => {
      const ticker = getTicker(state);
      const startTime = getTimeInFuture(getCurrentTime(ticker), 24);

      startTime[3] = GUILD_QUEST_DEPARTURE_TIME;

      ticker.events.push(rescheduleEvent(event, startTime, getTimeInFuture(startTime, 1)));
    });
}

function checkupQuests(state) {
  getAcceptedAndNotDepartedQuests(state).forEach(quest => {
    startQuest(state, quest);
  });
}