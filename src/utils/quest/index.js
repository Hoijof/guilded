import createEvent, { EVENT_TYPES } from '../event';
import { getTicker } from '../../redux/selectors';
import { getTimeInFuture, getCurrentTime, getDifferenceTime } from '../ticker';
import { getRandomInt } from '../random';

let lastId = 0;

export default function createQuest() {
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

  const {name, description, reward, steps} = generateRandomQuestData(quest);

  quest.name = name;
  quest.description = description;
  quest.reward = reward;
  quest.steps = steps;

  return quest;
}

function generateRandomQuestData(quest) {
  // Value in hours
  const questValue = getRandomInt(2, 8);

  return {
    name: 'Go Fetch',
    description: 'Go find something somewhere',
    reward: Math.floor(questValue * 2 + getRandomInt(-3, 4)),
    questValue,
    steps: [createStepTravelFor(quest, questValue), createStepQuestObjective(quest, QUEST_TYPES.GO_FETCH, questValue), createStepTravelFor(quest, questValue)]
  }
}

function createStepTravelFor(quest, questValue) {
  const execute = (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

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

function createStepQuestObjective(quest, questType) {
  const execute = (store) => {
    const ticker = getTicker(store);
    const currentTime = getCurrentTime(ticker);
    currentTime[3]++;

    const endTime = getTimeInFuture(currentTime, 3);

    return createEvent(currentTime, endTime, 'Executing Quest', 'None', EVENT_TYPES.QUEST,
      (dispatch, state, event) => {
        quest.log.push(`Started searching for the thing.`)
      }, (dispatch, state, event) => {
        quest.log.push(`Found the thing.`);

        dispatch({type: 'advanceQuest', payload: quest});
      })
  };
  
  return execute;
}

export function startQuest(state, quest) {
  if (quest.active) {
    return;
  }

  quest.active = true;

  executeStep(state, quest);
}

export function advanceQuest(state, quest) {
  quest.steps.shift()

  if (quest.steps.length === 0) {
    return completeQuest(quest);
  }

  executeStep(state, quest);
}

export function executeStep(state, quest) {
  const event = quest.steps[0](state);
  const ticker = getTicker(state);

  ticker.events.push(event);
  ticker.todayEvents.push(event);
}

function completeQuest(quest) {
  quest.completed = true;
  quest.active = false;  

  quest.log.push('Quest finished');
} 


export const QUEST_TYPES = {
  GO_FETCH: 'Go Fetch'
};