import Overview from './overview';
import Members from './members';
import Quests from './quests';

import CityBuilding from '../city-building';

export default function Guild() {

  return (
    <CityBuilding menuItems={[Overview, Members, Quests]} stateNamespace="guild" />
  );
}
