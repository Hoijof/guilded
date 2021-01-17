import React, { useContext } from 'react';
import { AppContext } from '../world';
import { Layout } from "antd";

import Menu from './menu';
import { getNamespacedDefaultMenu } from '../../redux/selectors';

const { Header, Content } = Layout;

function renderContent(dispatch, state, menuItems, stateNamespace) {
  const Content = menuItems.find((Item) => {
    return Item.name === state[stateNamespace].selectedItem;
  });

  return Content ? <Content /> : "error";
}

export default function CityBuilding({menuItems, stateNamespace}) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Layout style={{ background: 'white'}}>
      <Header
        theme="light"
        style={{
          background: 'white',
          padding: 0
        }}
      >
        <Menu defaultItem={getNamespacedDefaultMenu(state, stateNamespace)} menuItems={menuItems} stateNamespace={stateNamespace} />
      </Header>
      <Content style={{ background: 'white', padding: 10, margin: "24px 16px 0", overflow: "initial"}}>
          {renderContent(dispatch, state, menuItems, stateNamespace) }
      </Content>
    </Layout>
  );
}
