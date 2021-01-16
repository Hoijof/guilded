import React, { useContext } from 'react';
import { AppContext } from '../world';
import { Menu } from 'antd';

export default function CityMenu({defaultItem, menuItems, stateNamespace}) {
  const { dispatch } = useContext(AppContext);

  function changeMenuItem({ key }) {
    dispatch({
      type: 'changeSelectedContentMenu',
      payload: {
        key,
        stateNamespace
      }
    });
  }
  
  return (
  <Menu onSelect={changeMenuItem} theme="light" mode="horizontal" defaultSelectedKeys={[defaultItem]} >
    {menuItems.map(Item => <Menu.Item key={Item.name}>{Item.name}</Menu.Item>)}
  </Menu>
  );
}

