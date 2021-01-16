import { getTicker } from '../../redux/selectors';
import { getRandomInt } from '../random';
import { QUEST_TYPES } from '../consts';
import generateStepsFetch from './fetch';


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
    steps: generateStepsFetch(quest, questValue)
  }
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

