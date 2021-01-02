import { Menu } from 'antd';

export default function GuildMenu({dispatch, defaultItem}) {
  function changeMenuItem({ key }) {
    dispatch({
      type: 'changeSelectedGuildMenu',
      payload: key
    });
  }
  
  return (
  <Menu onSelect={changeMenuItem} theme="light" mode="horizontal" defaultSelectedKeys={[defaultItem]} >
    <Menu.Item key="Overview">Overview</Menu.Item>
    <Menu.Item key="Members">Members</Menu.Item>
  </Menu>
  );
}

