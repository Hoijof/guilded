import { TIME_OF_THE_DAY } from '../consts';



export function isToday(ticker, date) {
  return ticker.year === date[0] && ticker.month === date[1] && ticker.day === date[2];
}

export function getTimeInFuture(startTime, difference) {
  return getTimeFromHours(getTotalHours(startTime) + difference);
}

export function getCurrentTime(ticker) {
  return [ticker.year, ticker.month, ticker.day, ticker.hour];
}

export function getHumanTime(time) {
  
}

export function getDifferenceTime(startTime, endTime) {
  const difference = getTotalHours(endTime) - getTotalHours(startTime);

  return getTimeFromHours(difference);
}

/*
  year: 4 * 15 * 24 = 1440
*/
export function getTotalHours(time) {
  return time[0] * 1440 + time[1] * 360 + (time[2] - 1) * 24 + time[3];
}

export function getTimeFromHours(hours) {
  return [Math.floor(hours / 1440), Math.floor((hours / 360) % 4), Math.floor((hours / 24) % 15) + 1, hours % 24];
}


export function getNextTime(currentStage) {
  switch(currentStage) {
    case TIME_OF_THE_DAY.MORNING:
      return TIME_OF_THE_DAY.AFTERNOON;
    case TIME_OF_THE_DAY.AFTERNOON:
      return TIME_OF_THE_DAY.EVENING;
    case TIME_OF_THE_DAY.EVENING:
      return TIME_OF_THE_DAY.NIGHT;
  }
}
