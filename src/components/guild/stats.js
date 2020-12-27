import { List, Typography, Divider } from 'antd';

export default function GuildStats({name, gold, members}) {
    const data = [
        {name: "name", value: name},
        {name: 'gold', value: gold},
        {name: 'members', value: members.length}
    ];
    
    return (
        <>
            <Divider orientation="left">Stats</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item.name}: {item.value}
                    </List.Item>
                )}
            />
        </>
    )
}