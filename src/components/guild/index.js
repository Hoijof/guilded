import Overview from "./overview";
import Members from "./members";
import Quests from "./quests";
import Reports from "./reports";
import PhaserTest from "./phaser-test";

import CityBuilding from "../city-building";

export default function Guild() {
  return (
    <CityBuilding
      menuItems={[Overview, Members, Quests, Reports, PhaserTest]}
      stateNamespace="guild"
    />
  );
}
