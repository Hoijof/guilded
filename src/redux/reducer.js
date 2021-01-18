
// https://github.com/kolodny/immutability-helper
import update from 'immutability-helper';

import { acceptQuest, advanceQuest } from '../utils/quest';
import { getMemberCost } from '../utils/members';

export default function reducer(state, action) {
  const computedAction = typeof action === 'string' ? { type: action} : action;

  if (!['increaseStageProgress', 'resetStageProgress'].includes(computedAction.type))
  console.log(computedAction);
  switch (computedAction.type) {
      case 'changeSelectedMenu':
        return update(state, {
          selectedItem: {$set: computedAction.payload}
        });
      case 'switchPause':
        return update(state, {
          isPaused: {$set: !state.isPaused}
        });
      case 'changeStageSpeed':
        return update(state, {
          stageSpeed: {$set: state.stageSpeed + computedAction.payload}
        }); 
      default:
  }

  // #region Menus
  switch (computedAction.type) {
    case 'changeSelectedContentMenu': 
      return update(state, {
        [computedAction.payload.stateNamespace]: {
          selectedItem: { $set: computedAction.payload.key}
        }
      });
    default:
  }

  //#endregion

  // Guild
  switch (computedAction.type) {
    case 'askFounding':
      return update(state, {
        guild: {
          stats: {
            gold: { $set: 25 }
          }
        }
      });
    case 'addGoldToMember':
      var memberIndex = state.guild.stats.members.indexOf(computedAction.payload);
      var updatedMember = update(computedAction.payload, { gold: { $set: computedAction.payload.gold + 5}});

      return update(state, {
        guild: {
          stats: {
            members: {
              $splice: [[memberIndex, 1, updatedMember]]
            },
            gold: { $set: state.guild.stats.gold - 5}
          }
        }
      });
    case 'hireGuildMember':   
      return update(state, {
        guild: {
          stats: {
            members: { $push: [computedAction.payload] },
            gold: { $set: state.guild.stats.gold - getMemberCost(computedAction.payload) }
          }
        },
        tavern: {
          recruits: { $splice: [[state.tavern.recruits.indexOf(computedAction.payload), 1]]}
        }
      });   
    default:
  }

  // City
  switch (computedAction.type) {
    case 'changeSelectedCityMenu': 
      return update(state, {
        city: {
          selectedItem: { $set: computedAction.payload}
        }
      });
    default:
  }

  // Quests
  switch (computedAction.type) {
    case 'addQuest':
      return update(state, {
        quests: { quests: {$push: [computedAction.payload] } }
      });
    case 'removeQuest': 
      return update(state, {
        quests: {quests: { $splice: [[state.quests.quests.indexOf(computedAction.payload), 1]] }}
      });
    case 'acceptQuest': 
      acceptQuest(state, computedAction.payload.quest, computedAction.payload.selectedMember);

      return  update(state, {
        quests: {quests: { $splice: [[state.quests.quests.indexOf(computedAction.payload.quest), 1, computedAction.payload.quest]] }}
      });
    case 'advanceQuest': 
      advanceQuest(state, computedAction.payload);
      
      return update(state, {
        quests: {quests: { $splice: [[state.quests.quests.indexOf(computedAction.payload), 1, computedAction.payload]] }}
      });
    case 'closeQuest':
      return update(state, {
        guild: {
          stats: {
            gold: {$apply: (gold) => gold + computedAction.payload.reward}
          }
        },
        quests: {quests: { $splice: [[state.quests.quests.indexOf(computedAction.payload), 1]] }}
      });
    default:
  }

  console.log("returning Default");
  return state;
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