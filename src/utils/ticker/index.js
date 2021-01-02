import { getTicker } from '../../redux/selectors';
import { MONTH_LENGTH } from '../../utils/consts';

let ticker;

function initialize() {
  ticker = {
    currentStage: TimeOfTheDay.MORNING,
    hour: 0,
    day: 1,
    month: 0,
    year: 475,
    todayEvents: computeDayEvents({}),
    activeEvents: [],
    stats: {
      totalEvents: 0,
      ticks: 0
    },
    callADay,
    advanceStage,
    tick
  };

  return ticker;
}

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

function computeDayEvents(state) {
  return {
    [TimeOfTheDay.MORNING]: [],
    [TimeOfTheDay.AFTERNOON]: [],
    [TimeOfTheDay.EVENING]: [],
    [TimeOfTheDay.NIGHT]: [],
  }
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
  
   
}

export const TimeOfTheDay = {
  MORNING: 'Morning',
  AFTERNOON: 'Afternoon',
  EVENING: 'Evening',
  NIGHT: 'Night'
};

export default {
  initialize
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