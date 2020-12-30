import { getTicker } from '../../redux/selectors';

let ticker;

function initialize() {
  ticker = {
    currentStage: TimeOfTheDay.MORNING,
    day: 1,
    todayEvents: computeDayEvents({}),
    activeEvents: [],
    stats: {
      totalEvents: 0
    },
    callADay,
    advanceStage,
  };

  return ticker;
}

function advanceStage(state) {
  const ticker = getTicker(state);

  if (ticker.currentStage === TimeOfTheDay.NIGHT) {
    return callADay(state);
  }

  ticker.currentStage = getNextTime(ticker.currentStage);
}

function callADay(state) {
  const ticker = getTicker(state);

  ticker.currentStage = TimeOfTheDay.MORNING;
  ticker.day++;
}

function computeDayEvents(state) {
  return {
    [TimeOfTheDay.MORNING]: [],
    [TimeOfTheDay.AFTERNOON]: [],
    [TimeOfTheDay.EVENING]: [],
    [TimeOfTheDay.NIGHT]: [],
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