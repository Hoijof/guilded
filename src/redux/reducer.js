
export default function reducer(state, action) {
  const computedAction = typeof action === 'string' ? { type: action} : action;

  if (!['increaseStageProgress', 'resetStageProgress'].includes(computedAction.type))
  console.log(computedAction);
  switch (computedAction.type) {
      case 'changeSelectedMenu':
          return {
            ...state,
            selectedItem: computedAction.payload
          }
      case 'increaseStageProgress': 
          return {
            ...state,
            stageProgress: state.stageProgress + state.stageSpeed
          };
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