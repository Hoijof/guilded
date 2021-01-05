import createEvent, { EVENT_TYPES } from '../event';
import { getTicker } from '../../redux/selectors';
import { getTimeInFuture, getCurrentTime, getDifferenceTime } from '../ticker';
import { getRandomInt } from '../random';

let lastId = 0;

export default function createQuest(dispatch, store) {
  const id = ++lastId;

  const quest = {
    id,
    name: 'No name',
    description: 'No Description',
    steps: [],
    reward: 0,
    questValue: 0,
    active: false,
    completed: false,
    assignee: null,
    log: []
  }

  const {name, description, reward, steps} = generateRandomQuestData(dispatch, quest);

  quest.name = name;
  quest.description = description;
  quest.reward = reward;
  quest.steps = steps;

  return quest;
}

function generateRandomQuestData(dispatch, quest) {
  // Value in hours
  const questValue = getRandomInt(6, 50);

  return {
    name: 'Go Fetch',
    description: 'Go find something somewhere',
    reward: Math.floor(questValue * 0.7 + getRandomInt(-2, 2)),
    questValue,
    steps: [createStepTravelFor(dispatch, quest, questValue), createStepQuestObjective(dispatch, quest, QUEST_TYPES.GO_FETCH, questValue), createStepTravelFor(dispatch, quest, questValue)]
  }
}

function createStepTravelFor(dispatch, quest, questValue) {
  const execute = (dispatch, store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    const endTime = getTimeInFuture(currentTime, questValue);

    return createEvent(currentTime, endTime, 'Quest Traveling', 'None', EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        quest.log.push(`Going to travel for ${questValue} hours.`)
      }, (dispatch, state, event) => {
        quest.log.push(`We arrived at our destination`);

        dispatch({type: 'advanceQuest', payload: quest});
      })
  };
  
  return execute;
}

function createStepQuestObjective(dispatch, quest, questType) {
  const execute = (dispatch, store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    const endTime = getTimeInFuture(currentTime, 3);

    return createEvent(currentTime, endTime, 'Executing Quest', 'None', EVENT_TYPES.QUEST,
      (a, state, quest) => {
        quest.log.push(`Started searching for the thing.`)
      }, (a, state, quest) => {
        quest.log.push(`Found the thing.`);

        dispatch({type: 'advanceQuest', payload: quest});
      })
  };
  
  return execute;
}

export function startQuest(quest) {
  debugger;
  if (quest.active) {
    return;
  }

  quest.active = true;

  advanceQuest(quest);
}

export function advanceQuest(quest) {
  debugger;
  quest.steps.shift()

  if (quest.steps.length === 0) {
    completeQuest(quest);
  }

  quest.steps[0]();
}

function completeQuest(quest) {
  debugger;
  quest.completed = true;
  quest.active = false;  
} 


export const QUEST_TYPES = {
  GO_FETCH: 'Go Fetch'
};