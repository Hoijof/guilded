import { getTicker } from '../../redux/selectors';

let ticker;

function initialize() {
  ticker = {
    currentStage: TimeOfTheDay.MORNING,
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
  getTicker(state).stats.ticks++;

  if (state.stageProgress < 100) {
    return dispatch('increaseStageProgress');
  }


  state.ticker.advanceStage(dispatch, state);
  
  return dispatch('resetStageProgress');
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