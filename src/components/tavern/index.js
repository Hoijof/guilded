import CityBuilding from '../city-building';

import Overview from './overview';
import Recruits from './recruits';
import Quests from './quests';

export default function Tavern() {  
  
  return <CityBuilding menuItems={[Overview, Recruits, Quests]} stateNamespace="tavern" />
}