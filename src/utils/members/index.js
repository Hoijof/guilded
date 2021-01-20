import { SEXES, LOCATIONS, MAX_ENERGY_RECOVERY_TIME } from "../consts";
import {
  getRandomInt,
  getRandomNumber,
  getRandomColor,
  getRandomName,
  getRandomSurname,
  getRandomKey,
} from "../random";

let id = 0;

function getRandomType() {
  return Math.random() > 0.5 ? "warrior" : "mage";
}

function getRandomStats() {
  return {
    health: getRandomInt(8, 10),
    energy: getRandomInt(8, 10),
    strength: getRandomInt(1, 3),
    willpower: getRandomInt(1, 3),
    endurance: getRandomInt(1, 3),
    agility: getRandomInt(1, 3),
  };
}

function getInitialData() {
  return {
    missions: 0,
    yearsInGuild: 0,
  };
}

export function getMemberCost(member) {
  const statsCost = Object.values(member.stats).reduce((total, stat) => {
    return total + stat;
  }, 0);

  return member.level * 5 + statsCost;
}

export function createMember(
  name,
  sex = SEXES[getRandomInt(0, 1)],
  surname = getRandomSurname(),
  color = getRandomColor(),
  type = getRandomType(),
  stats = getRandomStats(),
  data = getInitialData()
) {
  return {
    id: id++,
    sex,
    name: name ? name : getRandomName(sex),
    surname,
    color,
    items: [],
    gold: 0,
    exp: 0,
    level: 1,
    type,
    task: null,
    location: LOCATIONS.GUILD,
    stats,
    computedStats: { ...stats },
    data,
  };
}

export function getMemberFullName(member) {
  return `${member.name} ${member.surname}`;
}

export function getMemberTravelCapacity(member) {
  const { energy } = member.computedStats;

  return energy === 0 ? 0 : Math.floor(energy * getTravelRatio(member));
}

export function getTravelRatio(member) {
  const { endurance, agility } = member.computedStats;
  return (endurance + agility).map(0, 20, 0.5, 3);
}

export function consumeTravelCapacity(member, timeTraveling) {
  const travelRatio = getTravelRatio(member);

  const energyToConsume = -timeTraveling / travelRatio;

  modifyEnergy(member, energyToConsume);
}

export function modifyEnergy(member, change) {
  member.computedStats.energy += Math.floor(change);

  if (member.computedStats.energy < 0) {
    member.computedStats.energy = 0;
  } else if (member.computedStats.energy > member.stats.energy) {
    member.stats.computedEnergy = member.stats.energy;
  }
}

export function getMemberRestTime(member) {
  const { energy } = member.stats;
  const { energy: computedEnergy } = member.computedStats;

  return Math.ceil(
    (energy - computedEnergy) / (energy / MAX_ENERGY_RECOVERY_TIME)
  );
}

export function restMemberFor(member, hours) {
  const { energy } = member.stats;

  const recoveryRatio = energy / MAX_ENERGY_RECOVERY_TIME;

  modifyEnergy(member, recoveryRatio * hours);
}

export function addExperienceToMember(member, experience) {
  member.exp += Math.round(experience);
}

export function canLevelUp(member) {
  return member.exp > getLevelUpExperience(member);
}

export function getLevelUpExperience(member) {
  return member.level * 2;
}

export function levelUp(member) {
  member.exp = member.exp - getLevelUpExperience(member);
  member.level++;

  const attributesToUpdate = getRandomInt(1, 3);

  for (let i = 0; i < attributesToUpdate; i++) {
    member.stats[getRandomKey(member.stats)]++;

    computeStats(member);
  }
}

export function computeStats(member) {
  const oldEnergy = member.computedStats.energy;

  member.computedStats = { ...member.stats };
  member.computedStats.energy = oldEnergy;
}
