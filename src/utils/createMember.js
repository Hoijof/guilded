import getRandomName from './getRandomName';
import {getRandomInt, getRandomColor} from './random';

let id = 0;

function getRandomType() {
  return Math.random() > 0.5 ? 'warrior' : 'mage';
}

function getRandomStats() {
  return {
    health: getRandomInt(8, 10),
    strength: getRandomInt(1, 3),
    willpower: getRandomInt(1, 3),
    endurance: getRandomInt(1, 3),
    agility: getRandomInt(1, 3)
  }
}

export default function createMember(name = getRandomName(), color = getRandomColor(), type = getRandomType(), stats = getRandomStats()) {
  return {
    id: id++,
    name,
    color,
    items: [],
    gold: 0,
    exp: 0,
    level: 1,
    type,
    task: null,
    stats,
    computedStats: stats
  } 
}

