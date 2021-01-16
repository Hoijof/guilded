import Overview from './overview';
import Members from './members';

import CityBuilding from '../city-building';

export default function Guild() {

  return (
    <CityBuilding menuItems={[Overview, Members]} stateNamespace="guild" />
  );
}
