import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import HealthContext from '../context/DetailsContext';

const LatencyChart = (props) =>  {
  const xAxis = [];
  const yAxis = [];
  const healthData = useContext(HealthContext).detailData;
  for (let i = 0; i < healthData.length; i++) {
    const element = healthData[i];
    if (element.currentmicroservice === props.service || element.currentMicroservice === props.service) {
      xAxis.push(i);
      yAxis.push(element.latency);
    }
  }
  const chartData = {
    datasets: [
      {
        label: `CPU latency of ${props.service}`,
        data: yAxis,
        backgroundColor: ['rgb(254, 255, 0)'],
      },
    ],
    options: {
      xAxisID: 'TBD',
      yAxisID: 'TBD',
    },
    labels: xAxis,
  };
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LatencyChart;
