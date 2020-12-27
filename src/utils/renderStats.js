import { Typography } from 'antd';

export function getStatColor(stat, computedStat) {
  if (computedStat > stat) {
    return 'success';
  }

  if (computedStat < stat) {
    return 'danger';
  }

  return 'default';
}

export default function renderStats(member) {
  return Object.keys(member.stats).map((statName) => {
    const stat = member.stats[statName];
    const computedStat = member.computedStats[statName];

    return <Typography.Text key={statName} type={getStatColor(stat, computedStat)}>{statName}: {computedStat}</Typography.Text>
  });
}

export function sumStats(member) {
  return Object.keys(member.stats).reduce((acc, statName) => {
    const stat = member.stats[statName];

    return acc + stat;
  }, 0) - member.stats.health;
}