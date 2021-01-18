import { getTicker } from '../../redux/selectors';
import { getRandomInt } from '../random';
import { LOCATIONS } from '../consts';
import { getCurrentTime, getTimeInFuture } from '../ticker/tickerUtils';


// Quest types
import generateStepsFetch from './fetch';
import { addLog } from './questUtils';

/*
 * Returns a number of a range mapped into another range
*/
Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};

let lastId = 0;

export default function createQuest(state) {
  const id = ++lastId;
  const ticker = getTicker(state);

  const expiresAt = getTimeInFuture(getCurrentTime(ticker), getRandomInt(1, 4) * 24);

  const quest = {
    id,
    name: 'No name',
    description: 'No Description',
    steps: [],
    reward: 0,
    questValue: 0,
    level: 1,
    accepted: false,
    active: false,
    completed: false,
    assignee: null,
    logs: [],
    createdAt: getCurrentTime(ticker),
    expiresAt,
    startedAt: null
  }

  addRandomQuestData(quest);

  return quest;
}

function addRandomQuestData(quest) {
  // Value in hours
  const questValue = getRandomInt(2, 8);

  quest.name = 'Go Fetch';
  // Will be added when Quests are generated dynamically not on creation of store.
  //quest.expireDate = getTimeInFuture();
  quest.level = questValue.map(2,8,1,5);
  quest.description = 'Go find something somewhere';
  quest.reward =  Math.round(questValue * 2 + getRandomInt(-3, 4));
  quest.steps = generateStepsFetch(quest, questValue);
}

export function acceptQuest(state, quest, member) {
  quest.accepted = true;
  quest.assignee = member;
  member.task = quest;  
}

export function startQuest(state, quest) {
  quest.startedAt = getCurrentTime(getTicker(state));
  quest.active = true;

  quest.assignee.location = LOCATIONS.TRAVELING;

  executeStep(state, quest);
}

export function advanceQuest(state, quest) {
  debugger;
  quest.steps.shift()

  if (quest.steps.length === 0) {
    return completeQuest(state, quest);
  }

  executeStep(state, quest);
}

export function executeStep(state, quest) {
  debugger;
  const event = quest.steps[0](state);
  const ticker = getTicker(state);

  ticker.events.push(event);
  ticker.todayEvents.push(event);
}

function completeQuest(state, quest) {
  quest.completed = true;
  quest.active = false;  

  quest.assignee.task = null;
  quest.assignee.location = LOCATIONS.GUILD;

  addLog(state, quest, 'Quest completed');
} 

