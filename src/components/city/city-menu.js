import { Menu } from 'antd';

export default function cityMenu({dispatch}) {
  function changeMenuItem({ key }) {
    dispatch({
      type: 'changeSelectedCityMenu',
      payload: key
    });
  }
  
  return (
  <Menu className="CityMenu" onSelect={changeMenuItem} theme="light" mode="inline" defaultSelectedKeys={["Overview"]}>
    <Menu.Item key="Overview">Overview</Menu.Item>
    <Menu.Item key="Guild">Guild</Menu.Item>
    <Menu.Item key="Market">Market</Menu.Item>
    <Menu.Item key="Tavern">Tavern</Menu.Item>
  </Menu>
  );
}

