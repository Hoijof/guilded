
export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
      case 'changeSelectedMenu':
          return {
            ...state,
            selectedItem: action.payload
          }
      default:
  }

  // Guild
  switch (action.type) {
    case 'changeSelectedGuildMenu': 
      return {
        ...state,
        guild: {
          ...state.guild,
          selectedItem: action.payload
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
              if (member.id === action.payload.id) {
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
            members: [...state.guild.stats.members, action.payload],
            gold: state.guild.stats.gold - (action.payload.level * 5)
          }
        },
        tavern: {
          ...state.tavern,
          recruits: state.tavern.recruits.filter((recruit) => recruit.id !== action.payload.id)
        }
      }
    default:
  }

  // City
  switch (action.type) {
    case 'changeSelectedCityMenu': 
      return {
        ...state,
        city: {
          ...state.city,
          selectedItem: action.payload
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