import { getTicker } from '../../redux/selectors';

let ticker;

function initialize() {
  ticker = {
    currentStage: TimeOfTheDay.MORNING,
    hour: 0,
    day: 1,
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

  dispatch('switchPause', true);
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

  if (state.stageProgress === 6) {
    state.ticker.advanceStage(dispatch, state);
  
    dispatch('resetStageProgress');
  }
  
  getTicker(state).stats.ticks++;
  getTicker(state).hour++;

  return dispatch('increaseStageProgress');  
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