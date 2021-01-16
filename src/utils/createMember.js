import { SEXES } from './consts';
import {getRandomInt, getRandomColor, getRandomName, getRandomSurname} from './random';

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

function getInitialData() {
  return {
    missions: 0,
    daysInGuild: 0,
  }
}

export default function createMember(
  name, sex = SEXES[getRandomInt(0,1)], surname = getRandomSurname(), 
  color = getRandomColor(), type = getRandomType(), stats = getRandomStats(),
  data = getInitialData()) {

  return {
    id: id++,
    sex,
    name: name ? name :  getRandomName(sex),
    surname,
    color,
    items: [],
    gold: 0,
    exp: 0,
    level: 1,
    type,
    task: null,
    stats,
    computedStats: stats,
    data
  } 
}

