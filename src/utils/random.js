import { maleNames, femaleNames, surnames } from './names';
import { SEXES } from './consts';

export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
  return Math.round(getRandomNumber(min, max));
}

export function getRandomColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

/*
* Gets a random int from 1 to the number passed
*/
export function roll(max) {
 return getRandomInt(0, max);
}

/*
 * Returns true or false based in a % probability
*/
function isHappening(prob) {
	return getRandomInt(0, 100) <= prob;
}

export function getRandomName(sex = SEXES.MALE) {
	if (sex == SEXES.MALE) {
		return maleNames[getRandomInt(0,maleNames.length-1)];
	} else if (sex == SEXES.FEMALE) {
		return femaleNames[getRandomInt(0,femaleNames.length-1)];
	}
	return 'Bernt';
}

export function getRandomSurname() {
	return surnames[getRandomInt(0,surnames.length-1)];
}