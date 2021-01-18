import { getTicker } from '../../redux/selectors';
import { isToday, getNextTime } from './tickerUtils';
import { createEvent, rescheduleEvent } from '../event';
import { createQuestEvent } from '../quest/createQuestEvent';

import { MONTH_LENGTH, TIME_OF_THE_DAY, EVENT_TYPES } from '../../utils/consts';


let ticker;

function initialize() {
  const ticker = {
    currentStage: TIME_OF_THE_DAY.MORNING,
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

  const questEvent = createQuestEvent(ticker);

  ticker.events.push(festivityOne, festivityTwo, questEvent);

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


//#region Ticking

function tick(dispatch, state, stageProgress, setStageProgress) {
  if (state.isPaused) {
    return;
  }

  getTicker(state).stats.ticks++;
  getTicker(state).hour++;

  setStageProgress(stageProgress + 1);

  if (stageProgress === 5) {
    state.ticker.advanceStage(dispatch, state);
  
    setStageProgress(0);
  }   

  checkEvents(dispatch, state);
}

function advanceStage(dispatch, state) {
  const ticker = getTicker(state);

  if (ticker.currentStage === TIME_OF_THE_DAY.NIGHT) {
    return callADay(dispatch, state);    
  }

  ticker.currentStage = getNextTime(ticker.currentStage);
}

function callADay(dispatch, state) {
  const ticker = getTicker(state);

  ticker.currentStage = TIME_OF_THE_DAY.MORNING;
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

export default {
  initialize
};
