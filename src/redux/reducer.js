
// https://github.com/kolodny/immutability-helper
import update from 'immutability-helper';

import { STATE_PROGRESS_INCREMENT } from '../utils/consts';

export default function reducer(state, action) {
  const computedAction = typeof action === 'string' ? { type: action} : action;

  if (!['increaseStageProgress', 'resetStageProgress'].includes(computedAction.type))
  console.log(computedAction);
  switch (computedAction.type) {
      case 'changeSelectedMenu':
        return update(state, {
          selectedItem: {$set: computedAction.payload}
        });
      case 'increaseStageProgress': 
        return update(state, {
          stageProgress: {$set: state.stageProgress + STATE_PROGRESS_INCREMENT}
        });
      case 'resetStageProgress': 
          return {
            ...state,
            stageProgress: 0
          };
      case 'switchPause':
          return {
            ...state,
            isPaused: !state.isPaused
          }
      case 'changeStageSpeed':
        return {
          ...state,
          stageSpeed: state.stageSpeed + computedAction.payload
        }
      default:
  }

  // Guild
  switch (computedAction.type) {
    case 'changeSelectedGuildMenu': 
      return {
        ...state,
        guild: {
          ...state.guild,
          selectedItem: computedAction.payload
        }
      }
    case 'askFounding':
      return {
        ...state,
        guild: {
          ...state.guild,
          stats: {
            ...state.guild.stats,
            gold: 25
          }
        }
      };
    case 'addGoldToMember':
      return {
        ...state,
        guild: {
          ...state.guild,
          stats: {
            ...state.guild.stats,
            members: cloneMembers(state.guild.stats.members, (member) => {
              if (member.id === computedAction.payload.id) {
                member.gold += 5;
              }
            }),
            gold: state.guild.stats.gold - 5
          }
        }
      }
    case 'hireGuildMember':       
      return {
        ...state,
        guild: {
          ...state.guild,
          stats: {
            ...state.guild.stats,
            members: [...state.guild.stats.members, computedAction.payload],
            gold: state.guild.stats.gold - (computedAction.payload.level * 5)
          }
        },
        tavern: {
          ...state.tavern,
          recruits: state.tavern.recruits.filter((recruit) => recruit.id !== computedAction.payload.id)
        }
      }
    default:
  }

  // City
  switch (computedAction.type) {
    case 'changeSelectedCityMenu': 
      return {
        ...state,
        city: {
          ...state.city,
          selectedItem: computedAction.payload
        }
      }
    default:
  }

  console.log("returning Default");
  return state;
}


function cloneMembers(members, cb) {
  return members.map((member) => {
    const newMember = {
      ...member,
      stats: {...member.stats},
      computedStats: {...member.computedStats}
    };

    cb(newMember);

    return newMember;
  })
}


/*Available Commands
{$push: array} push() all the items in array on the target.
{$unshift: array} unshift() all the items in array on the target.
{$splice: array of arrays} for each item in arrays call splice() on the target with the parameters provided by the item. Note: The items in the array are applied sequentially, so the order matters. The indices of the target may change during the operation.
{$set: any} replace the target entirely.
{$toggle: array of strings} toggles a list of boolean fields from the target object.
{$unset: array of strings} remove the list of keys in array from the target object.
{$merge: object} merge the keys of object with the target.
{$apply: function} passes in the current value to the function and updates it with the new returned value.
{$add: array of objects} add a value to a Map or Set. When adding to a Set you pass in an array of objects to add, when adding to a Map, you pass in [key, value] arrays like so: update(myMap, {$add: [['foo', 'bar'], ['baz', 'boo']]})
{$remove: array of strings} remove the list of keys in array from a Map or Set.*/