import { getTicker } from '../../redux/selectors';
import { MONTH_LENGTH } from '../../utils/consts';

import createEvent, { EVENT_TYPES } from '../event';

let ticker;

function initialize(state) {
  ticker = {
    currentStage: TimeOfTheDay.MORNING,
    hour: 0,
    day: 1,
    month: 0,
    year: 475,
    todayEvents: [],
    activeEvents:[],
    events: [],
    stats: {
      totalEvents: 0,
      ticks: 0
    },
    callADay,
    advanceStage,
    tick
  };

//#region Create default events
  const festivityOne = createEvent([475, 0, 5, 8], [475, 0, 6, 0], 'Fifth of Decembrary', 'A very beautiful festivity', EVENT_TYPES.EVENT, (dispatch, state, event) => {
    console.log(`It's ${event.name}  !!`);
  }, (dispatch, state, event) => {
    const ticker = getTicker(state);

    ticker.events.push(rescheduleEvent(event, [ticker.year + 1, 0, 5, 8], [ticker.year + 1, 0, 6, 0]));
  });

  const festivityTwo = createEvent([475, 0, 1, 8], [475, 0, 8, 8], 'First Week of the year!', 'The very first week of the year', EVENT_TYPES.EVENT, (dispatch, state, event) => {
    console.log(`It's ${event.name}  !!`);
  }, (dispatch, state, event) => {
    const ticker = getTicker(state);

    ticker.events.push(rescheduleEvent(event, [ticker.year + 1, 0, 1, 8], [ticker.year + 1, 0, 8, 1]));
  });

  ticker.events.push(festivityOne, festivityTwo);

  computeDayEvents({
    ticker 
  });
  
//#endregion

  return ticker;
}

function computeDayEvents(state) {
  const ticker = getTicker(state);

  ticker.todayEvents = ticker.events.filter((event) => {
    return isToday(ticker, event.start) || isToday(ticker, event.end);
  });
}

function checkEvents(dispatch, state) {
  const ticker = getTicker(state);

  ticker.todayEvents.filter((event) => {
    return (event.start[3] === ticker.hour) || (event.end[3] === ticker.hour)
  }).forEach((event) => {
    if (isToday(ticker, event.start) && event.start[3] === ticker.hour) {
      event.startHandler(dispatch, state, event);
      ticker.activeEvents.push(event);
    } else {
      event.endHandler(dispatch, state, event);
      ticker.events.splice(ticker.events.indexOf(event), 1);
      ticker.activeEvents.splice(ticker.activeEvents.indexOf(event), 1);
    }
  });
}

function isToday(ticker, date) {
  return ticker.year === date[0] && ticker.month === date[1] && ticker.day === date[2];
}

export function rescheduleEvent(event, startDate, endDate) {
  return createEvent(startDate, endDate, event.name, event.description, event.type, event.startHandler, event.endHandler);
}

//#region Ticking

function advanceStage(dispatch, state) {
  const ticker = getTicker(state);

  if (ticker.currentStage === TimeOfTheDay.NIGHT) {
    return callADay(dispatch, state);    
  }

  ticker.currentStage = getNextTime(ticker.currentStage);
}

function callADay(dispatch, state) {
  const ticker = getTicker(state);

  ticker.currentStage = TimeOfTheDay.MORNING;
  ticker.hour = 0;
  ticker.day++;


  if (ticker.day > MONTH_LENGTH) {
    callAMonth(dispatch, state);
  }  

  computeDayEvents(state);

  // console.log(ticker.todayEvents, ticker.activeEvents, ticker.events)
}

function callAMonth(dispatch, state) {
  const ticker = getTicker(state);

  ticker.day = 1;
  ticker.month++;

  if (ticker.month === 4) {
    callAYear(dispatch, state);
  }
}

function callAYear(dispatch, state) {
  const ticker = getTicker(state);

  ticker.month = 0;
  ticker.year++;
}

function tick(dispatch, state) {
  if (state.isPaused) {
    return;
  }

  getTicker(state).stats.ticks++;
  getTicker(state).hour++;

  dispatch('increaseStageProgress'); 

  if (state.stageProgress === 5) {
    state.ticker.advanceStage(dispatch, state);
  
    return dispatch('resetStageProgress');
  }   

  checkEvents(dispatch, state);
}

export const TimeOfTheDay = {
  MORNING: 'Morning',
  AFTERNOON: 'Afternoon',
  EVENING: 'Evening',
  NIGHT: 'Night'
};

function getNextTime(currentStage) {
  switch(currentStage) {
    case TimeOfTheDay.MORNING:
      return TimeOfTheDay.AFTERNOON;
    case TimeOfTheDay.AFTERNOON:
      return TimeOfTheDay.EVENING;
    case TimeOfTheDay.EVENING:
      return TimeOfTheDay.NIGHT;
  }
}

export const MONTHS = [
  'Decembary',
  'Aprimay',
  'Jugust',
  'Septober'
];
//#endregion

export default {
  initialize
};